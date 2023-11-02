import './App.css'
import Courseinfo from './component/Courseinfo/Courseinfo'
import Courses from './component/Courses/Courses'
import Header from './component/Header/Header'

function App() {

  return (
    <>
    <Header></Header>
    <div className='flex'>
    <Courses></Courses>
    <Courseinfo></Courseinfo>
    </div>
    
  
    </>
  )
}

export default App
