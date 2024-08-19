// import { createContext, useEffect, useState } from "react";
// import all_products from "../assets/all_products"

// export const ShopContext = createContext(null);

// const ShopContextProvider = (props) => {

//     // const [all_products,setAll_products] = useState([]);
//     const contextValue = {all_products};

//     // useEffect(()=>{
//     //     fetch("https://branding-displays.onrender.com/allproducts").then((response)=>response.json()).then((data)=>setAll_products(data));
//     // },[])

//     return(
//         <ShopContext.Provider value={contextValue}>
//         {props.children}
//         </ShopContext.Provider>
//     )
// } 

// export default ShopContextProvider;