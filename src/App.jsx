import React, { memo } from 'react'
import {  useRoutes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import routes from './router'
import useScrollTop from './hooks/useScrollTop'
function App() {
  useScrollTop();
  return (
    <div className='app'>
      <Header></Header>
      <div className="content">
        {useRoutes(routes)}
      </div>
      <Footer></Footer>
    </div>
  )
}

export default memo(App)