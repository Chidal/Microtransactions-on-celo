pragma solidity ^0.8.0;

contract TippingContract {
    mapping(address => uint256) private balances;

    event Tip(address indexed sender, address indexed recipient, uint256 amount);

    function tip(address recipient) external payable {
        require(recipient != address(0), "Invalid recipient address");
        require(msg.value > 0, "Invalid tip amount");

        balances[recipient] += msg.value;
        emit Tip(msg.sender, recipient, msg.value);
    }

    function getBalance(address account) external view returns (uint256) {
        return balances[account];
    }
}
