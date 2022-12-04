
const Footer1 = () => {
   return (
      <div className=" text-white bg-black bg-opacity-90 mt-20 flex flex-col gap-3 pt-20 pb-20 items-center justify-center " >
         <h1 className=" font-bold text-4xl " >Stay up to date</h1>
         <p className=" w-[30vw] text-center " >Subscribe to get the latest updates and news from our fast-growing community</p>
         <div className=" flex gap-5  " >
            <input type="text" className=" h-10 rounded-lg outline-none p-3 w-[25vw] box-border  bg-transparent border-[1px] border-gray " placeholder="Full name ..." />
            <input type="email" className="rounded-lg outline-none p-3 w-[25vw] bg-transparent border-[1px] h-10 border-gray " placeholder=" Email ... " />
            <button className="  active:bg-main_color w-60 h-10 bg-green rounded-xl text-white " >SUBSCRIBE</button>
         </div>
      </div>
   )
}

const Footer = () => {
   return (
      <div className=" " >
         <Footer1 />
      </div>
   )
}

export default Footer