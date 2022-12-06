import { ethers } from "ethers";
let faucetAbi = require("../abi.json");

const faucetContract = (provider) => {
    return new ethers.Contract("0x354784B3C94a0Cb79ACC385e7b6A2C999fDeA142", faucetAbi.abi, provider);
}

export default faucetContract;                                                                                                                                                                                                                  