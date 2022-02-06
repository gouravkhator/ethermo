# Ethermo - Hardhat Tinkering Demo

Just some *playing around* with Hardhat and the ways to **run localnode**, as well the tricks to **automate workflows** with some custom tasks.

## Commands

### Hardhat-defined Tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/deploy.js
npx hardhat help
```

### Custom Helper Commands

For running `app.js` file (containing the javascript code to run smart contract methods), you need to follow below steps:
1. Run a local node or the online node. For a local node:
    ```sh
    npm run localnode
    ```
2. Deploy the smart contract. Run below command to do that:
    ```sh
    npm run deploy-sc
    ```
3. Now run the `app.js`:
    ```sh
    npm run app-start
    ```

> Note: For deploying or running some smart contract methods from server side or normal JS, we need to have localnode/online node running, as there is no hardhat default network for such use-cases.

For compiling, testing or accounts checking, we can directly run them as it is, without requiring for the explicit node, as these commands run on hardhat network.

The required commands are listed below:

> Note: The below commands are run separately, without any dependence between each of them.

```sh
npx hardhat compile
npx hardhat test
npx hardhat accounts
```

## Checklist

* [x] Local node deploy and run smart contract methods from javascript file.
* [x] Automated abi and contract deployed address generation and saving into a json file.
* [ ] Check deployment of smart contract on Testnet, once all local debugging is done.

## Cons of Running on Local node

When you re-run the below command:

```sh
npm run localnode
```

The deployed contracts and all the saved data vanishes. So, you need to deploy your contract again.

> Note that 0 ETH gets used when we do any updates/reads/writes to the local node accounts.
