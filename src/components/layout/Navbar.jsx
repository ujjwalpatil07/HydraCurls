import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import logo from 'https://res.cloudinary.com/dyahibuzy/image/upload/v1788749107/logo1_qubwmz.png'

const links = ['Home', 'Products', 'Hair Care Blog', 'Curly Girl Method']

function Navbar() {
     const [menuOpen, setMenuOpen] = useState(false)
     const reduceMotion = useReducedMotion()

     return (
          <motion.nav
               className="absolute top-0 left-0 right-0 z-[3] flex items-center justify-between"
               style={{
                    padding: '27px clamp(24px,5.8vw,102px)',
                    fontFamily: 'var(--font-ui)'
               }}
               aria-label="Main navigation"
               initial={reduceMotion ? false : { opacity: 0, y: -14 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: .55, ease: [.22, 1, .36, 1] }}
          >
               {/* Logo */}
               <a
                    href="#home"
                    aria-label="HydraCurls home"
                    onClick={() => setMenuOpen(false)}
                    className="shrink-0"
               >
                    <img
                         className="block h-auto"
                         style={{
                              width: 'clamp(88px,7.6vw,118px)'
                         }}
                         src={logo}
                         alt="HydraCurls"
                    />
               </a>

               {/* Mobile Menu Toggle */}
               <button
                    className="lg:hidden flex items-center bg-transparent border border-[rgba(243,253,255,.7)] text-[#f3fdff] font-semibold text-[.7rem] tracking-[.12em] px-[12px] py-[10px] uppercase transition-colors duration-200 hover:text-[#00d5fd] hover:border-[#00d5fd] focus-visible:text-[#00d5fd] focus-visible:border-[#00d5fd]"
                    style={{
                         fontFamily: 'var(--font-ui)',
                         lineHeight: '1',
                         gap: '9px'
                    }}
                    type="button"
                    aria-expanded={menuOpen}
                    aria-controls="primary-navigation"
                    onClick={() => setMenuOpen((open) => !open)}
               >
                    <span
                         className="relative block w-[18px] h-[1px] bg-current before:absolute before:top-[-5px] before:left-0 before:w-[18px] before:h-[1px] before:bg-current after:absolute after:top-[5px] after:left-0 after:w-[18px] after:h-[1px] after:bg-current"
                         aria-hidden="true"
                    />
                    Menu
               </button>

               {/* Desktop Navigation */}
               <ul
                    id="primary-navigation"
                    className="hidden lg:flex list-none m-0 p-0 items-center"
                    style={{ gap: 'clamp(25px,3.2vw,58px)' }}
               >
                    {links.map((link) => (
                         <li key={link}>
                              <a
                                   href={`#${link.toLowerCase().replaceAll(' ', '-')}`}
                                   onClick={() => setMenuOpen(false)}
                                   className="text-[#f3fdff] text-[.75rem] font-semibold tracking-[.12em] no-underline uppercase transition-colors duration-200 hover:text-[#00d5fd] focus-visible:text-[#00d5fd]"
                                   style={{ fontFamily: 'var(--font-ui)' }}
                              >
                                   {link}
                              </a>
                         </li>
                    ))}
               </ul>

               {/* Mobile Navigation */}
               <ul
                    id="primary-navigation"
                    className={`lg:hidden list-none m-0 p-0 absolute top-full left-0 right-0 bg-[rgba(4,12,30,.98)] px-[24px] py-[16px_24px_25px] transition-all duration-200 ${menuOpen
                              ? 'opacity-100 visible translate-y-0'
                              : 'opacity-0 invisible -translate-y-[12px]'
                         }`}
               >
                    {links.map((link) => (
                         <li key={link} className="w-full">
                              <a
                                   href={`#${link.toLowerCase().replaceAll(' ', '-')}`}
                                   onClick={() => setMenuOpen(false)}
                                   className="block text-[#f3fdff] text-[.75rem] font-semibold tracking-[.12em] no-underline uppercase py-[13px] transition-colors duration-200 hover:text-[#00d5fd] focus-visible:text-[#00d5fd]"
                                   style={{ fontFamily: 'var(--font-ui)' }}
                              >
                                   {link}
                              </a>
                         </li>
                    ))}
               </ul>
          </motion.nav>
     )
}

export default Navbar