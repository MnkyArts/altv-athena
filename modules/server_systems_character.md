---
title: Athena.systems.character
outline: [1,3]
order: 0
---

# {{ $frontmatter.title }}


## Functions

### create

▸ **create**(`player`, `appearance`, `info`, `name`): `Promise`<`boolean`\>

Create a new character for a specific player.

**`Memberof`**

CharacterSystem

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | `Player` | An alt:V Player Entity |
| `appearance` | `Appearance` |  |
| `info` | `CharacterInfo` |  |
| `name` | `string` |  |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[server/systems/character.ts:61](https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/systems/character.ts#L61)

___

### getCharacters

▸ **getCharacters**(`account_id`): `Promise`<[`player`](server_config.md#player)[]\>

Get all characters that belong to an account by account identifier.

#### Parameters

| Name | Type |
| :------ | :------ |
| `account_id` | `string` |

#### Returns

`Promise`<[`player`](server_config.md#player)[]\>

#### Defined in

[server/systems/character.ts:222](https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/systems/character.ts#L222)

___

### invokeCreator

▸ **invokeCreator**(`player`, `...args`): `any`

Invokes the custom creator to be opened.

**`Memberof`**

CharacterSystem

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | `Player` | An alt:V Player Entity |
| `...args` | `any`[] |  |

#### Returns

`any`

#### Defined in

[server/systems/character.ts:38](https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/systems/character.ts#L38)

___

### isNameTaken

▸ **isNameTaken**(`name`): `Promise`<`boolean`\>

Check if a character name is taken.

**`Memberof`**

CharacterSystem

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[server/systems/character.ts:207](https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/systems/character.ts#L207)

___

### override

▸ **override**(`functionName`, `callback`): `any`

Used to override character creation / management internally.

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | ``"create"`` |
| `callback` | (`player`: `Player`, `appearance`: `Appearance`, `info`: `CharacterInfo`, `name`: `string`) => `Promise`<`boolean`\> |

#### Returns

`any`

#### Defined in

[server/systems/character.ts:272](https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/systems/character.ts#L272)

▸ **override**(`functionName`, `callback`): `any`

Used to override character creation / management internally.

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | ``"setCreatorCallback"`` |
| `callback` | (`callback`: (`player`: `Player`, ...`args`: `any`[]) => `void`) => `any` |

#### Returns

`any`

#### Defined in

[server/systems/character.ts:273](https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/systems/character.ts#L273)

▸ **override**(`functionName`, `callback`): `any`

Used to override character creation / management internally.

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | ``"invokeCreator"`` |
| `callback` | (`player`: `Player`, ...`args`: `any`[]) => `any` |

#### Returns

`any`

#### Defined in

[server/systems/character.ts:274](https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/systems/character.ts#L274)

▸ **override**(`functionName`, `callback`): `any`

Used to override character creation / management internally.

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | ``"select"`` |
| `callback` | (`player`: `Player`, `character`: `Character`) => `any` |

#### Returns

`any`

#### Defined in

[server/systems/character.ts:275](https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/systems/character.ts#L275)

▸ **override**(`functionName`, `callback`): `any`

Used to override character creation / management internally.

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | ``"isNameTaken"`` |
| `callback` | (`name`: `string`) => `Promise`<`boolean`\> |

#### Returns

`any`

#### Defined in

[server/systems/character.ts:276](https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/systems/character.ts#L276)

▸ **override**(`functionName`, `callback`): `any`

Used to override character creation / management internally.

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | ``"getCharacters"`` |
| `callback` | (`account_id`: `string`) => `Promise`<[`player`](server_config.md#player)[]\> |

#### Returns

`any`

#### Defined in

[server/systems/character.ts:277](https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/systems/character.ts#L277)

___

### select

▸ **select**(`player`, `character`): `any`

The final step in the character selection system.

After this step the player is spawned and synchronized.

Always call this function last in login flow modifications.

**`Memberof`**

CharacterSystem

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | `Player` | An alt:V Player Entity |
| `character` | `Character` |  |

#### Returns

`any`

#### Defined in

[server/systems/character.ts:105](https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/systems/character.ts#L105)

___

### setCreatorCallback

▸ **setCreatorCallback**(`callback`): `any`

Allows a custom character creator to be shown.

**`Memberof`**

CharacterSystem

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`player`: `Player`, ...`args`: `any`[]) => `void` |

#### Returns

`any`

#### Defined in

[server/systems/character.ts:23](https://github.com/Stuyk/altv-athena/blob/627294b/src/core/server/systems/character.ts#L23)