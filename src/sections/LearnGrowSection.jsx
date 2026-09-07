import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import { cloudinaryAssets } from '../config/cloudinary'

const guides = [
     {
          image: cloudinaryAssets.curlyHairOrange,
          panelColor: '#5365BB',
          imageSide: 'left',
     },
     {
          image: cloudinaryAssets.curlyHairPink,
          panelColor: '#76468A',
          imageSide: 'right',
     },
     {
          image: cloudinaryAssets.wavyHairType,
          panelColor: '#009ABA',
          imageSide: 'left',
     },
]

/* ---------------------------------------------------------
   Reusable underline
--------------------------------------------------------- */
function Underline({ light = false, className = '' }) {
     return (
          <span
               aria-hidden="true"
               className={`
                    block
                    shrink-0
                    h-[5px]
                    w-[96px]

                    sm:h-[6px]
                    sm:w-[108px]

                    md:h-[6px]
                    md:w-[115px]

                    lg:h-[7px]
                    lg:w-[133px]

                    ${light ? 'bg-white' : 'bg-[#040c1e]'}
                    ${className}
               `}
          />
     )
}

/* ---------------------------------------------------------
   Guide content
--------------------------------------------------------- */
function GuideContent({ imageSide }) {
     return (
          <div
               className={`
                    z-10
                    flex
                    w-full
                    max-w-[493px]
                    flex-col

                    px-[24px]

                    sm:px-[30px]

                    md:px-0
                    md:max-w-[340px]

                    lg:max-w-[493px]

                    ${imageSide === 'left'
                         ? `
                              md:ml-[clamp(28px,6.8%,65px)]
                           `
                         : `
                              md:ml-[clamp(28px,8.4%,81px)]
                           `
                    }
               `}
          >

               <p
                    className="
                                   m-0
                                   font-[var(--font-display)]
                                   leading-none
                                   tracking-[1.5px]
                                   text-black

                                   text-[14px]

                                   sm:text-[15px]
                                   sm:tracking-[1.8px]

                                   md:text-[17px]

                                   lg:text-[18px]
                                   lg:tracking-[2.4px]
                              "
                    style={{
                         fontFamily: 'var(--font-display)',
                         textShadow: '0 5px 30px rgba(4,12,30,.35)',
                         fontWeight: 700,
                    }}
               >
                    Experts Choice
               </p>
               {/* Title */}
               <h3
                    className="
                         m-0
                         font-[var(--font-display)]
                         font-normal
                         tracking-[0.01em]
                         text-white

                         text-[20px]
                         leading-[1.2]

                         sm:text-[22px]

                         md:text-[22px]

                         lg:text-[24px]
                    "
               >
                    Curly Girl Method Guide
               </h3>

               {/* Underline stays attached to title */}
               <Underline
                    light
                    className="
                         mt-[10px]

                         sm:mt-[11px]

                         md:mt-[12px]

                         lg:mt-[13px]
                    "
               />

               {/* Description */}
               <p
                    className="
                         m-0
                         font-[var(--font-gontham)]
                         text-white/85

                         mt-[14px]
                         text-[14px]
                         leading-[21px]

                         sm:mt-[16px]
                         sm:text-[15px]
                         sm:leading-[23px]

                         md:mt-[17px]
                         md:text-[15px]
                         md:leading-[23px]

                         lg:mt-[17px]
                         lg:text-[16px]
                         lg:leading-[24px]
                    "
               >
                    Complete guide to the CGM with moodboards, tips, and
                    step-by-step instructions designed specifically for Arab hair.
               </p>

               {/* CTA */}
               <a
                    href="#curly-girl-method"
                    className="
                         mt-[18px]
                         inline-flex
                         w-fit
                         items-center
                         gap-[8px]
                         font-[var(--font-gontham)]
                         leading-none
                         text-white
                         transition-opacity
                         duration-300
                         hover:opacity-75

                         text-[15px]

                         sm:mt-[19px]
                         sm:text-[17px]
                         sm:gap-[9px]

                         md:mt-[19px]
                         md:text-[18px]

                         lg:mt-[20px]
                         lg:text-[20px]
                         lg:gap-[12px]
                    "
               >
                    <span>EXPLORE NOW</span>

                    <ArrowRight
                         aria-hidden="true"
                         strokeWidth={1.8}
                         className="
                              h-[18px]
                              w-[18px]

                              sm:h-[20px]
                              sm:w-[20px]

                              lg:h-[24px]
                              lg:w-[24px]
                         "
                    />
               </a>
          </div>
     )
}

