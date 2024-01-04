import React from 'react'
import Navbars from '../components/Navbar'
import buildmastershub from '../assets/buildmastershub.png'
import citybarbers from '../assets/City Barbers.jpg'
import manilathrift from '../assets/Manila Thrift Shop.jpg'
import horoluxia from '../assets/horoluxia.png'
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
const Projects = () => {
  return (
   <>   
        <Navbars />

<div class="relative h-full w-full flex items-center justify-center pt-10">
        <div>
            <h1 style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: '3rem' }} className='FirstTitle'>PROJECTS</h1>
        </div>
</div>
<div>
            <div class="flex flex-wrap overflow-hidden">
                <div class="w-full overflow-hidden sm:w-1/2 lg:w-1/2 xl:w-1/2">
                    <img src={buildmastershub} alt="Build Masters Hub" class="rounded-lg h-full w-full object-cover" />
                </div>
                <div class="w-full overflow-hidden lg:w-1/2 xl:w-1/2">
                    <div class="p-6">
                        <h2 style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: '2rem' }}>Build Masters Hub</h2>
                                <div className="flex pt-5">
                                        <img src={react} className="w-10 h-10 mx-3" alt="logo" />
                                        <img src={tailwind} className="w-10 h-10 mx-3" alt="logo" />
                                        <img src={node} className="w-10 h-10 mx-3" alt="logo" />
                                        <img src={firebase} className="w-10 h-10 mx-3" alt="logo" />
                                </div>
                        <p className ='pt-4'style={{ fontFamily: 'Inter Tight, sans-serif' }}>
                        BuildMasterHub is a project that aims to create a platform for construction and foremen to connect with potential clients, all in a user-friendly and searchable format.
BuildMasterHub aims to bridge the gap between talent and opportunity within the construction realm, fostering a collaborative ecosystem where craftsmanship meets demand. By leveraging technology to streamline the process of showcasing skills and networking, this platform aspires to redefine how professionals in the construction field interact, collaborate, and thrive in a competitive market.
This web app is created using the latest technologies React javascript and TailwindCSS and on the backend is Firebase
                        </p>
                    </div>
                </div>
               {/* ibang projects */}
               <div className="flex items-center justify-center flex-wrap pt-5">
               <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 p-2">
                    <img src={manilathrift} alt="Manila Thrift Shop" className="rounded-lg h-full w-full object-cover" />
                    <div className="flex items-center justify-center flex-wrap pt-1">
                                        <img src={react} className="w-10 h-10 mx-3" alt="logo" />
                                        <img src={tailwind} className="w-10 h-10 mx-3" alt="logo" />
                                </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 p-2">
                    <img src={citybarbers} alt="City Barbers" className="rounded-lg h-full w-full object-cover" />
                    <div className="flex items-center justify-center flex-wrap pt-1">
                                        <img src={html} className="w-10 h-10 mx-3" alt="logo" />
                                        <img src={css} className="w-10 h-10 mx-3" alt="logo" />
                                        <img src={bootstrap} className="w-10 h-10 mx-3" alt="logo" />
                                </div>
                </div>
                {/* Add more images in a similar structure if needed */}
                </div>

               {/* end */}
            </div>
        </div>
   </>  
  )
}

export default Projects