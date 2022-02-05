# Ethermo -- Hardhat Sample Demo Project

Try running some of the following hardhat defined tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/deploy.js
npx hardhat help
```

## Custom Helper Commands

For deploying, you will need to run a local node, or the online node. For runnning local node:

```sh
npm run localnet
```

Then, we can deploy the contracts:
```sh
npm run deploy-sc
```

For compiling, testing or accounts checking, we can directly run them as it is, without running the node. The required commands are given below:

> Note: The below commands are run separately, without any dependence between each of them.

```sh
npx hardhat compile
npx hardhat test
npx hardhat accounts
```

For running the `app.js` which contains the javascript code to run smart contract methods:
```sh
npm run app-run
```

## Checklist

* [x] Local node deploy and run smart contract methods from javascript file.
* [ ] Check deployment on Testnet
* [ ] Whenever smart contract gets deployed, rollup or other bundler should copy the abi from `artifacts/contracts/<solidity file>.sol` file, and just delete the config file for that contract and copy it to `config/<solidity filename>.config.js`

## Cons of Running on Local node

When you re-run the below command:

```sh
npm run localnet
```

The deployed contracts and all the saved data vanishes. So, you need to deploy your contract again.

> Note that 0 ETH gets used when we do any updates/reads/writes to the local node accounts.
