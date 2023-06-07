import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from '../Components/Products'
import Basket from '../Components/Basket'
import Head from '../Components/Head'

const AppRouter = () => {
  return (
    <>
        <BrowserRouter>
        <Head/>
            <Routes>
                <Route path='/product' element={<Products/>}/>
                <Route path='/basket' element={<Basket/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default AppRouter