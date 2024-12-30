import React from 'react'

function Marque({ imagesurl }) {
  return (
    <div className="flex w-full py-8 gap-20 bg-zinc-900  whitespace-nowrap overflow-hidden">
      {imagesurl.map((url) => (
        <img src={url} className="w-[6vw] flex-shrink-0 bg-zinc-900" />
      ))}
    </div>
  );
}

export default Marque
