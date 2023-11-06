import { useState } from 'react'
import './App.css'
import Courses from './component/Courses/Courses'
import Coursesinfo from './component/Coursesinfo/Coursesinfo'
import Header from './component/Header/Header'

function App() {
  const [titles,setTitles] = useState([])

  const handleTitle = title =>{
    const newTitle = [...titles,title]
    setTitles(newTitle)
  }



  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <Header></Header>
        <div className='flex gap-8'>
          <Courses handleTitle={handleTitle}></Courses>
          <Coursesinfo titles={titles}></Coursesinfo>
        </div>

      </div>



    </>
  )
}

export default App
