import { getAll } from "../api/posts";

const content = {
        async render() {
            const { data } = await getAll();
            return /* html */ `
            <div class="flex">
                <div class="grid w-[200px] h-[100%]">
                    <ul class="border-solid border-2 border[#f3f3f3]">
                        <li class="px-[30px] py-[10px]  hover:bg-[#f3f3f3] "><a class="" href="">Phone Samsung</a></li>
                        <hr>
                        <li class="px-[30px] py-[10px]  hover:bg-[#f3f3f3]   "><a class="" href="">Phone Samsung</a></li>
                        <hr>
                        <li class="px-[30px] py-[10px]  hover:bg-[#f3f3f3]  "><a class="" href="">Phone Samsung</a></li>
                        <hr>
                        <li class="px-[30px] py-[10px]  hover:bg-[#f3f3f3]  "><a class="" href="">Phone Samsung</a></li>
                        <hr>
                        <li class="px-[30px] py-[10px]   hover:bg-[#f3f3f3] "><a class="" href="">Phone Samsung</a></li>
                        <hr>
                        <li class="px-[30px] py-[10px]   hover:bg-[#f3f3f3] "><a class="" href="">Phone Samsung</a></li>
                        <hr>
                        <li class="px-[30px] py-[10px]  hover:bg-[#f3f3f3]  "><a class="" href="">Phone Samsung</a></li>
                        <hr>
                        <li class="px-[30px] py-[10px]  hover:bg-[#f3f3f3]  "><a class="" href="">Phone Samsung</a></li>
                    </ul>
                </div>
                <div class="banner bg-[white] w-[1000px] scroll-mb-[10px]">
                    <img style="" id='anh' src='IMG/1.png' alt="" width='97%'><br>
                </div>
            </div>
            <div class="mx-[120px] grid grid-cols-3 gap-6 overflow-hidden relative  my-[20px]">
                <div class="grid grid-cols-2 border-solid border-2 border-[#ec5959] rounded-lg px-[30px] py-[10px]">
                    <div>
                        <img src="https://rafcart.rslahmed.com/assets/images/svg/delivery-van.svg" alt="" class="m-auto">
                    </div>
                    <div>
                        <h2 class="font-bold">Free shipping</h2>
                        <p class="text-xs">Orders over $200</p>
                    </div>

                </div>
                <div class="grid grid-cols-2 border-solid border-2 border-[#ec5959] rounded-lg px-[30px] py-[10px]">
                    <div>
                        <img src="https://rafcart.rslahmed.com/assets/images/svg/money-back.svg" alt="" class="m-auto">
                    </div>
                    <div>
                        <h2 class="font-bold">Money Returns</h2>
                        <p class="text-xs">30 Days money return</p>
                    </div>
                </div>
                <div class="grid grid-cols-2 border-solid border-2 border-[#ec5959] rounded-lg px-[30px] py-[10px]">
                    <div>
                        <img src="https://rafcart.rslahmed.com/assets/images/svg/service-hours.svg" alt="" class="m-auto">
                    </div>
                    <div>
                        <h2 class="font-bold">24/7 Support</h2>
                        <p class="text-xs">Customer support</p>
                    </div>
                </div>

            </div>
            <div class="conten my-[20px]">
                <h1 class="font-bold text-[20px] py-[20px]">New Arrivals</h1>
                <div class="product grid grid-cols-4 gap-5 ">
                    <form action="">
                        <div class=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg  ">
                            <div class=" w-[100%] ">
                                <a href="#"> <img src="https://vnn-imgs-f.vgcloud.vn/2019/08/07/23/apple-tiep-tuc-thong-tri-thi-truong-may-tinh-bang.jpg" alt=""></a>
                            </div>
                            <div class="py-[10px] px-[10px] leading-8">
                                <a href="#">
                                    <h4 class="font-bold hover:underline">HP Pavilion 15</h4>
                                </a>
                                <p class="text-[15px] text-[red]">$450.000000</p>
                                <p>130,000,000 lượt xem</p>
                            </div>
                            <div class="conten-item ">
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </form>
                    <form action="">
                        <div class=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg  ">
                            <div class=" w-[66%]  m-auto ">
                                <a href="#"> <img src="https://image.made-in-china.com/202f0j00KZUiGpwMLhos/M9-Plus-7-0inch-12g-512g-24MP-Cheap-Smart-Phones-4G-Mobile-Android-Cell-Phones-Lowest-Price-Mobail-Phone.webp" alt="" height="100px"></a>
                            </div>
                            <div class="py-[10px] px-[10px] leading-8">
                                <a href="#">
                                    <h4 class="font-bold hover:underline">HP Pavilion 15</h4>
                                </a>
                                <p class="text-[15px] text-[red]">$450.000000</p>
                                <p>130,000,000 lượt xem</p>
                            </div>
                            <div class="conten-item ">
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </form>
                    <form action="">
                        <div class=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg  ">
                            <div class=" w-[100%] ">
                                <a href="#"> <img src="https://vnn-imgs-f.vgcloud.vn/2019/08/07/23/apple-tiep-tuc-thong-tri-thi-truong-may-tinh-bang.jpg" alt=""></a>
                            </div>
                            <div class="py-[10px] px-[10px] leading-8">
                                <a href="#">
                                    <h4 class="font-bold hover:underline">HP Pavilion 15</h4>
                                </a>
                                <p class="text-[15px] text-[red]">$450.000000</p>
                                <p>130,000,000 lượt xem</p>
                            </div>
                            <div class="conten-item ">
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </form>
                    <form action="">
                        <div class=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg  ">
                            <div class=" w-[100%] ">
                                <a href="#"> <img src="https://vnn-imgs-f.vgcloud.vn/2019/08/07/23/apple-tiep-tuc-thong-tri-thi-truong-may-tinh-bang.jpg" alt=""></a>
                            </div>
                            <div class="py-[10px] px-[10px] leading-8">
                                <a href="#">
                                    <h4 class="font-bold hover:underline">HP Pavilion 15</h4>
                                </a>
                                <p class="text-[15px] text-[red]">$450.000000</p>
                                <p>130,000,000 lượt xem</p>
                            </div>
                            <div class="conten-item ">
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                    <div class="banner2 my-[30px]">
                        <img src="https://rafcart.rslahmed.com/assets/images/offer-3.jpg" alt="">
                    </div>
                </div>
            </div>

            <div class="conten my-[20px]">
                <h1 class="font-bold text-[20px] py-[20px]">Recomended For You</h1>
                <div class="bg-gray-100">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-2xl mx-auto py-8 sm:py-10 lg:max-w-none">
  <div class="product grid grid-cols-3 gap-4">
            
                 ${data.map((post) => `
                         <div class="group relative  ">
          <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
            <img src="${post.image}" class="w-[100%] h-[100%]">
          </div>
          <h3 class="mt-6 text-sm text-gray-500">
            <a href="/new/${post.id}">
              <span class="absolute inset-0"></span>
              ${post.day}
            </a>
          </h3>
          <p class="text-base font-semibold text-gray-900">${post.title}</p>
                <p class="text-base  text-gray-900">${post.introduce}</p>
        </div>

         `).join("")}

      </div>
    </div>
  </div>
</div>
      
 
           


            </div>
            
            <div class="bg-[#f3f3f3] grid grid-cols-2 gap-5 my-[20px] ">
                <div class="img-1">
                    <img src="https://rafcart.rslahmed.com/assets/images/mobile-view.png" alt="" class="w-[50%] m-auto">
                </div>
                <div class="conten2 py-[10%] ">
                    <h1 class="font-bold text-[30px] text-center">Download RAFCART App Now!</h1>
                    <p class="py-[10px]">Shopping fastly and easily more with our app. Get a link to download the app on your phone</p>
                    <form action="" class="w-[700px] flex ">
                        <input type="text" class="h-10 w-8/12 pl-3 rounded-sm" placeholder="Email Address">
                        <div>
                            <button class="bg-[red] text-[#ffffff] hover:text-[#ff0000] px-[20px] py-[8px] rounded-r-lg">Subscribe</button>
                        </div>
                    </form>
                </div>

            </div>
      
      
      `;
    },
};
export default content;