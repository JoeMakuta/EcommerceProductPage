import { products } from "../assets/store"
import SingleProduct from "./singleProduct"

const similarProducts = products.filter((elt) => {
   return elt.category == "men's clothing"
})

const SimilarProducts = () => {
   return (
      <div className=" flex flex-col justify-center gap-10  pt-10 " >
         <div className=" font-thin text-2xl self-center  " >Similar products </div>
         <div className=" flex justify-center gap-10 " >
            {
               similarProducts.map((elt, index) => {
                  return <SingleProduct elt={elt} />
               })
            }
         </div>
      </div>
   )
}

export default SimilarProducts