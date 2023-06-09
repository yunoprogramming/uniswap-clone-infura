import React, { useEffect, useState } from 'react'
import NavItems from './NavItems'
import toast, { Toaster } from 'react-hot-toast'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import TokenBalance from './TokenBalance'

const Header = () => {

  const [tokenBalComp, setTokenBalComp] = useState()
  const { address } = useAccount()

  const notifyConnectWallet = () => {
    toast.error('Connect wallet!', { duration: 2000 })
  }

  useEffect(() => {
    setTokenBalComp(
      <>
        <TokenBalance name={'CoinA'} walletAddress={address} />
        <TokenBalance name={'CoinB'} walletAddress={address} />
        <TokenBalance name={'CoinC'} walletAddress={address} />
      </>,
    )
    if(!address) notifyConnectWallet()
  }, [address])

  return (
    <div className='fixed left-0 top-0 w-full px-8 py-4 flex flex-wrap items-center justify-between'>
      <div className='flex items-center w-full sm:w-auto'>
        <img src='./uniswap.png' className='h-12' alt=''/>
        <NavItems />
      </div>
  
      <div className='flex items-center w-full sm:w-auto mt-4 sm:mt-0 justify-around'>
        {tokenBalComp}
      </div>
  
      <div className='flex justify-center w-full sm:w-auto mt-4 sm:mt-0'>
        <ConnectButton />
      </div>
      <Toaster />
    </div>
  )
}

export default Header
