import React from 'react';
import { HashLink } from 'react-router-hash-link';

function Nav(props) {
    return (
<nav class="h-10 flex justify-center font-bold w-full fixed bg-slate-700/70 ">
    <h2 class="sr-only" id="header-navigation">Header navigation</h2>
          <ul class="flex items-center gap-6 text-sm">
            <li>
              <a
                class="text-white transition hover:text-gray-100/75"
                href="/"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                class="text-white transition hover:text-gray-100/75"
                href="/"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                class="text-white transition hover:text-gray-100/75"
                href="/"
              >
                Resume
              </a>
            </li>

            <li>
              <a
                class="text-white transition hover:text-gray-100/75"
                href="/"
              >
                Contact
              </a>
            </li>
          </ul>
</nav>
    );
}

export default Nav;