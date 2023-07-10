import './App.css';

import {createBrowserRouter,RouterProvider } from "react-router-dom"
import Home from './pages/home';
import LogInSignUp from './pages/LogInSignUp';
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },{
      path:"/signup",
      element:<LogInSignUp/>
    },{
      path:"/login",
      element:<LogInSignUp/>
    }
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
