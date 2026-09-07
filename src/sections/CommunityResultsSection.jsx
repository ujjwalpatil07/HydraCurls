import { motion, useReducedMotion } from 'framer-motion'
import { ChevronUp, ChevronDown } from 'lucide-react'

import beforeAfterHair from 'https://res.cloudinary.com/dyahibuzy/image/upload/v1788749100/before-after-hair_rfrhgm.png'
import TestimonialCard from '../components/common/TestimonialCard'

const testimonials = [
     {
          id: 1,
          name: 'Aisha K',
          location: 'Dubai, UAE',
          rating: 5,
          text:
               "I've struggled with frizz my whole life. Hydra Curls is the first range that actually tamed my hair for more than a day! The 48-hour claim is real.",
     },
     {
          id: 2,
          name: 'Maya R',
          location: 'Abu Dhabi, UAE',
          rating: 5,
          text:
               'My curls finally feel soft, defined, and hydrated without feeling heavy. Hydra Curls has completely changed my wash-day routine.',
     },
]

function CommunityResultsSection() {
     const reduceMotion = useReducedMotion()

     const transition = {
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
     }

     return (
          <section
               id="community-results"
               className="
                    relative
                    w-full
                    overflow-hidden
                    bg-[#69C9EE]
                    text-[#040C1E]
               "
               aria-labelledby="community-results-title"
          >
               {/* =====================================================
                   MAIN CONTENT
               ====================================================== */}
               <div
                    className="
                         relative
                         mx-auto
                         flex
                         w-full
                         max-w-[1920px]
                         flex-col

                         lg:flex-row
                    "
               >
                    {/* =================================================
                        LEFT — COMMUNITY RESULT IMAGE
                    ================================================== */}
                    <motion.div
                         initial={
                              reduceMotion
                                   ? false
                                   : {
                                        opacity: 0,
                                        x: -30,
                                   }
                         }
                         whileInView={{
                              opacity: 1,
                              x: 0,
                         }}
                         viewport={{
                              once: true,
                              amount: 0.2,
                         }}
                         transition={transition}
                         className="
                              relative
                              flex
                              min-h-[420px]
                              w-full
                              items-center
                              justify-center
                              overflow-hidden
                              px-[20px]
                              py-[55px]

                              sm:min-h-[520px]
                              sm:px-[40px]
                              sm:py-[70px]

                              md:min-h-[620px]

                              lg:min-h-[993px]
                              lg:w-[56.82%]
                              lg:px-0
                              lg:py-0
                         "
                    >
                         {/* LARGE DECORATIVE CURL */}
                         <div
                              aria-hidden="true"
                              className="
                                   pointer-events-none
                                   absolute
                                   left-[-150px]
                                   top-[-110px]
                                   h-[280px]
                                   w-[280px]
                                   rounded-full
                                   border-[14px]
                                   border-white/10

                                   sm:left-[-140px]
                                   sm:top-[-90px]
                                   sm:h-[360px]
                                   sm:w-[360px]

                                   md:h-[420px]
                                   md:w-[420px]

                                   lg:left-[-150px]
                                   lg:top-[85px]
                                   lg:h-[520px]
                                   lg:w-[520px]
                              "
                         />

                         {/* LOWER DECORATIVE CURL */}
                         <div
                              aria-hidden="true"
                              className="
                                   pointer-events-none
                                   absolute
                                   bottom-[-150px]
                                   left-[6%]
                                   h-[280px]
                                   w-[280px]
                                   rounded-full
                                   border-[14px]
                                   border-white/[0.08]

                                   sm:h-[360px]
                                   sm:w-[360px]

                                   md:h-[400px]
                                   md:w-[400px]

                                   lg:h-[450px]
                                   lg:w-[450px]
                              "
                         />

                         {/* IMAGE */}
                         <motion.div
                              initial={
                                   reduceMotion
                                        ? false
                                        : {
                                             opacity: 0,
                                             scale: 0.97,
                                        }
                              }
                              whileInView={{
                                   opacity: 1,
                                   scale: 1,
                              }}
                              viewport={{
                                   once: true,
                                   amount: 0.2,
                              }}
                              transition={{
                                   ...transition,
                                   delay: 0.12,
                              }}
                              className="
                                   relative
                                   z-[2]
                                   w-full
                                   max-w-[760px]

                                   lg:max-w-[820px]
                                   lg:-ml-[20px]
                              "
                         >
                              <img
                                   src={beforeAfterHair}
                                   alt="Hydra Curls community hair results"
                                   loading="lazy"
                                   className="
                                        block
                                        h-auto
                                        w-full
                                        object-cover
                                   "
                              />
                         </motion.div>
                    </motion.div>

                    {/* =================================================
                        RIGHT — COMMUNITY / TESTIMONIALS
                    ================================================== */}
                    <div
                         className="
                              relative
                              flex
                              w-full
                              flex-col
                              px-[20px]
                              pb-[90px]
                              pt-[55px]

                              sm:px-[32px]
                              sm:pb-[100px]
                              sm:pt-[70px]

                              md:px-[48px]
                              md:pt-[85px]

                              lg:w-[43.18%]
                              lg:px-[40px]
                              lg:pb-[110px]
                              lg:pt-[114px]

                              xl:px-[60px]
                              2xl:px-[80px]
                         "
                    >
                         {/* =================================================
                             HEADING
                         ================================================== */}
                         <div
                              className="
                                   w-full
                                   max-w-[726px]
                              "
                         >
                              {/* EYEBROW */}
                              <motion.p
                                   initial={
                                        reduceMotion
                                             ? false
                                             : {
                                                  opacity: 0,
                                                  y: 15,
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
                                   transition={transition}
                                   className="
                                        m-0
                                        font-[var(--font-display)]
                                        leading-normal

                                        text-[17px]

                                        sm:text-[20px]

                                        md:text-[22px]

                                        lg:text-[24px]
                                   "
                              >
                                   Real Women, Real Results
                              </motion.p>

                              {/* UNDERLINE */}
                              <motion.div
                                   initial={
                                        reduceMotion
                                             ? false
                                             : {
                                                  scaleX: 0,
                                             }
                                   }
                                   whileInView={{
                                        scaleX: 1,
                                   }}
                                   viewport={{
                                        once: true,
                                   }}
                                   transition={{
                                        duration: 0.6,
                                        delay: 0.12,
                                   }}
                                   className="
                                        mt-[16px]
                                        h-[5px]
                                        w-[125px]
                                        origin-left
                                        bg-[#040C1E]

                                        sm:mt-[18px]
                                        sm:w-[160px]

                                        md:w-[180px]

                                        lg:mt-[20px]
                                        lg:h-[7px]
                                        lg:w-[240px]
                                   "
                              />

                              {/* HEADING */}
                              <motion.h2
                                   id="community-results-title"
                                   initial={
                                        reduceMotion
                                             ? false
                                             : {
                                                  opacity: 0,
                                                  x: 25,
                                             }
                                   }
                                   whileInView={{
                                        opacity: 1,
                                        x: 0,
                                   }}
                                   viewport={{
                                        once: true,
                                        amount: 0.25,
                                   }}
                                   transition={{
                                        ...transition,
                                        delay: 0.08,
                                   }}
                                   className="
                                        m-0
                                        mt-[20px]
                                        font-[var(--font-gontham)]
                                        font-bold
                                        tracking-[-0.03em]
                                        text-[#040C1E]

                                        text-[34px]
                                        leading-[1.05]

                                        sm:mt-[22px]
                                        sm:text-[42px]

                                        md:text-[48px]

                                        lg:mt-[24px]
                                        lg:text-[54px]
                                   "
                              >
                                   Hear from Our
                                   <br />
                                   <span className="text-white">
                                        Community
                                   </span>
                              </motion.h2>
                         </div>

                         {/* =================================================
                             TESTIMONIAL CARDS
                         ================================================== */}
                         <div
                              className="
                                   mt-[38px]
                                   grid
                                   w-full
                                   grid-cols-1
                                   gap-[22px]

                                   sm:mt-[45px]
                                   sm:gap-[24px]

                                   lg:mt-[54px]
                                   lg:grid-cols-2
                                   lg:gap-[18px]

                                   xl:gap-[24px]
                         "
                         >
                              {testimonials.map((testimonial, index) => (
                                   <motion.div
                                        key={testimonial.id}
                                        initial={
                                             reduceMotion
                                                  ? false
                                                  : {
                                                       opacity: 0,
                                                       y: 25,
                                                  }
                                        }
                                        whileInView={{
                                             opacity: 1,
                                             y: 0,
                                        }}
                                        viewport={{
                                             once: true,
                                             amount: 0.18,
                                        }}
                                        transition={{
                                             ...transition,
                                             delay: 0.15 + index * 0.1,
                                        }}
                                        className="
                                             min-w-0
                                             w-full
                                        "
                                   >
                                        <TestimonialCard
                                             name={testimonial.name}
                                             location={testimonial.location}
                                             rating={testimonial.rating}
                                             text={testimonial.text}
                                        />
                                   </motion.div>
                              ))}
                         </div>

                         {/* =================================================
                             DESKTOP SIDE NAVIGATION
                         ================================================== */}
                         <div
                              className="
                                   absolute
                                   right-[16px]
                                   top-1/2
                                   hidden
                                   -translate-y-1/2
                                   flex-col
                                   gap-[12px]

                                   xl:flex

                                   2xl:right-[40px]
                         "
                              aria-label="Testimonial navigation"
                         >
                              <button
                                   type="button"
                                   aria-label="Previous testimonial"
                                   className="
                                        flex
                                        h-[52px]
                                        w-[52px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-white
                                        text-[#040C1E]
                                        shadow-[0_8px_25px_rgba(0,0,0,.08)]
                                        transition-transform
                                        duration-200
                                        hover:scale-105

                                        lg:h-[60px]
                                        lg:w-[60px]
                              "
                              >
                                   <ChevronUp
                                        aria-hidden="true"
                                        className="
                                             h-[20px]
                                             w-[20px]

                                             lg:h-[22px]
                                             lg:w-[22px]
                                        "
                                        strokeWidth={2}
                                   />
                              </button>

                              <button
                                   type="button"
                                   aria-label="Next testimonial"
                                   className="
                                        flex
                                        h-[52px]
                                        w-[52px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-white
                                        text-[#040C1E]
                                        shadow-[0_8px_25px_rgba(0,0,0,.08)]
                                        transition-transform
                                        duration-200
                                        hover:scale-105

                                        lg:h-[60px]
                                        lg:w-[60px]
                              "
                              >
                                   <ChevronDown
                                        aria-hidden="true"
                                        className="
                                             h-[20px]
                                             w-[20px]

                                             lg:h-[22px]
                                             lg:w-[22px]
                                        "
                                        strokeWidth={2}
                                   />
                              </button>
                         </div>
                    </div>
               </div>

               {/* =====================================================
                   BOTTOM WAVE
               ====================================================== */}
               <div
                    aria-hidden="true"
                    className="
                         pointer-events-none
                         absolute
                         bottom-[-1px]
                         left-0
                         z-[5]
                         h-[38px]
                         w-full
                         bg-[#F3FDFF]

                         sm:h-[50px]

                         md:h-[65px]

                         lg:h-[90px]
                    "
                    style={{
                         clipPath:
                              'ellipse(75% 100% at 50% 100%)',
                    }}
               />
          </section>
     )
}

export default CommunityResultsSection