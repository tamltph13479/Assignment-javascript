import { getAll } from "../api/posts";
import navcatory from "./category";
import producthome from "./produc";

const content = {
        async render() {
            const { data } = await getAll();
            return /* html */ `
            <div class="flex">
                <div class="grid w-[200px] h-[100%]">      
            ${navcatory.render()}
                </div>
                <div class="banner bg-[white] w-[1000px] scroll-mb-[10px]">
                    <img style="" id='anh' src='IMG/1.png' alt="" width='97%'><br>
                </div>
            </div>
            <div class="mx-[120px] grid grid-cols-3 gap-6 overflow-hidden relative  my-[20px]">
                <div class="grid grid-cols-2 border-solid border-2 border-[#ec5959] rounded-lg px-[30px] py-[10px] ">
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
                ${producthome.render()}
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
            <div class="container  mx-auto max-w-7x1">
            <div class="flex flex-wrap -m-4">
                 ${data.map((post) => `
         <div class="xl:w-1/3 md:w-1/2 p-4 overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
                    <div class="bg-white p-6 rounded-lg">
                        <a href="/#/new/${post.id}">   <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6" src="${post.image}"></a>
                     
                        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">   ${post.day}</h3>
                         <a href="/#/new/${post.id}"> <h2 class="text-lg text-gray-900 font-medium title-font mb-4">${post.title}</h2>  </a>
                        <p class="leading-relaxed text-base">${post.introduce}</p>
                    </div>
                </div>



         `).join("")}
    </div>
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