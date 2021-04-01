import { StrictMode } from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import './index.css';
=======
>>>>>>> 78e781b65444b9210375fa6fdb4fa23b330883fb

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
<<<<<<< HEAD
    
<div class="relative">
    <div class="h-screen w-full z-10 inset-0 overflow-y-auto">
        <div class="absolute w-full h-full inset-0 bg-gray-500 opacity-75">
        </div>
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            </span>
            <div class="inline-block relative overflow-hidden transform transition-all sm:align-middle sm:max-w-lg" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div>
                    <div class="rounded-lg p-8 bg-white shadow mt-8">
                        <div class="bg-white dark:bg-gray-800 ">
                            <App/>
                        </div>
                  </div>
              </div>
            </div>
        </div>
    </div>
</div>

=======
    <App />
>>>>>>> 78e781b65444b9210375fa6fdb4fa23b330883fb
  </StrictMode>,
  rootElement
);
