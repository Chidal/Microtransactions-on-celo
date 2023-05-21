const TippingContract = artifacts.require('TippingContract');

contract('TippingContract', (accounts) => {
  let tippingContract;

  beforeEach(async () => {
    tippingContract = await TippingContract.new();
  });

  it('should allow tipping and retrieve balance correctly', async () => {
    const sender = accounts[0];
    const recipient = accounts[1];
    const amount = web3.utils.toWei('0.1', 'ether');

    // Tip recipient
    await tippingContract.tip(recipient, { from: sender, value: amount });

    // Retrieve recipient balance
    const recipientBalance = await tippingContract.getBalance(recipient);

    assert.equal(recipientBalance.toString(), amount, 'Recipient balance should match the tipped amount');
  });
});
