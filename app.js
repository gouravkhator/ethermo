const Web3 = require('web3');
const { CONTACTS_ABI, CONTACTS_ADDRESS } = require('./config/Contacts.config');

if (typeof web3 !== 'undefined') {
    var web3 = new Web3(web3.currentProvider);
} else {
    var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
}

(async () => {
    const accounts = await web3.eth.getAccounts();
    if(accounts.length === 0){
        console.error('No accounts present.. Please run local or online node and check accounts..');
        process.exit(1);
    }
    
    const contactList = new web3.eth.Contract(CONTACTS_ABI, CONTACTS_ADDRESS);

    async function logContactList(){
        let data = [];

        const COUNTER = await contactList.methods.count().call();

        for (let i = 1; i <= COUNTER; i++) {
            const contact = await contactList.methods.contacts(i).call();
            data = [...data, contact];
        }
    
        console.log(data);
    }
    
    console.log('before adding gourav to list..');
    await logContactList();
    // createContact is for modifying the state of the contract, that is why send() is used instead of just call()
    await contactList.methods.createContact("Gourav Khator", "1564892").send({
        from: accounts[0]
        // this is the account address, on which I want this transaction to run
    });
    console.log('after adding gourav to list..');
    await logContactList();
})();
