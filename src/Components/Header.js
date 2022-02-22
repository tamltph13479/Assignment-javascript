import { reRender } from "../utils/index";

const Headers = {
        render() {
            return /* html */ `
     
            <div class="header-top flex justify-between h-[80px] w-[1200px] m-auto">
                <figure class="logo pt-5">
                    <a href="/">
                        <img src="https://rafcart.rslahmed.com/assets/images/svg/logo.svg" width="150px">
                    </a>
                </figure>
                <div>
                    <ul class="w-[700px] mt-5 pl-10 flex ">
                        <li><a class="px-[20px]" href="/#/">Homepage</a></li>
                        <li><a class="px-[20px]" href="/#/products">Product</a></li>
                        <li><a class="px-[20px]" href="/#/blog">Blog</a></li>
                        <li><a class="px-[20px]" href="/#/">Phone</a></li>
                        <li><a class="px-[20px]" href="">Contact</a></li>
                    </ul>
                </div>
                <div class="flex mt-5 text-center checksn">
                
                    
    
                        <div class="signin pl-5">
                              
          <ul class="flex">
  ${localStorage.getItem("user") ? `
                        <a class="block px-4 py-3 " id="email"></a>
                        <button class="ml-[10px] inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[red] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"><a" id="logout">Logout</a> </button>
               <a href="/#/admin/dashboard" >           <button  class=" ml-[10px] inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[red] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Dashboard </button></a>
                        
                          
                    ` : `<span class=\"sm:ml-3\"><a href=\"/#/singup\"><button type=\"button\" class=\"inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[red] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500\">Sing up </button></a></span> <span class=\"sm:ml-3\"><a href=\"/#/singin\"><button type=\"button\" class=\"inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500\">Sing in</button></a></span>`}
                     </ul>
                    
                        </div>
                </div>

            </div>
            <div class="bg-[#fd3d57]">



                <div class="header-top bg-[#fd3d57] flex justify-between h-[80px] w-[1200px] m-auto">
                    <div class="nav pt-5">
                        <div>
                            <button class="bg-[#2b2d42] text-[#ffffff] hover:text-[#ff0000] px-[20px] py-[8px] ">All categories</button>
                        </div>
                    </div>
                    <form action="/search" class="w-[700px] mt-5 pl-10 flex ">
                        <input type="text" class="h-10 w-10/12 pl-3 rounded-sm" placeholder="Nhập tên điện thoại, máy tính, phụ kiện... cần tìm" name="keyword">
                        <div>
                            <button class="bg-[#2b2d42] text-[#ffffff] hover:text-[#ff0000] px-[20px] py-[8px] rounded-r-lg">Tìm kiếm</button>
                        </div>
                    </form>
                    <div class="flex mt-5 text-center ">

                        <div class="signin pl-5">
                              
          <ul class="flex">
                             <a href="/#//cart">   <button class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[blue] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >Gio Hàng </button></a>
                     </ul>
                        </div>
                    </div>
                </div>
            </div>
`;
    },
    afterRender() {
        const email = document.querySelector("#email");
        const logout = document.querySelector("#logout");
        email.innerHTML = JSON.parse(localStorage.getItem("user")).email;

        logout.addEventListener("click", () => {
            localStorage.removeItem("user");
            reRender(Headers, "header");
        });
    },

};
export default Headers;