// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const fs = require("fs/promises");
const path = require("path");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  // const Greeter = await hre.ethers.getContractFactory("Greeter");
  // const greeter = await Greeter.deploy("Hello, Hardhat!");

  // await greeter.deployed();

  // console.log("Greeter deployed to:", greeter.address);
  const Contacts = await hre.ethers.getContractFactory("Contacts");
  const contactsContract = await Contacts.deploy(); // deploy the smart contract, which compiles first and then deploys..

  await contactsContract.deployed();

  const artifact = await hre.artifacts.readArtifact('Contacts'); // for getting abi from compiled contracts' artifacts

  const configPath = path.join(__dirname, "../config/Contacts.config.json");
  await fs.writeFile(configPath, JSON.stringify({
    CONTACTS_ADDRESS: contactsContract.address,
    CONTACTS_ABI: artifact.abi,
  }));

  console.log(`\nSaved ABI and smart contract address for Contacts smart contract to below path:\n${configPath}\n`);
  console.log(`Contacts smart contract is deployed to address: ${contactsContract.address}`);
}

// Hardhat recommends this pattern to be able to use async/await everywhere & properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
