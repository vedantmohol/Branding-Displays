import React, { useEffect, useState } from 'react'
import Item from './Item'

const Popular = () => {

  const [homeProducts,setHomeProducts] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:4000/homeproducts").then((response)=> response.json()).then((data)=>setHomeProducts(data))
  },[])

  return (
    <section className='bg-primary'>
        <div className='max_padd_container py-12 xl:py-28 xl:w-[88%]'>
            <h3 className='h3 text-center'>Choose Branding Displays! Brand Visibility Matters </h3>
            <hr className='h-[3px] md:w-1/2 mx-auto bg-gradient-to-r from-transparent via-black to-transparent mb-16'/>
            {/* container */}
            <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6'>
                {homeProducts.map((item)=>(
                    <Item key={item.id} id={item.id} image={item.image} name={item.name} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Popular