import Headers from "../../Components/Header";
import footer from "../../Components/Footer";
import { getAll } from "../../api/products";
import { $ } from "../../utils/index";

const product = {
        async render() {
            const { data } = await getAll();
            return /* html */ `
          <header>
        ${Headers.render()}
        </header> 
            <article class=" mx-auto w-[1200px] ">
                    
            <div class="conten my-[20px]">
                <h1 class="font-bold text-[20px] py-[20px]">Recomended For You</h1>
                <div class="product grid grid-cols-4 gap-5 ">
                 ${data.map((post) => `
                       <form action="">
                        <div class=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer ">
                            <div class=" w-[100%] ">
                                <a href="/products/${post.id}"> <img src="${post.image}" alt=""></a>
                            </div>
                            <div class="py-[10px] px-[10px] leading-8">
                                <a href="/products/${post.id}">
                                    <h4 class="font-bold hover:underline">${post.name}</h4>
                                </a>
                                <p class="text-[15px] text-[red]">${post.price}</p>
                                <p>130,000,000 lượt xem</p>
                            </div>
                            <div class="conten-item ">
                                <button id="btnAddToCart">Add to cart</button>
                            </div>
                        </div>
                    </form>

         `).join("")}
 
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
        $("#btnAddToCart").addEventListener("click", () => {
            console.log($("#btnAddToCart"));
        });
    },
};
export default product;