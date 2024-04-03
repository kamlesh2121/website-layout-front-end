import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import Home from './component/Home/Home';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import User from './component/User/User';
import Github ,{userloaderInfo} from './component/Github/Github';

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout />,
//     children:[
//       {
//         path:'',
//         element:<Home />
//       },
//       {
//         path:'about',
//         element:<About />
//       },
//       {
//         path:'contact',
//         element: <Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>

      <Route path='' element={<Home/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='About' element={<About/>} />
      <Route path='user/:userid' element={<User/>} />
      <Route 
      loader={userloaderInfo}
      path='github'
      element={<Github/>} />
      
    </Route>

  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider  router={router}/>
  </React.StrictMode>
);

