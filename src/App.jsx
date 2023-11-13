import { useState } from 'react'
import './App.css'
import Courses from './component/Courses/Courses'
import Coursesinfo from './component/Coursesinfo/Coursesinfo'
import Header from './component/Header/Header'

function App() {
  const [titles, setTitles] = useState([])
  const [creditHour, setCreditHour] = useState(0)

  const handleTitle = title => {
    if (title !== titles) {
      const newTitle = [...titles, title]
      setTitles(newTitle)
    }
  }

  const handleCreditHour = hour => {
    setCreditHour (creditHour+hour)
  }



  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <Header></Header>
        <div className='flex gap-8'>
          <Courses handleTitle={handleTitle} handleCreditHour={handleCreditHour}></Courses>
          <Coursesinfo titles={titles} creditHour={creditHour}></Coursesinfo>
        </div>

      </div>



    </>
  )
}

export default App
