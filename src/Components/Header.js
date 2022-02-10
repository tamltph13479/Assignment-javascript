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
                    <ul class="w-[800px] mt-5 pl-10 flex ">
                        <li><a class="px-[20px]" href="/">Homepage</a></li>
                        <li><a class="px-[20px]" href="/">About</a></li>
                        <li><a class="px-[20px]" href="">Shopping</a></li>
                        <li><a class="px-[20px]" href="">Phone</a></li>
                        <li><a class="px-[20px]" href="">Contact</a></li>
                        <!-- <li class="px-[20px]">
                        <a href="#">Home <span><i class="las la-angle-down"></i></span></a>
                        <ul class="subnav">
                            <li><a href="index-1.html">Home page 1 </a></li>
                            <li><a href="index-2.html">Home page 2</a></li>
                            <li><a href="index-3.html">Home page 3</a></li>
                        </ul>
                    </li> -->
                    </ul>
                </div>
                <div class="flex mt-5 text-center">
                    <span class="sm:ml-3">
    <a href="#">
  <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[red] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sing up </button>
    </a>
    </span>
                    <span class="sm:ml-3">
    <a href="#">
  <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sing in</button>
    </a>
    </span>
                </div>

            </div>
            <div class="bg-[#fd3d57]">



                <div class="header-top bg-[#fd3d57] flex justify-between h-[80px] w-[1200px] m-auto">
                    <div class="nav pt-5">
                        <div>
                            <button class="bg-[#2b2d42] text-[#ffffff] hover:text-[#ff0000] px-[20px] py-[8px] ">All categories</button>
                        </div>
                    </div>
                    <form action="" class="w-[700px] mt-5 pl-10 flex ">
                        <input type="text" class="h-10 w-10/12 pl-3 rounded-sm" placeholder="Nhập tên điện thoại, máy tính, phụ kiện... cần tìm">
                        <div>
                            <button class="bg-[#2b2d42] text-[#ffffff] hover:text-[#ff0000] px-[20px] py-[8px] rounded-r-lg">Tìm kiếm</button>
                        </div>
                    </form>
                    <div class="flex mt-5 text-center ">
                        <div class="cart">
                            <a href="">
                                <i class="fas fa-shopping-cart text-white "></i>
                                <p class="text-white text-xl">Giỏ hàng</p>
                            </a>
                        </div>

                        <div class="signin pl-5">
                            <a href="#">
                                <i class="fas fa-user text-white"></i>
                                <p class="text-white text-xl">Tài Khoản</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
`;
    },
};
export default Headers;