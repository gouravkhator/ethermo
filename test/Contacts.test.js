const { expect } = require("chai");

describe("Contacts", function () {
  it("Should check the count of contacts, once a new contact is added", async function () {
    const Contacts = await hre.ethers.getContractFactory("Contacts");
    const contactsContract = await Contacts.deploy();
    await contactsContract.deployed();

    const originalCount = parseInt(await contactsContract.count());

    const createContactTx = await contactsContract.createContact("Gourav Khator", "1564892");

    // wait until the transaction is mined
    await createContactTx.wait();

    expect(await contactsContract.count()).to.equal(originalCount + 1);
  });
});