/* ---------------------------------------------------------
   Single guide card
--------------------------------------------------------- */
function GuideCard({ guide, index }) {
     const reduceMotion = useReducedMotion()

     return (
          <motion.article
               initial={
                    reduceMotion
                         ? false
                         : {
                              opacity: 0,
                              y: 20,
                         }
               }
               whileInView={{
                    opacity: 1,
                    y: 0,
               }}
               viewport={{
                    once: true,
                    amount: 0.12,
               }}
               transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
               }}
               className="
                    relative
                    w-full
                    overflow-hidden
               "
          >
               {/* =====================================================
                   DESKTOP / TABLET
               ====================================================== */}
               <div
                    className="
                         relative
                         hidden
                         w-full

                         md:block
                         md:h-[420px]

                         lg:h-[520px]

                         xl:h-[632px]
                    "
               >
                    {/* IMAGE */}
                    <div
                         className={`
                              absolute
                              inset-y-0
                              w-1/2

                              ${guide.imageSide === 'left'
                                   ? 'left-0'
                                   : 'right-0'
                              }
                         `}
                    >
                         <img
                              src={guide.image}
                              alt=""
                              loading="lazy"
                              className="
                                   block
                                   h-full
                                   w-full
                                   object-cover
                              "
                         />
                    </div>

                    {/* COLOR PANEL */}
                    <div
                         className={`
                              absolute
                              inset-y-0
                              flex
                              w-1/2
                              flex-col
                              justify-center
                              overflow-hidden

                              ${guide.imageSide === 'left'
                                   ? 'right-0'
                                   : 'left-0'
                              }
                         `}
                         style={{
                              backgroundColor: guide.panelColor,
                         }}
                    >
                         {/* subtle highlight */}
                         <div
                              aria-hidden="true"
                              className="
                                   pointer-events-none
                                   absolute
                                   inset-0
                                   bg-white/[0.025]
                              "
                         />

                         {/* Responsive vertical positioning */}
                         <div
                              className="
                                   relative
                                   w-full

                                   md:-translate-y-[2%]

                                   lg:-translate-y-[3%]

                                   xl:-translate-y-[4%]
                              "
                         >
                              <GuideContent imageSide={guide.imageSide} />
                         </div>
                    </div>
               </div>

               {/* =====================================================
                   MOBILE
               ====================================================== */}
               <div
                    className="
                         flex
                         flex-col
                         md:hidden
                    "
               >
                    {/* IMAGE */}
                    <div
                         className="
                              relative
                              h-[280px]
                              w-full
                              overflow-hidden

                              xs:h-[300px]

                              sm:h-[360px]
                         "
                    >
                         <img
                              src={guide.image}
                              alt=""
                              loading="lazy"
                              className="
                                   block
                                   h-full
                                   w-full
                                   object-cover
                              "
                         />
                    </div>

                    {/* COLOR PANEL */}
                    <div
                         className="
                              relative
                              flex
                              min-h-[320px]
                              w-full
                              items-center
                              overflow-hidden

                              sm:min-h-[350px]
                         "
                         style={{
                              backgroundColor: guide.panelColor,
                         }}
                    >
                         {/* subtle highlight */}
                         <div
                              aria-hidden="true"
                              className="
                                   pointer-events-none
                                   absolute
                                   inset-0
                                   bg-white/[0.025]
                              "
                         />

                         {/* Mobile content stays vertically centered */}
                         <GuideContent imageSide={guide.imageSide} />
                    </div>
               </div>
          </motion.article>
     )
}

