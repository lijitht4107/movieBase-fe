import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Root from './root.jsx'
import Home from '../pages/Home.jsx'
import Register from '../pages/Register.jsx';
import Login from '../pages/Login.jsx';
import AddMovie from './components/AddMovie.jsx';
import MovieDetails from '../pages/MovieDetails.jsx';
import Rating from './components/Rating.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Root />,
    children:[
      {
        path:'/',
        element:<App />
      },
      {
        path:'/home',
        element:<Home/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/addmovie',
        element:<AddMovie/>
      },
      {
        path:'/moviedetails/:id',
        element:<MovieDetails/>
      },
      {
        path:'/rating',
        element:<Rating/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router}/>
    
    
  </React.StrictMode>,
)