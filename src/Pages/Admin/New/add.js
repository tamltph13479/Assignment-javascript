/* eslint-disable no-shadow */
import axios from "axios";
import { add } from "../../../api/posts";
// import { add } from "../../../api/posts";
import Navadmin from "../../../Components/Admindashoard/Navadmin";
import { reRender } from "../../../utils";
import NewPage from "./index";

const AddnewPage = {
    render() {
        return /* html */ `
           <div class="min-h-full">
             ${Navadmin.render()}
  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
 
<div class="lg:flex lg:items-center lg:justify-between">
  <div class="flex-1 min-w-0">
    <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
      Back End Developer
    </h2>
  </div>
  <div class="mt-5 flex lg:mt-0 lg:ml-4">
    <span class="sm:ml-3">
    <a href="/admin/news">
  <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
     Quay lại
      </button>
    </a>
    </span>

    <!-- Dropdown -->
    <span class="ml-3 relative sm:hidden">
      <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="mobile-menu-button" aria-expanded="false" aria-haspopup="true">
        More
        <!-- Heroicon name: solid/chevron-down -->
        <svg class="-mr-1 ml-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
      <div class="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="mobile-menu-button" tabindex="-1">
        <!-- Active: "bg-gray-100", Not Active: "" -->
        <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="mobile-menu-item-0">Edit</a>
        <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="mobile-menu-item-1">View</a>
      </div>
    </span>
  </div>
</div>
    </div>
  </header>
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
   
<div>
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="mt-5 md:mt-0 md:col-span-2">
          <form action="" id="form-add-post">
                    <input type="text" 
                        placeholder="Tieu de bai viet" 
                        class="border border-black" 
                        id="title-post"
                    > <br />
                    <input type="file"  
                        class="border border-black"
                        id="img-post"
                    >
                    <br />
                    <textarea name="" 
                            id="desc-post" 
                            cols="30" 
                            rows="10" 
                            class="border border-black"
                    ></textarea>
                    <button>Them</button>
                </form>

    </div>
  </div>
</div>
</div>
      </div>
    </div>
  </main>

            `;
    },
    afterRender() {
        const formAdd = document.querySelector("#form-add-post");
        const imgPost = document.querySelector("#img-post");

        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/ecommercer/image/upload";
        const CLOUDINARY_PRESET = "veaztpu6";

        formAdd.addEventListener("submit", async(e) => {
            e.preventDefault();
            const file = imgPost.files[0];
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET);

            const response = await axios.post(CLOUDINARY_API, formData, {
                headers: {
                    "Content-type": "application/formData",
                },
            });
            add({
                title: document.querySelector("#title-post").value,
                img: response.data.url,
                desc: document.querySelector("#desc-post").value,

            });
            document.location.href = "/admin/news/";
            await reRender(NewPage, "#app");
        });
    },
};
export default AddnewPage;