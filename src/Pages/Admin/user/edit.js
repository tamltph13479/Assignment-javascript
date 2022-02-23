import axios from "axios";
import $ from "jquery";
import validate from "jquery-validation";
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
        <form method="Post" action="" class="mt-10" id="form-edit">
                              <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-normal mb-2" for="username">
                Username
              </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  required="" autofocus="" placeholder="User name" id="username" name="name" value="${data.username}" name="title-post"/>
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-normal mb-2" for="username">
                Email
              </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" v-model="form.email" type="email" required="" autofocus="" placeholder="Email" id="email-address" value="${data.email}" name="email">
                        </div>

                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-normal mb-2" for="password">
                Password
              </label>
                            <input name="password"class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" v-model="form.password" type="password" placeholder="Password" name="password" required="" autocomplete="current-password" id="password" value="${data.password}">
                        </div>
                        <div class="col-span-6 sm:col-span-4">
                  <label class="block text-sm font-medium text-gray-700">image</label>
                  <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div class="space-y-1 text-center">
             
                    <div class="flex text-sm text-gray-600">
                        <input id="img-post" type="file" class="" value="" name="image">
                           <div><img width="200" src="${data.image}" id="previewImage" /></div>
                      
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
        const formEdit = $("#form-edit");
        const imgPost = document.querySelector("#img-post");
        const imgPreview = document.querySelector("#previewImage");
        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/ecommercer/image/upload";
        const CLOUDINARY_PRESET = "veaztpu6";
        let imgLink = "";
        // preview image when upload
        imgPost.addEventListener("change", async(e) => {
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });
        formAdd.validate({
            rules: {
                name: {
                    required: true,
                    minlength: 5,
                },
                email: {
                    required: true,
                    email: true,

                },
                password: {
                    required: true,

                },
                image: {
                    required: true,

                },
            },
            messages: {
                name: {
                    required: "<p class='text-[15px] text-[red]'> Khong duoc de trong truong nay</p>",
                    minlength: "<p class='text-[15px] text-[red]'>Nhap it nhat 5 ky tu</p>",
                },
                email: {
                    required: "<p class='text-[15px] text-[red]'> Vui long nhap dung dinh dang</p>",

                },
                password: {
                    required: "<p class='text-[15px] text-[red]'> Khong duoc de trong truong nay</p>",
                    minlength: "Nhập ít nhất 5 ký tự anh ei",
                },
                image: {
                    required: "<p class='text-[15px] text-[red]'> Khong duoc de trong truong nay</p>",

                },
            },
            submitHandler() {
                async function addProduct() {
                    const file = imgPost.files[0];
                    if (file) {
                        const formData = new FormData();
                        formData.append("file", file);
                        formData.append("upload_preset", CLOUDINARY_PRESET);

                        // call api cloudinary

                        const { data } = await axios.post(CLOUDINARY_API, formData, {
                            headers: {
                                "Content-Type": "application/form-data",
                            },
                        });
                        imgLink = data.url;
                    }
                    upload({
                        id,
                        email: document.querySelector("#email-address").value,
                        password: document.querySelector("#password").value,
                        username: document.querySelector("#username").value,
                        image: imgLink || "",

                    }).then(async(res) => {
                        document.location.href = "/#/admin/user";
                        await reRender(users, "#app");
                    });
                }

                addProduct();
            },
        });
    },
};
export default Editnewsuser;