import React, { useState } from "react";
import { BsXLg } from 'react-icons/bs'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import ZoomImage from "./zoomImage";

const ImageModal = (props) => {

   return (
      <div
         className='flex gap-10 justify-center transition-all items-center fixed top-0 left-0 bg-opacity-80 w-full h-full z-10 bg-black '
      >
         <div className=" w-[90vw] overflow-hidden h-[90vh] bg-white"  >
            <ZoomImage image={props.image} />
         </div>
         <button className=" text-black fixed top-10 right-20 "
            onClick={(e) => {
               props.setShowModal(false)
            }}
         >
            <BsXLg size={20} />
         </button>
      </div>
   )
}

export default ImageModal;