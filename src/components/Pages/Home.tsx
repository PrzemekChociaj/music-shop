import React from 'react'
import Categories from '../Categories/Categories'
import Discount from '../Header/Discount'
import Header from '../Header/Header'
import MainContent from '../MainContent/MainContent'

const Home = () => {
  return (
    <>
    <Discount />
   <Header />
   <Categories />
   <MainContent />
   </>
  )
}

export default Home