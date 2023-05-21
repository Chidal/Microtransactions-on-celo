document.addEventListener('DOMContentLoaded', function() {
    const sendTransactionButton = document.getElementById('sendTransactionButton');
    const recipientAddressInput = document.getElementById('recipientAddress');
    const transactionAmountInput = document.getElementById('transactionAmount');
    const transactionStatusDiv = document.getElementById('transactionStatus');
  
    sendTransactionButton.addEventListener('click', function() {
      const recipientAddress = recipientAddressInput.value;
      const transactionAmount = transactionAmountInput.value;
  
      // Validate user inputs
      if (recipientAddress === '' || transactionAmount === '') {
        transactionStatusDiv.innerText = 'Please provide recipient address and transaction amount.';
        return;
      }
  
      // Perform microtransaction logic here
      // For example, use web3.js to initiate the transaction
  
      // Display transaction status
      transactionStatusDiv.innerText = 'Transaction sent successfully!';
    });
  });
  