/* ---------------------------------------------------------
   Main section
--------------------------------------------------------- */
export default function LearnGrowSection() {
     const reduceMotion = useReducedMotion()

     return (
          <section
               id="curly-girl-method"
               className="
                    relative
                    w-full
                    overflow-hidden
                    bg-[#f3fdff]
               "
               aria-labelledby="learn-grow-title"
          >
               <div className="relative z-[1] w-full">
                    {/* =================================================
                        SECTION HEADER
                    ================================================== */}
                    <motion.header
                         initial={
                              reduceMotion
                                   ? false
                                   : {
                                        opacity: 0,
                                        y: 18,
                                   }
                         }
                         whileInView={{
                              opacity: 1,
                              y: 0,
                         }}
                         viewport={{
                              once: true,
                              amount: 0.25,
                         }}
                         transition={{
                              duration: 0.65,
                              ease: [0.22, 1, 0.36, 1],
                         }}
                         className="
                              mx-auto
                              flex
                              w-full
                              flex-col
                              items-center
                              px-[20px]
                              pt-[70px]
                              text-center

                              sm:px-[28px]
                              sm:pt-[85px]

                              md:px-[40px]
                              md:pt-[105px]

                              lg:px-0
                              lg:pt-[143px]
                         "
                    >
                         {/* EYEBROW */}
                         <p
                              className="
                                   m-0
                                   font-[var(--font-display)]
                                   leading-none
                                   tracking-[1.5px]
                                   text-black

                                   text-[17px]

                                   sm:text-[19px]
                                   sm:tracking-[1.8px]

                                   md:text-[21px]

                                   lg:text-[24px]
                                   lg:tracking-[2.4px]
                              "
                              style={{
                                   fontFamily: 'var(--font-display)',
                                   textShadow: '0 5px 30px rgba(4,12,30,.35)',
                                   fontWeight: 700,
                              }}
                         >
                              Learn &amp; Grow
                         </p>

                         {/* UNDERLINE */}
                         <Underline
                              className="
                                   mt-[20px]

                                   sm:mt-[23px]

                                   md:mt-[26px]

                                   lg:mt-[30px]
                              "
                         />

                         {/* MAIN HEADING */}
                         <h2
                              id="learn-grow-title"
                              className="
                                   m-0
                                   max-w-[900px]
                                   font-[var(--font-gontham)]
                                   font-bold
                                   tracking-[-0.02em]
                                   text-[#040c1e]

                                   mt-[18px]
                                   text-[30px]
                                   leading-[1.08]

                                   sm:mt-[20px]
                                   sm:text-[36px]

                                   md:mt-[22px]
                                   md:text-[44px]

                                   lg:mt-[24px]
                                   lg:text-[54px]
                              "
                         >
                              Your Curly Hair
                              <br />
                              <span className="text-[#00d5fd]">
                                   Journey Starts Here
                              </span>
                         </h2>

                         {/* DESCRIPTION */}
                         <p
                              className="
                                   m-0
                                   max-w-[650px]
                                   font-[var(--font-display)]
                                   text-[#737373]

                                   mt-[22px]
                                   text-[16px]
                                   leading-[1.45]

                                   sm:mt-[26px]
                                   sm:text-[18px]

                                   md:mt-[30px]
                                   md:max-w-[700px]
                                   md:text-[20px]

                                   lg:mt-[39px]
                                   lg:max-w-[722px]
                                   lg:text-[24px]
                                   lg:leading-normal
                              "
                         >
                              Access expert guides, styling tips, and a
                              community of women who celebrate their natural
                              curls.
                         </p>
                    </motion.header>

                    {/* =================================================
                        GUIDE CARDS
                    ================================================== */}
                    <div
                         className="
                              mt-[48px]
                              w-full

                              sm:mt-[58px]

                              md:mt-[70px]

                              lg:mt-[93px]
                         "
                    >
                         {guides.map((guide, index) => (
                              <GuideCard
                                   key={index}
                                   guide={guide}
                                   index={index}
                              />
                         ))}
                    </div>
               </div>
          </section>
     )
}