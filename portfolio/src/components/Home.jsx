import React from 'react'
import Navbars from '../components/Navbar'
import Me from '../assets/Me.jpg'
import '../style/Styles.css'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/javascript.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import bootstrap from '../assets/bootstrap.png'
import tailwind from '../assets/tailwind.png'
import jquery from '../assets/jquery.png'
import firebase from '../assets/firebase.png'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import tiktok from '../assets/tiktok.png'
import github from '../assets/github.png'
import mysql from '../assets/mysql.png'

const Home = () => {
  return (
    <>
        <Navbars />
        <br></br>
        <div>
                <div class="relative h-full w-full flex items-center justify-center pt-10">
                <button className="profile_item w-[200px] h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
                    <div className="w-full h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
                        <img
                        src={Me}
                        alt="Profile Image"
                        className="w-full h-full rounded-full object-cover"
                        />
                    </div>
                    </button>
                    
                </div>
                <div>
            <h1 style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: '3rem' }} className='FirstTitle'>Hey There!</h1>
            <p style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: '1rem', textAlign: 'center'  }}>  I am Carl Saginsin, a <span style={{ color: 'blue' }}>Web Developer</span> from Manila, Philippines</p>
            <div className="flex items-center justify-center">
                <img src={github} className="w-10 h-10 mx-1" alt="logo" />
                <img src={instagram} className="w-10 h-10 mx-1" alt="logo" />
                <img src={tiktok} className="w-10 h-10 mx-1" alt="logo" />
                <img src={facebook} className="w-10 h-10 mx-1" alt="logo" />
            </div>
            </div>

            <p className='pt-10' style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: '1rem', textAlign: 'center'  }}>My Tech Stack</p>
            <div className="flex items-center justify-center pt-2">               
                <img src={html} className="w-10 h-10 mx-3" alt="logo" />
                <img src={css} className="w-10 h-10 mx-3" alt="logo" />
                <img src={bootstrap} className="w-10 h-10 mx-3" alt="logo" />
                <img src={tailwind} className="w-10 h-10 mx-3" alt="logo" />
                <img src={js} className="w-10 h-10 mx-3" alt="logo" />
                <img src={react} className="w-10 h-10 mx-3" alt="logo" />
                <img src={jquery} className="w-10 h-10 mx-3" alt="logo" />
            </div>
            <div className="flex items-center justify-center pt-5">
                <img src={node} className="w-10 h-10 mx-3" alt="logo" />
                <img src={firebase} className="w-10 h-10 mx-3" alt="logo" />
                <img src={mysql} className="w-10 h-10 mx-3" alt="logo" />
 
            </div>
        </div>

        <div>
            
        </div>

    </>
  )
}

export default Home