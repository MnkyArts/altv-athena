---
title: Athena.systems.loginFlow
outline: [1,3]
order: 0
---

# {{ $frontmatter.title }}


## Interfaces

- [FlowInfo](../interfaces/server_systems_loginFlow_FlowInfo.md)

## Functions

### add

::: tip Usage
Athena.systems.loginFlow.**add**(`name`, `weight`, `callback`): `boolean`
:::

Adds a flow option to the login flow.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `weight` | `number` |
| `callback` | (`player`: `Player`) => `void` |

#### Returns

`boolean`

#### Defined in

[server/systems/loginFlow.ts:32](https://github.com/Stuyk/altv-athena/blob/6c506bf/src/core/server/systems/loginFlow.ts#L32)

___

### getFlow

::: tip Usage
Athena.systems.loginFlow.**getFlow**(`player`): `Object`
:::

Return the flow that a player is currently utilizing.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | `Player` | An alt:V Player Entity |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `flow` | [`FlowInfo`](../interfaces/server_systems_loginFlow_FlowInfo.md)[] |
| `index` | `number` |

#### Defined in

[server/systems/loginFlow.ts:105](https://github.com/Stuyk/altv-athena/blob/6c506bf/src/core/server/systems/loginFlow.ts#L105)

___

### getWeightedFlow

::: tip Usage
Athena.systems.loginFlow.**getWeightedFlow**(): [`FlowInfo`](../interfaces/server_systems_loginFlow_FlowInfo.md)[]
:::

Returns all currently registered flow information, their weight, name, and callbacks.

#### Returns

[`FlowInfo`](../interfaces/server_systems_loginFlow_FlowInfo.md)[]

#### Defined in

[server/systems/loginFlow.ts:91](https://github.com/Stuyk/altv-athena/blob/6c506bf/src/core/server/systems/loginFlow.ts#L91)

___

### goToEnd

::: tip Usage
Athena.systems.loginFlow.**goToEnd**(`player`): `void`
:::

Go straight to the final section of login flow. Which is a character select.

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | `Player` |

#### Returns

`void`

#### Defined in

[server/systems/loginFlow.ts:178](https://github.com/Stuyk/altv-athena/blob/6c506bf/src/core/server/systems/loginFlow.ts#L178)

___

### next

::: tip Usage
Athena.systems.loginFlow.**next**(`player`): `any`
:::

Invokes the next flow for an individual player.
If the array index exceeds the total amount of available registered flows.
It will spawn the player.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | `Player` | An alt:V Player Entity |

#### Returns

`any`

#### Defined in

[server/systems/loginFlow.ts:149](https://github.com/Stuyk/altv-athena/blob/6c506bf/src/core/server/systems/loginFlow.ts#L149)

___

### override

::: tip Usage
Athena.systems.loginFlow.**override**(`functionName`, `callback`): `any`
:::

Used to override login flow functions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | ``"add"`` |
| `callback` | (`name`: `string`, `weight`: `number`, `callback`: (`player`: `Player`) => `void`) => `boolean` |

#### Returns

`any`

#### Defined in

[server/systems/loginFlow.ts:200](https://github.com/Stuyk/altv-athena/blob/6c506bf/src/core/server/systems/loginFlow.ts#L200)

::: tip Usage
Athena.systems.loginFlow.**override**(`functionName`, `callback`): `any`
:::

Used to override login flow functions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | ``"remove"`` |
| `callback` | (`name`: `string`) => `boolean` |

#### Returns

`any`

#### Defined in

[server/systems/loginFlow.ts:201](https://github.com/Stuyk/altv-athena/blob/6c506bf/src/core/server/systems/loginFlow.ts#L201)

::: tip Usage
Athena.systems.loginFlow.**override**(`functionName`, `callback`): `any`
:::

Used to override login flow functions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | ``"getWeightedFlow"`` |
| `callback` | () => [`FlowInfo`](../interfaces/server_systems_loginFlow_FlowInfo.md)[] |

#### Returns

`any`

#### Defined in

[server/systems/loginFlow.ts:202](https://github.com/Stuyk/altv-athena/blob/6c506bf/src/core/server/systems/loginFlow.ts#L202)

::: tip Usage
Athena.systems.loginFlow.**override**(`functionName`, `callback`): `any`
:::

Used to override login flow functions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | ``"getFlow"`` |
| `callback` | (`player`: `Player`) => { `flow`: [`FlowInfo`](../interfaces/server_systems_loginFlow_FlowInfo.md)[] ; `index`: `number`  } |

#### Returns

`any`

#### Defined in

[server/systems/loginFlow.ts:203](https://github.com/Stuyk/altv-athena/blob/6c506bf/src/core/server/systems/loginFlow.ts#L203)

::: tip Usage
Athena.systems.loginFlow.**override**(`functionName`, `callback`): `any`
:::

Used to override login flow functions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | ``"register"`` |
| `callback` | (`player`: `Player`) => `any` |

#### Returns

`any`

#### Defined in

[server/systems/loginFlow.ts:204](https://github.com/Stuyk/altv-athena/blob/6c506bf/src/core/server/systems/loginFlow.ts#L204)

::: tip Usage
Athena.systems.loginFlow.**override**(`functionName`, `callback`): `any`
:::

Used to override login flow functions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | ``"unregister"`` |
| `callback` | (`player`: `Player`) => `any` |

#### Returns

`any`

#### Defined in

[server/systems/loginFlow.ts:205](https://github.com/Stuyk/altv-athena/blob/6c506bf/src/core/server/systems/loginFlow.ts#L205)

::: tip Usage
Athena.systems.loginFlow.**override**(`functionName`, `callback`): `any`
:::

Used to override login flow functions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | ``"next"`` |
| `callback` | (`player`: `Player`) => `any` |

#### Returns

`any`

#### Defined in

[server/systems/loginFlow.ts:206](https://github.com/Stuyk/altv-athena/blob/6c506bf/src/core/server/systems/loginFlow.ts#L206)

___

### register

::: tip Usage
Athena.systems.loginFlow.**register**(`player`): `any`
:::

Registers a player to start a login flow.
Invokes the first callable function in the weighted flow.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | `Player` | An alt:V Player Entity |

#### Returns

`any`

#### Defined in

[server/systems/loginFlow.ts:119](https://github.com/Stuyk/altv-athena/blob/6c506bf/src/core/server/systems/loginFlow.ts#L119)

___

### remove

::: tip Usage
Athena.systems.loginFlow.**remove**(`name`): `boolean`
:::

Removes weighted flow info by name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[server/systems/loginFlow.ts:71](https://github.com/Stuyk/altv-athena/blob/6c506bf/src/core/server/systems/loginFlow.ts#L71)

___

### unregister

::: tip Usage
Athena.systems.loginFlow.**unregister**(`player`): `any`
:::

Unregister player flow information.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | `Player` | An alt:V Player Entity |

#### Returns

`any`

#### Defined in

[server/systems/loginFlow.ts:134](https://github.com/Stuyk/altv-athena/blob/6c506bf/src/core/server/systems/loginFlow.ts#L134)
