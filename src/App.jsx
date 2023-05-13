import './App.scss'
import { Header } from './components/Header'
import { Template1 } from './components/Template1'

function App() {
  return (
    <>
      {/* <Header /> */}
      <p className='text-white text-center w-screen'>All the Fields are editable. Just click on them to edit. Once you are satisfied you can save as Pdf</p>
      <section className='w-screen'>
        <div className=''>
          <Template1 />
        </div>
      </section>
    </>
  )
}

export default App
