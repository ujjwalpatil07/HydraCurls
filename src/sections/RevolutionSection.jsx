import { motion, useReducedMotion } from 'framer-motion'

const stats = [
     {
          value: '48h',
          label: 'Hydration',
     },
     {
          value: '3',
          label: 'Hair Types',
     },
     {
          value: '05',
          label: 'Products',
     },
     {
          value: '0',
          label: 'Sulfates',
     },
]

function RevolutionSection() {
     const reduceMotion = useReducedMotion()

     const transition = {
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
     }

     return (
          <section
               id="revolution"
               className="relative overflow-hidden bg-[#040c1e] text-[#f3fdff]"
               aria-labelledby="revolution-title"
          >
               {/* Decorative cyan glow */}
               <div
                    className="pointer-events-none absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full blur-3xl"
                    style={{
                         background:
                              'radial-gradient(circle, rgba(0,213,253,.22), transparent 68%)',
                    }}
                    aria-hidden="true"
               />

               {/* Decorative purple glow */}
               <div
                    className="pointer-events-none absolute bottom-[-180px] right-[-120px] h-[480px] w-[480px] rounded-full blur-3xl"
                    style={{
                         background:
                              'radial-gradient(circle, rgba(118,70,138,.3), transparent 68%)',
                    }}
                    aria-hidden="true"
               />

               {/* Main CTA */}
               <div
                    className="relative z-[1] mx-auto max-w-[1200px] text-center"
                    style={{
                         padding:
                              'clamp(95px,11vw,155px) clamp(24px,6vw,90px) clamp(80px,9vw,120px)',
                    }}
               >
                    <motion.p
                         className="m-0 mb-[15px] text-[clamp(.9rem,1.25vw,1.08rem)]"
                         style={{
                              fontFamily: 'var(--font-display)',
                         }}
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
                              amount: 0.3,
                         }}
                         transition={transition}
                    >
                         Your curls. Your confidence.
                    </motion.p>

                    <motion.h2
                         id="revolution-title"
                         className="mx-auto m-0 max-w-[900px] font-bold leading-[.94] tracking-[-.055em]"
                         style={{
                              fontFamily: 'var(--font-gontham)',
                              fontSize: 'clamp(2.8rem,6vw,6.2rem)',
                         }}
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
                              amount: 0.25,
                         }}
                         transition={{
                              ...transition,
                              delay: 0.08,
                         }}
                    >
                         Join the
                         <br />
                         <span className="text-[#00d5fd]">
                              Curly Hair Revolution
                         </span>
                    </motion.h2>

                    <motion.p
                         className="mx-auto mt-[24px] max-w-[650px] text-[clamp(.9rem,1.2vw,1.05rem)] leading-[1.55] text-[#b8c8d9]"
                         style={{
                              fontFamily: 'var(--font-gontham)',
                         }}
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
                              amount: 0.25,
                         }}
                         transition={{
                              ...transition,
                              delay: 0.16,
                         }}
                    >
                         Transform your curly hair journey with expert
                         guidance, premium products, and a supportive
                         community.
                    </motion.p>

                    {/* CTA buttons */}
                    <motion.div
                         className="mt-[32px] flex flex-wrap items-center justify-center gap-[12px]"
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
                              ...transition,
                              delay: 0.24,
                         }}
                    >
                         <a
                              href="#products"
                              className="inline-flex items-center gap-[8px] rounded-[6px] bg-[#00d5fd] px-[clamp(20px,2.4vw,30px)] py-[clamp(10px,1.1vw,14px)] text-[clamp(.78rem,.9vw,.9rem)] font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[#00b8d9]"
                              style={{
                                   fontFamily: 'var(--font-ui)',
                              }}
                         >
                              Explore Products

                              <svg
                                   className="h-[14px] w-[14px]"
                                   viewBox="0 0 24 24"
                                   fill="none"
                                   stroke="currentColor"
                                   strokeWidth="2"
                                   strokeLinecap="round"
                                   strokeLinejoin="round"
                              >
                                   <path d="M5 12h14" />
                                   <path d="m13 6 6 6-6 6" />
                              </svg>
                         </a>

                         <a
                              href="#curly-girl-method"
                              className="inline-flex items-center rounded-[6px] border border-[#00d5fd] bg-transparent px-[clamp(20px,2.4vw,30px)] py-[clamp(10px,1.1vw,14px)] text-[clamp(.78rem,.9vw,.9rem)] font-bold text-[#00d5fd] transition-all duration-300 hover:bg-[#00d5fd] hover:text-white"
                              style={{
                                   fontFamily: 'var(--font-ui)',
                              }}
                         >
                              Learn Curly Girl Method
                         </a>
                    </motion.div>
               </div>

               {/* Stats */}
               <div className="relative z-[1] border-t border-white/10">
                    <div className="mx-auto grid max-w-[1200px] grid-cols-2 md:grid-cols-4">
                         {stats.map((stat, index) => (
                              <motion.div
                                   key={stat.label}
                                   className="relative flex min-h-[130px] flex-col items-center justify-center px-4 py-7 text-center"
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
                                        amount: 0.2,
                                   }}
                                   transition={{
                                        ...transition,
                                        delay: index * 0.08,
                                   }}
                              >
                                   {/* Divider */}
                                   {index !== 0 && (
                                        <span
                                             className="absolute left-0 top-1/2 hidden h-[45px] w-px -translate-y-1/2 bg-white/10 md:block"
                                             aria-hidden="true"
                                        />
                                   )}

                                   <span
                                        className="text-[clamp(1.7rem,3vw,2.7rem)] font-bold leading-none text-[#00d5fd]"
                                        style={{
                                             fontFamily: 'var(--font-gontham)',
                                        }}
                                   >
                                        {stat.value}
                                   </span>

                                   <span
                                        className="mt-[8px] text-[clamp(.68rem,.9vw,.82rem)] font-semibold uppercase tracking-[.14em] text-[#aebdcd]"
                                        style={{
                                             fontFamily: 'var(--font-ui)',
                                        }}
                                   >
                                        {stat.label}
                                   </span>
                              </motion.div>
                         ))}
                    </div>
               </div>

          </section>
     )
}

export default RevolutionSection