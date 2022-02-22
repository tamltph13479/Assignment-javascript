import Headers from "../../Components/Header";
import footer from "../../Components/Footer";
import { getCate } from "../../api/category";

const categorypase = {
        async render(id) {
            const { data } = await getCate(id);
            console.log(data);
            return /* html */ `
          <header>
        ${Headers.render()}
        </header> 
            <article class=" mx-auto w-[1200px] ">
                    
            <div class="conten my-[20px]">
                <h1 class="font-bold text-[20px] py-[20px]">Recomended For You</h1>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-2xl mx-auto py-8 sm:py-10 lg:max-w-none">
            <div class="container  mx-auto max-w-7x1">
            <div class="flex flex-wrap -m-4">
                 ${data.posts.map((post) => `
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
        </article>
                <footer class="bg-[#f3f3f3] min-w-full m-auto">
                ${footer.render()}
                </footer>



        `;
    },

    afterRender() {
        Headers.afterRender();
    },
};
export default categorypase;