import { useState } from 'react'
import { MdOutlineMenu } from 'react-icons/md'
import { FaShoppingBag } from 'react-icons/fa'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { FiSearch } from 'react-icons/fi'
import Hamberger from './humberger'

export const menuItems = [
   {
      name: 'Products',
      link: '#'
   },
   {
      name: 'Categories',
      link: '#'
   },
   // {
   //    name: 'Login',
   //    link: '#'
   // },
   // {
   //    name: 'Sign up',
   //    link: '#'
   // }
]
const Header = () => {
   const [selectedMenu, setSelectedMenu] = useState('Products')
   const [bagItemNumber, setBagItemNumber] = useState(0)
   const [showMobileMenu, setShowMobileMenu] = useState(true)
   return (
      <div className="   h-16 sm:pl-[5vw] sm:pr-[5vw] bg-neutral-300  z-10 fixed w-[100vw] " >
         <Hamberger selectedMenu={selectedMenu} showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu} setSelectedMenu={setSelectedMenu} />
         <div className=' flex justify-between items-center p-5 ' >
            <p className=' font-body text-main_color font-extrabold text-xl hidden sm:block ' >E-COMMERCE</p>
            <div className=' hidden sm:flex gap-10 items-start  ' >
               {
                  menuItems.map((elt, index) => {
                     return (
                        <div className=' flex text-xs justify-center items-center gap-1 flex-col ' >
                           <a onClick={() => setSelectedMenu(elt.name)}
                              className={elt.name == selectedMenu ? 'transition-all text-green font-bold' : 'font-thin'}
                              href={elt.link}>{elt.name}</a>
                           {
                              elt.name == selectedMenu &&
                              <div className=' bg-green w-1  transition-all h-1 rounded-full ' ></div>
                           }
                        </div>

                     )
                  })
               }
            </div>
            <MdOutlineMenu
               onClick={() => {
                  showMobileMenu ? setShowMobileMenu(false) : setShowMobileMenu(true)
               }}
               className='sm:hidden cursor-pointer '
               size={30}
            />



            <div className=' flex items-center justify-center gap-5' >
               <div className=' flex justify-center items-center gap-5 ' >
                  <FiSearch size={20} />
                  <HiOutlineUserCircle size={25} />
                  <div className=' flex ' >
                     <FaShoppingBag size={20} className=' animate-bounce ' />
                     {/* <p>{bagItemNumber}</p> */}
                  </div>

               </div>
            </div>
         </div>
      </div>
   )
}

export default Header