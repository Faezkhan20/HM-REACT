import React from 'react'
import "./home.css"
import { useNavigate } from 'react-router-dom'


const Home = () => {
  // const route = useNavigate()
  return (
    <div id='screen1'>
      <div id='bg1'>
        <div id='bodytext'>
          <ul id='bodyul'>
            <li>Members get free shipping above Rs.1999</li>
            <li>Free & flexible 15 days return</li>
            <ul id='lib'> <li id='lib'>Download the H&M App</li></ul>
           
          </ul>
        </div>
        <div id='body1'></div>
        <div id='body9'></div>
        <div id='body2'></div>
        <div id='body3'></div>
        <div id='body4'></div>
        <div id='body5'></div>
        <div id='body6'></div>
        <div id='body7'></div>
        <div id='body8'></div>
        <div id='body10'>
          <div id='mag'>
          <h2>MAGAZINE</h2>
          </div>
          <div id='mag2'>A WORLD OF INSPIRATION</div>
          <div id='mag3'>READ H&M MAGAZINE</div>
          <div id='body11'></div>
        </div>


      </div>
    </div>

  )
}

export default Home