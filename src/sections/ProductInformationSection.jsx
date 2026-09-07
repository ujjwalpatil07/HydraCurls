import { motion, useReducedMotion } from 'framer-motion'
import { cloudinaryAssets } from '../config/cloudinary.js'

const products = [
     ['shampoo', cloudinaryAssets.shampoo, 'HydraCurls Hydrating Shampoo'],
     ['conditioner', cloudinaryAssets.conditioner, 'HydraCurls Hydrating Conditioner'],
     ['cream', cloudinaryAssets.cream, 'HydraCurls Defining Cream'],
     ['gel', cloudinaryAssets.gel, 'HydraCurls Defining Gel'],
     ['mask', cloudinaryAssets.mask, 'HydraCurls Hydrating Mask'],
]

const backgroundPattern = cloudinaryAssets.backgroundPattern

function ProjectInformationSection() {
     const reduceMotion = useReducedMotion()
     const reveal = reduceMotion ? false : { opacity: 0, y: 24 }

     return (
          <section
               className="relative overflow-hidden"
               style={{
                    background: '#f3fdff',
                    color: '#091b3b',
               }}
               aria-labelledby="product-information-title"
          >
               {/* Main Grid - Two Portions */}
               <div
                    className="relative z-1 grid mx-auto max-w-full pt-[clamp(30px,4vw,50px)]"
                    style={{
                         gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
                         gap: 'clamp(20px,4vw,60px)'
                    }}
               >
                    {/* Left Portion */}
                    <motion.article
                         className="relative overflow-hidden flex flex-col justify-center"
                         style={{
                              background: '#daf6ff',
                              minHeight: 'clamp(300px,35vw,400px)',
                              padding: 'clamp(30px,4vw,50px) clamp(25px,3vw,45px)'
                         }}
                         initial={reveal}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true, amount: .25 }}
                         transition={{ duration: .62, ease: [.22, 1, .36, 1] }}
                    >
                         {/* Background pattern at 50% opacity */}
                         <div
                              className="absolute inset-0 pointer-events-none"
                              style={{
                                   backgroundImage: `url(${backgroundPattern})`,
                                   backgroundSize: 'cover',
                                   backgroundPosition: 'center',
                                   opacity: 0.1
                              }}
                              aria-hidden="true"
                         />

                         {/* Wavy effect at top */}
                         <div className="absolute top-0 left-0 w-full pointer-events-none" style={{ zIndex: 2 }}>
                              <svg
                                   className="block w-full"
                                   style={{ height: 'clamp(30px,4vw,50px)' }}
                                   viewBox="0 0 1440 100"
                                   preserveAspectRatio="none"
                                   xmlns="http://www.w3.org/2000/svg"
                              >
                                   <path
                                        d="M0 0V50C80 90 160 10 240 50C320 90 400 10 480 50C560 90 640 10 720 50C800 90 880 10 960 50C1040 90 1120 10 1200 50C1280 90 1360 10 1440 50V0H0Z"
                                        fill="#f3fdff"
                                   />
                              </svg>
                         </div>

                         <div className="relative z-1 max-w-[450px]">
                              <h2
                                   className="text-[#091b3b] text-[clamp(1.2rem,2vw,1.8rem)] font-bold leading-[1.2] m-0 mb-[clamp(15px,2vw,25px)]"
                                   style={{ fontFamily: 'var(--font-ui)' }}
                              >
                                   Lorem Ipsum
                              </h2>
                              <p
                                   className="text-[#445970] text-[clamp(.85rem,1.1vw,.95rem)] leading-[1.6] m-0"
                                   style={{ fontFamily: 'var(--font-ui)' }}
                              >
                                   Hyaluronic Acid acts like a magnet for moisture, drawing hydration into each strand. Hyaluronic Acid acts like a magnet for moisture, drawing hydration into each strand. Hyaluronic Acid acts like a magnet for moisture, drawing hydration into each strand.
                              </p>
                              <a
                                   className="inline-flex items-center bg-[#00d5fd] text-white text-[clamp(.8rem,.9vw,.9rem)] font-semibold mt-[clamp(20px,2.5vw,30px)] px-[clamp(16px,2vw,22px)] py-[clamp(8px,1vw,12px)] rounded-[6px] transition-all duration-300 hover:bg-[#00b8d9] hover:scale-[1.02]"
                                   style={{ fontFamily: 'var(--font-ui)' }}
                                   href="#product-experience"
                              >
                                   Learn More
                                   <svg className="w-[14px] h-[14px] ml-[6px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                                   </svg>
                              </a>
                         </div>
                    </motion.article>

                    {/* Right Portion - Products */}
                    <motion.div
                         className="relative overflow-hidden flex flex-col justify-center"
                         style={{
                              background: '#daf6ff',
                              minHeight: 'clamp(300px,35vw,400px)',
                              padding: 'clamp(30px,4vw,50px) clamp(25px,3vw,45px)'
                         }}
                         initial={reduceMotion ? false : { opacity: 0, scale: .97 }}
                         whileInView={{ opacity: 1, scale: 1 }}
                         viewport={{ once: true, amount: .2 }}
                         transition={{ duration: .7, ease: [.22, 1, .36, 1], delay: .08 }}
                    >
                         {/* Background pattern at 10% opacity */}
                         <div
                              className="absolute inset-0 pointer-events-none"
                              style={{
                                   backgroundImage: `url(${backgroundPattern})`,
                                   backgroundSize: 'cover',
                                   backgroundPosition: 'center',
                                   opacity: 0.1
                              }}
                              aria-hidden="true"
                         />

                         {/* Wavy effect at top */}
                         <div className="absolute top-0 left-0 w-full pointer-events-none" style={{ zIndex: 2 }}>
                              <svg
                                   className="block w-full"
                                   style={{ height: 'clamp(30px,4vw,50px)' }}
                                   viewBox="0 0 1440 100"
                                   preserveAspectRatio="none"
                                   xmlns="http://www.w3.org/2000/svg"
                              >
                                   <path
                                        d="M0 0V50C80 90 160 10 240 50C320 90 400 10 480 50C560 90 640 10 720 50C800 90 880 10 960 50C1040 90 1120 10 1200 50C1280 90 1360 10 1440 50V0H0Z"
                                        fill="#f3fdff"
                                   />
                              </svg>
                         </div>

                         <div className="relative z-1 max-w-[450px]">
                              <h2
                                   className="text-[#091b3b] text-[clamp(1.2rem,2vw,1.8rem)] font-bold leading-[1.2] m-0 mb-[clamp(15px,2vw,25px)]"
                                   style={{ fontFamily: 'var(--font-ui)' }}
                              >
                                   Lorem Ipsum
                              </h2>
                              <p
                                   className="text-[#445970] text-[clamp(.85rem,1.1vw,.95rem)] leading-[1.6] m-0"
                                   style={{ fontFamily: 'var(--font-ui)' }}
                              >
                                   Hyaluronic Acid acts like a magnet for moisture, drawing hydration into each strand. Hyaluronic Acid acts like a magnet for moisture, drawing hydration into each strand. Hyaluronic Acid acts like a magnet for moisture, drawing hydration into each strand.
                              </p>
                              <a
                                   className="inline-flex items-center bg-[#00d5fd] text-white text-[clamp(.8rem,.9vw,.9rem)] font-semibold mt-[clamp(20px,2.5vw,30px)] px-[clamp(16px,2vw,22px)] py-[clamp(8px,1vw,12px)] rounded-[6px] transition-all duration-300 hover:bg-[#00b8d9] hover:scale-[1.02]"
                                   style={{ fontFamily: 'var(--font-ui)' }}
                                   href="#product-experience"
                              >
                                   Learn More
                                   <svg className="w-[14px] h-[14px] ml-[6px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                                   </svg>
                              </a>
                         </div>

                         {/* Products Row with Glow Effect */}
                         <div className="relative z-1 flex items-end justify-center mt-[clamp(20px,3vw,35px)]">
                              {/* Rounded Rectangle Blue Glow Effect */}
                              <div
                                   className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pointer-events-none"
                                   style={{
                                        width: '85%',
                                        height: '120px',
                                        background: 'radial-gradient(ellipse at center, rgba(0,213,253,0.7) 0%, rgba(0,213,253,0.4) 50%, transparent 80%)',
                                        borderRadius: '50px',
                                        filter: 'blur(30px)',
                                        zIndex: 0
                                   }}
                                   aria-hidden="true"
                              />

                              {/* Products - Closer and Overlapping */}
                              <div className="relative z-1 flex items-end justify-center">
                                   {products.map(([name, image, alt]) => (
                                        <img
                                             key={name}
                                             className="relative object-contain"
                                             src={image}
                                             alt={alt}
                                             loading="lazy"
                                             style={{
                                                  width: name === 'shampoo' ? '16%' : name === 'conditioner' ? '19%' : name === 'cream' ? '17%' : name === 'gel' ? '17%' : '21%',
                                                  zIndex: name === 'cream' ? 4 : name === 'shampoo' || name === 'gel' ? 3 : 2,
                                                  marginLeft: name === 'conditioner' ? '-7%' : name !== 'shampoo' ? '-6%' : '0',
                                                  marginRight: name === 'shampoo' ? '-2%' : '0',
                                                  filter: 'drop-shadow(0px 8px 16px rgba(0,0,0,0.15))'
                                             }}
                                        />
                                   ))}
                              </div>
                         </div>

                    </motion.div>
               </div>
          </section>
     )
}

export default ProjectInformationSection