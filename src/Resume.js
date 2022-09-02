import React from 'react';
import Footer from './Footer';
import Resumepdf2 from './AndrewKalFrontEnd.png';

function Resume(props) {

    return (    
    <>
    <div class="flex justify-center bg-gray-900">
        <img class="w-2/4" src={Resumepdf2} alt="resume"/>
    </div>
    <div class="flex justify-center bg-gray-900">
        <a href={require("./Img/AndrewKalFrontEnd.pdf")} download="Andrew Kal's Resume">
        <button class="font-semi-bold w-24 h-8 bg-gray-400 hover:bg-gray-700 rounded-sm mt-4 text-white text-xs">Download</button>
        </a>
    </div>
    <Footer></Footer>
    </>
  );
}

export default Resume;