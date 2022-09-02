import React from 'react';
import Resumepdf from './Img/Andrew Kal-SWE-2022 Format (2)-1.png'

function Contact(props) {
    return (
       <>
       <aside
  class="overflow-hidden bg-gray-900 sm:grid sm:grid-cols-1 sm:items-center pt-5  -mb-8"
>
  <div class="p-8 mt-8">
    <div class="max-w-xl mx-auto text-center text-white">
        <h1 class="text-2xl font-bold text-white md:text-2xl">
            Email: andrewkal327@gmail.com
            <br>
            </br>
            Phone: 732-515-8724 
             <div class="bg-gray-900">
        <a href={require("./Img/Andrew Kal-SWE-2022 Format.pdf")} download="Andrew Kal's Resume">
        <button class="font-semi-bold w-40 h-8 bg-gray-400 hover:bg-gray-700 rounded-sm mt-4 text-white text-sm">Download Resume</button>
        </a>
            </div>
        </h1>
    </div>
  </div>
  <div class="flex justify-center bg-gray-900 -mt-20 sm:-mt-0">
        <img class="mt-4 w-full sm:w-3/4 " src={Resumepdf} alt="resume"/>
    </div>
</aside>
       </>
    );
}

export default Contact;