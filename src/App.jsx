
import { Suspense } from 'react'
import Navbar from '../src/Components/Navbar/Navbar'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import PricingOptions from './Components/PricingOptions/PricingOptions' 

const pricingPromise = fetch('pricingData.json').then(res=>res.json())

function App() {

  return (
    <>

    <header>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
    </header>
   

   <main>
    <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
      <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
    </Suspense>
   </main>
    </>
  )
}

export default App
