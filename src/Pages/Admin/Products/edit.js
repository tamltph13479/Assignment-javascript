import axios from "axios";
import users from "./index";
import {get, upload } from "../../../api/user";
import headeradmin from "../../../Components/Admindashoard/Headderadmin";
import Navadmin from "../../../Components/Admindashoard/Navadmin";
import { reRender } from "../../../utils";

const Editnewsuser = {
    async render(id) {
        const { data } = await get(id);
        return /* html */ `
          <div class="flex h-screen bg-gray-50 dark:bg-gray-900" :class="{ 'overflow-hidden': isSideMenuOpen}">
    <!-- Desktop sidebar -->
        ${Navadmin.render()}
    <div class="flex flex-col flex-1 w-full">
${headeradmin.render()}
        <main class="h-full overflow-y-auto">
            <div class="container px-6 mx-auto grid">
                <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                   Them Tai Khoan
                </h2>
<div class="mt-5 md:mt-0 md:col-span-2 w-[800px]">
        <form method="Post" action="" class="mt-10" id="formSignup">
                              <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-normal mb-2" for="username">
                Username
              </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  required="" autofocus="" placeholder="User name" id="username" value="${data.username}" />
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-normal mb-2" for="username">
                Email
              </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" v-model="form.email" type="email" required="" autofocus="" placeholder="Email" id="email-address" value="${data.email}">
                        </div>

                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-normal mb-2" for="password">
                Password
              </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" v-model="form.password" type="password" placeholder="Password" name="password" required="" autocomplete="current-password" id="password" value="${data.password}">
                        </div>
                        <div class="col-span-6 sm:col-span-4">
                  <label class="block text-sm font-medium text-gray-700">image</label>
                  <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div class="space-y-1 text-center">
             
                    <div class="flex text-sm text-gray-600">
                        <input id="img-post" type="file" class="" value="${data.image}">
                      
                    </div>

                    <p></p>
                  </div>
                </div>
                </div>
                        <div class="mt-7">
                            <button src="submit" class="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                  Save
                                </button>
                        </div>

                        <div class="flex mt-7 items-center text-center">
                            <hr class="border-gray-300 border-1 w-full rounded-md">
                            <label class="block font-medium text-sm text-gray-600 w-full">
                                    Accede con
                                </label>
                            <hr class="border-gray-300 border-1 w-full rounded-md">
                        </div>
               
                        
                    </form>





      </div>

            </div>
        </main>
            `;
    },
    afterRender(id) {
        const formAdd = document.querySelector("#formSignup");
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
            upload({
                id,
                email: document.querySelector("#email-address").value,
                password: document.querySelector("#password").value,
                username: document.querySelector("#username").value,
                image: response.data.url,

            }).then(async(res) => {
                document.location.href = "/admin/user";
                await reRender(users, "#app");
            });
        });
    },
};
export default Editnewsuser;