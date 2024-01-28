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
import Acore from '../assets/Acore.png'
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
                        <h2 style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: '2rem' }}>BuildMastersHub</h2>
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
                            <div className=' relative flex items-center '>
                                <a href='https://buildmastershub.web.app/' target='_blank'>
                                <p className ='pt-4'style={{ fontFamily: 'Inter Tight, sans-serif' }}>
                                    <span style={{ color: 'blue' }}>Live Website</span>
                                </p>
                                </a>
                            </div>
                    </div>
                </div>

                <div class="w-full overflow-hidden sm:w-1/2 lg:w-1/2 xl:w-1/2">
                    <img src={Acore}b alt="Build Masters Hub" class="pl-5 rounded-lg h-full w-full object-cover" />
                </div>
                <div class="w-full overflow-hidden lg:w-1/2 xl:w-1/2">
                    <div class="p-6">
                        <h2 style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: '2rem' }}>A Core Lying In Web App</h2>
                                <div className="flex pt-5">
                                        <img src={react} className="w-10 h-10 mx-3" alt="logo" />
                                        <img src={tailwind} className="w-10 h-10 mx-3" alt="logo" />
                                        <img src={node} className="w-10 h-10 mx-3" alt="logo" />
                                        <img src={firebase} className="w-10 h-10 mx-3" alt="logo" />
                                </div>
                        <p className ='pt-4'style={{ fontFamily: 'Inter Tight, sans-serif' }}>
                        At A-Core Medical & Maternity Lying-In Clinic, our unwavering commitment to providing exceptional healthcare services is at the heart of our mission. With a team of dedicated and compassionate professionals, we prioritize the well-being of our patients throughout their medical and maternity journey. Our state-of-the-art facilities and personalized care approach ensure that each individual receives comprehensive and tailored services, fostering a safe and comfortable environment. From medical consultations to maternity care, we strive to exceed expectations, empowering our community with the highest standards of healthcare. Your health is our priority, and at A-Core, we are here to support you every step of the way.
                        </p>
                            <div className=' relative flex items-center '>
                                <a href='https://a-core-web-app.web.app/' target='_blank'>
                                <p className ='pt-4'style={{ fontFamily: 'Inter Tight, sans-serif' }}>
                                    <span style={{ color: 'blue' }}>Live Website</span>
                                </p>
                                </a>
                            </div>
                    </div>
                </div>
               {/* ibang projects */}
               <div className="flex items-center justify-center flex-wrap pt-5">
               <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 p-2">
                    <img src={manilathrift} alt="Manila Thrift Shop" className="rounded-lg h-full w-full object-cover" />
                    <div className="flex items-center justify-center flex-wrap pt-1">
                                        <img src={react} className="w-10 h-10 mx-3" alt="logo" />
                                        <img src={tailwind} className="w-10 h-10 mx-3" alt="logo" />
                                        <img src={node} className="w-10 h-10 mx-3" alt="logo" />
                    </div>
                    <p style={{ fontFamily: 'Inter Tight, sans-serif' }}>
                    MANILA THRIFT SHOP: E-COMMERCE WEBSITE masterfully embodies simplicity in design and color choices. Created using the ReactJS and Tailwind CSS tech stack, the website's interface reflects a harmonious blend of functionality and aesthetics. The minimalist design ensures a clutter-free browsing experience, enabling users to effortlessly navigate through the curated thrift collection. The carefully chosen color palette exudes a sense of calmness and modernity, enhancing the overall visual appeal. With ReactJS's dynamic components and Tailwind CSS's utility classes, the project achieves both elegance and efficiency, elevating the online shopping journey to a seamless and visually pleasing level.
                    </p>
                    <div className=' relative flex items-center '>
                        <a href='https://csaguinsin.github.io/manila-thrift-shop/' target='_blank'>
                                <p className ='pt-4'style={{ fontFamily: 'Inter Tight, sans-serif' }}>
                                    <span style={{ color: 'blue' }}>Live Website</span>
                                </p>
                        </a>
                            </div> 
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 p-2">
                    <img src={citybarbers} alt="City Barbers" className="rounded-lg h-full w-full object-cover" />
                    <div className="flex items-center justify-center flex-wrap pt-1">
                                        <img src={html} className="w-10 h-10 mx-3" alt="logo" />
                                        <img src={css} className="w-10 h-10 mx-3" alt="logo" />
                                        <img src={bootstrap} className="w-10 h-10 mx-3" alt="logo" />
                                        <img src={jquery} className="w-10 h-10 mx-3" alt="logo" />
                    </div>
                    <p className='pt-4' style={{ fontFamily: 'Inter Tight, sans-serif' }}>
                    CITY BARBER'S: BARBER SHOP CHRONICLES exemplifies elegance through its simplicity. Crafted with a tech stack of HTML, CSS, Bootstrap, and jQuery. This project seamlessly blends these technologies to create a user-friendly experience. The website's minimalist design prioritizes ease of navigation. Making it effortless for users to explore different aspects of barbering artistry. With a focus on clean layouts and intuitive interactions, visitors can delve into the world of barber shops and their rich traditions while enjoying a smooth, responsive interface. CITY BARBER'S captures the essence of sophistication through its uncomplicated yet engaging presentation.
                    </p>
                    <div className=' relative flex items-center '>
                        <a href='https://csaguinsin.github.io/City-Barbers-Website/index.html' target='_blank'>
                                <p className ='pt-4'style={{ fontFamily: 'Inter Tight, sans-serif' }}>
                                    <span style={{ color: 'blue' }}>Live Website</span>
                                </p>
                        </a>
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