import React from 'react';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import API from './svg/icons8-rest-api-24.png'


function Skills(props) {
    return (
<div> 
<section class="text-white bg-gray-900">
  <div class="max-w-screen-4xl px-4 mb-20 sm:px-6 lg:px-8">
    <div class="flex justify-center text-center pb-12 sm:pb-0">
    <div class="max-w-xl">
      <h2 class="text-3xl font-bold sm:text-4xl mt-16">Skills</h2>
      <p class="mt-4 text-gray-300">
        <strong>
        Explore my Frontend Developer and Programming Skills
        </strong>
      </p>
    </div>
    </div>
    <div
      class="grid grid-cols-1 gap-8 md:gap-12 md:mt-12 md:grid-cols-2 lg:grid-cols-5"
    >
      <div class="flex items-start">
        <span class="flex-shrink-0 p-4 bg-gray-400 rounded-lg">
         <svg width="24px" height="24px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 7.58387C14.5 9.24072 11.366 10.5839 7.5 10.5839C3.63401 10.5839 0.5 9.24072 0.5 7.58387C0.5 5.92701 3.63401 4.58387 7.5 4.58387C11.366 4.58387 14.5 5.92701 14.5 7.58387Z" stroke="black"/>
<path d="M4.16589 13.7389C5.62274 14.5281 8.29645 12.4121 10.1378 9.01277C11.9791 5.61345 12.2908 2.21803 10.834 1.42888C9.37712 0.639735 6.70341 2.7557 4.86207 6.15502C3.02073 9.55434 2.70904 12.9498 4.16589 13.7389Z" stroke="black"/>
<path d="M10.834 13.7389C9.37714 14.5281 6.70343 12.4121 4.86209 9.01277C3.02075 5.61345 2.70906 2.21803 4.16591 1.42888C5.62276 0.639735 8.29647 2.7557 10.1378 6.15502C11.9792 9.55434 12.2908 12.9498 10.834 13.7389Z" stroke="black"/>
<path d="M6.5 7.58387C6.5 8.13615 6.94772 8.58387 7.5 8.58387C8.05228 8.58387 8.5 8.13615 8.5 7.58387C8.5 7.03158 8.05228 6.58387 7.5 6.58387C6.94772 6.58387 6.5 7.03158 6.5 7.58387Z" stroke="black"/>
</svg>
        </span>

        <div class="ml-4">
          <h2 class="text-lg font-bold">React.js</h2>
        </div>
      </div>
      <div class="flex items-start">
        <span class="flex-shrink-0 p-4 bg-gray-400 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-binary" viewBox="0 0 16 16">
  <path d="M5.526 13.09c.976 0 1.524-.79 1.524-2.205 0-1.412-.548-2.203-1.524-2.203-.978 0-1.526.79-1.526 2.203 0 1.415.548 2.206 1.526 2.206zm-.832-2.205c0-1.05.29-1.612.832-1.612.358 0 .607.247.733.721L4.7 11.137a6.749 6.749 0 0 1-.006-.252zm.832 1.614c-.36 0-.606-.246-.732-.718l1.556-1.145c.003.079.005.164.005.249 0 1.052-.29 1.614-.829 1.614zm5.329.501v-.595H9.73V8.772h-.69l-1.19.786v.688L8.986 9.5h.05v2.906h-1.18V13h3z"/>
  <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
</svg>
        </span>

        <div class="ml-4">
          <h2 class="text-lg font-bold"> Data Structures </h2>
        </div>
      </div>   
      <div class="flex items-start">
        <span class="flex-shrink-0 p-4 bg-gray-400 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-filetype-html" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5Zm-9.736 7.35v3.999h-.791v-1.714H1.79v1.714H1V11.85h.791v1.626h1.682V11.85h.79Zm2.251.662v3.337h-.794v-3.337H4.588v-.662h3.064v.662H6.515Zm2.176 3.337v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596H9.93L8.79 11.85h-.805v3.999h.706Zm4.71-.674h1.696v.674H12.61V11.85h.79v3.325Z"/>
</svg>
        </span>

        <div class="ml-4">
          <h2 class="text-lg font-bold"> HTML </h2>
        </div>
      </div>   

      <div class="flex items-start">
        <span class="flex-shrink-0 p-4 bg-gray-400 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-filetype-css" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM3.397 14.841a1.13 1.13 0 0 0 .401.823c.13.108.289.192.478.252.19.061.411.091.665.091.338 0 .624-.053.859-.158.236-.105.416-.252.539-.44.125-.189.187-.408.187-.656 0-.224-.045-.41-.134-.56a1.001 1.001 0 0 0-.375-.357 2.027 2.027 0 0 0-.566-.21l-.621-.144a.97.97 0 0 1-.404-.176.37.37 0 0 1-.144-.299c0-.156.062-.284.185-.384.125-.101.296-.152.512-.152.143 0 .266.023.37.068a.624.624 0 0 1 .246.181.56.56 0 0 1 .12.258h.75a1.092 1.092 0 0 0-.2-.566 1.21 1.21 0 0 0-.5-.41 1.813 1.813 0 0 0-.78-.152c-.293 0-.551.05-.776.15-.225.099-.4.24-.527.421-.127.182-.19.395-.19.639 0 .201.04.376.122.524.082.149.2.27.352.367.152.095.332.167.539.213l.618.144c.207.049.361.113.463.193a.387.387 0 0 1 .152.326.505.505 0 0 1-.085.29.559.559 0 0 1-.255.193c-.111.047-.249.07-.413.07-.117 0-.223-.013-.32-.04a.838.838 0 0 1-.248-.115.578.578 0 0 1-.255-.384h-.765ZM.806 13.693c0-.248.034-.46.102-.633a.868.868 0 0 1 .302-.399.814.814 0 0 1 .475-.137c.15 0 .283.032.398.097a.7.7 0 0 1 .272.26.85.85 0 0 1 .12.381h.765v-.072a1.33 1.33 0 0 0-.466-.964 1.441 1.441 0 0 0-.489-.272 1.838 1.838 0 0 0-.606-.097c-.356 0-.66.074-.911.223-.25.148-.44.359-.572.632-.13.274-.196.6-.196.979v.498c0 .379.064.704.193.976.131.271.322.48.572.626.25.145.554.217.914.217.293 0 .554-.055.785-.164.23-.11.414-.26.55-.454a1.27 1.27 0 0 0 .226-.674v-.076h-.764a.799.799 0 0 1-.118.363.7.7 0 0 1-.272.25.874.874 0 0 1-.401.087.845.845 0 0 1-.478-.132.833.833 0 0 1-.299-.392 1.699 1.699 0 0 1-.102-.627v-.495ZM6.78 15.29a1.176 1.176 0 0 1-.111-.449h.764a.578.578 0 0 0 .255.384c.07.049.154.087.25.114.095.028.201.041.319.041.164 0 .301-.023.413-.07a.559.559 0 0 0 .255-.193.507.507 0 0 0 .085-.29.387.387 0 0 0-.153-.326c-.101-.08-.256-.144-.463-.193l-.618-.143a1.72 1.72 0 0 1-.539-.214 1 1 0 0 1-.351-.367 1.068 1.068 0 0 1-.123-.524c0-.244.063-.457.19-.639.127-.181.303-.322.527-.422.225-.1.484-.149.777-.149.304 0 .564.05.779.152.217.102.384.239.5.41.12.17.187.359.2.566h-.75a.56.56 0 0 0-.12-.258.624.624 0 0 0-.246-.181.923.923 0 0 0-.37-.068c-.216 0-.387.05-.512.152a.472.472 0 0 0-.184.384c0 .121.047.22.143.3a.97.97 0 0 0 .404.175l.621.143c.217.05.406.12.566.211.16.09.285.21.375.358.09.148.135.335.135.56 0 .247-.063.466-.188.656a1.216 1.216 0 0 1-.539.439c-.234.105-.52.158-.858.158-.254 0-.476-.03-.665-.09a1.404 1.404 0 0 1-.478-.252 1.13 1.13 0 0 1-.29-.375Z"/>
</svg>
        </span>

        <div class="ml-4">
          <h2 class="text-lg font-bold"> CSS </h2>
        </div>
      </div>   
      <div class="flex items-start">
        <span class="flex-shrink-0 p-4 bg-gray-400 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-filetype-js" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2H8v-1h4a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM3.186 15.29a1.176 1.176 0 0 1-.111-.449h.765a.578.578 0 0 0 .255.384c.07.049.153.087.249.114.095.028.202.041.319.041.164 0 .302-.023.413-.07a.559.559 0 0 0 .255-.193.507.507 0 0 0 .085-.29.387.387 0 0 0-.153-.326c-.101-.08-.255-.144-.462-.193l-.619-.143a1.72 1.72 0 0 1-.539-.214 1.001 1.001 0 0 1-.351-.367 1.068 1.068 0 0 1-.123-.524c0-.244.063-.457.19-.639.127-.181.303-.322.528-.422.224-.1.483-.149.776-.149.305 0 .564.05.78.152.216.102.383.239.5.41.12.17.186.359.2.566h-.75a.56.56 0 0 0-.12-.258.624.624 0 0 0-.247-.181.923.923 0 0 0-.369-.068c-.217 0-.388.05-.513.152a.472.472 0 0 0-.184.384c0 .121.048.22.143.3a.97.97 0 0 0 .405.175l.62.143c.218.05.406.12.566.211.16.09.285.21.375.358.09.148.135.335.135.56 0 .247-.063.466-.188.656a1.216 1.216 0 0 1-.539.439c-.234.105-.52.158-.858.158-.254 0-.476-.03-.665-.09a1.404 1.404 0 0 1-.478-.252 1.13 1.13 0 0 1-.29-.375Zm-3.104-.033A1.32 1.32 0 0 1 0 14.791h.765a.576.576 0 0 0 .073.27.499.499 0 0 0 .454.246c.19 0 .33-.055.422-.164.092-.11.138-.265.138-.466v-2.745h.79v2.725c0 .44-.119.774-.357 1.005-.236.23-.564.345-.984.345a1.59 1.59 0 0 1-.569-.094 1.145 1.145 0 0 1-.407-.266 1.14 1.14 0 0 1-.243-.39Z"/>
</svg>
        </span>

        <div class="ml-4">
          <h2 class="text-lg font-bold"> JavaScript </h2>
        </div>
      </div>   
      <div class="flex items-start">
        <span class="flex-shrink-0 p-4 bg-gray-400 rounded-lg">
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-filetype-py" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2H7v-1h5a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM0 11.85h1.6c.289 0 .533.06.732.179.201.117.355.276.46.477.105.201.158.427.158.677 0 .25-.054.476-.16.677-.106.199-.26.357-.464.474a1.452 1.452 0 0 1-.732.173H.79v1.342H0V11.85Zm2.06 1.714a.795.795 0 0 0 .085-.381c0-.227-.062-.4-.185-.521-.123-.122-.294-.182-.513-.182H.788v1.406h.66a.794.794 0 0 0 .374-.082.574.574 0 0 0 .238-.24Zm2.963.75v1.535H4.23v-1.52L2.89 11.85h.876l.853 1.696h.032l.856-1.696h.855l-1.339 2.464Z"/>
</svg>
        </span>

        <div class="ml-4">
          <h2 class="text-lg font-bold"> Python </h2>
        </div>
      </div>   
      <div class="flex items-start">
        <span class="flex-shrink-0 p-4 bg-gray-400 rounded-lg">
        <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"/></svg>
        </span>

        <div class="ml-4">
          <h2 class="text-lg font-bold"> Tailwind </h2>
        </div>
      </div>
      {/* <div class="flex items-start">
        <span class="flex-shrink-0 p-4 bg-gray-400 rounded-lg">
         <svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>Sass icon</title><path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM9.615 15.998c.175.645.156 1.248-.024 1.792l-.065.18c-.024.061-.052.12-.078.176-.14.29-.326.56-.555.81-.698.759-1.672 1.047-2.09.805-.45-.262-.226-1.335.584-2.19.871-.918 2.12-1.509 2.12-1.509v-.003l.108-.061zm9.911-10.861c-.542-2.133-4.077-2.834-7.422-1.645-1.989.707-4.144 1.818-5.693 3.267C4.568 8.48 4.275 9.98 4.396 10.607c.427 2.211 3.457 3.657 4.703 4.73v.006c-.367.18-3.056 1.529-3.686 2.925-.675 1.47.105 2.521.615 2.655 1.575.436 3.195-.36 4.065-1.649.84-1.261.766-2.881.404-3.676.496-.135 1.08-.195 1.83-.104 2.101.24 2.521 1.56 2.43 2.1-.09.539-.523.854-.674.944-.15.091-.195.12-.181.181.015.09.091.09.21.075.165-.03 1.096-.45 1.141-1.471.045-1.29-1.186-2.729-3.375-2.7-.9.016-1.471.091-1.875.256-.03-.045-.061-.075-.105-.105-1.35-1.455-3.855-2.475-3.75-4.41.03-.705.285-2.564 4.8-4.814 3.705-1.846 6.661-1.335 7.171-.21.733 1.604-1.576 4.59-5.431 5.024-1.47.165-2.235-.404-2.431-.615-.209-.225-.239-.24-.314-.194-.12.06-.045.255 0 .375.12.3.585.825 1.396 1.095.704.225 2.43.359 4.5-.45 2.324-.899 4.139-3.405 3.614-5.505l.073.067z"/></svg>
        </span>

        <div class="ml-4">
          <h2 class="text-lg font-bold"> Sass</h2>
        </div>
      </div>   
      <div class="flex items-start">
        <span class="flex-shrink-0 p-4 bg-gray-400 rounded-lg">
         <svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>TypeScript icon</title><path d="M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925.011-.016.11-.077.22-.141.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002l.008.983H10.59v8.876H8.38v-8.876H5.258v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.012z"/></svg>
        </span>

        <div class="ml-4">
          <h2 class="text-lg font-bold"> TypeScript </h2>
        </div>
      </div>       */}
     <div class="flex items-start">
        <span class="flex-shrink-0 p-4 bg-gray-400 rounded-lg">
          <img src={API} alt="API"/>
        </span>

        <div class="ml-4">
          <h2 class="text-lg font-bold">REST API Integration</h2>
        </div>
      </div>
        <div class="flex items-start">
        <span class="flex-shrink-0 p-4 bg-gray-400 rounded-lg">
          <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.248 6.685c-.656 2.694-.614 2.55-1.209 5.014-.013.227-.201.406-.43.406-.025 0-.05-.002-.074-.006h.003-.675c-.02.004-.044.006-.067.006-.203 0-.37-.151-.396-.346v-.002c-.577-1.846-1.35-4.41-1.87-6.125-.192-.633-.066-.618.436-.605.174.005.342 0 .515 0 .012-.001.026-.002.041-.002.196 0 .358.145.385.333v.002c.169.605.281 1.069 1.246 4.88.018.075.042.146.066.215h.051c.023-.094.051-.182.075-.277q.548-2.313 1.092-4.63c.113-.48.314-.525.8-.525h.356c.32.005.422.07.502.389.281 1.097 1.102 4.77 1.251 5.174.24-.858-.084.37 1.336-5.108.098-.379.192-.454.577-.454h.591c.253.005.328.084.267.333-.113.446-.136.464-1.935 6.228-.146.464-.197.506-.684.506h-.497c-.342 0-.431-.061-.515-.394-.202-.759-1.092-4.485-1.238-5.01zm-6.364 5.211c.068.139.208.233.37.233.114 0 .216-.046.291-.121l.295-.197c.32-.211.342-.295.169-.633-.186-.354-.296-.773-.296-1.218 0-.015 0-.03 0-.045v.002c0-.146.028-2.61-.042-3.13-.062-.87-.665-1.584-1.471-1.811l-.014-.003c-.353-.098-.758-.154-1.177-.154-.126 0-.252.005-.375.015l.016-.001c-.736.029-1.42.224-2.025.547l.025-.012c-.091.049-.159.13-.191.227l-.001.003c-.026.118-.041.254-.041.393 0 .061.003.122.008.182l-.001-.008c.028.277.122.328.384.24.24-.08.469-.182.708-.253.345-.128.743-.202 1.159-.202.323 0 .635.045.931.128l-.024-.006c.317.095.564.334.668.639l.002.007c.077.258.122.554.122.861 0 .094-.004.188-.012.28l.001-.012c0 .258-.005.258-.258.211-.43-.107-.923-.169-1.431-.169-.187 0-.373.008-.556.025l.024-.002c-.726.053-1.36.406-1.787.933l-.004.005c-.26.36-.416.811-.416 1.298 0 .197.025.387.073.569l-.003-.016c.104.682.588 1.228 1.225 1.422l.012.003c.28.1.603.158.94.158.667 0 1.282-.227 1.77-.608l-.006.005c.178-.131.338-.29.52-.446.146.234.272.454.417.656zm-.72-2.887h.005c.111 0 .201.09.201.201 0 .014-.001.027-.004.041v-.001c-.01.178.005.356-.014.534-.05.523-.377.959-.83 1.164l-.009.004c-.294.154-.641.245-1.01.245-.075 0-.149-.004-.222-.011l.009.001c-.529-.031-.946-.467-.946-1.001 0-.082.01-.162.029-.239l-.001.007c.026-.548.46-.987 1.004-1.021h.003c.21-.034.452-.053.698-.053.388 0 .766.048 1.126.138l-.032-.007zm16.346 3.051c.825-.277 1.408-1.043 1.408-1.945 0-.141-.014-.279-.041-.412l.002.013c-.107-.653-.564-1.177-1.169-1.379l-.012-.004c-.912-.286-1.659-.575-2.383-.905l.129.053c-.209-.105-.351-.315-.356-.559v-.001c-.006-.037-.009-.079-.009-.122 0-.419.318-.763.726-.805h.003c.211-.05.453-.078.702-.078.217 0 .43.022.635.063l-.02-.003c.342.066.67.197 1.003.295.131.042.277.098.366-.075.046-.097.073-.211.073-.33 0-.298-.166-.557-.411-.689l-.004-.002c-.494-.236-1.074-.373-1.686-.373-.546 0-1.066.11-1.54.308l.026-.01c-.725.288-1.228.984-1.228 1.797 0 .779.462 1.451 1.127 1.755l.012.005c.361.174.754.277 1.134.417s.759.272 1.13.426c.256.142.427.411.427.72 0 .286-.146.537-.368.684l-.003.002c-1.298.72-3.04-.113-3.243-.178-.154-.051-.248.01-.295.174-.038.089-.06.193-.06.302 0 .369.255.679.599.761l.005.001c.531.213 1.146.336 1.79.336.546 0 1.072-.089 1.563-.253l-.035.01zm-7.634 7.625c2.498-.268 4.766-1.052 6.763-2.244l-.076.042c.375-.22.726-.48 1.082-.736.342-.24.15-.862-.53-.572-2.344 1.029-5.066 1.687-7.925 1.821l-.051.002c-.3.015-.651.023-1.004.023-1.152 0-2.284-.088-3.389-.258l.123.016c-3.117-.449-5.924-1.458-8.429-2.927l.109.059c-.088-.059-.189-.107-.297-.139l-.008-.002c-.23-.051-.361.22-.113.454 3.069 2.838 7.189 4.578 11.716 4.578h.014-.001c.675-.038 1.35-.042 2.015-.117zm8.187-4.32c.694.038.909.277.736.946-.178.694-.436 1.369-.651 2.053-.042.136-.197.295-.038.413.174.122.305-.047.422-.154.455-.433.813-.962 1.044-1.555l.01-.029c.258-.564.408-1.224.408-1.919 0-.016 0-.031 0-.047v.002c-.01-.29-.084-.413-.366-.492-.224-.069-.487-.122-.757-.148l-.016-.001c-.183-.023-.394-.036-.609-.036-.836 0-1.626.197-2.327.546l.03-.014c-.155.084-.289.176-.412.28l.004-.003c-.051.042-.15.248.113.286.024.002.053.003.081.003.069 0 .137-.006.202-.018l-.007.001c.526-.075 1.134-.118 1.751-.118.134 0 .267.002.4.006h-.019z"/></svg>
        </span>

        <div class="ml-4">
          <h2 class="text-lg font-bold"> AWS </h2>
        </div>
      </div>
      <div class="flex items-start">
        <span class="flex-shrink-0 p-4 bg-gray-400 rounded-lg">
          <svg width="24px" height="24" viewBox="0 -2.17 107.328 107.328" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-210.48 -42.522)"><path d="M280.738,82.035V56.693L258.792,44.022,236.845,56.693V82.035l21.946,12.671Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/><path d="M236.845,56.693l21.946,12.671,21.946-12.671" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/><line y1="25.341" transform="translate(258.792 69.364)" stroke-width="3" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M266.08,117.111H249.22l-23.55-23.55a8.1,8.1,0,0,0-11.207-.4,7.881,7.881,0,0,0-.174,11.315l26.092,26.092a7.882,7.882,0,0,0,5.574,2.309h25.553a15.1,15.1,0,0,1,7.235,1.845l16.059,8.758" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/><path d="M266.08,117.111H252.921A7.111,7.111,0,0,1,245.81,110h0a7.111,7.111,0,0,1,7.111-7.111h18.731a16.559,16.559,0,0,0,8.911-2.6h0a16.562,16.562,0,0,1,20.622,2.249l14.5,14.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/></g></svg>
        </span>

        <div class="ml-4">
          <h2 class="text-lg font-bold"> OOP </h2>
        </div>
      </div>  

    </div>
  </div>
</section>
</div>
    );
}

export default Skills;
 