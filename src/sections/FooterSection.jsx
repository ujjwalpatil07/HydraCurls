import { motion, useReducedMotion } from 'framer-motion'

const footerLinks = [
     { label: 'Curly Girl Method', href: '#curly-girl-method' },
     { label: 'Hair Type Guide', href: '#hair-types' },
     { label: 'Styling Tips', href: '#curly-girl-method' },
     { label: 'Ingredient Benefits', href: '#ingredients' },
]

const socialLinks = ['Instagram', 'Facebook', 'TikTok']

export default function FooterSection() {
     const reduceMotion = useReducedMotion()

     const fadeUp = {
          hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
          visible: {
               opacity: 1,
               y: 0,
               transition: {
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
               },
          },
     }

     return (
          <footer className="relative overflow-hidden bg-[#040c1e] text-white">
               {/* Top glow */}
               <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#00d5fd]/10 blur-[100px]"
               />

               <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#76468a]/10 blur-[110px]"
               />

               <div className="relative mx-auto max-w-[1400px] px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
                    {/* Main footer */}
                    <motion.div
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true, amount: 0.15 }}
                         variants={fadeUp}
                         className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.4fr_1fr_1.2fr]"
                    >
                         {/* Brand */}
                         <div className="max-w-md">
                              <a
                                   href="#top"
                                   className="group inline-block"
                                   aria-label="Hydra Curls home"
                              >
                                   <span
                                        className="font-[var(--font-display)] text-3xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#00d5fd]"
                                   >
                                        Hydra
                                   </span>
                                   <span
                                        className="font-[var(--font-display)] text-3xl font-bold tracking-tight text-[#00d5fd]"
                                   >
                                        Curls
                                   </span>
                              </a>

                              <p className="mt-5 max-w-sm text-sm leading-7 text-white/55 sm:text-base">
                                   Premium curly hair care designed to celebrate, nourish, and
                                   transform your natural curls.
                              </p>

                              {/* Social links */}
                              <div className="mt-7 flex flex-wrap gap-3">
                                   {socialLinks.map((social, index) => (
                                        <motion.a
                                             key={social}
                                             href="#"
                                             aria-label={social}
                                             whileHover={
                                                  reduceMotion
                                                       ? undefined
                                                       : {
                                                            y: -3,
                                                            borderColor: 'rgba(0,213,253,0.7)',
                                                       }
                                             }
                                             className="flex h-10 items-center justify-center rounded-full border border-white/15 px-4 text-xs font-medium text-white/65 transition-colors duration-300 hover:text-[#00d5fd]"
                                        >
                                             {social}
                                        </motion.a>
                                   ))}
                              </div>
                         </div>

                         {/* Hair care */}
                         <div>
                              <p className="font-[var(--font-gontham)] text-xs font-semibold uppercase tracking-[0.2em] text-[#00d5fd]">
                                   Hair care
                              </p>

                              <nav className="mt-6">
                                   <ul className="space-y-4">
                                        {footerLinks.map((link) => (
                                             <li key={link.label}>
                                                  <a
                                                       href={link.href}
                                                       className="group inline-flex items-center text-sm text-white/60 transition-colors duration-300 hover:text-white"
                                                  >
                                                       <span className="mr-2 h-px w-0 bg-[#00d5fd] transition-all duration-300 group-hover:w-4" />
                                                       {link.label}
                                                  </a>
                                             </li>
                                        ))}
                                   </ul>
                              </nav>
                         </div>

                         {/* Newsletter */}
                         <div className="max-w-md">
                              <p className="font-[var(--font-gontham)] text-xs font-semibold uppercase tracking-[0.2em] text-[#00d5fd]">
                                   Newsletter
                              </p>

                              <h3 className="mt-5 font-[var(--font-display)] text-2xl font-semibold leading-tight sm:text-3xl">
                                   Stay in the loop
                              </h3>

                              <p className="mt-4 text-sm leading-6 text-white/55">
                                   Get expert tips and exclusive offers delivered to your inbox.
                              </p>

                              <form
                                   onSubmit={(e) => e.preventDefault()}
                                   className="mt-6"
                              >
                                   <div className="flex flex-col gap-3 sm:flex-row">
                                        <input
                                             type="email"
                                             placeholder="Your email"
                                             aria-label="Your email"
                                             className="h-12 min-w-0 flex-1 rounded-full border border-white/15 bg-white/[0.04] px-5 text-sm text-white outline-none placeholder:text-white/30 transition-all duration-300 focus:border-[#00d5fd]/60 focus:bg-white/[0.07]"
                                        />

                                        <motion.button
                                             type="submit"
                                             whileHover={reduceMotion ? undefined : { scale: 1.03 }}
                                             whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                                             className="h-12 rounded-full bg-[#00d5fd] px-6 text-sm font-semibold text-[#040c1e] transition-colors duration-300 hover:bg-[#00b8d9]"
                                        >
                                             Subscribe
                                        </motion.button>
                                   </div>
                              </form>
                         </div>
                    </motion.div>

                    {/* Bottom */}
                    <motion.div
                         initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.6, delay: 0.1 }}
                         className="flex flex-col gap-4 pt-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between"
                    >
                         <p>
                              © 2026 Parachute Advanced Hydra Curls. All rights reserved.
                         </p>

                         <a
                              href="#top"
                              className="w-fit text-white/45 transition-colors duration-300 hover:text-[#00d5fd]"
                         >
                              Back to top ↑
                         </a>
                    </motion.div>
               </div>
          </footer>
     )
}