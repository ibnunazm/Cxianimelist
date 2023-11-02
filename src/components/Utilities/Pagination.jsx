import React from 'react'
import { ArrowFatLineLeft, ArrowFatLineRight } from '@phosphor-icons/react'

const Pagination = ({page, lastPage, setPage}) => {
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1)
    scrollToTop()
  }

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1)
    scrollToTop()
  }

  return (
    <div className='flex justify-center items-center p-4 bg-slate-800 text-slate-200 gap-4 text-xl'>
      {page <= 1 ? null : <button onClick={handlePrevPage} className='transition all hover:text-indigo-500 bg-slate-200 text-slate-800 px-3 py-1 rounded-sm'><ArrowFatLineLeft size={20} /></button>}
      <p> {page} of {lastPage} </p>
      {page >=lastPage ? null : <button onClick={handleNextPage} className='transition all hover:text-indigo-500 bg-slate-200 text-slate-800 px-3 py-1 rounded-sm'><ArrowFatLineRight size={20} /></button>}
    </div>
  )
}

export default Pagination