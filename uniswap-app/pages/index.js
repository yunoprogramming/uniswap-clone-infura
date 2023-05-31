import Header from '../components/Header'
import SwapComponent from '../components/SwapComponent'

export default function Home() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-[#0f1322]'>
      <Header />
      <SwapComponent />
    </div>
  )
}
