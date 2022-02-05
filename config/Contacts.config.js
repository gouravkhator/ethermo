const CONTACTS_ADDRESS = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; // this is got by below commands:
/*
    Run the node in 1 tab:
    npx hardhat node 

    Run the command in another tab for deploying:
    npx hardhat run --network localhost scripts/deploy.js
*/

// below abi is copied from artifacts/contracts/Contact.sol/Contacts.json
const CONTACTS_ABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "contacts",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "phone",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "count",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_phone",
                "type": "string"
            }
        ],
        "name": "createContact",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

module.exports = {
    CONTACTS_ABI, CONTACTS_ADDRESS,
};
