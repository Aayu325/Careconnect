import './App.css'
import Home from './components/Home'
import ManagementSignin from './components/ManagementSignin'
import About from './components/About'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import DoctorSignin from './components/DoctorSignin'
import StaffSignin from './components/StaffSignin'
import Overview from './components/Overview'
import InProgress from './components/InProgress'
import { GlobalProvider } from './context/Context';
import Patients from './components/Patients'
import Doctors from './components/Doctors'
import Inventory from './components/Inventory'
import Sidebar from './components/Sidebar'
import Soverview from './components/Soverview'
import Opdq from './components/opdq'
import Pbedalot from './components/bedalot'
import Notifications from './components/notification'
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
    // {
    //   path : '/Mangement-Login/Dashboard',
    //   element : <Dashboard/>
    // },
    {
      path : '/Mangement-Login/Dashboard/overview',
      element : <Overview/>
    },
    {
      path : '/Mangement-Login/Dashboard/patients',
      element : <Patients/>
    },
    {
      path : '/Mangement-Login/Dashboard/doctors',
      element : <Doctors/>
    },
    {
      path : '/Mangement-Login/Dashboard/inventory',
      element : <Inventory/>
    },
    {
      path : '/',
      element : <Home/>
    },
    {
      path : '/Staff-Login/Dashboard',
      element : <Sidebar/>
    },
    {
      path : '/Staff-Login/Dashboard/overview',
      element : <Soverview/>
    },
    {
      path : '/Staff-Login/Dashboard/opdq',
      element : <Opdq/>
    },
    {
      path : '/Staff-Login/Dashboard/bedalot',
      element : <Pbedalot/>
    },
    {
      path : '/Staff-Login/Dashboard/notices',
      element : <Notifications/>
    },
    {
      path : '/Doctor-Login/in-progress',
      element : <InProgress/>
    },
  ])
  return(
    <GlobalProvider>
    
    <RouterProvider router={router}/>
    </GlobalProvider>
  )
}
export default App ;

