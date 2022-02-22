import axios from "axios";
import $ from "jquery";
import validate from "jquery-validation";
import {get, upload } from "../../../api/banner";
import headeradmin from "../../../Components/Admindashoard/Headderadmin";
import Navadmin from "../../../Components/Admindashoard/Navadmin";
import { reRender } from "../../../utils";
import addbanner from "./add";

const editbanner = {
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
        <form method="Post" action="" class="mt-10" id="form-add">
                        <div class="col-span-6 sm:col-span-4">
                  <label class="block text-sm font-medium text-gray-700">image</label>
                  <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div class="space-y-1 text-center">
                    <div class="flex text-sm text-gray-600">
                        <input id="img-post" type="file" class="" value="">
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
        const formAdd = $("#form-add");
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
                img: {
                    required: true,

                },
            },
            messages: {
                "title-post": {
                    required: "Không được để trống trường này!",
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
                        image: imgLink || imgPreview.src,

                    }).then(async(res) => {
                        document.location.href = "/#/admin/banner";
                        await reRender(addbanner, "#app");
                    });
                }

                addProduct();
            },
        });
    },
};
export default editbanner;