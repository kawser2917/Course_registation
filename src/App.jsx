import './App.css'
import Courses from './component/Courses/Courses'
import Header from './component/Header/Header'

function App() {
  const [titles,setTitles] = ([])

  const handleTitle = (title) => {
    const newTitle = [...titles,title]
    setTitles(newTitle)

  }

  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <Header></Header>
        <div className='flex'>
          <Courses handleTitle={handleTitle}></Courses>
        
        </div>

      </div>



    </>
  )
}

export default App
