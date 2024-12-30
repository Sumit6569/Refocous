import React from "react";
import Product from "./Product";

function Products() {
  var products = [
    {title: "ARWTEL", description: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carb", live:true,case:false},

    {title: "TTR", description: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carb", live:true,case:false},
    {title: "YIR 2022", description: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carb", live:true,case:true},

 {title: "YAHOO", description: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carb", live:true,case:false}

  ];
  return (
    <div className="mt-32">
      {products.map((val, index) => (
        <Product val={val}  />
      ))}
    </div>
  );
}

export default Products;
