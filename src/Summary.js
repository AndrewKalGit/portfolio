import React from 'react';
import Portrait from './andrewk.png'

function Summary(props) {
    return (
<aside
  class="overflow-hidden bg-gray-900 sm:grid sm:grid-cols-2 sm:items-center pt-5 sm:pt-5 md:pt-2 lg:pt-0 -mb-8"
>
  <div class="p-8 md:p-12 lg:px-16 lg:py-24">
    <div class="max-w-xl mx-auto text-center sm:text-left">
      <h2 class="text-2xl font-bold text-white md:text-2xl">
        Hello! I'm <span class="text-blue-400"> Andrew Kal </span>: <span class="text-red-400"> Frontend Developer </span>
      </h2>

      <p class="hidden text-gray-300 md:mt-4 md:block">
        I'm a front-end developer with a background in sales and retail. I love solving problems, collaborating with like-minded people, and getting out of my comfort zone with hobbies like Boxing and Fitness.
After working to help customers find the best hardware and software for their needs, I developed a strong interest in how app development and design makes a difference in people's lives. Currently I am working as a freelance web developer. I reach out to local businesses to continue to challenge myself and problem solve for the community. I am currently looking for a full time position as a Front-end developer and using freelancing as a means to stay engaged in the community and hone my front-end skills. 
        </p>
        <p class="text-gray-300 md:mt-4 md:block">
        <br></br>
        <strong> Not only do I bring a strong frontend backgroud, I thrive in a culture that shares my ability to struggle empathetically and come out on top.
        </strong>
      </p>

      <div class="mt-4 md:mt-8">
        <a
          href="https://github.com/AndrewKalGit" target="_blank"
          class="inline-block px-12 py-3 text-sm font-medium text-white transition rounded bg-gray-400 hover:bg-gray-700"
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
