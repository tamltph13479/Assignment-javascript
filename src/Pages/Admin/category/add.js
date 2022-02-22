import $ from "jquery";
import validate from "jquery-validation";
import { add } from "../../../api/category";
import headeradmin from "../../../Components/Admindashoard/Headderadmin";
import Navadmin from "../../../Components/Admindashoard/Navadmin";
import { reRender } from "../../../utils";
import Category from "./index";

const Addcategory = {
    render() {
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
       <form action="" id="form-add">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label for="first-name" class="block text-sm font-medium text-gray-700">Title</label>
                 <input id="name"   name="title-post" type="text" class="h-10 w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md px-[20px]" placeholder="Tieu de bai viet">
                </div>
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-left sm:px-6">
        <button  class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    Add To Post
      </button>
            </div>
          </div>
        </form>
      </div>



            </div>
        </main>



        
            `;
    },
    afterRender() {
        const formAdd = $("#form-add");
        formAdd.validate({
            rules: {
                "title-post": {
                    required: true,
                    minlength: 5,
                },
            },
            messages: {
                "title-post": {
                    required: "Không được để trống trường này!",
                    minlength: "<p class='text-[reb]'> Nhập ít nhất 5 ký tự anh ei</p>",
                },
            },
            submitHandler() {
                async function addProduct() {
                    add({

                        name: document.querySelector("#name").value,

                    }).then(async(res) => {
                        document.location.href = "/#/admin/category";
                        await reRender(Category, "#app");
                    });
                }

                addProduct();
            },
        });
    },
};
export default Addcategory;