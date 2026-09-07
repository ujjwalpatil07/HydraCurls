import { motion, useReducedMotion } from 'framer-motion'

const benefits = [
     [
          'Moisture Attraction',
          'Hyaluronic Acid acts like a magnet for moisture, drawing hydration into each strand.',
     ],
     [
          'Strengthening Seal',
          'Coconut & Avocado oils seal the hair cuticle, preventing moisture loss and adding strength.',
     ],
]

function HydrationSection() {
     const reduceMotion = useReducedMotion()

     const transition = {
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
     }

     return (
          <section
               className="
                    relative
                    w-full
                    overflow-hidden
                    bg-[#daf6ff]
                    text-[#091b3b]
               "
               style={{
                    minHeight: 'clamp(720px, 55vw, 930px)',
                    paddingTop: 'clamp(105px, 10vw, 145px)',
                    paddingRight: 'clamp(20px, 6.25vw, 120px)',
                    paddingBottom: 'clamp(90px, 9vw, 118px)',
                    paddingLeft: 'clamp(20px, 6.25vw, 120px)',
                    '--cyan': '#00d5fd',
               }}
               aria-labelledby="hydration-title"
          >
               {/* =====================================================
                   TOP WAVE
               ====================================================== */}
               <div
                    className="
                         pointer-events-none
                         absolute
                         left-0
                         top-0
                         z-[5]
                         w-full
                         overflow-hidden
                    "
                    style={{
                         height: 'clamp(75px, 10vw, 165px)',
                    }}
                    aria-hidden="true"
               >
                    <svg
                         className="block h-full w-full"
                         viewBox="0 0 1440 180"
                         preserveAspectRatio="none"
                         xmlns="http://www.w3.org/2000/svg"
                    >
                         <path
                              d="
                                   M0 0
                                   H1440
                                   V38

                                   C1375 48 1340 72 1280 70
                                   C1220 68 1195 38 1135 45
                                   C1075 52 1050 88 990 90
                                   C930 92 900 55 840 60
                                   C780 65 755 105 695 108
                                   C635 111 610 70 550 68
                                   C490 66 460 102 400 100
                                   C340 98 315 62 255 60
                                   C195 58 160 90 105 86
                                   C60 83 30 68 0 58

                                   V0
                                   Z
                              "
                              fill="#f3fdff"
                         />
                    </svg>
               </div>

               {/* =====================================================
                   CONTENT
               ====================================================== */}
               <div
                    className="
                         relative
                         z-[2]
                         mx-auto
                         w-full
                         max-w-[1440px]
                    "
               >
                    {/* =================================================
                        HEADER
                    ================================================== */}
                    <motion.header
                         className="
                              mx-auto
                              w-full
                              max-w-[700px]
                              px-[10px]
                              text-center
                         "
                         initial={
                              reduceMotion
                                   ? false
                                   : {
                                        opacity: 0,
                                        y: 22,
                                   }
                         }
                         whileInView={{
                              opacity: 1,
                              y: 0,
                         }}
                         viewport={{
                              once: true,
                              amount: 0.35,
                         }}
                         transition={transition}
                    >
                         <p
                              className="
                                   m-0
                                   mb-[13px]
                                   font-[var(--font-display)]
                                   text-[14px]
                                   leading-[1.3]
                                   text-[#091b3b]

                                   sm:mb-[15px]
                                   sm:text-[16px]

                                   md:text-[17px]

                                   lg:text-[18px]
                              "
                              style={{
                                   fontFamily: 'var(--font-display)',
                                   textShadow: '0 5px 30px rgba(4,12,30,.35)',
                                   fontWeight: 700,
                              }}
                         >
                              The Hydra Curls Promise
                         </p>

                         <h2
                              id="hydration-title"
                              className="
                                   m-0
                                   font-[var(--font-ui)]
                                   text-[clamp(2rem,5vw,3.7rem)]
                                   font-extrabold
                                   leading-[0.98]
                                   tracking-[-0.045em]
                              "
                         >
                              Clinically Proven
                              <br />
                              <span className="text-[#00cbed]">
                                   48-Hour
                              </span>{' '}
                              Hydration
                         </h2>
                    </motion.header>

                    {/* =================================================
                        MAIN GRID
                    ================================================== */}
                    <div
                         className="
                              relative
                              mx-auto
                              mt-[58px]
                              grid
                              w-full
                              max-w-[1150px]
                              grid-cols-1
                              items-center
                              gap-[65px]

                              sm:mt-[72px]
                              sm:gap-[75px]

                              md:mt-[82px]
                              md:gap-[90px]

                              lg:mt-[110px]
                              lg:max-w-[1350px]
                              lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.7fr)]
                              lg:gap-[clamp(70px,10vw,190px)]

                              xl:mt-[128px]
                         "
                    >
                         {/* =================================================
                             LEFT — COPY
                         ================================================== */}
                         <motion.div
                              className="
                                   w-full
                                   max-w-[600px]
                                   justify-self-center

                                   lg:justify-self-start
                              "
                              initial={
                                   reduceMotion
                                        ? false
                                        : {
                                             opacity: 0,
                                             x: -20,
                                        }
                              }
                              whileInView={{
                                   opacity: 1,
                                   x: 0,
                              }}
                              viewport={{
                                   once: true,
                                   amount: 0.24,
                              }}
                              transition={transition}
                         >
                              {/* Intro copy */}
                              <p
                                   className="
                                        m-0
                                        mb-[28px]
                                        font-[var(--font-ui)]
                                        text-[15px]
                                        leading-[1.6]
                                        text-[#506578]

                                        sm:mb-[32px]
                                        sm:text-[16px]

                                        md:mb-[35px]
                                        md:text-[17px]

                                        lg:mb-[37px]
                                        lg:text-[18px]

                                        xl:text-[17px]
                                   "
                              >
                                   Our advanced formula with Hyaluronic Acid
                                   doesn't just coat your hair; it penetrates
                                   the cuticle to lock in moisture from the
                                   inside out, providing continuous hydration
                                   for two full days.
                              </p>

                              {/* Benefit list */}
                              <ul
                                   className="
                                        m-0
                                        list-none
                                        border-l
                                        border-[#00cbed]
                                        p-0
                                        pl-[21px]

                                        sm:pl-[25px]

                                        md:pl-[28px]

                                        lg:pl-[30px]
                                   "
                              >
                                   {benefits.map(([title, copy], index) => (
                                        <li
                                             key={title}
                                             className={`
                                                  relative
                                                  pr-[5px]
                                                  ${index !==
                                                       benefits.length - 1
                                                       ? 'mb-[26px]'
                                                       : ''
                                                  }

                                                  sm:mb-[29px]

                                                  lg:mb-[28px]
                                             `}
                                        >
                                             {/* Diamond */}
                                             <span
                                                  className="
                                                       absolute
                                                       -left-[15px]
                                                       top-[-2px]
                                                       text-[16px]
                                                       leading-none
                                                       text-[#00cbed]

                                                       sm:-left-[18px]
                                                       sm:text-[18px]

                                                       lg:-left-[23px]
                                                       lg:text-[1.18rem]
                                                  "
                                                  aria-hidden="true"
                                             >
                                                  ✧
                                             </span>

                                             {/* Title */}
                                             <strong
                                                  className="
                                                       block
                                                       font-[var(--font-ui)]
                                                       text-[14px]
                                                       leading-[1.35]
                                                       text-[#091b3b]

                                                       sm:text-[15px]

                                                       md:text-[16px]

                                                       lg:text-[1rem]
                                                  "
                                             >
                                                  {title}
                                             </strong>

                                             {/* Description */}
                                             <p
                                                  className="
                                                       m-0
                                                       mt-[6px]
                                                       max-w-[385px]
                                                       font-[var(--font-ui)]
                                                       text-[12px]
                                                       leading-[1.5]
                                                       text-[#586b7b]

                                                       sm:mt-[7px]
                                                       sm:text-[13px]

                                                       md:text-[13.5px]

                                                       lg:mt-[8px]
                                                       lg:text-[.86rem]
                                                  "
                                             >
                                                  {copy}
                                             </p>
                                        </li>
                                   ))}
                              </ul>
                         </motion.div>

                         {/* =================================================
                             RIGHT — STAT
                         ================================================== */}
                         <motion.div
                              className="
                                   relative
                                   flex
                                   w-full
                                   max-w-[300px]
                                   flex-col
                                   items-center
                                   justify-self-center
                                   text-center

                                   lg:max-w-[320px]
                              "
                              initial={
                                   reduceMotion
                                        ? false
                                        : {
                                             opacity: 0,
                                             scale: 0.92,
                                        }
                              }
                              whileInView={{
                                   opacity: 1,
                                   scale: 1,
                              }}
                              viewport={{
                                   once: true,
                                   amount: 0.24,
                              }}
                              transition={{
                                   ...transition,
                                   delay: 0.1,
                              }}
                         >
                              {/* Clock */}
                              <div
                                   className="
                                        mb-[6px]
                                        h-[62px]
                                        w-[62px]

                                        sm:h-[70px]
                                        sm:w-[70px]

                                        md:h-[78px]
                                        md:w-[78px]

                                        lg:mb-[8px]
                                        lg:h-[91px]
                                        lg:w-[91px]
                                   "
                                   aria-hidden="true"
                              >
                                   <svg
                                        className="block h-full w-full"
                                        viewBox="0 0 100 100"
                                        aria-hidden="true"
                                   >
                                        <circle
                                             cx="50"
                                             cy="50"
                                             r="40"
                                             fill="none"
                                             stroke="#00cbed"
                                             strokeWidth="7"
                                        />

                                        <path
                                             d="M50 27v24l14 11"
                                             fill="none"
                                             stroke="#009aba"
                                             strokeLinecap="round"
                                             strokeWidth="6"
                                        />
                                   </svg>
                              </div>

                              {/* 48 */}
                              <p
                                   className="
                                        m-0
                                        font-[var(--font-ui)]
                                        text-[clamp(5.5rem,13vw,10rem)]
                                        font-extrabold
                                        leading-[0.8]
                                        tracking-[-0.1em]
                                   "
                              >
                                   48
                              </p>

                              {/* Hours badge */}
                              <span
                                   className="
                                        relative
                                        mt-[9px]
                                        inline-flex
                                        items-center
                                        rounded-[3px]
                                        bg-[#00cbed]
                                        px-[9px]
                                        py-[6px]
                                        font-[var(--font-ui)]
                                        text-[11px]
                                        font-bold
                                        leading-none
                                        text-[#f3fdff]
                                        shadow-sm
                                   
                                        sm:mt-[10px]
                                        sm:px-[10px]
                                        sm:py-[7px]
                                        sm:text-[12px]

                                        md:text-[13px]

                                        lg:absolute
                                        lg:left-[67%]
                                        lg:top-[112px]
                                        lg:mt-0
                                        lg:px-[10px]
                                        lg:py-[7px]
                                        lg:text-[.76rem]
                                   "
                                   style={{
                                        transform: 'rotate(-9deg)',
                                   }}
                              >
                                   Hours
                              </span>

                              {/* Description */}
                              <p
                                   className="
                                        m-[15px_auto_0]
                                        max-w-[190px]
                                        font-[var(--font-ui)]
                                        text-[12px]
                                        leading-[1.45]
                                        text-[#506578]

                                        sm:mt-[17px]
                                        sm:text-[13px]

                                        md:max-w-[200px]
                                        md:text-[14px]

                                        lg:m-[18px_auto_0]
                                        lg:max-w-[188px]
                                        lg:text-[.88rem]
                                   "
                              >
                                   of continuous curl hydration and frizz
                                   control.
                              </p>
                         </motion.div>
                    </div>
               </div>

               {/* =====================================================
                   BOTTOM WAVE
               ====================================================== */}
               <div
                    className="
                         pointer-events-none
                         absolute
                         bottom-[-1px]
                         left-0
                         z-[5]
                         h-[65px]
                         w-full

                         sm:h-[75px]

                         md:h-[90px]

                         lg:h-[105px]
                    "
                    aria-hidden="true"
               >
                    <svg
                         className="block h-full w-full"
                         viewBox="0 0 1440 130"
                         preserveAspectRatio="none"
                         xmlns="http://www.w3.org/2000/svg"
                    >
                         <path
                              d="
                                   M0 55
                                   C172 90 240 30 420 58
                                   C586 84 687 31 858 53
                                   C1081 81 1196 21 1440 55
                                   V130
                                   H0
                                   V55
                                   Z
                              "
                              fill="#f3fdff"
                         />
                    </svg>
               </div>
          </section>
     )
}

export default HydrationSection