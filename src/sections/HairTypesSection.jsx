import { motion, useReducedMotion } from 'framer-motion'

import { cloudinaryAssets } from '../config/cloudinary.js'

const hairTypes = [
     {
          type: 'Type 2',
          name: 'Wavy Hair',
          image: cloudinaryAssets.curlyWomanPortrait,
          description:
               'Loose waves with slight bend, can be fine to coarse texture',
          characteristics: [
               'S shaped pattern',
               'Light waves',
               'Can be frizz prone',
          ],
     },
     {
          type: 'Type 3',
          name: 'Curly Hair',
          image: cloudinaryAssets.curlyHairType,
          description:
               'Defined curls with natural volume and a tendency toward dryness',
          characteristics: [
               'Defined curl pattern',
               'Natural volume',
               'Needs moisture',
          ],
     },
     {
          type: 'Type 4',
          name: 'Coily Hair',
          image: cloudinaryAssets.curlyHairTurquoise,
          description:
               'Tightly coiled strands that need intensive moisture and gentle care',
          characteristics: [
               'Tight curl pattern',
               'High shrinkage',
               'Moisture focused',
          ],
     },
]

function HairTypesSection() {
     const reduceMotion = useReducedMotion()

     const transition = {
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
     }

     return (
          <section
               id="hair-types"
               className="relative overflow-hidden bg-[#f3fdff] text-black"
               style={{
                    padding:
                         'clamp(80px,9vw,135px) clamp(20px,6vw,100px) clamp(80px,9vw,125px)',
               }}
               aria-labelledby="hair-types-title"
          >
               {/* Decorative background */}
               <div
                    className="pointer-events-none absolute left-[-180px] top-[100px] h-[400px] w-[400px] rounded-full blur-3xl"
                    style={{
                         background:
                              'radial-gradient(circle, rgba(0,213,253,.14), transparent 70%)',
                    }}
                    aria-hidden="true"
               />

               <div
                    className="pointer-events-none absolute right-[-180px] bottom-[80px] h-[400px] w-[400px] rounded-full blur-3xl"
                    style={{
                         background:
                              'radial-gradient(circle, rgba(118,70,138,.12), transparent 70%)',
                    }}
                    aria-hidden="true"
               />

               {/* Header */}
               <motion.header
                    className="relative z-[1] mx-auto mb-[clamp(45px,6vw,75px)] max-w-[760px] text-center"
                    initial={
                         reduceMotion
                              ? false
                              : { opacity: 0, y: 24 }
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
               >
                    <p
                         className="m-0 mb-[14px] text-[clamp(.9rem,1.3vw,1.1rem)]"
                         style={{
                              fontFamily: 'var(--font-display)',
                              textShadow: '0 5px 30px rgba(4,12,30,.35)',
                              fontWeight: 700,
                         }}
                    >
                         Designed for You
                    </p>

                    <h2
                         id="hair-types-title"
                         className="m-0 font-bold leading-[.98] tracking-[-.045em]"
                         style={{
                              fontFamily: 'var(--font-gontham)',
                              fontSize: 'clamp(2.3rem,4.2vw,4.6rem)',
                         }}
                    >
                         Perfect for Arab
                         <br />
                         <span className="text-[#00cbed]">
                              Curly, Coily & Wavy Hair
                         </span>
                    </h2>

                    <p
                         className="mx-auto mt-[20px] max-w-[650px] text-[clamp(.88rem,1.15vw,1rem)] leading-[1.55] text-[#737373]"
                         style={{
                              fontFamily: 'var(--font-gontham)',
                         }}
                    >
                         Our range is specifically formulated to meet the
                         unique needs of Arab hair textures, providing
                         targeted care for types 2, 3, and 4.
                    </p>
               </motion.header>

               {/* Hair Type Cards */}
               <div className="relative z-[1] mx-auto grid max-w-[1350px] grid-cols-1 gap-5 md:grid-cols-3">
                    {hairTypes.map((hair, index) => (
                         <motion.article
                              key={hair.type}
                              className="group relative min-h-[470px] overflow-hidden rounded-[18px]"
                              initial={
                                   reduceMotion
                                        ? false
                                        : {
                                             opacity: 0,
                                             y: 28,
                                        }
                              }
                              whileInView={{
                                   opacity: 1,
                                   y: 0,
                              }}
                              viewport={{
                                   once: true,
                                   amount: 0.14,
                              }}
                              transition={{
                                   ...transition,
                                   delay: index * 0.1,
                              }}
                         >
                              {/* Hair image */}
                              <img
                                   src={hair.image}
                                   alt={`${hair.name} - ${hair.type}`}
                                   loading="lazy"
                                   className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                              />

                              {/* Image overlay */}
                              <div
                                   className="absolute inset-0"
                                   style={{
                                        background:
                                             'linear-gradient(180deg, rgba(4,12,30,.03) 25%, rgba(4,12,30,.18) 48%, rgba(4,12,30,.88) 100%)',
                                   }}
                              />

                              {/* Type badge */}
                              <div
                                   className="absolute left-5 top-5 rounded-full px-4 py-2 text-[.72rem] font-bold uppercase tracking-[.12em]"
                                   style={{
                                        background:
                                             'rgba(255,255,255,.88)',
                                        color: '#091b3b',
                                        fontFamily:
                                             'var(--font-gontham)',
                                   }}
                              >
                                   {hair.type}
                              </div>

                              {/* Content */}
                              <div className="absolute inset-x-0 bottom-0 z-[2] p-[28px]">
                                   <p
                                        className="m-0 mb-[7px] text-[.78rem] font-bold uppercase tracking-[.14em] text-[#00d5fd]"
                                        style={{
                                             fontFamily:
                                                  'var(--font-gontham)',
                                        }}
                                   >
                                        Hair Type
                                   </p>

                                   <h3
                                        className="m-0 text-[clamp(1.5rem,2vw,2rem)] font-bold text-white"
                                        style={{
                                             fontFamily:
                                                  'var(--font-gontham)',
                                        }}
                                   >
                                        {hair.name}
                                   </h3>

                                   <p
                                        className="mt-[12px] max-w-[390px] text-[.86rem] leading-[1.5] text-white/80"
                                        style={{
                                             fontFamily:
                                                  'var(--font-gontham)',
                                        }}
                                   >
                                        {hair.description}
                                   </p>

                                   {/* Characteristics */}
                                   <div className="mt-[20px] border-t border-white/25 pt-[16px]">
                                        <p
                                             className="m-0 mb-[9px] text-[.68rem] font-bold uppercase tracking-[.14em] text-white/65"
                                             style={{
                                                  fontFamily:
                                                       'var(--font-gontham)',
                                             }}
                                        >
                                             Characteristics
                                        </p>

                                        <ul className="m-0 flex list-none flex-wrap gap-x-4 gap-y-2 p-0">
                                             {hair.characteristics.map(
                                                  (item) => (
                                                       <li
                                                            key={item}
                                                            className="text-[.76rem] text-white/90"
                                                            style={{
                                                                 fontFamily:
                                                                      'var(--font-gontham)',
                                                            }}
                                                       >
                                                            <span className="mr-[6px] text-[#00d5fd]">
                                                                 ✓
                                                            </span>
                                                            {item}
                                                       </li>
                                                  )
                                             )}
                                        </ul>
                                   </div>
                              </div>
                         </motion.article>
                    ))}
               </div>

               {/* Bottom message */}
               <motion.div
                    className="relative z-[1] mx-auto mt-[clamp(45px,6vw,70px)] max-w-[720px] text-center"
                    initial={
                         reduceMotion
                              ? false
                              : { opacity: 0, y: 20 }
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
                         ...transition,
                         delay: 0.15,
                    }}
               >
                    <p
                         className="m-0 text-[clamp(1.3rem,2vw,1.8rem)] font-bold"
                         style={{
                              fontFamily: 'var(--font-gontham)',
                         }}
                    >
                         Your curls deserve care made{' '}
                         <span className="text-[#00cbed]">
                              just for them.
                         </span>
                    </p>
               </motion.div>

               {/* Bottom wave */}
               <div
                    className="pointer-events-none absolute bottom-[-1px] left-0 h-[75px] w-full"
                    aria-hidden="true"
               >
                    <svg
                         className="block h-full w-full"
                         viewBox="0 0 1440 100"
                         preserveAspectRatio="none"
                         xmlns="http://www.w3.org/2000/svg"
                    >
                         <path
                              d="
                                   M0 52
                                   C120 25 220 25 340 49
                                   C470 75 570 82 700 55
                                   C820 30 910 25 1030 49
                                   C1150 73 1280 77 1440 40
                                   V100
                                   H0
                                   Z
                              "
                              fill="#daf6ff"
                         />
                    </svg>
               </div>
          </section>
     )
}

export default HairTypesSection