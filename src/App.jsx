
import { Suspense } from 'react'
import Navbar from '../src/Components/Navbar/Navbar'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import PricingOptions from './Components/PricingOptions/PricingOptions' 
import ResultChart from './Components/ResultChart/ResultChart'
import axios from 'axios'
import MarksChart from './Components/MarksChart/MarksChart'

const pricingPromise = fetch('pricingData.json').then(res=>res.json()) ;

const marksPromise = axios.get('markData.json') ;

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


    <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
      <MarksChart marksPromise={marksPromise}></MarksChart>
    </Suspense>

  <ResultChart  ></ResultChart>
   </main>
    </>
  )
}

export default App
