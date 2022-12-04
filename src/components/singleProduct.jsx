


const SingleProduct = ({ elt }) => {
   return (
      <div className=" w-[15%] transition-transform flex flex-col  items-center justify-center font-thin hover:shadow-lg hover:border-[1px] hover:border-neutral-200 p-2 hover:scale-105 rounded-lg  " >
         <img src={elt.image} className='w-28'  alt="" />
         <div className=" text-center " >
            <p className="   " >{elt.title}</p>
            <p className=" underline text-green ">Available</p>
            <p>${elt.price}</p>
         </div>
      </div>
   )
}

export default SingleProduct