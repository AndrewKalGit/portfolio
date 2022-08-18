import React from 'react';
import Resumepdf from './Andrew-K-Res.png';


function Resume(props) {

    return (    
    <>
    <div class="flex justify-center bg-gray-900">
        <img src={Resumepdf} alt="resume"/>
    </div>
    <div class="flex justify-center bg-gray-900">
        <a href={require("./Andrew Kal-SWE-2022 Format.pdf")} download="myFile">
        <button class="font-semi-bold w-24 h-8 bg-gray-400 hover:bg-gray-700 rounded-sm mt-4 text-white text-xs">Download</button>
        </a>
    </div>
    </>
  );
}

export default Resume;