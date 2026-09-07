import React from 'react'
import clouds from 'https://res.cloudinary.com/dyahibuzy/image/upload/v1788749099/clouds_mdmpag.png'

function ProductExperienceWrapper({ children }) {
     return (
          <div
               className="
                    relative
                    w-full
                    overflow-hidden
                    bg-[#f3fdff]
               "
          >
               {/* =====================================================
                   TOP CLOUD / WAVE AREA
               ====================================================== */}
               <div
                    className="
                         relative
                         w-full
                         overflow-hidden
                         bg-[#f3fdff]
                    "
                    style={{
                         height: 'clamp(145px, 18vw, 285px)',
                    }}
                    aria-hidden="true"
               >
                    {/* =================================================
                        CLOUDS
                    ================================================== */}
                    <img
                         src={clouds}
                         alt=""
                         loading="lazy"
                         className="
                              pointer-events-none
                              absolute
                              bottom-[8px]
                              left-[-50px]
                              z-[1]
                              block
                              h-auto
                              max-w-none
                              opacity-90

                              sm:left-[-35px]

                              md:left-[-15px]

                              lg:left-0
                         "
                         style={{
                              width: 'clamp(250px, 34vw, 560px)',
                         }}
                    />

                    {/* =================================================
                        BLUE WAVE
                    ================================================== */}
                    <svg
                         className="
                              pointer-events-none
                              absolute
                              bottom-[-1px]
                              left-0
                              z-[3]
                              block
                              h-auto
                              w-full
                         "
                         style={{
                              height: 'clamp(70px, 10vw, 170px)',
                         }}
                         viewBox="0 0 1440 140"
                         preserveAspectRatio="none"
                         xmlns="http://www.w3.org/2000/svg"
                    >
                         <path
                              d="
                                   M0 18
                                   C135 48 275 78 420 76
                                   C570 74 665 24 810 28
                                   C955 32 1050 67 1180 64
                                   C1285 62 1365 48 1440 42
                                   V140
                                   H0
                                   Z
                              "
                              fill="#69c6e8"
                         />
                    </svg>
               </div>

               {/* =====================================================
                   PRODUCT EXPERIENCE
                   
                   Small negative overlap keeps the product section
                   visually connected to the blue wave.
               ====================================================== */}
               <div
                    className="
                         relative
                         z-[10]
                         -mt-[22px]

                         sm:-mt-[28px]

                         md:-mt-[34px]

                         lg:-mt-[40px]
                    "
               >
                    {children}
               </div>

               {/* =====================================================
                   CURVED HYDRATION TEXT
               ====================================================== */}
               <div
                    className="
                         relative
                         z-[20]
                         flex
                         w-full
                         items-start
                         justify-center
                         overflow-visible
                         bg-[#f3fdff]
                    "
                    style={{
                         height: 'clamp(115px, 15vw, 255px)',
                         marginTop: 'clamp(-34px, -4vw, -20px)',
                    }}
                    aria-hidden="true"
               >
                    <div
                         className="
                              pointer-events-none
                              relative
                              flex
                              h-full
                              w-full
                              items-start
                              justify-center
                              overflow-visible
                         "
                    >
                         <svg
                              className="
                                   block
                                   h-full
                                   w-[150%]
                                   min-w-[760px]
                                   overflow-visible

                                   sm:w-[135%]
                                   sm:min-w-[900px]

                                   md:w-[120%]
                                   md:min-w-0

                                   lg:w-full
                              "
                              viewBox="0 0 1440 260"
                              preserveAspectRatio="none"
                              xmlns="http://www.w3.org/2000/svg"
                         >
                              <defs>
                                   <path
                                        id="hydration-text-curve"
                                        d="
                                             M100 35
                                             C270 165 480 235 720 235
                                             C960 235 1170 165 1340 35
                                        "
                                   />
                              </defs>

                              <text
                                   fill="#858585"
                                   fontFamily="var(--font-display)"
                                   fontWeight="400"
                                   letterSpacing="0"
                                   style={{
                                        fontSize:
                                             'clamp(20px, 3.5vw, 56px)',
                                   }}
                              >
                                   <textPath
                                        href="#hydration-text-curve"
                                        startOffset="50%"
                                        textAnchor="middle"
                                   >
                                        Experience the power of hydration in
                                        every drop.
                                   </textPath>
                              </text>
                         </svg>
                    </div>
               </div>
          </div>
     )
}

export default ProductExperienceWrapper