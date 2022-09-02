import React from 'react';
import Portrait from './andrewk.png'
import { Link } from 'react-router-dom'

function Summary(props) {
    return (
<aside
  class="overflow-hidden bg-gray-900 sm:grid sm:grid-cols-1 sm:items-center pt-8 sm:pt-5 md:grid-cols-1 md:items-center md:pt-5 -mb-8"
>
  <div class="p-8 md:p-8 lg:px-16 lg:py-10">
    <div class="max-w-xl mx-auto text-center sm:text-left">
      <h2 class="text-2xl font-bold text-white sm:pt-4 md:text-2xl lg:flex lg:justify-center">
        Hello! I'm &nbsp; <span class="text-blue-400"> Andrew Kal </span>: <span class="text-red-400"> Frontend Developer </span>
      </h2>

      <p class="hidden text-gray-300 md:mt-4 md:block font-bold">
         I'm a front-end developer with a background in sales and retail. I love solving problems, collaborating with like-minded people, and getting out of my comfort zone with hobbies like Boxing and Fitness.
After working to help customers find the best hardware and software for their needs, I developed a strong interest in how app development and design makes a difference in people's lives. I am currently looking for a full time position as a Front-end developer and using freelancing as a means to stay engaged in the community and hone my front-end skills. 
        </p>
        <p class="text-gray-300 md:mt-4 md:block mb-8">
        <br></br>
        <strong> Not only do I bring a strong frontend backgroud, I thrive in a culture that shares my ability to struggle empathetically and come out on top.
        </strong>
      </p>
      <div class="flex justify-center"> 
      <div class="flex w-11/12 mt-4 md:mt-8">
        <Link
          to="/projects" target="_blank"
          class="inline-block px-12 py-3 text-sm font-medium text-white transition  bg-gray-500 hover:bg-gray-700" rel="noreferrer"
        >
          Check out my work! [Live]
        </Link>
     
         <a
          href="https://github.com/andrewkalgit" target="_blank"
          class="inline-block px-12 py-3 text-sm font-medium text-white transition bg-gray-400 hover:bg-gray-700" rel="noreferrer"
        >
          Check out my work! [Code]
        </a>
      </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center items-center">
  </div>
  <div class="flex justify-center rounded-lg">
  <img class="w-3/4 sm:w-2/4 md:w-1/4" src={Portrait} alt="Portrait"/>
  </div>
</aside>


    );
}

export default Summary;
