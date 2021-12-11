import * as alt from 'alt-client';
import * as native from 'natives';

import { SYSTEM_EVENTS } from '../../shared/enums/System';

alt.on('connectionComplete', handleConnectionComplete);
alt.onServer(SYSTEM_EVENTS.TICKS_START, handleTick);

async function handleConnectionComplete() {
    native.destroyAllCams(true);
    native.renderScriptCams(false, false, 0, false, false, 0);
    native.doScreenFadeOut(0);
    native.triggerScreenblurFadeOut(0);
    native.freezeEntityPosition(alt.Player.local.scriptID, true);
    native.setStreamedTextureDictAsNoLongerNeeded('athena_icons');

    // Calls the login functionality
    alt.emitServer(SYSTEM_EVENTS.BEGIN_CONNECTION);
    handleTick();
}

alt.everyTick(() => {
    native.hideHudComponentThisFrame(6); // Vehicle Name
    native.hideHudComponentThisFrame(8); // Vehicle Class
    native.hideHudComponentThisFrame(9); // Street Name
});

function handleTick() {
    native.startAudioScene(`CHARACTER_CHANGE_IN_SKY_SCENE`);
    native.startAudioScene('FBI_HEIST_H5_MUTE_AMBIENCE_SCENE'); // Used to stop police sound in town
    native.cancelCurrentPoliceReport(); // Used to stop default police radio around/In police vehicle
    native.clearAmbientZoneState('AZ_COUNTRYSIDE_PRISON_01_ANNOUNCER_GENERAL', false); // Turn off prison sound
    native.clearAmbientZoneState('AZ_COUNTRYSIDE_PRISON_01_ANNOUNCER_WARNING', false); // Turn off prison sound
    native.clearAmbientZoneState('AZ_COUNTRYSIDE_PRISON_01_ANNOUNCER_ALARM', false); // Turn off prison sound
    native.setAmbientZoneState('', false, false);
    native.clearAmbientZoneState('AZ_DISTANT_SASQUATCH', false);
    native.setAudioFlag('LoadMPData', true);
    native.setAudioFlag('DisableFlightMusic', true);
}
