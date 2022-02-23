import axios from "axios";
import $ from "jquery";
import validate from "jquery-validation";
import {get, upload } from "../../../api/products";
import headeradmin from "../../../Components/Admindashoard/Headderadmin";
import Navadmin from "../../../Components/Admindashoard/Navadmin";
import { reRender } from "../../../utils";
import productsadmin from "./index";

const Editproduct = {
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
                   Them san pham
                </h2>
<div class="mt-5 md:mt-0 md:col-span-2 w-[800px]">
        <form method="Post" action="" class="mt-10" id="form-edit">
                              <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-normal mb-2" >
              Name
              </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  required="" id="name" value="${data.name}" name="name">
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-normal mb-2" >
                Price
              </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  id="price" value="${data.price}" name="price">
                        </div>

                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-normal mb-2" >
                Quantity
              </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="quantity" value="${data.quantity}" name="quantity">
                        </div>
                        <div class="col-span-6 sm:col-span-4">
                  <label class="block text-gray-700 text-sm font-normal mb-2">Details</label>
                <div class="mb-6">
                  <textarea id="details" name="detail" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-[20px]" > ${data.details}</textarea>
                </div>
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
        const formAdd = $("#form-edit");
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
                price: {
                    required: true,

                },
                quantity: {
                    required: true,

                },
                detail: {
                    required: true,

                },
                image: {
                    required: true,

                },

            },
            messages: {
                name: {
                    required: "<p class='text-[15px] text-[red]'> Khong duoc de trong truong nay</p>",
                    minlength: "<p class='text-[15px] text-[red]'> Nhập ít nhất 5 ký tự</p>",
                },
                price: {
                    required: "<p class='text-[15px] text-[red]'> Khong duoc de trong truong nay</p>",

                },
                quantity: {
                    required: "<p class='text-[15px] text-[red]'> Khong duoc de trong truong nay</p>",

                },
                detail: {
                    required: "<p class='text-[15px] text-[red]'> Khong duoc de trong truong nay</p>",

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
                        name: document.querySelector("#name").value,
                        image: imgLink || imgPreview.src,
                        price: document.querySelector("#price").value,
                        quantity: document.querySelector("#quantity").value,
                        details: document.querySelector("#details").value,
                    }).then(async(res) => {
                        document.location.href = "/#/admin/products";
                        await reRender(productsadmin, "#app");
                    });
                }

                addProduct();
            },
        });
    },
};

export default Editproduct;