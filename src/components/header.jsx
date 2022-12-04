import { useState } from 'react'
import { MdOutlineMenu } from 'react-icons/md'
import { FaShoppingBag } from 'react-icons/fa'
import { HiOutlineUserCircle } from 'react-icons/hi'

const menuItems = [
   {
      name: 'Products',
      link: '#'
   },
   {
      name: 'Categories',
      link: '#'
   },
   {
      name: 'Login',
      link: '#'
   },
   {
      name: 'Sign up',
      link: '#'
   }
]
const Header = () => {
   const [selectedMenu, setSelectedMenu] = useState('Products')
   const [bagItemNumber, setBagItemNumber] = useState(0)
   return (
      <div className="   h-16 pl-[5vw] pr-[5vw] bg-neutral-300  z-10 fixed w-[100vw] " >
         <div className=' flex justify-between items-center p-5 ' >
            <p className=' font-body text-main_color font-extrabold text-xl ' >E-COMMERCE</p>
            <div className=' hidden sm:flex gap-10 items-start  ' >
               {
                  menuItems.map((elt, index) => {
                     return (
                        <div className=' flex text-xs justify-center items-center gap-1 flex-col ' >
                           <a onClick={() => setSelectedMenu(elt.name)}
                              className={elt.name == selectedMenu ? 'transition-all text-orange-500 font-bold' : 'font-thin'}
                              href={elt.link}>{elt.name}</a>
                           {
                              elt.name == selectedMenu &&
                              <div className=' bg-orange-500 w-1  transition-all h-1 rounded-full ' ></div>
                           }
                        </div>

                     )
                  })
               }
            </div>
            <div className=' flex items-center justify-center gap-5' >
               <div className=' flex gap-2 ' >
               <FaShoppingBag size={20} />
                  {bagItemNumber}
               </div>
            </div>
            <MdOutlineMenu color='#fff' className='sm:hidden cursor-pointer ' size={30} />
         </div>
      </div>
   )
}

export default Header