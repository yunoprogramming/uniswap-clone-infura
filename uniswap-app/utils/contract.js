import { ethers } from 'ethers';
import UniswapABI from '../utils/Uniswap.json';
import CustomTokenABI from '../utils/CustomToken.json';

export const tokenContract = async address => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const { ethereum } = window
    if (ethereum) {
        const signer = provider.getSigner()
        const contractReader = new ethers.Contract(address, CustomTokenABI.abi, signer)
        return contractReader
    }
}

export const contract = async() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const { ethereum } = window
    if (ethereum) {
        const signer = provider.getSigner()
        const contractReader = new ethers.Contract('0x8958e576d477AfA8F68791ec59b5934f246Bf61b', UniswapABI.abi, signer)
        return contractReader
    }
}