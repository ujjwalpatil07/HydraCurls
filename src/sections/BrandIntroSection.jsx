import { motion, useReducedMotion } from 'framer-motion'
import {
     ArrowRight,
     Check,
     Clock3,
     List,
} from 'lucide-react'

import logo2 from 'https://res.cloudinary.com/dyahibuzy/image/upload/v1788749108/logo2_kj8g37.png'
import shampoo from 'https://res.cloudinary.com/dyahibuzy/image/upload/v1788749109/shampoo_qtdk53.png'
import waterSplash from 'https://res.cloudinary.com/dyahibuzy/image/upload/v1788749109/water-splash_oh11wh.png'
import plant from 'https://res.cloudinary.com/dyahibuzy/image/upload/v1788749109/pis-plant_icf8c6.png'

const reveal = {
     hidden: {
          opacity: 0,
          y: 26,
     },
     visible: {
          opacity: 1,
          y: 0,
     },
}

const transition = {
     duration: 0.7,
     ease: [0.22, 1, 0.36, 1],
}

/*
 * ------------------------------------------------------------
 * Benefit badge
 * ------------------------------------------------------------
 */
function BenefitBadge({ icon: Icon, children }) {
     return (
          <div
               className="
                    inline-flex
                    min-h-[30px]
                    items-center
                    gap-[6px]
                    rounded-full
                    border
                    border-[#d0e8f0]
                    bg-[#e8f4f8]
                    px-[10px]
                    py-[5px]
                    whitespace-nowrap
               "
          >
               <Icon
                    aria-hidden="true"
                    className="h-[12px] w-[12px] shrink-0 text-[#00a8c5]"
                    strokeWidth={2}
               />

               <span
                    className="
                         text-[11px]
                         font-medium
                         leading-none
                         text-[#091b3b]

                         sm:text-[12px]
                    "
                    style={{
                         fontFamily: 'var(--font-ui)',
                    }}
               >
                    {children}
               </span>
          </div>
     )
}

/*
 * ------------------------------------------------------------
 * CTA button
 * ------------------------------------------------------------
 */
function PrimaryButton({ children }) {
     return (
          <a
               href="#products"
               className="
                    inline-flex
                    min-h-[42px]
                    items-center
                    justify-center
                    gap-[7px]
                    rounded-[5px]
                    bg-[#00d5fd]
                    px-[18px]
                    py-[10px]
                    text-[12px]
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    hover:bg-[#00b8d9]

                    sm:min-h-[46px]
                    sm:px-[20px]
                    sm:text-[13px]

                    lg:min-h-[48px]
                    lg:px-[24px]
                    lg:text-[14px]
               "
               style={{
                    fontFamily: 'var(--font-ui)',
               }}
          >
               <span>{children}</span>

               <ArrowRight
                    aria-hidden="true"
                    className="
                         h-[14px]
                         w-[14px]

                         sm:h-[15px]
                         sm:w-[15px]
                    "
                    strokeWidth={2}
               />
          </a>
     )
}

/*
 * ------------------------------------------------------------
 * Secondary CTA
 * ------------------------------------------------------------
 */
function SecondaryButton({ children }) {
     return (
          <a
               href="#curly-girl-method"
               className="
                    inline-flex
                    min-h-[42px]
                    items-center
                    justify-center
                    rounded-[5px]
                    border-2
                    border-[#00d5fd]
                    bg-transparent
                    px-[18px]
                    py-[10px]
                    text-[12px]
                    font-semibold
                    text-[#00d5fd]
                    transition-all
                    duration-300
                    hover:bg-[#00d5fd]
                    hover:text-white

                    sm:min-h-[46px]
                    sm:px-[20px]
                    sm:text-[13px]

                    lg:min-h-[48px]
                    lg:px-[24px]
                    lg:text-[14px]
               "
               style={{
                    fontFamily: 'var(--font-ui)',
               }}
          >
               {children}
          </a>
     )
}

/*
 * ------------------------------------------------------------
 * Brand Intro Section
 * ------------------------------------------------------------
 */
function BrandIntroSection() {
     const reduceMotion = useReducedMotion()

     const initial = reduceMotion ? false : 'hidden'

     return (
          <section
               className="
                    relative
                    isolate
                    w-full
                    overflow-hidden
                    bg-white
               "
               aria-labelledby="brand-intro-title"
          >
               {/* =================================================
                   TOP WAVE
               ================================================== */}
               <div
                    aria-hidden="true"
                    className="
                         pointer-events-none
                         absolute
                         left-0
                         top-0
                         z-[4]
                         h-[42px]
                         w-full
                         overflow-hidden

                         sm:h-[52px]

                         md:h-[60px]

                         lg:h-[70px]
                    "
               >
                    <div
                         className="
                              absolute
                              -top-[28px]
                              left-[-5%]
                              h-[72px]
                              w-[110%]
                              rounded-[0_0_50%_50%]
                              bg-[#00d5fd]

                              sm:-top-[31px]
                              sm:h-[84px]

                              md:-top-[35px]
                              md:h-[96px]

                              lg:-top-[40px]
                              lg:h-[110px]
                         "
                    />
               </div>

               {/* =================================================
                   PLANT / PALM
                   
                   FIX:
                   - No h-full
                   - No object-cover
                   - Maintains natural aspect ratio
                   - Anchored independently to the right edge
                   - Responsive size and vertical position
               ================================================== */}
               <motion.img
                    src={plant}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    initial={
                         reduceMotion
                              ? false
                              : {
                                   opacity: 0,
                                   x: 30,
                              }
                    }
                    whileInView={{
                         opacity: 0.92,
                         x: 0,
                    }}
                    viewport={{
                         once: true,
                         amount: 0.18,
                    }}
                    transition={{
                         ...transition,
                         delay: 0.08,
                    }}
                    className="
                         pointer-events-none
                         absolute
                         right-[-18px]
                         top-[35px]
                         z-[1]
                         hidden
                         h-auto
                         w-[145px]
                         max-w-none
                         object-contain

                         md:block
                         md:right-[-20px]
                         md:top-[45px]
                         md:w-[180px]

                         lg:right-[-22px]
                         lg:top-[30px]
                         lg:w-[220px]

                         xl:right-[-28px]
                         xl:top-[25px]
                         xl:w-[265px]
                    "
               />

               {/* =================================================
                   CONTENT WRAPPER
               ================================================== */}
               <div
                    className="
                         relative
                         z-[2]
                         mx-auto
                         w-full
                         max-w-[1440px]
                         px-[22px]
                         pb-[55px]
                         pt-[90px]

                         sm:px-[30px]
                         sm:pb-[65px]
                         sm:pt-[105px]

                         md:px-[42px]
                         md:pb-[75px]
                         md:pt-[120px]

                         lg:px-[60px]
                         lg:pb-[90px]
                         lg:pt-[135px]

                         xl:px-[70px]
                         xl:pt-[145px]
                    "
               >
                    <div
                         className="
                              grid
                              grid-cols-1
                              items-center
                              gap-[45px]

                              md:gap-[55px]

                              lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.85fr)]
                              lg:gap-[65px]

                              xl:grid-cols-[minmax(0,1fr)_minmax(470px,0.9fr)]
                              xl:gap-[90px]
                         "
                    >
                         {/* =================================================
                             LEFT — CONTENT
                         ================================================== */}
                         <motion.div
                              variants={reveal}
                              initial={initial}
                              whileInView="visible"
                              viewport={{
                                   once: true,
                                   amount: 0.28,
                              }}
                              transition={transition}
                              className="
                                   relative
                                   z-[3]
                                   flex
                                   min-w-0
                                   flex-col
                                   justify-center
                                   lg:max-w-[690px]
                              "
                         >
                              {/* New Launch */}
                              <p
                                   className="
                                        m-0
                                        mb-[14px]
                                        self-start
                                        font-[var(--font-display)]
                                        text-[18px]
                                        leading-none
                                        text-[#091b3b]
                                        sm:mb-[18px]
                                        sm:text-[21px]
                                        lg:mb-[21px]
                                        lg:text-[24px]
                                   "
                                   style={{
                                        fontFamily: 'var(--font-display)',
                                        transform: 'rotate(-2deg)',
                                   }}
                              >
                                   New Launch
                              </p>

                              {/* Logo */}
                              <div className="mb-[18px] sm:mb-[21px] lg:mb-[24px]">
                                   <img
                                        src={logo2}
                                        alt="HydraCurls"
                                        loading="lazy"
                                        className="
                                             block
                                             h-auto
                                             w-[95px]
                                             object-contain

                                             sm:w-[115px]

                                             md:w-[125px]

                                             lg:w-[145px]
                                        "
                                   />
                              </div>

                              {/* Main text */}
                              <h2
                                   id="brand-intro-title"
                                   className="
                                        m-0
                                        max-w-[720px]
                                        font-[var(--font-display)]
                                        text-[16px]
                                        font-normal
                                        leading-[1.6]
                                        text-[#091b3b]

                                        sm:text-[17px]
                                        sm:leading-[1.65]

                                        md:text-[18px]

                                        lg:text-[19px]
                                        lg:leading-[1.65]

                                        xl:text-[20px]
                                   "
                                   style={{
                                        fontFamily: 'var(--font-display)',
                                   }}
                              >
                                   Revolutionary hair care range specially
                                   designed for Arab curly, coily &amp; wavy
                                   hair. Experience{' '}
                                   <span
                                        className="font-bold text-[#00d5fd]"
                                   >
                                        48-hour hydration
                                   </span>{' '}
                                   with natural ingredients like Hyaluronic
                                   Acid, Coconut &amp; Avocado.
                              </h2>

                              {/* Benefit badges */}
                              <div
                                   className="
                                        mt-[22px]
                                        mb-[28px]
                                        flex
                                        max-w-[700px]
                                        flex-wrap
                                        gap-[8px]

                                        sm:mt-[25px]
                                        sm:mb-[32px]
                                        sm:gap-[9px]

                                        md:mt-[28px]
                                        md:mb-[35px]

                                        lg:mt-[30px]
                                        lg:mb-[38px]
                                        lg:gap-[10px]
                                   "
                              >
                                   <BenefitBadge icon={Check}>
                                        No SLS, Silicones, Parabens
                                   </BenefitBadge>

                                   <BenefitBadge icon={Clock3}>
                                        48-Hour Hydration
                                   </BenefitBadge>

                                   <BenefitBadge icon={List}>
                                        Hair Types 2, 3, 4
                                   </BenefitBadge>
                              </div>

                              {/* CTA buttons */}
                              <div
                                   className="
                                        flex
                                        flex-wrap
                                        gap-[9px]

                                        sm:gap-[11px]

                                        lg:gap-[14px]
                                   "
                              >
                                   <PrimaryButton>
                                        Explore Products
                                   </PrimaryButton>

                                   <SecondaryButton>
                                        Learn Curly Girl Method
                                   </SecondaryButton>
                              </div>
                         </motion.div>

                         {/* =================================================
                             RIGHT — PRODUCT VISUAL
                         ================================================== */}
                         <motion.div
                              initial={
                                   reduceMotion
                                        ? false
                                        : {
                                             opacity: 0,
                                             scale: 0.96,
                                        }
                              }
                              whileInView={{
                                   opacity: 1,
                                   scale: 1,
                              }}
                              viewport={{
                                   once: true,
                                   amount: 0.22,
                              }}
                              transition={{
                                   ...transition,
                                   delay: 0.12,
                              }}
                              className="
                                   relative
                                   flex
                                   min-h-[330px]
                                   items-center
                                   justify-center

                                   sm:min-h-[400px]

                                   md:min-h-[450px]

                                   lg:min-h-[500px]

                                   xl:min-h-[540px]
                              "
                         >
                              {/* Water splash */}
                              <img
                                   src={waterSplash}
                                   alt=""
                                   aria-hidden="true"
                                   loading="lazy"
                                   className="
                                        pointer-events-none
                                        absolute
                                        left-1/2
                                        top-1/2
                                        z-[1]
                                        w-[260px]
                                        max-w-none
                                        -translate-x-1/2
                                        -translate-y-1/2

                                        sm:w-[320px]

                                        md:w-[370px]

                                        lg:w-[400px]

                                        xl:w-[450px]
                                   "
                              />

                              {/* Shampoo */}
                              <motion.img
                                   src={shampoo}
                                   alt="HydraCurls Hydrating Shampoo"
                                   loading="lazy"
                                   className="
                                        relative
                                        z-[2]
                                        block
                                        h-auto
                                        w-[145px]
                                        drop-shadow-[0_18px_22px_rgba(0,0,0,0.16)]

                                        sm:w-[175px]

                                        md:w-[205px]

                                        lg:w-[230px]

                                        xl:w-[250px]
                                   "
                                   animate={
                                        reduceMotion
                                             ? undefined
                                             : {
                                                  y: [0, -5, 0],
                                             }
                                   }
                                   transition={
                                        reduceMotion
                                             ? undefined
                                             : {
                                                  duration: 4,
                                                  repeat: Infinity,
                                                  ease: 'easeInOut',
                                             }
                                   }
                                   style={{
                                        transform: 'rotate(15deg)',
                                   }}
                              />
                         </motion.div>
                    </div>
               </div>

               {/* =================================================
                   BOTTOM WHITE TRANSITION
               ================================================== */}
               <div
                    aria-hidden="true"
                    className="
                         pointer-events-none
                         absolute
                         bottom-[-1px]
                         left-[-5%]
                         z-[5]
                         h-[38px]
                         w-[110%]
                         rounded-[50%_50%_0_0]
                         bg-white

                         sm:h-[48px]

                         md:h-[58px]

                         lg:h-[70px]
                    "
               />
          </section>
     )
}

export default BrandIntroSection