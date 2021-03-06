import axios from "axios";
import moment from "moment";
import $ from "jquery";
import validate from "jquery-validation";
import {get, upload } from "../../../api/posts";
import Navadmin from "../../../Components/Admindashoard/Navadmin";
import headeradmin from "../../../Components/Admindashoard/Headderadmin";
import NewPage from ".";
import { reRender } from "../../../utils";

const Editnews = {
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
                   Them Bai Viet
                </h2>
<div class="mt-5 md:mt-0 md:col-span-2">
       <form action="" id="form-edit">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label for="first-name" class="block text-sm font-medium text-gray-700">Title</label>
                 <input id="title-post" type="text" class="h-10 w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md px-[20px]" placeholder="Tieu de bai viet" value="${data.title}" />
                </div>
                <div class="col-span-6 sm:col-span-4">
                  <label class="block text-sm font-medium text-gray-700">Introduce</label>
                  <div class="mt-1">
                  <textarea id="introduce-post" name="Introduce" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-[20px]" > ${data.introduce}</textarea>
                </div>
                </div>
                       <div class="col-span-6 sm:col-span-4">
                  <label class="block text-sm font-medium text-gray-700">content</label>
                <div class="mt-1">
                  <textarea id="content-post" name="content" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-[20px]">${data.content}</textarea>
                </div>
                </div>
                       <div class="col-span-6 sm:col-span-4">
                  <label  class="block text-sm font-medium text-gray-700 ">image</label>
                  <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div class="space-y-1 text-center">
             
                    <div class="flex text-sm text-gray-600">
                        <input id="img-post"  type="file" class="" value="" name="image">
                      </label>
                         <div><img width="200" src="${data.image}" id="img-preview" /></div>
                    </div>

                    </p>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-left sm:px-6">
        <button  class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
     Save
      </button>
            </div>
          </div>
        </form>
      </div>



            </div>
        </main>


            `;
    },
    afterRender(id) {
        const formAdd = $("#form-edit");
        const imgPost = document.querySelector("#img-post");
        const imgPreview = document.querySelector("#img-preview");
        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/ecommercer/image/upload";
        const CLOUDINARY_PRESET = "veaztpu6";
        let imgLink = "";
        // preview image when upload
        imgPost.addEventListener("change", async(e) => {
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });
        formAdd.validate({
            rules: {
                "title-post": {
                    required: true,
                    minlength: 5,
                },
                Introduce: {
                    required: true,
                    minlength: 10,
                },
                content: {
                    required: true,
                    minlength: 5,
                },
                image: {
                    required: true,
                    minlength: 5,
                },

            },
            messages: {
                "title-post": {
                    required: "<p class='text-[15px] text-[red]'> Khong duoc de trong truong nay</p>",
                    minlength: "<p class='text-[15px] text-[red]'> Nh???p ??t nh???t 5 k?? t???</p>",
                },
                Introduce: {
                    required: "<p class='text-[15px] text-[red]'> Khong duoc de trong truong nay</p>",
                    minlength: "<p class='text-[15px] text-[red]'> Nh???p ??t nh???t 10 k?? t???</p>",
                },
                content: {
                    required: "<p class='text-[15px] text-[red]'> Khong duoc de trong truong nay</p>",
                    minlength: "<p class='text-[15px] text-[red]'> Nh???p ??t nh???t 5 k?? t???</p>",
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
                        title: document.querySelector("#title-post").value,
                        image: imgLink || imgPreview.src,
                        introduce: document.querySelector("#introduce-post").value,
                        content: document.querySelector("#content-post").value,
                        day: moment(new Date()).format("DD-MM-YYYY"),
                    }).then(async(res) => {
                        document.location.href = "/#/admin/news";
                        await reRender(NewPage, "#app");
                    });
                }

                addProduct();
            },
        });
    },
};
export default Editnews;