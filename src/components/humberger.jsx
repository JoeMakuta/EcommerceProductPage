import { menuItems } from "./header"

const Hamberger = ({ selectedMenu, setSelectedMenu, showMobileMenu, steShowMobileMenu }) => {
   return (
      <div className={showMobileMenu ? ' flex flex-col justify-center items-center text-white gap-5 font-bold fixed sm:hidden top-16 right-[100vw]  w-[100vw] h-[20vh] bg-opacity-50 bg-black transition-all ' : ' flex flex-col justify-center items-center text-white gap-5 font-bold fixed sm:hidden top-16 right-0  w-[100vw] h-[20vh] bg-opacity-50 bg-black transition-all '} >
         {
            menuItems.map((elt, index) => {
               return (
                  <div className=' flex text-xs justify-center items-center gap-1  ' >
                     {
                        elt.name == selectedMenu &&
                        <div className=' bg-green w-2 h-2  transition-all  rounded-full ' ></div>
                     }
                     <a onClick={() => setSelectedMenu(elt.name)}
                        className={elt.name == selectedMenu ? 'transition-all text-lg text-green font-bold' : 'font-thin'}
                        href={elt.link}>{elt.name}</a>

                  </div>

               )
            })
         }
      </div>
   )
}
export default Hamberger