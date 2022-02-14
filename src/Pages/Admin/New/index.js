import Navadmin from "../../../Components/Admindashoard/Navadmin";
import { getAll, remove } from "../../../api/posts";
import { reRender } from "../../../utils";

const NewPage = {
        async render() {
            const { data } = await getAll();
            return /* html */ `
           <div class="min-h-full">
             ${Navadmin.render()}
  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
<div class="lg:flex lg:items-center lg:justify-between">
  <div class="flex-1 min-w-0">
    <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
     Quản Lý bài viết
    </h2>
  </div>
  <div class="mt-5 flex lg:mt-0 lg:ml-4">
    <span class="sm:ml-3">
    <a href="/admin/news/add">
  <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
     Thêm Mới
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
  </header>
           <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
          <div class="flex flex-col">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
                 <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
               STT
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Img
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                NỘi Dung
              </th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
  
                             ${data.map((post, index) => `
               <tr>
              <td class="px-6 py-4 whitespace-nowrap">
      ${index + 1}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
               
      ${post.title}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
   <img src="${post.img}" alt="" width="30%">
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
           ${post.desc}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="/admin/news/${post.id}" class="text-indigo-600 hover:text-indigo-900">Sửa</a>
              </td>
                 <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button data-id="${post.id}" class="btn btn-remove">Remove</button>
              </td>
            </tr>

         `).join("")}
    
          
     

            <!-- More people... -->
          </tbody>
        </table>
      </div>
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
        const buttons = document.querySelectorAll(".btn");
        buttons.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                const confirm = window.confirm("Ban muon xoa bai viet");
                if (confirm) {
                    remove(id).then(() => {
                        reRender(NewPage, "#app");
                    });
                }
            });
        });
    },
};
export default NewPage;