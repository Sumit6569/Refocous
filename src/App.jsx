import React from "react";
import Navbar from "./Components/Navbar";
import Work from "./Components/Work";
import Stripes from "./Components/Stripes";
import Products from "./Components/Products";
import Marques from "./Components/Marques";
import Cards from "./Components/Cards.jsx";
function App() {
  return (
    <div className='w-full bg-zinc-900  text-white font-["satoshi"]  '>
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marques />
      <Cards />
    </div>
  );
}

export default App;
