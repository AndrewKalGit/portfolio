import React from 'react';
import Portrait from './andrewk.png'

function Summary(props) {
    return (
<aside
  class="overflow-hidden bg-gray-900 sm:grid sm:grid-cols-2 sm:items-center pt-5 sm:pt-5 md:pt-2 lg:pt-0 max-h-screen"
>
  <div class="p-8 md:p-12 lg:px-16 lg:py-24">
    <div class="max-w-xl mx-auto text-center sm:text-left">
      <h2 class="text-2xl font-bold text-white md:text-2xl">
        Hello! I'm Andrew Kal: Frontend Developer
      </h2>

      <p class="hidden text-gray-300 md:mt-4 md:block">
        I'm always looking for technical and creative challenges in Frontend web development. Due to technology always changing, I've gained a strong interest in Data Structures and Algorithms alongside web development. It is a topic I've been exploring more as it shows me a fundamental approach to programming and problem solving.
      </p>
        <p class="text-gray-300 md:mt-4 md:block">
        <br></br>
        <strong> Not only do I bring a strong frontend backgroud, but I have a strong ability to adapt and problem solve.
        </strong>
      </p>

      <div class="mt-4 md:mt-8">
        <a
          href="#"
          class="inline-block px-12 py-3 text-sm font-medium text-white transition rounded bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Check out my work!
        </a>
      </div>
    </div>
  </div>

  <img
    alt="#"
    src={Portrait}
    class="object-cover w-full h-full sm:h-[calc(100%_-_2rem)] md:h-[calc(100%_-_4rem)] sm:rounded-tl-[30px] md:rounded-tl-[60px] sm:self-end"
  />
</aside>


    );
}

export default Summary;