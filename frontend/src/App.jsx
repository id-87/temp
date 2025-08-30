import './App.css'


import { useEffect } from 'react'
import Home from './assets/components/Home/Home'
import Navbar from './assets/components/Navbar/Navbar'
import Footer from './assets/components/Footer/Footer'
import Project from './assets/components/Project/Project'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'


function App() {
  const router = createBrowserRouter([
{
  path: '/',
  element: <> <Home/> </>
},
{
  path: '/project',
  element: <> <Project/> </>
},
])
  return(

  <div className="app-container">
<RouterProvider router={router} />
  </div>
  );
}

export default App
