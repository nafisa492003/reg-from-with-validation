import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Reg_from from './Components/Reg_from'
import Log_in from './Components/Log_in'
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
          <Route path="/" element={<Reg_from />} />
          <Route path="/login" element={<Log_in />} />
        </Route>
    )
  );
  return <RouterProvider router={router} />;
  
}

export default App