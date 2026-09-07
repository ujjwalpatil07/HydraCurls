import { motion, useReducedMotion } from 'framer-motion'
import {
     cloudinaryAssets,
     cloudinaryVideos,
} from '../config/cloudinary'

const hyaluronicGif = cloudinaryAssets.hyaluronicIcon
const coconutGif = cloudinaryAssets.coconutIcon
const avocadoGif = cloudinaryAssets.avocadoIcon

const hyaluronicVideo = cloudinaryVideos.ingredientHyaluronic
const coconutVideo = cloudinaryVideos.ingredientCoconut
const avocadoVideo = cloudinaryVideos.ingredientAvocado

const ingredients = [
     {
          title: 'Hyaluronic Acid',
          image: hyaluronicGif,
          video: hyaluronicVideo,
          copy: 'Rich in vitamins and fatty acids for ultimate curl definition and softness',
          benefits: ['Deep Hydration', 'Moisture Lock', 'Plump Curls'],
     },
     {
          title: 'Coconut Oil',
          image: coconutGif,
          video: coconutVideo,
          copy: 'Natural nourishment that penetrates hair shaft to strengthen and protect',
          benefits: ['Hair Strength', 'Natural Shine', 'Frizz Control'],
     },
     {
          title: 'Avocado Extract',
          image: avocadoGif,
          video: avocadoVideo,
          copy: 'Rich in vitamins and fatty acids for ultimate curl definition and softness',
          benefits: ['Curl Definition', 'Softness', 'Nutrient Rich'],
     },
]

const qualities = [
     'No SLS',
     'No Silicones',
     'No Parabens',
     'Cruelty Free',
     'Natural Extracts',
]

