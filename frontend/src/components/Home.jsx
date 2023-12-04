import React from 'react'
import "./home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'


const Home = () => {

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
        <div id='widthwhole'>
          <div className="product-img">
            <div className="pro-bg">
              <div className="pro-sect-1">
                <div className="pro-tag">
                  <div className="left-arrow-icon"><FontAwesomeIcon icon={faCaretLeft} /></div>
                  <div className="tag-price">
                    <p>Rs. 4,999.00</p>
                    <p>Frilled tulle top <i class="fa-solid fa-angle-right"></i></p>
                  </div>
                </div>
              </div>
              <div className="pro-sect-2">
                <div className="pro-text">
                  <p>STUDIO</p>
                  <p>The A/W 2023 collection is out now.</p>
                </div>
                <div className="pro-button">
                  <button className="shop-button">SHOP NOW</button>
                  <button className="inspired-button">GET INSPIRED</button>
                </div>
              </div>
            </div>
          </div>

          <div className="product-img-2">
            <div className="pro-bg">
              <div className="pro-sect-1">
                <div className="pro-tag-2">
                  <div className="tag-price">
                    <p>Rs. 1,499.00</p>
                    <p>Slim Fit Fine-knit pol...  <i class="fa-solid fa-angle-right"></i></p>
                  </div>
                  <div className="right-arrow-icon"><FontAwesomeIcon icon={faCaretRight} /></div>
                </div>
              </div>
              <div className="pro-sect-2">
                <div className="pro-text-2">
                  <p>All knits needed</p>
                  <p>Go nowhere without knitwear. Conquer the classic looks & coordinated layers.</p>
                </div>
                <div className="pro-button">
                  <button className="shop-button">Shop now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="banner-category">
            <div className="banner-content">
              <p>A/W23 WARDROBE WINS</p>
              <p>Key staples for the season ahead!</p>
              <div className="ban-cat-button">
                <button>Ladies</button>
                <button>Men</button>
                <button>Divided</button>
                <button>Kids</button>
              </div>
            </div>
          </div>

          <div className="popular-categories">
            <p>Popular categories</p>
            <div className="pop-grid">
              <div className="pop-cat-content">
                <div className="pop-cat-layout">
                  <img src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10202.png?imwidth=124" alt="" />
                  <p className="pop-cat">Ladies</p>
                  <p className="pop-name">Tops & T-shirts</p>
                </div>
              </div>

              <div className="pop-cat-content">
                <div className="pop-cat-layout">
                  <img src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10201.png?imwidth=124" alt="" />
                  <p className="pop-cat">Ladies</p>
                  <p className="pop-name">Trousers</p>
                </div>
              </div>

              <div className="pop-cat-content">
                <div className="pop-cat-layout">
                  <img src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10244.png?imwidth=124" alt="" />
                  <p className="pop-cat">Ladies</p>
                  <p className="pop-name">Clothes</p>
                </div>
              </div>

              <div className="pop-cat-content">
                <div className="pop-cat-layout">
                  <img src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10231.png?imwidth=124" alt="" />
                  <p className="pop-cat">Men</p>
                  <p className="pop-name">Hoodies & Sweatshirts</p>
                </div>
              </div>

              <div className="pop-cat-content">
                <div className="pop-cat-layout">
                  <img src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10221.png?imwidth=124" alt="" />
                  <p className="pop-cat">Men</p>
                  <p className="pop-name">T-shirts & Tops</p>
                </div>
              </div>

              <div className="pop-cat-content">
                <div className="pop-cat-layout">
                  <img src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10220.png?imwidth=124" alt="" />
                  <p className="pop-cat">Ladies</p>
                  <p className="pop-name">Accessories</p>
                </div>
              </div>

              <div className="pop-cat-content">
                <div className="pop-cat-layout">
                  <img src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10208.png?imwidth=124" alt="" />
                  <p className="pop-cat">Ladies</p>
                  <p className="pop-name">Shirts & Blouses</p>
                </div>
              </div>

              <div className="pop-cat-content">
                <div className="pop-cat-layout">
                  <img src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10216.png?imwidth=124" alt="" />
                  <p className="pop-cat">Ladies</p>
                  <p className="pop-name">Dresses</p>
                </div>
              </div>
            </div>

          </div>

          <div className="product-img-3">
            <div className="pro-bg">
              <div className="pro-sect-1">
                <div className="pro-tag-3">
                  <div className="tag-price">
                    <p>Rs. 1,499.00</p>
                    <p>Oversized jacquard-k...  <i class="fa-solid fa-angle-right"></i></p>
                  </div>
                  <div className="right-arrow-icon"><FontAwesomeIcon icon={faCaretRight} /></div>
                </div>
              </div>
              <div className="pro-sect-2">
                <div className="pro-text-3">
                  <p>It's cabin chic, but not really</p>
                  <p>Styles inspired by the great outdoors.</p>
                </div>
                <div className="pro-button">
                  <button className="shop-button">Shop now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="new-arrivals">
            <p>New Arrivals</p>
            <div className="arrivals-cat">
              <button>Ladies</button>
              <button>Men</button>
              <button>Divided</button>
              <button>Baby</button>
              <button>Kids</button>
              <button>H&M HOME</button>
              <button>Sport</button>
            </div>

            <div className="arrivals-layout">
              <div className="arrivals-poster">
                <div className="arrivals-pic-1">
                  <div className="heart-container">
                    <div className="heart-logo-regular"><i class="fa-regular fa-heart fa-xl"></i></div>
                  </div>
                </div>
                <p className="arrivals-text">Tie-neck maxi dress</p>
                <p className="arrivals-price">Rs.5,999.00</p>
              </div>

              <div className="arrivals-poster">
                <div className="arrivals-pic-2">
                  <div className="heart-container">
                    <div className="heart-logo-regular-0"><i class="fa-solid fa-heart fa-xl"></i></div>
                  </div>
                </div>
                <p className="arrivals-text">Turtleneck thong body</p>
                <p className="arrivals-price">Rs.799.00</p>
              </div>

              <div className="arrivals-poster">
                <div className="arrivals-pic-3">
                  <div className="heart-container">
                    <div className="heart-logo-regular-0"><i class="fa-solid fa-heart fa-xl"></i></div>
                  </div>
                </div>
                <p className="arrivals-text">Sheer lace top</p>
                <p className="arrivals-price">Rs.4,999.00</p>
              </div>

              <div className="arrivals-poster">
                <div className="arrivals-pic-4">
                  <div className="heart-container">
                    <div className="heart-logo-regular"><i class="fa-regular fa-heart fa-xl"></i></div>
                  </div>
                </div>
                <p className="arrivals-text">Rib-knit mermaid skirt</p>
                <p className="arrivals-price">Rs.2,299.00</p>
              </div>
            </div>

            <div className="slick-dot">
              <div className="circle-logo">
              
                <div className="circle-logo-regular"><i class="fa-solid fa-circle-dot"></i></div>
                <div className="circle-logo-solid"><i class="fa-solid fa-circle"></i></div>
              </div>

              <div className="circle-logo">
                {/* <div className="circle-logo-regular"><i class="fa-regular fa-circle"></i></div> */}
                <div className="circle-logo-regular"><i class="fa-solid fa-circle-dot"></i></div>
                <div className="circle-logo-solid"><i class="fa-solid fa-circle"></i></div>
              </div>

              <div className="circle-logo">
                {/* <div className="circle-logo-regular"><i class="fa-regular fa-circle"></i></div> */}
                <div className="circle-logo-regular"><i class="fa-solid fa-circle-dot"></i></div>
                <div className="circle-logo-solid"><i class="fa-solid fa-circle"></i></div>
              </div>

              <div className="circle-logo">
                {/* <div className="circle-logo-regular"><i class="fa-regular fa-circle"></i></div> */}
                <div className="circle-logo-regular"><i class="fa-solid fa-circle-dot"></i></div>
                <div className="circle-logo-solid"><i class="fa-solid fa-circle"></i></div>
              </div>
            </div>
          </div>

          <div className="product-img-4">
            <div className="pro-bg">
              <div className="pro-sect-1">
                <div className="pro-tag-4">
                  <div className="up-arrow-icon"><i class="fa-solid fa-caret-up"></i></div>
                  <div className="tag-price">
                    <p>Rs. 699.00</p>
                    <p>Wrapover top  <i class="fa-solid fa-angle-right"></i></p>
                  </div>
                </div>
              </div>
              <div className="pro-sect-2">
                <div className="pro-text-4">
                  <p>A/W 2023</p>
                  <p>Cooler days call for knits, coats, and boots made for the outdoors.</p>
                </div>
                <div className="pro-button">
                  <button className="shop-button">Shop now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="product-img-5">
            <div className="pro-bg-5">
              <div className="pro-sect-1">
                <div className="pro-tag-5">
                  <div className="tag-price">
                    <p>Rs. 1,799.00</p>
                    <p>Satin shirt  <i class="fa-solid fa-angle-right"></i></p>
                  </div>
                </div>
              </div>
              <div className="pro-sect-2">
                <div className="pro-text-3">
                  <p>Fashion that delivers</p>
                  <p>Explore layers of autumn</p>
                </div>
                <div className="pro-button">
                  <button className="shop-button">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="magazine">
          <div className="magazine-content">
            <div className="magazine-text">
              <h1>MAGAZINE</h1>
              <p>A WORLD OF INSPIRATION</p>
              <p>READ H&M MAGAZINE</p>
            </div>
            <div className="magazine-layout">


              <div className="magazine-rts-box">
                <div className="magazine-rts-img">
                  <img src="https://image.hm.com/content/dam/hm-magazine-2023/september_2023/2008-announcement/2008-Pool-party-3x2-Magazine-Article-Top-image-1688x1126_150ppi_V2.jpg?imwidth=384" alt="" />
                </div>
                <div className="magazine-rts-lay">
                  <div className="magazine-rts-text">
                    <p>INSIDE H&M</p>
                    <p>Introducing Rabanne H&M</p>
                  </div>
                  <div className="mag-rts-dir">
                    <p>Read The Story</p>
                    <div className="rts-arrowRight"><i class="fa-solid fa-arrow-right"></i></div>
                  </div>
                </div>
              </div>

              <div className="magazine-rts-box">
                <div className="magazine-rts-img">
                  <img src="https://image.hm.com/content/dam/hm-magazine-2023/september_2023/7428/7428-Outdoor-Movement-Magazine-image-1-1688x1126.jpg?imwidth=384" alt="" />
                </div>
                <div className="magazine-rts-lay">
                  <div className="magazine-rts-text">
                    <p>INSIDE H&M</p>
                    <p>Gear up for the outdoors</p>
                  </div>
                  <div className="mag-rts-dir">
                    <p>Read The Story</p>
                    <div className="rts-arrowRight"><i class="fa-solid fa-arrow-right"></i></div>
                  </div>
                </div>
              </div>

              <div className="magazine-rts-box">
                <div className="magazine-rts-img">
                  <img src="https://image.hm.com/content/dam/hm-magazine-2023/august_2023/lookbook-3088/3088-3x2-top-image.jpg?imwidth=384" alt="" />
                </div>
                <div className="magazine-rts-lay">
                  <div className="magazine-rts-text">
                    <p>INSIDE H&M</p>
                    <p>AUTUMN ’23 MENSWEAR <br /> TRENDS</p>
                  </div>
                  <div className="mag-rts-dir">
                    <p>Read The Story</p>
                    <div className="rts-arrowRight"><i class="fa-solid fa-arrow-right"></i></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>



  )
}

export default Home