import { useState } from 'react'
import { MdOutlineMenu } from 'react-icons/md'

const menuItems = [
   {
      name: 'Products',
      link: '#'
   },
   {
      name: 'Contacts',
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
   return (
      <div className=" text-white h-20 pl-20 pr-20 bg-main_color  " >
         <div className=' flex justify-between items-center p-5 ' >
            <p className=' font-body text-white font-extrabold text-xl ' >E-Commerce</p>
            <div className=' flex gap-10  ' >
               {
                  menuItems.map((elt, index) => {
                     return (
                        <div className=' flex text-xs justify-center items-center gap-1 flex-col ' >
                           <a onClick={() => setSelectedMenu(elt.name)}
                              className= {elt.name == selectedMenu ? 'text-white font-bold' : 'font-thin' }
                              href={elt.link}>{elt.name}</a>
                           {
                              elt.name == selectedMenu &&
                              <div className=' bg-white w-1 h-1 rounded-full ' ></div>
                           }
                        </div>

                     )
                  })
               }
            </div>
            <MdOutlineMenu color='#fff' size={30} />
         </div>
      </div>
   )
}

export default Header