import {  Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"


import { HeroeRoutes } from "../heroes/routes/HeroeRoutes";
import { PrivateRoute } from "../heroes/routes/PrivateRoute";
import { PublicRoute } from "../heroes/routes/PublicRoute";


export const AppRouter = () => {
  return (
    <>
      
        <Routes>
            
            <Route path="login/*" element={
              <PublicRoute>
                <Routes>
                  <Route path="/*" element={<LoginPage/>} />
                </Routes>
                {/* <LoginPage/>  cambiando path='/login' */}
              </PublicRoute>
            }/>

            {/* <Route path="login" element={ <LoginPage/> } /> */}

            <Route path="/*" element={
              <PrivateRoute>
                <HeroeRoutes/>
              </PrivateRoute>
            }/>

            {/* <Route path="/*" element={ <HeroeRoutes/> } /> */}
            

        </Routes>
    </>
  )
}
