import React from 'react';

const AllmoviesCard = ({ loading, allMovies }) => {
    return (
        <>
            {loading ? "Loading..." : <div className="w-[100%] cursor-pointer p-1 rounded-md shadow-md dark:text-gray-50">
                <img src={allMovies.poster_path} alt="" className="object-cover w-[100%] rounded-md h-72" />
                <div className="mt-6 mb-2">
                    <span className="block text-xs font-semibold tracking-widest uppercase dark:text-green-600">{allMovies.original_title}</span>
                    <div>

                    </div>
                </div>

            </div>}
        </>

    );
};

export default AllmoviesCard;