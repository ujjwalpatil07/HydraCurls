import { motion, useReducedMotion } from 'framer-motion'
import { cloudinaryVideos } from '../config/cloudinary.js'

/*
 * Reuse the existing four Cloudinary testimonial videos
 * to maintain the 8-tile Figma mosaic rhythm.
 */
const videos = [
     cloudinaryVideos.testimonialGoodHair,
     cloudinaryVideos.testimonialFineLong,
     cloudinaryVideos.testimonialCompliment,
     cloudinaryVideos.testimonialGoodWash,
     cloudinaryVideos.testimonialGoodWash,
     cloudinaryVideos.testimonialCompliment,
     cloudinaryVideos.testimonialFineLong,
     cloudinaryVideos.testimonialGoodHair,
]

/*
 * CSS underline
 */
function HeadingUnderline() {
     return (
          <div
               aria-hidden="true"
               className="
                    mx-auto
                    mt-[17px]
                    h-[6px]
                    w-[150px]
                    bg-[#040c1e]

                    sm:mt-[20px]
                    sm:w-[175px]

                    lg:mt-[26px]
                    lg:h-[7px]
                    lg:w-[203px]
               "
          />
     )
}

/*
 * Individual testimonial video tile
 */
function TestimonialTile({ video, index }) {
     const shouldReduceMotion = useReducedMotion()

     return (
          <motion.div
               initial={
                    shouldReduceMotion
                         ? false
                         : {
                              opacity: 0,
                              scale: 0.985,
                         }
               }
               whileInView={{
                    opacity: 1,
                    scale: 1,
               }}
               viewport={{
                    once: true,
                    amount: 0.08,
               }}
               transition={{
                    duration: 0.65,
                    delay: shouldReduceMotion
                         ? 0
                         : index * 0.045,
                    ease: [0.22, 1, 0.36, 1],
               }}
               className="
                    group
                    relative
                    aspect-[480/509]
                    min-w-0
                    overflow-hidden
                    bg-[#091b3b]
               "
          >
               <motion.video
                    src={video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="
                         absolute
                         inset-0
                         h-full
                         w-full
                         object-cover
                    "
                    aria-label={`Curly hair testimonial ${index + 1}`}
                    whileHover={
                         shouldReduceMotion
                              ? undefined
                              : {
                                   scale: 1.035,
                              }
                    }
                    transition={{
                         duration: 0.55,
                         ease: 'easeOut',
                    }}
               />

               {/* Very subtle bottom overlay */}
               <div
                    aria-hidden="true"
                    className="
                         pointer-events-none
                         absolute
                         inset-x-0
                         bottom-0
                         h-[30%]
                         bg-gradient-to-t
                         from-[#040c1e]/20
                         to-transparent
                    "
               />
          </motion.div>
     )
}

function ExpertsSection() {
     const shouldReduceMotion = useReducedMotion()

     return (
          <section
               id="experts"
               className="
                    relative
                    w-full
                    overflow-hidden
                    bg-[#F3FDFF]
               "
               aria-labelledby="experts-title"
          >

               {/* =====================================================
                   CSS DECORATIVE ELEMENTS
               ====================================================== */}

               {/* Left upper decoration */}
               <motion.div
                    aria-hidden="true"
                    initial={
                         shouldReduceMotion
                              ? false
                              : {
                                   opacity: 0,
                                   x: -25,
                              }
                    }
                    whileInView={{
                         opacity: 0.16,
                         x: 0,
                    }}
                    viewport={{
                         once: true,
                    }}
                    transition={{
                         duration: 0.8,
                         ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                         pointer-events-none
                         absolute
                         -left-[180px]
                         top-[120px]
                         hidden
                         h-[460px]
                         w-[460px]
                         rounded-full
                         border-[28px]
                         border-[#00d5fd]
                         sm:block
                         lg:-left-[140px]
                         lg:top-[105px]
                         lg:h-[560px]
                         lg:w-[560px]
                    "
               />

               {/* Left inner ring */}
               <div
                    aria-hidden="true"
                    className="
                         pointer-events-none
                         absolute
                         -left-[75px]
                         top-[225px]
                         hidden
                         h-[270px]
                         w-[270px]
                         rounded-full
                         border-[12px]
                         border-[#76468A]/10
                         sm:block
                         lg:-left-[55px]
                         lg:top-[240px]
                         lg:h-[330px]
                         lg:w-[330px]
                    "
               />

               {/* Right upper decoration */}
               <motion.div
                    aria-hidden="true"
                    initial={
                         shouldReduceMotion
                              ? false
                              : {
                                   opacity: 0,
                                   x: 25,
                              }
                    }
                    whileInView={{
                         opacity: 0.14,
                         x: 0,
                    }}
                    viewport={{
                         once: true,
                    }}
                    transition={{
                         duration: 0.8,
                         delay: 0.05,
                         ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                         pointer-events-none
                         absolute
                         -right-[180px]
                         top-[135px]
                         hidden
                         h-[480px]
                         w-[480px]
                         rounded-full
                         border-[26px]
                         border-[#76468A]
                         sm:block
                         lg:-right-[150px]
                         lg:top-[105px]
                         lg:h-[580px]
                         lg:w-[580px]
                    "
               />

               {/* Right inner ring */}
               <div
                    aria-hidden="true"
                    className="
                         pointer-events-none
                         absolute
                         -right-[65px]
                         top-[255px]
                         hidden
                         h-[275px]
                         w-[275px]
                         rounded-full
                         border-[12px]
                         border-[#00d5fd]/10
                         sm:block
                         lg:-right-[40px]
                         lg:top-[235px]
                         lg:h-[340px]
                         lg:w-[340px]
                    "
               />

               {/* Lower left decoration */}
               <div
                    aria-hidden="true"
                    className="
                         pointer-events-none
                         absolute
                         bottom-[180px]
                         -left-[120px]
                         hidden
                         h-[360px]
                         w-[360px]
                         rounded-full
                         border-[22px]
                         border-[#009ABA]/10
                         lg:block
                    "
               />

               {/* Lower right decoration */}
               <div
                    aria-hidden="true"
                    className="
                         pointer-events-none
                         absolute
                         bottom-[120px]
                         -right-[120px]
                         hidden
                         h-[390px]
                         w-[390px]
                         rounded-full
                         border-[22px]
                         border-[#76468A]/10
                         lg:block
                    "
               />

               {/* =====================================================
                   HEADER
               ====================================================== */}

               <div
                    className="
                         relative
                         z-[2]
                         flex
                         w-full
                         flex-col
                         items-center
                         px-5
                         text-center

                         sm:px-8
                    "
                    style={{
                         paddingTop:
                              'clamp(150px, 17vw, 245px)',
                         paddingBottom:
                              'clamp(48px, 5vw, 95px)',
                    }}
               >
                    <motion.div
                         initial={
                              shouldReduceMotion
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
                              amount: 0.25,
                         }}
                         transition={{
                              duration: 0.7,
                              ease: [0.22, 1, 0.36, 1],
                         }}
                    >
                         {/* Eyebrow */}
                         <p
                              className="
                                   m-0
                                   font-[var(--font-display)]
                                   text-[18px]
                                   leading-normal
                                   tracking-[2.4px]

                                   sm:text-[21px]

                                   lg:text-[24px]
                              "
                              style={{
                                   fontFamily: 'var(--font-display)',
                                   textShadow: '0 5px 30px rgba(4,12,30,.35)',
                                   fontWeight: 700,
                              }}

                         >
                              Influencer Approved
                         </p>

                         {/* Underline */}
                         <HeadingUnderline />

                         {/* Heading */}
                         <h2
                              id="experts-title"
                              className="
                                   m-0
                                   mt-[22px]
                                   font-[var(--font-gontham)]
                                   text-[38px]
                                   font-bold
                                   leading-[1.03]
                                   tracking-[-0.025em]
                                   text-[#040c1e]

                                   sm:text-[46px]

                                   lg:text-[54px]
                              "
                         >
                              See What The
                              <br />
                              <span className="text-[#00d5fd]">
                                   Experts Are Saying
                              </span>
                         </h2>
                    </motion.div>
               </div>

               {/* =====================================================
                   TESTIMONIAL MOSAIC
               ====================================================== */}

               <div className="relative z-[2] w-full">
                    <div
                         className="
                              grid
                              w-full
                              grid-cols-1

                              sm:grid-cols-2

                              lg:grid-cols-4
                         "
                    >
                         {videos.map((video, index) => (
                              <TestimonialTile
                                   key={`${video}-${index}`}
                                   video={video}
                                   index={index}
                              />
                         ))}
                    </div>
               </div>

               {/* =====================================================
                   BOTTOM TRANSITION
               ====================================================== */}

               <div
                    className="
                         relative
                         z-[1]
                         h-[110px]
                         w-full

                         sm:h-[150px]

                         lg:h-[220px]
                    "
               >
                    {/* soft transition into the next section */}
                    <div
                         aria-hidden="true"
                         className="
                              absolute
                              bottom-0
                              left-0
                              h-[65px]
                              w-full
                              rounded-[50%_50%_0_0]
                              bg-[#f3fdff]

                              sm:h-[85px]

                              lg:h-[120px]
                         "
                    />
               </div>
          </section>
     )
}

export default ExpertsSection