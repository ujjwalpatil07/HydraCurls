import { motion, useReducedMotion } from 'framer-motion'
import Navbar from '../components/layout/Navbar'
import WaveDivider from '../components/common/WaveDivider'
import logo from 'https://res.cloudinary.com/dyahibuzy/image/upload/v1788749107/logo1_qubwmz.png'
import heroVideo from 'https://res.cloudinary.com/dyahibuzy/video/upload/v1788749176/hero-hydration-animation_qt331a.mp4'

const reveal = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

function HeroSection() {
     const reduceMotion = useReducedMotion()
     const transition = { duration: .7, ease: [.22, 1, .36, 1] }

     return (
          <main
               id="home"
               className="relative w-full min-h-[min(865px,100svh)] overflow-hidden bg-[#040c1e] text-[#f3fdff]"
               style={{ isolation: 'isolate' }}
          >
               {/* Video Background */}
               <video
                    className="absolute inset-0 w-full h-full object-cover object-[50%_52%] pointer-events-none"
                    style={{ zIndex: -3 }}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-hidden="true"
               >
                    <source src={heroVideo} type="video/mp4" />
               </video>

               {/* Veil / Gradient Overlay */}
               <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                         zIndex: -2,
                         background: 'linear-gradient(90deg,rgba(4,12,30,.9) 0%,rgba(4,12,30,.38) 48%,rgba(4,12,30,.78) 100%),linear-gradient(180deg,rgba(4,12,30,.38),rgba(4,12,30,.2) 50%,#040c1e 98%)'
                    }}
                    aria-hidden="true"
               />

               {/* Halo / Radial Gradient */}
               <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                         zIndex: -1,
                         background: 'radial-gradient(ellipse 44% 43% at 54% 50%,rgba(118,70,138,.65),rgba(118,70,138,.18) 45%,transparent 72%)',
                         mixBlendMode: 'screen'
                    }}
                    aria-hidden="true"
               />

               <Navbar />

               {/* Hero Content */}
               <section
                    className="relative flex flex-col items-center text-center w-full"
                    style={{
                         minHeight: 'min(805px,calc(100svh - 60px))',
                         padding: 'clamp(88px,14vh,142px) 24px 106px'
                    }}
                    aria-labelledby="hero-heading"
               >
                    <motion.img
                         className="h-auto mb-[clamp(47px,8.5vh,79px)] w-[clamp(164px,16.5vw,245px)]"
                         src={logo}
                         alt="HydraCurls"
                         variants={reveal}
                         initial={reduceMotion ? false : 'hidden'}
                         animate="visible"
                         transition={{ ...transition, delay: .2 }}
                    />

                    <motion.h1
                         id="hero-heading"
                         className="text-white text-[clamp(3.1rem,6.35vw,6.55rem)] font-normal tracking-[-.055em] leading-[.94] m-0 max-w-[830px]"
                         style={{
                              fontFamily: 'var(--font-display)',
                              textShadow: '0 5px 30px rgba(4,12,30,.35)'
                         }}
                         variants={reveal}
                         initial={reduceMotion ? false : 'hidden'}
                         animate="visible"
                         transition={{ ...transition, delay: .38 }}
                    >
                         <span className="block">Pure ingredients</span>
                         <span className="block text-[#00d5fd]">Real results</span>
                    </motion.h1>

                    <motion.p
                         className="text-[#d8f8ff] text-[clamp(.72rem,1vw,.96rem)] font-semibold tracking-[.24em] mt-[30px] m-0 uppercase"
                         style={{ fontFamily: 'var(--font-ui)' }}
                         variants={reveal}
                         initial={reduceMotion ? false : 'hidden'}
                         animate="visible"
                         transition={{ ...transition, delay: .55 }}
                    >
                         Every drop matters.
                    </motion.p>
               </section>

               <WaveDivider />
          </main>
     )
}

export default HeroSection