import { BigNumber, ethers } from "ethers";
import { contract, tokenContract } from "./contract";
import { toEth, toWei } from './ether-utils';

export const swapEthToToken = async (tokenName, amount) => {
    try {
        let tx = { value: toWei(amount) }
        const contractObj = await contract()
        const data = await contractObj.swapEthToToken(tokenName, tx)
        const receipt = await data.wait()
        return receipt
    } catch (error) {
        console.log(error)
    }
}

export const getTokenBalance = async (tokenName, address) => {
    const contractObj = await contract()
    const balance = await contractObj.getBalance(tokenName, address)
    return balance
}

export const getTokenAddress = async tokenName => {
    try {
        const contractObj = await contract()
        const address = await contractObj.getTokenAddress(tokenName)
        return address
    } catch (error) {
        console.log(error)
    }
}

export const swapTokenToEth = async (tokenName, amount) => {
    try {
        const contractObj = await contract()
        const data = await contractObj.swapTokenToEth(tokenName, toWei(amount))
        const receipt = await data.wait()
        return receipt
    } catch (error) {
        console.log(error)
    }
}

export const increaseAllowance = async (tokenName, amount) => {
    try {
        const contractObj = await contract()
        const address = await contractObj.getTokenAddress(tokenName)
        const tokenContractObj = await tokenContract(address)
        const data = await tokenContractObj.approve(
            '0x8958e576d477AfA8F68791ec59b5934f246Bf61b',
            toWei(amount),
        )
    } catch (error) {
        console.log(error)
    }
}

export const hasValidAllowance = async (owner, tokenName, amount) => {
    try {
        const contractObj = await contract()
        const address = await contractObj.getTokenAddress(tokenName)

        const tokenContractObj = await tokenContract(address)
        const data = await tokenContractObj.allowance(
            owner,
            '0x8958e576d477AfA8F68791ec59b5934f246Bf61b'
        )

        const result = BigNumber.from(data.toString()).gte(
            BigNumber.from(toWei(amount)),
        )
        return result
    } catch (error) {
        console.log(error)
    }
}

export const swapTokenToToken = async (srcToken, destToken, amount) => {
    try {
        const contractObj = await contract()
        const data = await contractObj.swapTokenToToken(
            srcToken,
            destToken,
            toWei(amount)
        )

        const receipt = await data.wait()
        return receipt
        
    } catch (error) {
        console.log(error)
    }
}
