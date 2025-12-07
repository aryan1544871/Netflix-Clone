import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCard from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  const titleOne = import.meta.env.VITE_CARD_LAYOUT_ONE_NAME;
  const titleTwo = import.meta.env.VITE_CARD_LAYOUT_TWO_NAME;
  const titleThree = import.meta.env.VITE_CARD_LAYOUT_THREE_NAME;
  const titleFour = import.meta.env.VITE_CARD_LAYOUT_FOUR_NAME;
  const titleFive = import.meta.env.VITE_CARD_LAYOUT_FIVE_NAME;

  const apiURLOne = import.meta.env.VITE_CARD_LAYOUT_ONE_API_URL;
  const apiURLTwo = import.meta.env.VITE_CARD_LAYOUT_TWO_API_URL;
  const apiURLThree = import.meta.env.VITE_CARD_LAYOUT_THREE_API_URL;
  const apiURLFour = import.meta.env.VITE_CARD_LAYOUT_FOUR_API_URL;
  const apiURLFive = import.meta.env.VITE_CARD_LAYOUT_FIVE_API_URL;
    return (
    <div  className='home'>
        <Navbar/>
        <div className='hero'>
          <img src={hero_banner} alt='' className='banner-img'/>
          <div className="hero-caption">
            <img src={hero_title} alt="" className='caption-img' />
            <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul <br/> embarks on a quest to save the city from an immortal enemy</p>
            <div className="hero-btns">
              <button className='btn'><img src={play_icon} alt="" />Play</button>
              <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
            </div>
            <TitleCard title={titleOne} category={apiURLOne}/>
          </div>
        </div>
        <div className="more-cards">
           <TitleCard title={titleTwo} category={apiURLTwo}/>
           <TitleCard title={titleThree}  category={apiURLThree}/>
           <TitleCard title={titleFour}  category={apiURLFour}/>
           <TitleCard title={titleFive}  category={apiURLFive}/>
        </div>
        <Footer/>
      </div>
  )
}

export default Home