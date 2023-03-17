import * as alt from 'alt-client';
import * as native from 'natives';
import * as AthenaClient from '@AthenaClient/api';
import ViewModel from '@AthenaClient/models/viewModel';

import { CharacterSystem } from '@AthenaClient/systems/character';
import { PedCharacter } from '@AthenaClient/utility/characterPed';
import { disableAllControls } from '@AthenaClient/utility/disableControls';
import { SWITCHOUT_TYPES } from '@AthenaShared/enums/switchOutTypes';
import { ANIMATION_FLAGS } from '@AthenaShared/flags/animationFlags';
import { Appearance } from '@AthenaShared/interfaces/appearance';
import { Character } from '@AthenaShared/interfaces/character';
import { CHARACTER_SELECT_CONFIG } from '../../shared/config';
import { CHARACTER_SELECT_EVENTS, CHARACTER_SELECT_WEBVIEW_EVENTS } from '../../shared/events';
import { Item } from '@AthenaShared/interfaces/item';

const PAGE_NAME = 'CharacterSelect';
const IDLE_ANIM_DICT = 'anim@amb@business@bgen@bgen_no_work@';
const IDLE_ANIM = 'stand_phone_phoneputdown_idle_nowork';
let characters: Partial<Character>[];
let isOpen = false;

/**
 * Do Not Export Internal Only
 */
class InternalFunctions implements ViewModel {
    static async open(_characters: Partial<Character>[]) {
        characters = _characters;
        const view = await AthenaClient.webview.get();

        if (isOpen) {
            view.emit(CHARACTER_SELECT_WEBVIEW_EVENTS.SET_CHARACTERS, characters);
            return;
        }

        view.on(CHARACTER_SELECT_WEBVIEW_EVENTS.SELECT, InternalFunctions.select);
        view.on(CHARACTER_SELECT_WEBVIEW_EVENTS.NEW, InternalFunctions.handleNew);
        view.on(CHARACTER_SELECT_WEBVIEW_EVENTS.UPDATE, InternalFunctions.update); // Calls `creator.ts`
        view.on(CHARACTER_SELECT_WEBVIEW_EVENTS.DELETE, InternalFunctions.handleDelete);
        view.on(CHARACTER_SELECT_WEBVIEW_EVENTS.READY, InternalFunctions.ready);

        AthenaClient.webview.openPages([PAGE_NAME]);
        AthenaClient.webview.focus();
        AthenaClient.webview.showCursor(true);

        await PedCharacter.create(
            _characters[0].appearance.sex === 1 ? true : false,
            CHARACTER_SELECT_CONFIG.CHARACTER_SELECT_POS,
            CHARACTER_SELECT_CONFIG.CHARACTER_SELECT_ROT,
        );

        await PedCharacter.apply(_characters[0].appearance as Appearance);
        await alt.Utils.wait(300);
        await AthenaClient.camera.pedEdit.create(PedCharacter.get(), { x: -0.25, y: 0, z: 0 });
        await AthenaClient.camera.pedEdit.setCamParams(0.5, 40, 100);

        InternalFunctions.update(0);

        await alt.Utils.wait(2000);
        native.doScreenFadeIn(500);

        isOpen = true;
    }

    static async update(index: number) {
        await alt.Utils.wait(100);

        await PedCharacter.apply(characters[index].appearance as Appearance);
        AthenaClient.camera.pedEdit.update(PedCharacter.get());
        await alt.Utils.wait(100);

        CharacterSystem.applyEquipment(PedCharacter.get(), characters[index].equipment as Array<Item>);

        await new Promise((resolve: Function) => {
            let count = 0;

            const interval = alt.setInterval(() => {
                if (!PedCharacter.get()) {
                    return;
                }

                if (!native.doesEntityExist(PedCharacter.get())) {
                    return;
                }

                AthenaClient.systems.animations.playPedAnimation(
                    PedCharacter.get(),
                    IDLE_ANIM_DICT,
                    IDLE_ANIM,
                    ANIMATION_FLAGS.NORMAL | ANIMATION_FLAGS.REPEAT,
                );

                const isInAnim = native.isEntityPlayingAnim(PedCharacter.get(), IDLE_ANIM_DICT, IDLE_ANIM, 3);

                count += 1;

                if (count >= 25) {
                    alt.clearInterval(interval);
                    resolve();
                }

                if (!isInAnim) {
                    return;
                }

                alt.clearInterval(interval);
                resolve();
            }, 100);
        });

        await alt.Utils.wait(100);
        native.doScreenFadeIn(100);
    }

    static async close() {
        const view = await AthenaClient.webview.get();
        view.off(CHARACTER_SELECT_WEBVIEW_EVENTS.SELECT, InternalFunctions.select);
        view.off(CHARACTER_SELECT_WEBVIEW_EVENTS.NEW, InternalFunctions.handleNew);
        view.off(CHARACTER_SELECT_WEBVIEW_EVENTS.UPDATE, InternalFunctions.update); // Calls `creator.ts`
        view.off(CHARACTER_SELECT_WEBVIEW_EVENTS.DELETE, InternalFunctions.handleDelete);
        view.off(CHARACTER_SELECT_WEBVIEW_EVENTS.READY, InternalFunctions.ready);

        AthenaClient.webview.closePages([PAGE_NAME]);
        AthenaClient.webview.unfocus();
        AthenaClient.webview.showCursor(false);

        await AthenaClient.camera.pedEdit.destroy();
        await PedCharacter.destroy();

        if (!CHARACTER_SELECT_CONFIG.SKIP_SKYCAM_IN_DEBUG_MODE && alt.debug) {
            await AthenaClient.camera.switch.switchToMultiSecondpart(2000, SWITCHOUT_TYPES.THREE_STEPS);
        }

        native.freezeEntityPosition(alt.Player.local.scriptID, false);

        alt.toggleGameControls(true);
        disableAllControls(false);

        isOpen = false;
    }

    static async ready() {
        const view = await AthenaClient.webview.get();
        view.emit(CHARACTER_SELECT_WEBVIEW_EVENTS.SET_CHARACTERS, characters);
    }

    static async select(id) {
        PedCharacter.setHidden(true);

        alt.emitServer(CHARACTER_SELECT_EVENTS.SELECT, id);
    }

    static async handleNew() {
        alt.emitServer(CHARACTER_SELECT_EVENTS.NEW);
    }

    static async handleDelete(id) {
        alt.emitServer(CHARACTER_SELECT_EVENTS.DELETE, id);
    }
}

alt.onServer(CHARACTER_SELECT_EVENTS.SHOW, InternalFunctions.open);
alt.onServer(CHARACTER_SELECT_EVENTS.DONE, InternalFunctions.close);