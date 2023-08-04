export const metadata={
  title:"Search"
}
import React from 'react'
import SearchCard from './components/SearchCard'

const page = () => {
  return (
    <div className="bg-black h-auto text-white pt-[100px] ">
        <SearchCard/>
    </div>
  )
}

export default page