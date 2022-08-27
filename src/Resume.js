import React from 'react';
import Footer from './Footer';
import Resumepdf from './Img/Andrew Kal-SWE-2022 Format (2)-1.png';

function Resume(props) {

    return (    
    <>
    <div class="flex justify-center bg-gray-900">
        <img class="w-2/4" src={Resumepdf} alt="resume"/>
    </div>
    <div class="flex justify-center bg-gray-900">
        <a href={require("./Img/Andrew Kal-SWE-2022 Format.pdf")} download="Andrew Kal's Resume">
        <button class="font-semi-bold w-24 h-8 bg-gray-400 hover:bg-gray-700 rounded-sm mt-4 text-white text-xs">Download</button>
        </a>
    </div>
    <Footer></Footer>
    </>
  );
}

export default Resume;