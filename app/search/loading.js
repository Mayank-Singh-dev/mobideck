import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Loading = () => {
  return (
    <main>
      {/* <Navbar className="bg-black"/> */}
      <div className="bg-black w-full h-full text-white font-homenaje animate-pulse">
        {/* Skeleton for title */}

        <div className="pt-8 pl-5 overflow-x-auto" id="parentDiv">
          {/* Skeleton for movie cards */}
          <div className="flex gap-4 flex-wrap">
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className="mb-4 w-[230px] md:w-auto md:h-auto min-w-[230px] md:min-w-[270px] rounded-3xl bg-gray-700 animate-pulse"
              >
                <div className="w-[230px] h-[300px] md:w-[270px] md:h-[400px] max-h-full rounded-3xl bg-gray-800">
                  &nbsp;
                </div>
                <div className="pt-4">
                  {/* Skeleton for movie title */}
                  <div className="h-6 w-4/5 bg-gray-700 rounded-md mb-3">
                    &nbsp;
                  </div>
                  {/* Skeleton for movie details */}
                  <div className="flex gap-2">
                    <div className="h-6 w-12 bg-gray-700 rounded-md">
                      &nbsp;
                    </div>
                    <div className="h-6 w-12 bg-gray-700 rounded-md">
                      &nbsp;
                    </div>
                  </div>
                  {/* Skeleton for buttons */}
                  <div className="flex gap-2 mt-4">
                    <div className="h-10 w-20 bg-gray-700 rounded-3xl">
                      &nbsp;
                    </div>
                    <div className="h-10 w-16 bg-gray-700 rounded-3xl ml-auto">
                      &nbsp;
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
      <Footer/>
    </main>
  )
}



export default Loading;