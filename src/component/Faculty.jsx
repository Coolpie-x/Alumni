import React from 'react';

const Faculty = () => {
  return (
    <div className="bg-black text-white py-[4vw]">
      {/* Yellow Header */}
      <div className="bg-yellow-400 text-black text-center py-[2vw] mb-[3vw]">
        <h1 className="lg:text-[3vw] text-[8vw] font-bold uppercase">Faculty</h1>
      </div>
      
      {/* Faculty Cards Container */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-[4vw] px-[4vw]">
        {/* First Faculty Card */}
        <div className="relative w-[80%] md:w-[35%] lg:w-[25%]">
          <div className="rounded-xl overflow-hidden border-2 border-white">
            <img
              src="https://nitdgp.ac.in/uploads/4feb993568a8bdf321c10fa950f736e8.jpg"
              alt="Faculty Member"
              className="w-full h-auto"
            />
            {/* Name Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-[1vw] px-[1vw]">
              <h3 className="text-white lg:text-[1.5vw] text-[4vw] font-bold text-center">Shibendu Shekhar Roy</h3>
            </div>
          </div>
        </div>
        
        {/* Second Faculty Card */}
        <div className="relative w-[80%] md:w-[35%] lg:w-[25%]">
          <div className="rounded-xl overflow-hidden border-2 border-white">
            <img
              src="https://via.placeholder.com/300x400" // Replace with actual faculty image
              alt="Faculty Member"
              className="w-full h-auto"
            />
            {/* Name Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-[1vw] px-[1vw]">
              <h3 className="text-white lg:text-[1.5vw] text-[4vw] font-bold text-center">Faculty Name</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;