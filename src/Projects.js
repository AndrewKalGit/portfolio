import React from 'react';
import Amoria from './Img/Amoria.png'
import Boxing from './Img/BoxingSiteImg.jpg'
import Tower from './Img/TowerofHanoi.png'
import Weather from './Img/Weather.png'
import Peeep from './Img/Peeep.png'
import FELP from './Img/FELP-landingpage.png'
import Nav from './Nav'

function Projects(props) {
    return (
<>
<Nav></Nav>
<div>
<section class="text-white bg-gray-900">
  <div class="max-w-screen-4xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="flex justify-center text-center pb-12 sm:pb-0">
    <div class="max-w-xl">
      <h2 class="text-3xl font-bold sm:text-4xl">Projects</h2>

      <p class="mt-4 text-gray-300">
        <strong>
        Highlights of my works
        </strong>
      </p>
    </div>
    </div>
    <div
      class="grid grid-cols-1 gap-8 mt-8 sm:gap-12 sm:mt-12 sm:grid-cols-2 md:grids-cols-2 lg:grid-cols-2 2xl:grid-cols-3"
    >
      <a href="https://amoriatea.com" target="_blank" class="block overflow-hidden rounded-2xl" rel="noreferrer">
  <img class="object-cover w-full h-56" src={Amoria} alt="Bubble tea cafe site" />

  <div class="p-4 bg-gray-700">
    <p class="text-xs text-gray-400">www.amoriatea.com</p>

    <h5 class="text-sm text-white"><span class="font-extrabold text-md"> Freelance: </span>Bubble Tea Website</h5>

    <p class="h-20 mt-1 text-xs text-gray-300">Utilized react-router-dom, useState, and useEffect to give the site some functionality. Leveraged Tailwind CSS to make site responsive and make a clean user interface.</p>
  </div>
</a>
     <a href="https://brunswickboxingstars.netlify.app" target="_blank" class="block overflow-hidden rounded-2xl" rel="noreferrer">
  <img class="object-cover w-full h-56" src={Boxing} alt="Boxing Site" />

  <div class="p-4 bg-gray-700">
    <p class="text-xs text-gray-400">www.brunswickboxingstars.com</p>

    <h5 class="text-sm text-white"> <span class="font-extrabold text-md"> Freelance: </span>Boxing Gym Website</h5>

    <p class="h-20 mt-1 text-xs text-gray-300">Integrated Twilio API to create a functioning contact form. Managed styling of multiple components and pages using Tailwind.</p>
  </div>
</a>
<a href="https://andrewkal-portfolio.netlify.app" target="_blank" class="block overflow-hidden rounded-2xl" rel="noreferrer">
  <img class="object-cover w-full h-56" src={FELP} alt="Weather App" />

  <div class="p-4 bg-gray-700">
    <p class="text-xs text-gray-400">https://andrewkal-portfolio.netlify.app</p>

    <h5 class="text-sm text-white">Weather App</h5>

    <p class="h-20 mt-1 text-xs text-gray-300">Generated forms and search bars for users to interact with, to simulate an intuitive self help display.</p>
  </div>
</a>
   <a href="https://andrewkalgit.github.io/Tower-of-Hanoi/" target="_blank" class="block overflow-hidden rounded-2xl" rel="noreferrer">
  <img class="object-cover w-full h-56" src={Tower} alt="Tower of Hanoi" />

  <div class="p-4 bg-gray-700">
    <p class="text-xs text-gray-400">Andrewkalgit.github.io/Tower-of-Hanoi/</p>

    <h5 class="text-sm text-white">Recursive Thinking Game</h5>

    <p class="h-20 mt-1 text-xs text-gray-300">Implemented JavaScript, CSS, HTML to create a browser based game. Enabled user interaction to interface using DOM manipulation.</p>
  </div>
</a>
     
   <a href="https://peeep.netlify.app" target="_blank" class="block overflow-hidden rounded-2xl" rel="noreferrer">
  <img class="object-cover w-full h-56" src={Peeep} alt="Social Media App" />

  <div class="p-4 bg-gray-700">
    <p class="text-xs text-gray-400">www.peeep.netlify.app</p>

    <h5 class="text-sm text-white">Basic Social Media Site</h5>

    <p class="h-20 mt-1 text-xs text-gray-300">Added AWS to support web application functionality.</p>
  </div>
</a>
<a href="https://weather-it-is-me.netlify.app" target="_blank" class="block overflow-hidden rounded-2xl" rel="noreferrer">
  <img class="object-cover w-full h-56" src={Weather} alt="Weather App" />

  <div class="p-4 bg-gray-700">
    <p class="text-xs text-gray-400">www.weather-it-is-me.netlify.app</p>

    <h5 class="text-sm text-white">Weather App</h5>

    <p class="h-20 mt-1 text-xs text-gray-300">Generated forms and search bars for users to interact with, to simulate an intuitive self help display.</p>
  </div>
</a>
</div>
</div>
</section>
</div>
</>
    );
}

export default Projects;
 