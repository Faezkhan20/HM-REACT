import React, { useContext } from 'react'
import "./nav.css"
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/Authcontext';

const Nav = () => {
  const router = useNavigate();
  
  const { state, Logout } = useContext(AuthContext)
  return (
    <div id='screennav'>
      <div id='bg'>
        <div id='nav'>
          <div id='nav1'>

            <div id='nav1div1'>

              <ul id='ul1'>
                <li>Customer Service</li>
                <li>Newsletter</li>
                <li>Find a store</li>

              </ul>
            </div>
            
            <div onClick={() => router("/")} id='logo'><img id='logoimg' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/640px-H%26M-Logo.svg.png" alt="" /></div>
            <div id='nav1div2'>
              <div id='buttonnav'>
              {state?.user?.id ?
              <>
              
                <button  onClick={Logout} id='signinb'> <h4 id='nameh4'>{state.user.name}</h4> <i id='userr' class="fa-regular fa-user fa-xl"></i>logout</button>
                <button id='fav'><i id='id1' class="fa-regular fa-heart fa-xl"></i> Favourties</button>
                <button id='bag'><i id='id1' class="fa-solid fa-bag-shopping fa-xl"></i> Shopping bag (0)</button>
                </>
                :
                <>
                <button id='signinb'onClick={() => router("/login")}>Signin</button>
                <button id='fav'><i id='id1' class="fa-regular fa-heart fa-xl"></i> Favourties</button>
                <button id='bag'><i id='id1' class="fa-solid fa-bag-shopping fa-xl"></i> Shopping bag (0)</button>
                </>
                }
              </div>
            </div>

          </div>

          <div id='sections'>
            <div id='cat'>
               <ul id='catul'>
                <li>Ladies</li>
                <li onClick={() => router("/mens")}>Men</li>
                <li>Divided</li>
                <li>Baby</li>
                <li>Kids</li>
                <li>H&M HOME</li>
                <li>Sport</li>
                <li>Sustainability</li>
                <li>Sale</li>
               </ul>
            </div>
            <div id='search'>
              <div id='sicon'><i class="fa-solid fa-magnifying-glass"></i></div>
              <div id='linediv'><input id='linein' type="text" placeholder='Search product' /></div>
              <div id='line'>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav