import './App.css'
import Home from './components/Home'
import ManagementSignin from './components/ManagementSignin'
import About from './components/About'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import DoctorSignin from './components/DoctorSignin'
import StaffSignin from './components/StaffSignin'

function App(){
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Home/>
    },
    {
      path : '/Mangement-Login',
      element : <ManagementSignin/>
    },
    {
      path : '/Doctor-Login',
      element : <DoctorSignin/>
    },
    {
      path : '/Staff-Login',
      element : <StaffSignin/>
    },
    {
      path : '/About',
      element : <About/>
    },
  ])
  return(
    <>
    <RouterProvider router={router}/>
    </>
  )
}
export default App ;

