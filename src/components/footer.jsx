import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs"

const SocialMedia = [
   {
      icon: <BsFacebook size={30} />,
      name: 'Facebook',
      link: '#',
   },
   {
      icon: <BsTwitter size={30} />,
      link: '#',
      name: 'Twitter',
   },
   {
      icon: <BsInstagram size={30} />,
      link: '#',
      name: 'Instagram',
   },
   {
      icon: <BsLinkedin size={30} />,
      link: '#',
      name: 'Linked In',
   }
]

const Footer1 = () => {
   return (
      <div className=" text-white bg-black bg-opacity-90 mt-10 flex flex-col gap-8 pt-20 pb-20 items-center justify-center " >
         <h1 className=" font-bold text-4xl " >Stay up to date</h1>
         <p className=" w-[30vw] text-center text-neutral-400 text-sm" >Subscribe to get the latest updates and news from our fast-growing community</p>
         <div className=" flex gap-5  " >
            <input type="text" className=" h-10 rounded-lg outline-none p-3 w-[25vw] box-border  bg-transparent border-[1px] border-neutral-500 focus:border-neutral-200 focus:border-[2px] transition-all " placeholder="Full name ..." />
            <input type="email" className="rounded-lg outline-none p-3 w-[25vw] bg-transparent border-[1px] h-10 border-neutral-500 focus:border-neutral-200 focus:border-[2px] transition-all " placeholder=" Email ... " />
            <button className="  active:bg-main_color w-60 h-10 bg-green rounded-xl text-white " >SUBSCRIBE</button>
         </div>
      </div>
   )
}

const Footer2 = () => {
   return (
      <div className=" flex justify-around pt-10 pb-10 bg-black text-white  " >
         <div className=" flex flex-col gap-8 " >
            <p className=" font-bold text-xl " >E-COMMERCE</p>
            <div className=" flex text-xs flex-col gap-3 text-neutral-400 ">
               <p>Contacts</p>
               <p>+243972383759</p>
               <p>makutajosue@gmail.com</p>
            </div>

         </div>
         <div className="  flex flex-col gap-5 " >
            <p className=" font-bold text-xl " >
               Important Links
            </p>
            <div className=" flex text-xs flex-col gap-3 text-neutral-400 ">
               <p>Products</p>
               <p>Categoories</p>
               <p>...</p>
            </div>
         </div  >
         <div className=" flex flex-col gap-5">
            <p>Connect with us ...</p>
            <div className=" text-green flex gap-10 " >
               {
                  SocialMedia.map((elt) => {
                     return (
                        <a href={elt.link} className="cursor-pointer" >{elt.icon}</a>
                     )
                  })
               }
            </div>
         </div>

      </div>
   )
}

const Footer = () => {
   return (
      <div className=" " >
         <Footer1 />
         <Footer2 />
      </div>
   )
}

export default Footer