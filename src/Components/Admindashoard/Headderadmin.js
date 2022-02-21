const headeradmin = {
    render() {
        return /* html */ `
                        <header class="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
            <div class="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
                <div class="flex justify-center flex-1 lg:mr-32">
                    <div class="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
                        <form action="" class="w-[700px] mt-5 pl-10 flex ">
                            <input type="text" class="h-10 w-10/12 pl-3 rounded-sm" placeholder="Nhập tên điện thoại, máy tính, phụ kiện... cần tìm">
                            <div>
                                <button class="bg-[#2b2d42] text-[#ffffff] hover:text-[#ff0000] px-[20px] py-[8px] rounded-r-lg">Tìm kiếm</button>
                            </div>
                        </form>
                    </div>
                </div>
                        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <div class="ml-3 relative">

           <li class="group list-none">
        <a href="" class="nav-bar">
            <i class="fas fa-percent"></i>
            <button type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
<span class="sr-only">Open user menu</span>
<img class="h-8 w-8 rounded-full" src="https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-1/c0.0.240.240a/p240x240/241564093_433077294924635_8461508164508674968_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_ohc=enTuzRx_IHQAX906oor&_nc_ht=scontent-hkg4-1.xx&oh=00_AT87R4yz8pKpK_rQyFXENF-fhEPfV49b460m_yE5u6qieg&oe=62154F6D" alt="">
</button>
        </a>
        <div class=" gap-x-64 mt-0 border-2 max-h-[150px] absolute w-[200px]  bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-3 transition-all decoration-slate-500 ">
            <ul class="menu-item">
                <div class="menu-item-info text-sm leading-7 mb-4">
                    <li> <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a></li>
                    <li> <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a></li>
                    <li> <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a></li>
                </div>
            </ul>
        </div>
    </li>   
       
                    </div>
                </div>
            </div>


            
        </header>
            `;
    },
};
export default headeradmin;