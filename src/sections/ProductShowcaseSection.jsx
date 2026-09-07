import { motion, useReducedMotion } from 'framer-motion'
import campaignComposition from 'https://res.cloudinary.com/dyahibuzy/image/upload/v1788749108/campaign-composition_z12zyo.png'

function ProductShowcaseSection() {
     const reduceMotion = useReducedMotion()

     return (
          <section
               className="relative overflow-hidden bg-white"
               style={{
                    padding: '0',
                    minHeight: 'clamp(300px, 50vw, 600px)'
               }}
               aria-labelledby="product-showcase-label"
          >

               <div className="relative z-[1] mx-auto max-w-[1540px] px-[clamp(0px, 2vw, 20px)] pt-[clamp(30px, 4vw, 90px)]">
     

                    <motion.img
                         className="block h-auto mx-auto max-w-full w-full object-contain"
                         src={campaignComposition}
                         alt="HydraCurls 48-hour hydration collection for Arab, curly, coily and wavy hair"
                         loading="lazy"
                         initial={reduceMotion ? false : { opacity: 0, y: 28, scale: .985 }}
                         whileInView={{ opacity: 1, y: 0, scale: 1 }}
                         viewport={{ once: true, amount: .18 }}
                         transition={{ duration: .75, ease: [.22, 1, .36, 1] }}
                    />
               </div>

               {/* Wavy Bottom Edge */}
               <div className="absolute bottom-0 left-0 w-full pointer-events-none" style={{ zIndex: 2 }}>
                    <svg
                         className="block w-full"
                         style={{ height: 'clamp(30px, 4vw, 90px)' }}
                         viewBox="0 0 1440 100"
                         preserveAspectRatio="none"
                         xmlns="http://www.w3.org/2000/svg"
                    >
                         <path
                              d="M0 57C126 34 248 100 398 83C559 65 661 21 814 47C1012 80 1099 114 1242 93C1324 81 1384 72 1440 74V100H0V57Z"
                              fill="#f3fdff"
                         />
                    </svg>
               </div>
          </section>
     )
}

export default ProductShowcaseSection