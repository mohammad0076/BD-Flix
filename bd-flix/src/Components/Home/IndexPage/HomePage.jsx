import React, { useEffect, useState } from 'react';
import useTitle from '../../../Hooks/UseTitle/UseTitle';
import Brand from '../Brand';
import Slider from '../IndexSlider/Slider';
import MostPopular from '../MostPopular/MostPopular';
<<<<<<< HEAD
import MoviesForYou from '../MoviesForYou/MoviesForYou';
=======
import MoviesForYou from '../MostPopular/MoviesForYou';
>>>>>>> 82acbb87897da27b9701ec70020feaab3a10de00
import SiFi from '../MostPopular/SiFi';
import Thriller from '../MostPopular/Thriller';
import Adventure from '../MostPopular/Adventure';
import Action from '../MostPopular/Action';
import Romantic from '../MostPopular/Romantic';
import Comedy from '../MostPopular/Comedy';
import Filter from './Filter/Filter';
<<<<<<< HEAD
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AiOutlineArrowRight } from "react-icons/ai"
=======
>>>>>>> 82acbb87897da27b9701ec70020feaab3a10de00


const HomePage = () => {
    const navigate = useNavigate();

    const [searchApiData, setSearchApiData] = useState([])

    useEffect(() => {
        fetch('https://bd-flix-server-emonkumardas.vercel.app/allsearch')
            .then(res => res.json())
            .then(res => {

                setSearchApiData(res)

            });
    }, [])


    const [show, setShow] = useState(true);

    const [loading, setLoading] = useState(false);
    const [filterVal, setFilterVal] = useState([]);
    const [buttonvalue, setbuttonvalue] = useState('');
    const Filters = (e) => {
        e.preventDefault();
        const categoryFromUser = e.target.cat.value;
        setbuttonvalue(categoryFromUser)
        console.log(buttonvalue)




        const categoryDatails = searchApiData.filter(it => it?.category.includes(categoryFromUser))

        setFilterVal(categoryDatails)


    }

    console.log(filterVal);






    useTitle('Home')
    return (
        <div>
            <Slider></Slider>
<<<<<<< HEAD
            <Filter filterVal={filterVal} Filters={Filters} show={show} setShow={setShow} buttonvalue={buttonvalue}></Filter>

            {show && <>
                <div className='lg:my-2 p-4'>
                    <div className='flex justify-between mb-3'>
                        <h1 className='text-md font-bold text-current text-white'>{buttonvalue}</h1>

                        <p className='text-white inline'>See all <AiOutlineArrowRight className='inline text-red-500'></AiOutlineArrowRight></p>
                    </div>

                    <>
                        {
                            loading ? "Loding..." : <div className="carousel carousel-center lg:h-[20vw] h-full"
                            >
                                <div className="carousel-item">
                                    {
                                        filterVal?.map((images, index) => (


                                            <div className={`carousel-item cursor-pointer`}>

                                                <Link to={`/clickedvideo/${images.id}`} className="carousel-item mr-2 overflow-hidden">
                                                    <div className=' relative transition-transform duration-300 ease-in-out transform hover-zoom items'>

                                                        <img
                                                            className='object-cover rounded-sm lg:h-full h-[300px] w-full'
                                                            src={images.poster_path} alt=''
                                                        ></img>
                                                        <div className="most-popular-gradient absolute bottom-0 left-0 w-full h-2/6"></div>
                                                    </div>

                                                </Link>
                                            </div>
                                        )
                                        )}
                                </div>
                            </div>
                        }
                    </>
                </div>
            </>}





=======
            <Filter></Filter>
>>>>>>> 82acbb87897da27b9701ec70020feaab3a10de00
            <Brand></Brand>
            <MostPopular></MostPopular>
            <SiFi></SiFi>
            <Thriller></Thriller>
            <Adventure></Adventure>
            <Action></Action>
            <Romantic></Romantic>
<<<<<<< HEAD
            <MoviesForYou filterVal={filterVal}></MoviesForYou>

            <Comedy></Comedy>
        </div >
=======
            {/* <MoviesForYou></MoviesForYou> */}
            <Comedy></Comedy>
        </div>
>>>>>>> 82acbb87897da27b9701ec70020feaab3a10de00
    );
};

export default HomePage;