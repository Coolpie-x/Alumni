import React from 'react';

const Faculty = () => {
  return (
    <div className="bg-black text-white py-12 flex items-center justify-center">
      <div className="flex flex-col items-center w-[90%] max-w-6xl">
        {/* Section Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-orange-300 mb-8 md:mb-12 uppercase text-center">
          MEET OUR FACULTY ADVISERS
        </h1>
        
        {/* Outer Box with #ffd4ac border */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-center w-full">
          {/* Faculty Cards Container */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-center w-full">
            {/* First Faculty Card */}
            <div className="relative group">
              <div className="overflow-hidden rounded-xl border-2 border-[#ffd4ac]">
                <img
                  src="https://nitdgp.ac.in/uploads/92.jpg"
                  alt="Faculty Adviser"
                  className="w-64 h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 text-center">
                <h3 className="text-[#ffd4ac] text-xl font-bold">Dr. Shri Krishan Rai</h3>
                <p className="text-white text-sm mt-1">Humanities and Social Sciences</p>
              </div>
            </div>
            
            {/* Second Faculty Card */}
            <div className="relative group">
              <div className="overflow-hidden rounded-xl border-2 border-[#ffd4ac]">
                <img
                  src="https://nitdgp.ac.in/uploads/8cbc75ef6d94a6dcb692307fee534694.jpeg"
                  alt="Faculty Adviser"
                  className="w-64 h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 text-center">
                <h3 className="text-[#ffd4ac] text-xl font-bold">Dr. Manisha Bal</h3>
                <p className="text-white text-sm mt-1">Chemical Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;