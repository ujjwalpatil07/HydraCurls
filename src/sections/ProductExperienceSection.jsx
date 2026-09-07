import React, { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

import shampoo from 'https://res.cloudinary.com/dyahibuzy/image/upload/v1788749109/shampoo_qtdk53.png'
import conditioner from 'https://res.cloudinary.com/dyahibuzy/image/upload/v1788749099/conditioner_sricpq.png'
import cream from 'https://res.cloudinary.com/dyahibuzy/image/upload/v1788749100/cream_kuy5po.png'
import gel from 'https://res.cloudinary.com/dyahibuzy/image/upload/v1788749103/gel_jzt5tt.png'
import mask from 'https://res.cloudinary.com/dyahibuzy/image/upload/v1788749108/mask_sdemvm.png'

const products = [
     {
          id: 'shampoo',
          image: shampoo,
          name: 'Hydrating Shampoo',
          alt: 'HydraCurls Hydrating Shampoo'
     },
     {
          id: 'conditioner',
          image: conditioner,
          name: 'Hydrating Conditioner',
          alt: 'HydraCurls Hydrating Conditioner'
     },
     {
          id: 'cream',
          image: cream,
          name: 'Defining Cream',
          alt: 'HydraCurls Defining Cream'
     },
     {
          id: 'gel',
          image: gel,
          name: 'Defining Gel',
          alt: 'HydraCurls Defining Gel'
     },
     {
          id: 'mask',
          image: mask,
          name: 'Hydrating Mask',
          alt: 'HydraCurls Hydrating Mask'
     }
]

function ProductExperienceSection() {
     const reduceMotion = useReducedMotion()

     const [activeIndex, setActiveIndex] = useState(0)
     const [direction, setDirection] = useState(1)

     const totalProducts = products.length

     const getNextIndex = (index) => {
          return (index + 1) % totalProducts
     }

     const getPreviousIndex = (index) => {
          return (index - 1 + totalProducts) % totalProducts
     }

     const goToNext = () => {
          setDirection(1)

          setActiveIndex((current) =>
               getNextIndex(current)
          )
     }

     const goToPrevious = () => {
          setDirection(-1)

          setActiveIndex((current) =>
               getPreviousIndex(current)
          )
     }

     const goToProduct = (index) => {
          if (index === activeIndex) return

          let difference = index - activeIndex

          /*
           * Make sure we always choose the shortest
           * direction around the circular product list.
           */
          if (difference > totalProducts / 2) {
               difference -= totalProducts
          }

          if (difference < -totalProducts / 2) {
               difference += totalProducts
          }

          setDirection(difference > 0 ? 1 : -1)
          setActiveIndex(index)
     }

     /*
      * Returns the product's position relative to
      * the currently active product.
      *
      * -1 = left secondary
       0 = primary
       1 = right secondary
      */
     const getRelativePosition = (index) => {
          let difference = index - activeIndex

          if (difference > totalProducts / 2) {
               difference -= totalProducts
          }

          if (difference < -totalProducts / 2) {
               difference += totalProducts
          }

          return difference
     }

     /*
      * Convert relative index into a visual position.
      */
     const getPosition = (index) => {
          const relativePosition = getRelativePosition(index)

          if (relativePosition === 0) {
               return 'center'
          }

          if (relativePosition === -1) {
               return 'left'
          }

          if (relativePosition === 1) {
               return 'right'
          }

          /*
           * Products that are not currently visible
           * stay outside the stage.
           *
           * Their side depends on their actual relative
           * position.
           */
          if (relativePosition < -1) {
               return 'hidden-left'
          }

          return 'hidden-right'
     }

     /*
      * Three main positions:
      *
      * LEFT SECONDARY
      * CENTER PRIMARY
      * RIGHT SECONDARY
      *
      * The products physically move between these
      * positions when the active index changes.
      */
     const productVariants = {
          center: {
               x: 0,
               y: 0,
               scale: 1,
               opacity: 1,
               zIndex: 30
          },

          left: {
               x: 'clamp(-180px, -18vw, -120px)',
               y: 25,
               scale: 0.68,
               opacity: 0.38,
               zIndex: 10
          },

          right: {
               x: 'clamp(120px, 18vw, 180px)',
               y: 25,
               scale: 0.68,
               opacity: 0.42,
               zIndex: 10
          },

          'hidden-left': {
               x: 'clamp(-380px, -40vw, -280px)',
               y: 45,
               scale: 0.55,
               opacity: 0,
               zIndex: 0
          },

          'hidden-right': {
               x: 'clamp(280px, 40vw, 380px)',
               y: 45,
               scale: 0.55,
               opacity: 0,
               zIndex: 0
          }
     }

     const productTransition = reduceMotion
          ? {
               duration: 0
          }
          : {
               type: 'spring',
               stiffness: 160,
               damping: 23,
               mass: 0.85
          }

     const activeProduct = products[activeIndex]

     return (
          <section
               id="product-experience"
               className="relative pt-10 overflow-hidden"
               style={{
                    color: '#f3fdff',
                    minHeight: 'clamp(600px, 80vw, 720px)'
               }}
               aria-labelledby="experience-title"
          >
               {/* =========================================
                   PURPLE BOWL MAIN SHAPE
                   Wavy top edge matching the blue wave
               ========================================== */}

               <svg
                    className="pointer-events-none absolute left-0 top-0 w-full"
                    style={{
                         height: 'clamp(400px, 55vw, 700px)',
                         zIndex: 0
                    }}
                    viewBox="0 0 1440 680"
                    preserveAspectRatio="none"
                    aria-hidden="true"
               >
                    <path
                         d="
               M0 18

               C135 48 275 78 420 76
               C570 74 665 24 810 28
               C955 32 1050 67 1180 64
               C1285 62 1365 48 1440 42

               V185

               C1353 460 1164 620 754 632
               C342 644 83 476 0 185

               Z
          "
                         fill="#76468a"
                    />
               </svg>

               {/* =========================================
                   SECOND PURPLE SHADE
               ========================================== */}

               <svg
                    className="pointer-events-none absolute left-0 w-full "
                    style={{
                         height: 'clamp(420px, 57vw, 720px)',
                         zIndex: 1,
                         top: '-clamp(20px, 3vw, 60px)'
                    }}
                    viewBox="0 0 1440 680"
                    preserveAspectRatio="none"
                    aria-hidden="true"
               >
                    <path
                         d="M0 185C83 476 342 644 754 632C1164 620 1353 460 1440 185V235C1353 510 1164 670 754 682C342 694 83 526 0 235V185Z"
                         fill="#6b3d7e"
                         opacity="0.4"
                    />
               </svg>

               {/* =========================================
                   MAIN CONTENT
               ========================================== */}

               <div
                    className="relative mx-auto w-full max-w-[1220px]"
                    style={{
                         height: 'clamp(450px, 60vw, 650px)',
                         zIndex: 1,
                         paddingTop: 'clamp(60px, 8vw, 110px)'
                    }}
               >
                    {/* =====================================
                        PRODUCT CAROUSEL STAGE
                    ====================================== */}

                    <div
                         className="absolute left-1/2 top-0 h-[clamp(320px,42vw,500px)] w-full -translate-x-1/2"
                         style={{
                              overflow: 'visible'
                         }}
                    >
                         {products.map((product, index) => {
                              const position = getPosition(index)

                              return (
                                   <motion.div
                                        key={product.id}
                                        className="absolute left-1/2 top-0 flex h-[clamp(220px,28vw,390px)] w-[clamp(140px,20vw,270px)] -translate-x-1/2 items-center justify-center"
                                        variants={productVariants}
                                        initial={false}
                                        animate={position}
                                        transition={productTransition}
                                        style={{
                                             pointerEvents:
                                                  position === 'center'
                                                       ? 'auto'
                                                       : 'none'
                                        }}
                                   >
                                        <img
                                             src={product.image}
                                             alt={product.alt}
                                             draggable="false"
                                             loading={
                                                  position === 'center'
                                                       ? 'eager'
                                                       : 'lazy'
                                             }
                                             className="h-full w-full select-none object-contain"
                                             style={{
                                                  filter:
                                                       position === 'center'
                                                            ? 'drop-shadow(0 18px 25px rgba(0,0,0,0.25))'
                                                            : 'drop-shadow(0 10px 15px rgba(0,0,0,0.12))'
                                             }}
                                        />
                                   </motion.div>
                              )
                         })}
                    </div>

                    {/* =====================================
                        PRODUCT NAME
                    ====================================== */}

                    <div
                         className="absolute left-1/2 z-40 -translate-x-1/2 text-center"
                         style={{
                              top: 'clamp(300px, 38vw, 455px)',
                              width: 'min(90%, 320px)'
                         }}
                    >
                         <motion.h2
                              key={activeProduct.id}
                              id="experience-title"
                              initial={
                                   reduceMotion
                                        ? false
                                        : {
                                             opacity: 0,
                                             y: direction > 0 ? 10 : -10
                                        }
                              }
                              animate={{
                                   opacity: 1,
                                   y: 0
                              }}
                              transition={{
                                   duration: reduceMotion ? 0 : 0.3,
                                   ease: [0.22, 1, 0.36, 1]
                              }}
                              className="m-0 text-[#f3fdff]"
                              style={{
                                   fontFamily: 'var(--font-ui)',
                                   fontSize:
                                        'clamp(0.9rem, 1.5vw, 1.3rem)',
                                   fontWeight: 700,
                                   lineHeight: 1.2,
                                   textShadow:
                                        '0 2px 10px rgba(0,0,0,0.3)'
                              }}
                         >
                              {activeProduct.name}
                         </motion.h2>
                    </div>

                    {/* =====================================
                        LEFT ARROW
                    ====================================== */}

                    <motion.button
                         type="button"
                         onClick={goToPrevious}
                         className="absolute z-50 flex h-[40px] w-[40px] items-center justify-center rounded-[10px] border border-[rgba(243,253,255,0.3)] bg-[rgba(243,253,255,0.15)] text-[1.2rem] text-[#f3fdff] transition-colors duration-300 hover:bg-[rgba(243,253,255,0.3)] sm:h-[45px] sm:w-[45px] sm:text-[1.3rem]"
                         style={{
                              top: 'clamp(220px, 28vw, 330px)',
                              left: 'clamp(4%, 10vw, 12%)',
                              fontFamily: 'var(--font-ui)'
                         }}
                         aria-label="Previous product"
                         whileHover={
                              reduceMotion
                                   ? undefined
                                   : {
                                        scale: 1.08
                                   }
                         }
                         whileTap={
                              reduceMotion
                                   ? undefined
                                   : {
                                        scale: 0.94
                                   }
                         }
                    >
                         <span aria-hidden="true">←</span>
                    </motion.button>

                    {/* =====================================
                        RIGHT ARROW
                    ====================================== */}

                    <motion.button
                         type="button"
                         onClick={goToNext}
                         className="absolute z-50 flex h-[40px] w-[40px] items-center justify-center rounded-[10px] border border-[rgba(243,253,255,0.3)] bg-[rgba(243,253,255,0.15)] text-[1.2rem] text-[#f3fdff] transition-colors duration-300 hover:bg-[rgba(243,253,255,0.3)] sm:h-[45px] sm:w-[45px] sm:text-[1.3rem]"
                         style={{
                              top: 'clamp(220px, 28vw, 330px)',
                              right: 'clamp(4%, 10vw, 12%)',
                              fontFamily: 'var(--font-ui)'
                         }}
                         aria-label="Next product"
                         whileHover={
                              reduceMotion
                                   ? undefined
                                   : {
                                        scale: 1.08
                                   }
                         }
                         whileTap={
                              reduceMotion
                                   ? undefined
                                   : {
                                        scale: 0.94
                                   }
                         }
                    >
                         <span aria-hidden="true">→</span>
                    </motion.button>

                    {/* =====================================
                        PRODUCT THUMBNAILS
                    ====================================== */}

                    <div
                         className="absolute left-1/2 z-40 flex -translate-x-1/2 items-center justify-center"
                         style={{
                              top: 'clamp(350px, 47vw, 520px)',
                              gap: 'clamp(6px, 1vw, 13px)'
                         }}
                         role="tablist"
                         aria-label="HydraCurls product collection"
                    >
                         {products.map((product, index) => {
                              const isActive = index === activeIndex

                              return (
                                   <motion.button
                                        key={product.id}
                                        type="button"
                                        onClick={() =>
                                             goToProduct(index)
                                        }
                                        className="flex items-center justify-center rounded-full p-[3px] sm:p-[4px]"
                                        style={{
                                             height:
                                                  'clamp(32px, 4.5vw, 48px)',
                                             width:
                                                  'clamp(32px, 4.5vw, 48px)',
                                             background:
                                                  'rgba(243,253,255,0.3)',
                                             border: isActive
                                                  ? '2px solid #00d5fd'
                                                  : '2px solid transparent',
                                             boxShadow: isActive
                                                  ? '0 0 15px rgba(0,213,253,0.5)'
                                                  : 'none'
                                        }}
                                        role="tab"
                                        aria-selected={isActive}
                                        aria-label={`Show ${product.name}`}
                                        whileHover={
                                             reduceMotion
                                                  ? undefined
                                                  : {
                                                       scale: 1.1
                                                  }
                                        }
                                        whileTap={
                                             reduceMotion
                                                  ? undefined
                                                  : {
                                                       scale: 0.94
                                                  }
                                        }
                                   >
                                        <img
                                             src={product.image}
                                             alt=""
                                             draggable="false"
                                             className="h-full w-full object-contain"
                                        />
                                   </motion.button>
                              )
                         })}
                    </div>
               </div>
          </section>
     )
}

export default ProductExperienceSection