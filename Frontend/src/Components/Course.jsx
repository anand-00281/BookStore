import React from 'react';
import list from '../../public/list.json';
import Cards from './Cards';
import { Link } from 'react-router-dom';

const Course = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='pt-28 items-center justify-center text-center'>
        <h1 className='text-2xl font-semibold md:text-4xl'>
          We are delighted to have you <span className='text-pink-500'>Here! :)</span>
        </h1>
        <p className='mt-10'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quo cumque, facere aliquam, repudiandae dolorem quibusdam magnam impedit dolore dolorum culpa nam nihil perspiciatis deserunt harum excepturi sint quisquam porro omnis laboriosam aspernatur commodi. Illum quis tenetur tempore similique, sunt ea enim, consequuntur rem accusantium accusamus nostrum, laudantium ducimus! Cupiditate.
        </p>
        <Link to="/">
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md mt-7 md:bg-pink-600 duration-300">
            Back
          </button>
        </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
          list.map((item) => (
            <Cards item={item} key={item.id} />
          ))
        }
      </div>
    </div>
  );
};

export default Course;
