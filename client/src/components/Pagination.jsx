import React from 'react'

const Pagination = ({currentPage,dataLen,itemsPerPage,onPageChange})=>{

    let totalPages =  Math.ceil(dataLen/itemsPerPage)

    function prevPageHandle(){
        onPageChange(currentPage-1)
    }

    function nextPageHandle(){
        onPageChange(currentPage+1)
    }

    return(
        <>
            <div className=' flex justify-center items-center mt-6 mb-6 '>
                <div className='w-full text-center '>
                    <button onClick={prevPageHandle} disabled={currentPage===1} className='mr-2 px-4 border-indigo-300 border-2 rounded-lg hover:bg-indigo-300 hover:shadow-xl hover:text-white disabled:bg-gray-400 disabled:cursor-not-allowed disabled:border-none'>Prev</button>
                    <spam>{currentPage} of {totalPages}</spam>
                    <button  onClick={nextPageHandle} disabled={currentPage===totalPages} className='ml-2 px-4 border-indigo-300 border-2 rounded-lg hover:bg-indigo-300 hover:shadow-xl hover:text-white disabled:bg-gray-400 disabled:cursor-not-allowed disabled:border-none'>Next</button>
                </div>
            </div>
        </>
    )
}

export default Pagination;