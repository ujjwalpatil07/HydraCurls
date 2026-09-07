import {
     Star,
} from 'lucide-react'

import avatar from 'https://res.cloudinary.com/dyahibuzy/image/upload/v1788749100/before-after-hair_rfrhgm.png'

function TestimonialCard({
     name = 'Aisha K',
     location = 'Dubai, UAE',
     rating = 5,
     text = "I've struggled with frizz my whole life. Hydra Curls is the first range that actually tamed my hair for more than a day! The 48-hour claim is real.",
}) {
     return (
          <article
               className="
                    relative
                    flex
                    min-h-[300px]
                    w-full
                    flex-col
                    justify-between
                    overflow-hidden
                    rounded-[24px]
                    bg-white
                    p-[24px]
                    shadow-[0_15px_40px_rgba(0,0,0,0.08)]

                    sm:min-h-[320px]
                    sm:rounded-[28px]
                    sm:p-[28px]

                    lg:min-h-[350px]
                    lg:p-[30px]

                    xl:p-[34px]
               "
          >
               {/* STARS */}
               <div className="flex items-center gap-[4px]">
                    {Array.from({ length: rating }).map((_, index) => (
                         <Star
                              key={index}
                              aria-hidden="true"
                              className="
                                   h-[17px]
                                   w-[17px]
                                   fill-[#040C1E]
                                   text-[#040C1E]

                                   sm:h-[18px]
                                   sm:w-[18px]
                              "
                         />
                    ))}
               </div>

               {/* TESTIMONIAL */}
               <p
                    className="
                         m-0
                         mt-[22px]
                         font-[var(--font-gontham)]
                         text-[#040C1E]

                         text-[16px]
                         leading-[1.55]

                         sm:mt-[26px]
                         sm:text-[17px]

                         lg:text-[18px]
                         lg:leading-[1.6]
               "
               >
                    “{text}”
               </p>

               {/* USER */}
               <div
                    className="
                         mt-[28px]
                         flex
                         items-center
                         gap-[12px]

                         sm:mt-[32px]
                         sm:gap-[14px]
               "
               >
                    <img
                         src={avatar}
                         alt={name}
                         className="
                              h-[46px]
                              w-[46px]
                              shrink-0
                              rounded-full
                              object-cover

                              sm:h-[50px]
                              sm:w-[50px]
                         "
                    />

                    <div>
                         <p
                              className="
                                   m-0
                                   font-[var(--font-gontham)]
                                   text-[15px]
                                   font-bold
                                   text-[#040C1E]

                                   sm:text-[16px]
                              "
                         >
                              {name}
                         </p>

                         <p
                              className="
                                   m-0
                                   mt-[3px]
                                   font-[var(--font-display)]
                                   text-[13px]
                                   text-[#737373]

                                   sm:text-[14px]
                              "
                         >
                              {location}
                         </p>
                    </div>
               </div>

               {/* DECORATIVE BOTTOM CURVE */}
               <div
                    aria-hidden="true"
                    className="
                         pointer-events-none
                         absolute
                         bottom-[-42px]
                         left-[-8%]
                         h-[85px]
                         w-[116%]
                         rounded-[50%]
                         bg-[#69C9EE]/20
                    "
               />
          </article>
     )
}

export default TestimonialCard