import { products } from "../assets/store"

const categories = []
products.map((elt, index) => {
   categories.push(elt.category)
})
const uniqueCategory = categories.filter((elt, index) => {
   return   categories.indexOf(elt) === index;
})

const Categories = () => {
   return (
      <div className=" gap-4 top-14 left-[500px] text-white fixed w-[50%] bg-main_color shadow-sm shadow-main_color  bg-opacity-80 " >
         {
            uniqueCategory.map((elt) => {
               return (
                  <div>
                     <li>{elt}</li>
                  </div>
               )
            })
         }
      </div>
   )
}

export default Categories