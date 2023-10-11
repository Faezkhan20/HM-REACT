import React, { useState } from 'react'
import TabOption from '../../components/common/TabOptions'
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'

const HomePage = () => {

    const {activetab,setActiveTab}=useState("HomePage");
  return (
    <div>
    <Header/>
    <TabOption/>
    {getScreen(activetab)}
    <Footer/>
    </div>
  )

    
}
const getScreen = (tab) =>{
    switch (tab) {
        case 'HomePage':
        return <div>HomePage</div>
        default:
    
    }
    };

export default HomePage