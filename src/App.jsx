import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import Card2 from './components/Card2/Card2'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="w-11/12 mx-auto">
    <h1 className=" text-5xl font-bold text-center py-8">WelCome to my React Card</h1>
    <div className='grid grid-cols-3 gap-5'> 
    <Card></Card>
    <Card></Card>
    <Card></Card>
    </div>

     <h1 className="text-5xl font-bold text-center py-8 mt-9">WelCome to my React Card-02</h1>
    <div className='grid grid-cols-3 gap-5'> 
    <Card2></Card2>
    <Card2></Card2>
    <Card2></Card2>
    </div>

    </div>
    </>
  )
}

export default App