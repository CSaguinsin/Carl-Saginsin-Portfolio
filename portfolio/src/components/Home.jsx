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
import threads from '../assets/threads.png'
import Proj from '../assets/proj.png'

const Home = () => {
  return (
    <>
        <Navbars />
        <section id='/' className="container px-6 py-12 mx-auto">
      <div className="container px-6 py-12 mx-auto flex flex-col lg:flex-row">
          <div className='flex flex-col-reverse lg:flex-row items-center justify-between'>
            <div >
              <div >
              <h1 className="LandingTitle lg:text-left sm:text-center">
      I'll turn your <br /> business <span style={{ fontFamily: "'Satisfy', cursive", color: '#AB2C88', textDecorationLine: 'underline', textDecorationStyle: 'dotted', }}>ideas</span>💡<br /> Into <span style={{ color: '#ED0909',textDecorationLine: 'underline',}}>Website</span>🌐
    </h1>
    <br />
                <p className='paragph text-center sm:text-left'>I'll help you build and develop websites and custom software solutions <br /> needed for your business,
                <span style={{ color: '#ED0909'}}>Let's build the digital future, your business deserves!</span>
                </p>
                <div className='pl-7 pt-1'>
<a href='https://calendly.com/saguinsincarl/30min'  target="_blank">
  <div className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
    <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full" />
    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
        className="w-5 h-5 text-green-400"
      >
        <path
          d="M14 5l7 7m0 0l-7 7m7-7H3"
          strokeWidth={2}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </span>
    <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
        className="w-5 h-5 text-green-400"
      >
        <path
          d="M14 5l7 7m0 0l-7 7m7-7H3"
          strokeWidth={2}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </span>
    <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200">
      Schedule a free consultation
    </span>
  </div>
  </a>
</div>

              </div>
            </div>
            <div className='lg:w-1/2 lg:pl-6'>
              <img
                src={Proj}
                alt="Graphic Design"
                className=" w-100 h-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
        {/* <div>
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
            <h1 style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: '3rem' }} className='FirstTitle'>Hey There!👏🏻</h1>
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
                <a href='https://www.threads.net/@carl_sgnsn' target='_blank'>
                    <img src={threads} className="w-10 h-10 mx-1" alt="logo" />
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
        </div> */}

        {/* About */}
        <div className="container px-6 py-12 mx-auto flex flex-col lg:flex-row items-center  lg:items-start pt-40">
            <div className="lg:w-1/2 lg:pr-6">
                <h1 className="text-3xl lg:text-4xl font-bold mb-4">ABOUT 👏🏻</h1>
                <p className='mb-4' style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: '1rem' }}>
                I am Carl Saginsin, a <span style={{ color: 'blue' }}>Full Stack Web Developer</span> diving deep into the world of technology. My toolbox includes HTML, CSS, and JavaScript as my foundational languages. I craft sleek and responsive designs using Bootstrap or TailwindCSS, while jQuery adds that extra touch of interactivity. My love for building user interfaces extends to React.js, where I create dynamic and engaging web applications. When it comes to the backend, I rely on the power of Node.js and Firebase for seamless functionality and real-time updates. Additionally, I wield MySQL for efficient database management, ensuring robust and scalable solutions. I thrive on challenges and love transforming ideas into code. Let's connect and craft something amazing together!
                </p>
                <p className='mb-4' style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: '1rem' }}>
                📧 Open for works!: saguinsincarl8@gmail.com
                </p>
                <p className='mb-4' style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: '1rem' }}>
                📱 Give me a call: +639156716478
                </p>
                <div className="flex  pt-2">               
                <img src={html} className="w-10 h-10 mx-3" alt="logo" />
                <img src={css} className="w-10 h-10 mx-3" alt="logo" />
                <img src={bootstrap} className="w-10 h-10 mx-3" alt="logo" />
                <img src={tailwind} className="w-10 h-10 mx-3" alt="logo" />
                <img src={js} className="w-10 h-10 mx-3" alt="logo" />
                <img src={react} className="w-10 h-10 mx-3" alt="logo" />
                <img src={jquery} className="w-10 h-10 mx-3" alt="logo" />
            </div>
            <div className="flex pt-5">
                <img src={node} className="w-10 h-10 mx-3" alt="logo" />
                <img src={firebase} className="w-10 h-10 mx-3" alt="logo" />
                <img src={mysql} className="w-10 h-10 mx-3" alt="logo" />
 
            </div>
                <div className="flex pt-5 sm:flex-row">
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
                        <a href='https://www.threads.net/@carl_sgnsn' target='_blank'>
                            <img src={threads} className="w-10 h-10 mx-1" alt="logo" />
                        </a>
            </div>
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