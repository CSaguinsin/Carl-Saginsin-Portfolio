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
import Carl from '../assets/Me2.jpg'

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
                <a href='https://github.com/CSaguinsin' target="_blank">
                    <img src={github} className="w-10 h-10 mx-1" alt="logo" />
                </a>
                <a href='https://www.instagram.com/carl_sgnsn/' target='_blank'>
                    <img src={instagram} className="w-10 h-10 mx-1" alt="logo" />
                </a>
                <a href='https://www.tiktok.com/@carl_sgnsn' target='_blank'>
                    <img src={tiktok} className="w-10 h-10 mx-1" alt="logo" />
                </a>
                <a href='https://www.facebook.com/carlsaginsin/' target='_blank'>
                    <img src={facebook} className="w-10 h-10 mx-1" alt="logo" />
                </a>
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

        {/* About */}
        <div className="container px-6 py-12 mx-auto flex flex-col lg:flex-row items-center lg:items-start pt-40">
            <div className="lg:w-1/2 lg:pr-6">
                <h1 className="text-3xl lg:text-4xl font-bold mb-4">ABOUT</h1>
                <p className='mb-4' style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: '1rem' }}>
                A passionate <span style={{ color: 'blue' }}>Web Developer</span> diving deep into the world of technology. My toolbox includes HTML, CSS, and JavaScript as my foundational languages. I craft sleek and responsive designs using Bootstrap or TailwindCSS, while jQuery adds that extra touch of interactivity. My love for building user interfaces extends to React.js, where I create dynamic and engaging web applications. When it comes to the backend, I rely on the power of Node.js and Firebase for seamless functionality and real-time updates. Additionally, I wield MySQL for efficient database management, ensuring robust and scalable solutions. I thrive on challenges and love transforming ideas into code. Let's connect and craft something amazing together!
                </p>
                <p className='mb-4' style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: '1rem' }}>
                📧 Open for works!: saguinsincarl8@gmail.com
                </p>
                <p className='mb-4' style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: '1rem' }}>
                📱 Give me a call: +639156716478
                </p>
            </div>
            <div className="lg:w-1/2 lg:pl-6">
                <img src={Carl} className="w-80 h-50 lg:h-full rounded-lg" alt="Carl's Photo" />
            </div>
            </div>

        {/* end of about */}

    </>
  )
}

export default Home