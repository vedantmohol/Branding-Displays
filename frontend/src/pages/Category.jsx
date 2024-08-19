import React, { useEffect, useState } from 'react'
import Item from "../components/Item"


const Category = ({ category, banner }) => {

  const [aboutusProducts, setAboutusProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/aboutusproducts").then((response) => response.json()).then((data) => setAboutusProducts(data))
    fetch("http://localhost:4000/popularproducts").then((response) => response.json()).then((data) => setPopularProducts(data))

  }, [])

  return (
    <section className="max_padd_container py-12 xl:py-28">
      <div>
        <div>
          <img src={banner} alt="" className="block my-7 mx-auto" />
        </div>
      </div>
      <div className=" my-8 mx-2 justify-center">
        {category === "products"
          ? <div className='flex justify-center'><h2 className="font-bold h3">Our Products</h2></div>

          : <div className=' justify-center'><h2 className="font-bold h3 text-center">Let's Signage</h2><hr className='h-[3px] md:w-1/2 mx-auto bg-gradient-to-r from-transparent via-black to-transparent mb-16' /></div>

        }
        {/* <h2 className="font-bold">Branding Displays</h2> */}
        {/* <div></div> */}
      </div>
      {/* Container */}
      <div>
  {category === "products" && (
    <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6'>
      {popularProducts.map((item) => (
        <Item key={item.id} id={item.id} image={item.image} name={item.name}/>
      ))}
    </div>
  )}

  {category === "aboutus" && (
    <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-6'>
    <div className="col-span-full text-center">
      <p className="text-lg md:text-xl lg:text-2xl">
        Founded in 2014, we Branding Displays are engaged in the manufacturing of Outdoor Signage, Indoor Signage, Wall Graphics, Frosted Glass Film, Modular Sign, and much more. The presented products are made by a well-informed team who employ the optimum grade raw material and progressive techniques. These products are available in many specifications as per the demands of our valued patrons. The entire range of products is available in the market at a low price. The provided series of products is enormously demanded by our valued customers for its impeccable finish, high strength, water resistance, and durability.
        <br /><br />
        In addition, quality experts rigorously check the entire series of products against many quality parameters to ensure they are faultless. Owing to our reasonable price structure, wide distribution network, on-time delivery, and ethical business policy, we have been proficient in setting a mark in the market.
        <br /><br />
        Under the guidance of our mentor Mr. Prasanna Das, we have been capable of meeting the urgent and bulk demands of our valued patrons.
      </p>
    </div>
    {aboutusProducts.map((item) => (
      <Item key={item.id} id={item.id} image={item.image} name={item.name} />
    ))}
  </div>
  
  )}
</div>


    </section>
  )
}

export default Category