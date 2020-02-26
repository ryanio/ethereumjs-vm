[ethereumjs-common](../README.md) › ["src/genesisStates/index"](_src_genesisstates_index_.md)

# Module: "src/genesisStates/index"

## Index

### Functions

* [genesisStateById](_src_genesisstates_index_.md#genesisstatebyid)
* [genesisStateByName](_src_genesisstates_index_.md#genesisstatebyname)

## Functions

###  genesisStateById

▸ **genesisStateById**(`id`: number): *any*

*Defined in [src/genesisStates/index.ts:23](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/common/src/genesisStates/index.ts#L23)*

Returns the genesis state by network ID

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | number | ID of the network (e.g. 1) |

**Returns:** *any*

Dictionary with genesis accounts

___

###  genesisStateByName

▸ **genesisStateByName**(`name`: string): *any*

*Defined in [src/genesisStates/index.ts:32](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/common/src/genesisStates/index.ts#L32)*

Returns the genesis state by network name

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Name of the network (e.g. 'mainnet') |

**Returns:** *any*

Dictionary with genesis accounts
