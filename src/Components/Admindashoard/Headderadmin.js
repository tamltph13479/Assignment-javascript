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
                <ul class="flex items-center flex-shrink-0 space-x-6">
                    <!-- Profile menu -->
                    <li class="relative">
                        <button class="align-middle rounded-full focus:shadow-outline-purple focus:outline-none" @click="toggleProfileMenu" @keydown.escape="closeProfileMenu" aria-label="Account" aria-haspopup="true">
                  <img class="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;s=aa3a807e1bbdfd4364d1f449eaa96d82" alt="" aria-hidden="true">
                </button>
                    </li>
                </ul>
            </div>
        </header>
            `;
    },
};
export default headeradmin;