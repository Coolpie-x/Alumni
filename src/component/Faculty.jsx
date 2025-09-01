import React from 'react';

const Faculty = () => {
  return (
    <div className="bg-black text-white py-12 flex items-center justify-center">
      <div className="flex flex-col items-center w-[90%] max-w-6xl">
        {/* Section Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-orange-300 mb-8 md:mb-12 uppercase text-center">
          MEET OUR FACULTY ADVISERS
        </h1>
        
        {/* Faculty Cards Container */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 justify-center items-center w-full">
          {/* First Faculty Card */}
          <div className="relative group">
            <div className="overflow-hidden rounded-[2rem] border-2 border-white/20 bg-gradient-to-br from-gray-900 to-black p-3 shadow-lg">
              <div className="overflow-hidden rounded-[1.7rem] border border-white/10">
                <img
                  src="https://nitdgp.ac.in/uploads/92.jpg"
                  alt="Faculty Adviser"
                  className="w-64 h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent p-5 text-center rounded-b-[2rem]">
              <h3 className="text-[#ffd4ac] text-xl font-bold">Dr. Shri Krishan Rai</h3>
              <p className="text-white/80 text-sm mt-1">Humanities and Social Sciences</p>
            </div>
          </div>
          
          {/* Second Faculty Card */}
          <div className="relative group">
            <div className="overflow-hidden rounded-[2rem] border-2 border-white/20 bg-gradient-to-br from-gray-900 to-black p-3 shadow-lg">
              <div className="overflow-hidden rounded-[1.7rem] border border-white/10">
                <img
                  src="https://nitdgp.ac.in/uploads/8cbc75ef6d94a6dcb692307fee534694.jpeg"
                  alt="Faculty Adviser"
                  className="w-64 h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent p-5 text-center rounded-b-[2rem]">
              <h3 className="text-[#ffd4ac] text-xl font-bold">Dr. Manisha Bal</h3>
              <p className="text-white/80 text-sm mt-1">Chemical Engineering</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;