function NatureSection() {
     const reduceMotion = useReducedMotion()

     const transition = {
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
     }

     return (
          <section
               className="
                    relative
                    w-full
                    overflow-hidden
                    bg-[#f3fdff]
                    text-black
               "
               style={{
                    paddingTop: 'clamp(72px, 8vw, 145px)',
                    paddingRight: 'clamp(16px, 5vw, 110px)',
                    paddingBottom: 'clamp(60px, 7vw, 120px)',
                    paddingLeft: 'clamp(16px, 5vw, 110px)',
                    '--cyan': '#00d5fd',
               }}
               aria-labelledby="nature-title"
          >
               {/* =====================================================
                   HEADER
               ====================================================== */}
               <motion.header
                    className="
                         relative
                         z-[1]
                         mx-auto
                         mb-[45px]
                         w-full
                         max-w-[720px]
                         px-[5px]
                         text-center

                         sm:mb-[55px]

                         md:mb-[65px]

                         lg:mb-[78px]
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
                         amount: 0.25,
                    }}
                    transition={transition}
               >
                    {/* Eyebrow */}
                    <p
                         className="
                              m-0
                              mb-[12px]
                              font-[var(--font-gontham)]
                              text-[14px]
                              font-bold
                              leading-[1.2]
                              text-black

                              sm:mb-[14px]
                              sm:text-[16px]

                              md:text-[18px]

                              lg:text-[1.05rem]
                         "
                         style={{
                              fontFamily: 'var(--font-display)',
                              textShadow: '0 5px 30px rgba(4,12,30,.35)',
                              fontWeight: 700,
                         }}
                    >
                         Premium Ingredients
                    </p>

                    {/* Heading */}
                    <h2
                         id="nature-title"
                         className="
                              m-0
                              font-[var(--font-gontham)]
                              text-[clamp(2rem,6vw,3.8rem)]
                              font-bold
                              leading-[1.03]
                              tracking-[-0.05em]
                              text-black
                         "
                    >
                         Powered by{' '}
                         <span className="text-[#00cbed]">
                              Nature's
                         </span>
                         <br />
                         Best Ingredients
                    </h2>

                    {/* Description */}
                    <p
                         className="
                              mx-auto
                              mt-[16px]
                              max-w-[620px]
                              font-[var(--font-gontham)]
                              text-[13px]
                              leading-[1.45]
                              text-[#737373]

                              sm:mt-[18px]
                              sm:text-[14px]

                              md:mt-[20px]
                              md:text-[15px]

                              lg:text-[1.02rem]
                         "
                    >
                         Our formulations combine scientifically-proven active
                         ingredients with natural extracts for superior curly
                         hair care.
                    </p>
               </motion.header>

               {/* =====================================================
                   INGREDIENT CARDS
               ====================================================== */}
               <div
                    className="
                         relative
                         z-[1]
                         mx-auto
                         grid
                         w-full
                         max-w-[1350px]
                         grid-cols-1
                         gap-[14px]

                         sm:gap-[16px]

                         md:grid-cols-2
                         md:gap-[18px]

                         lg:grid-cols-3
                         lg:gap-[24px]
                    "
               >
                    {ingredients.map((ingredient, index) => (
                         <motion.article
                              key={ingredient.title}
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
                                   amount: 0.16,
                              }}
                              transition={{
                                   ...transition,
                                   delay: reduceMotion
                                        ? 0
                                        : index * 0.09,
                              }}
                              className="
                                   relative
                                   min-h-[340px]
                                   overflow-hidden
                                   rounded-[13px]
                                   p-[22px]

                                   sm:min-h-[360px]
                                   sm:p-[24px]

                                   md:min-h-[370px]
                                   md:p-[26px]

                                   lg:min-h-[375px]
                                   lg:p-[26px_27px]
                              "
                              style={{
                                   background:
                                        index === 1
                                             ? '#d8edfb'
                                             : index === 2
                                                  ? '#e5f4f4'
                                                  : '#daf6ff',
                              }}
                         >
                              {/* =================================================
                                  VIDEO BACKGROUND
                              ================================================== */}
                              <video
                                   className="
                                        pointer-events-none
                                        absolute
                                        inset-0
                                        h-full
                                        w-full
                                        object-cover
                                   "
                                   src={ingredient.video}
                                   autoPlay
                                   loop
                                   muted
                                   playsInline
                                   preload="metadata"
                                   style={{
                                        opacity: 0.15,
                                   }}
                                   aria-hidden="true"
                              />

                              {/* =================================================
                                  CARD GRADIENT
                              ================================================== */}
                              <div
                                   className="
                                        pointer-events-none
                                        absolute
                                        inset-0
                                   "
                                   style={{
                                        background:
                                             'radial-gradient(circle at 0 0,rgba(0,213,253,.17),transparent 36%)',
                                   }}
                                   aria-hidden="true"
                              />

                              {/* =================================================
                                  CONTENT
                              ================================================== */}
                              <div className="relative z-[1]">
                                   {/* Ingredient Icon */}
                                   <img
                                        className="
                                             mb-[14px]
                                             block
                                             h-[64px]
                                             w-[64px]
                                             object-contain

                                             sm:h-[68px]
                                             sm:w-[68px]

                                             md:h-[72px]
                                             md:w-[72px]

                                             lg:mb-[16px]
                                             lg:h-[75px]
                                             lg:w-[75px]
                                        "
                                        src={ingredient.image}
                                        alt=""
                                        loading="lazy"
                                   />

                                   {/* Title */}
                                   <h3
                                        className="
                                             m-0
                                             mb-[14px]
                                             font-[var(--font-gontham)]
                                             text-[15px]
                                             font-bold
                                             leading-[1.25]
                                             text-black

                                             sm:text-[16px]

                                             md:text-[17px]

                                             lg:mb-[18px]
                                             lg:text-[1.05rem]
                                        "
                                   >
                                        {ingredient.title}
                                   </h3>

                                   {/* Copy */}
                                   <p
                                        className="
                                             m-0
                                             min-h-0
                                             font-[var(--font-gontham)]
                                             text-[12px]
                                             leading-[1.5]
                                             text-[#737373]

                                             sm:text-[13px]

                                             md:min-h-[70px]
                                             md:text-[13.5px]

                                             lg:min-h-[74px]
                                             lg:text-[.85rem]
                                        "
                                   >
                                        {ingredient.copy}
                                   </p>

                                   {/* Benefits */}
                                   <ul
                                        className="
                                             m-0
                                             mt-[22px]
                                             list-none
                                             p-0
                                             font-[var(--font-gontham)]
                                             text-[12px]
                                             leading-[1.8]
                                             text-[#737373]

                                             sm:mt-[24px]
                                             sm:text-[13px]

                                             lg:mt-[28px]
                                             lg:text-[.83rem]
                                        "
                                   >
                                        {ingredient.benefits.map(
                                             (benefit) => (
                                                  <li
                                                       key={benefit}
                                                       className="
                                                            flex
                                                            items-center
                                                            gap-[7px]
                                                       "
                                                  >
                                                       <span
                                                            aria-hidden="true"
                                                            className="
                                                                 shrink-0
                                                                 text-[13px]
                                                                 leading-none
                                                                 text-[#00cbed]

                                                                 sm:text-[14px]

                                                                 lg:text-[.9rem]
                                                            "
                                                       >
                                                            ✓
                                                       </span>

                                                       <span>
                                                            {benefit}
                                                       </span>
                                                  </li>
                                             )
                                        )}
                                   </ul>
                              </div>
                         </motion.article>
                    ))}
               </div>

               {/* =====================================================
                   QUALITIES
               ====================================================== */}
               <div
                    className="
                         relative
                         z-[1]
                         mx-auto
                         mt-[16px]
                         flex
                         w-full
                         max-w-[1350px]
                         flex-wrap
                         items-center
                         justify-center
                         gap-x-[20px]
                         gap-y-[12px]
                         rounded-[12px]
                         border
                         border-[rgba(9,27,59,.13)]
                         px-[16px]
                         py-[17px]

                         sm:mt-[18px]
                         sm:gap-x-[28px]
                         sm:gap-y-[14px]
                         sm:px-[20px]
                         sm:py-[19px]

                         md:mt-[20px]
                         md:justify-between
                         md:gap-x-[30px]

                         lg:mt-[24px]
                         lg:px-[25px]
                         lg:py-[21px]
                    "
                    aria-label="Product formulation qualities"
               >
                    {qualities.map((quality) => (
                         <span
                              key={quality}
                              className="
                                   flex
                                   items-center
                                   gap-[6px]
                                   whitespace-nowrap
                                   font-[var(--font-gontham)]
                                   text-[11px]
                                   text-[#737373]

                                   sm:text-[12px]

                                   md:text-[12.5px]

                                   lg:text-[.78rem]
                              "
                         >
                              <span
                                   aria-hidden="true"
                                   className="
                                        text-[14px]
                                        leading-none
                                        text-[#5ecf7b]

                                        lg:text-[1rem]
                                   "
                              >
                                   ✓
                              </span>

                              {quality}
                         </span>
                    ))}
               </div>
          </section>
     )
}

export default NatureSection