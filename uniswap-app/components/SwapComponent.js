import React, { useEffect, useState, useRef } from 'react'

import { CogIcon, ArrowSmDownIcon } from '@heroicons/react/outline'

import TransactionStatus from './TransactionStatus'
import { Toaster } from 'react-hot-toast'
import { useDex } from '../hooks/useDex'

const SwapComponent = () => {
  const {
    srcTokenComp,
    handleReverseExchange,
    destTokenComp,
    getSwapBtnClassName,
    swapBtnText,
    INCREASE_ALLOWANCE,
    SWAP,
  } = useDex()
  return (
    <div className='bg-zinc-900 w-[35%] p-4 px-6 rounded-xl'>
      <div className='flex items-center justify-between py-4 px-1'>
        <p>Swap</p>
        <CogIcon className='h-6' />
      </div>
      <div className='relative bg-[#212429] p-4 py-6 rounded-xl mb-2 border-[2px] border-transparent hover:border-zinc-600'>
        {srcTokenComp}

        <ArrowSmDownIcon
          onClick={handleReverseExchange}
          className='absolute left-1/2 -translate-x-1/2 -bottom-6 h-10 p-1 bg-[#212429] border-4 border-zinc-900 text-zinc-300 rounded-xl cursor-pointer hover:scale-110'
        />
      </div>

      <div className='bg-[#212429] p-4 py-6 rounded-xl mt-2 border-[2px] border-transparent hover:border-zinc-600'>
        {destTokenComp}
      </div>

      <button
        className={getSwapBtnClassName()}
        onClick={() => {
          if (swapBtnText === INCREASE_ALLOWANCE) {
            // Increase Allowance
          } else if (swapBtnText === SWAP) {
            // Swap
          }
        }}
      >
        {swapBtnText}
      </button>

      <Toaster />
    </div>
  )
}

export default SwapComponent
