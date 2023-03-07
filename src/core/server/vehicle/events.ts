import * as alt from 'alt-server';

export type AthenaVehicleEvents =
    | 'engine-started'
    | 'engine-stopped'
    | 'door-opened'
    | 'door-closed'
    | 'doors-locked'
    | 'doors-unlocked'
    | 'vehicle-spawned'
    | 'vehicle-repaired';

const vehicleEvents: Array<{ eventName: string; callback: Function }> = [];

/**
 * Usually called by internal functions. Can be used to manually trigger an Athena Event though.

 * @param {AthenaVehicleEvents} eventName
 * @param {alt.Vehicle} vehicle
 */
export function trigger<CustomEvents = AthenaVehicleEvents>(
    eventName: CustomEvents,
    vehicle: alt.Vehicle,
    ...args: any[]
) {
    for (let i = 0; i < vehicleEvents.length; i++) {
        if (vehicleEvents[i].eventName !== eventName) {
            continue;
        }

        vehicleEvents[i].callback(vehicle, ...args);
    }
}

/**
 * Triggered when a vehicle has been spawned / created.
 *
 * @param {'vehicle-spawned'} eventName
 * @param {(vehicle: alt.Vehicle) => void} callback
 */
export function on(eventName: 'vehicle-spawned', callback: (vehicle: alt.Vehicle) => void);

/**
 * Triggered when a doors are unlocked by a player.
 *
 * @param {'doors-unlocked'} eventName
 * @param {(vehicle: alt.Vehicle, player: alt.Player) => void} callback
 */
export function on(eventName: 'doors-unlocked', callback: (vehicle: alt.Vehicle, player: alt.Player) => void);

/**
 * Triggered when a doors are locked by a player.
 *
 * @param {'doors-locked'} eventName
 * @param {(vehicle: alt.Vehicle, player: alt.Player) => void} callback
 */
export function on(eventName: 'doors-locked', callback: (vehicle: alt.Vehicle, player: alt.Player) => void);

/**
 * Triggered when a door is closed by a player.
 *
 * @param {'door-closed'} eventName
 * @param {(vehicle: alt.Vehicle, door: number, player: alt.Player) => void} callback
 */
export function on(
    eventName: 'door-closed',
    callback: (vehicle: alt.Vehicle, door: number, player: alt.Player) => void,
);

/**
 * Triggered when a door is opened by a player.
 *
 * @param {'door-opened'} eventName
 * @param {(vehicle: alt.Vehicle, door: number, player: alt.Player) => void} callback
 */
export function on(
    eventName: 'door-opened',
    callback: (vehicle: alt.Vehicle, door: number, player: alt.Player) => void,
);

/**
 * Triggered when the engine is stopped by a player.
 *
 * @param {'engine-stopped'} eventName
 * @param {(vehicle: alt.Vehicle, player: alt.Player) => void} callback
 */
export function on(eventName: 'engine-stopped', callback: (vehicle: alt.Vehicle, player: alt.Player) => void);

/**
 * Triggered when the engine is started by a player.
 *
 * @param {'engine-started'} eventName
 * @param {(vehicle: alt.Vehicle, player: alt.Player) => void} callback
 */
export function on(eventName: 'engine-started', callback: (vehicle: alt.Vehicle, player: alt.Player) => void);

/**
 * Trigger a callback specific to Athena Vehicle Events.

 * @param {AthenaVehicleEvents} eventName
 * @param {(player: alt.Player) => void} callback
 */
export function on<CustomEvents = AthenaVehicleEvents>(eventName: CustomEvents, callback: Function) {
    vehicleEvents.push({ eventName: String(eventName), callback });
}