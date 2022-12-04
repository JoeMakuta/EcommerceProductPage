import { useState } from "react"
import { useEffect } from "react"
import { MdAdd, MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { products } from "../assets/store"
import ZoomImage from './zoomImage'
import ImageModal from "./imageModal"

const Product = () => {
   const [product, setProduct] = useState(products[2])
   const [showDescription, setShowDescription] = useState(true)
   const [showModal, setShowModal] = useState(false)
   const [rating, setRating] = useState(Math.round(product.rating.rate))

   return (
      <div className="flex flex-col sm:flex-row  m-auto w-[85vw] sm:w-[80vw] gap-5 sm:gap-20 justify-center items-center pt-24 " >
         {/* <img
            src={product.image}
            className='hover:scale-105 hover:animate-pulse transition-transform cursor-zoom-in w-full sm:w-[35vw]' alt=""
            onClick={() => {
               showModal ? setShowModal(false) : setShowModal(true)
            }}
         /> */}
         {/* <div className={showModal ? 'block' : 'hidden'} >
            <ImageModal showModal={showModal} setShowModal={setShowModal} image={product.image} />
         </div> */}
         <ZoomImage image={product.image} />

         <div className="flex flex-col justify-center items-center gap-4 sm:gap-9" >
            <div className=" flex flex-col items-center gap-1 sm:gap-4 " >

               <div className=" text-4xl font-thin" >
                  {product.title}
               </div>
               <p className=" underline text-green " >
                  <p className=" cursor-pointer " >Available in {product.colors.length} Colors</p>
                  <div className=" flex gap-1 " >
                     {
                        product.colors.map((elt, index) => {
                           return (
                              <div
                                 key={index}
                                 className={"w-5 h-5 rounded-full bg-[" + elt + "]"}
                              >
                              </div>
                           )
                        })
                     }

                  </div>
               </p>

               <div className=" flex " >{
                  [...Array(5)].map((elt, index) => {
                     if (index < rating) {
                        index--
                        return <AiFillStar />
                     }
                     else {
                        index--
                        return <AiOutlineStar />
                     }
                  })
               }
               </div>
               <div className=" flex text-xl font-bold  " >
                  <p>$</p>
                  {product.price}
               </div>
            </div>

            <div className=" flex gap-4" >

               <button
                  className=" active:bg-main_color w-40 h-12 animate-pulse bg-green rounded-xl text-white  " >
                  Add to Bag
               </button>
               {/* <input
                  type="number"
                  required
                  className=" h-12 p-4 w-20  border-[1px] border-gray rounded-lg "
               /> */}
            </div>


            <div className=" text-xs " >
               <button
                  onClick={() => {
                     showDescription ? setShowDescription(false) : setShowDescription(true)
                  }}
                  className={showDescription ?
                     " flex justify-between p-4 items-center  text-sm w-full sm:w-[35vw]  h-10 border-[1px] rounded-t-lg border-b-0 border-gray bg-gray bg-opacity-40 " :
                     " flex justify-between p-4 items-center  text-sm w-full sm:w-[35vw] h-10 border-[1px] rounded-lg border-gray "} >

                  Description

                  {showDescription ? <MdKeyboardArrowDown size={20} /> : <MdKeyboardArrowRight size={20} />}
               </button>

               {showDescription &&
                  <div className=" sm:w-[35vw] border-[1px] transition-all rounded-b-lg border-gray p-4 text-sm " >
                     {product.description}
                     <li>
                        Category : {product.category}
                     </li>
                     <li>
                        Price : $ {product.price}
                     </li>
                  </div>}
            </div>
         </div>
      </div >
   )
}

export default Product