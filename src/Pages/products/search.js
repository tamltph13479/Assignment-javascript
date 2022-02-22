import toastr from "toastr";
import Headers from "../../Components/Header";
import footer from "../../Components/Footer";
import {get, SearchProductByName } from "../../api/products";
import { addToCart } from "../../utils/cart";
import "toastr/build/toastr.min.css";

const Search = {
        async render({ keyword }) {
            const { data } = await SearchProductByName(keyword);
            return /* html */ `
          <header>
        ${Headers.render()}
        </header>
            <article class=" mx-auto w-[1200px] ">

            <div class="conten my-[20px]">
                <h1 class="font-bold text-[20px] py-[20px]">Ke qua tim kiem : ${keyword}</h1>

                     <div class="product grid grid-cols-4 gap-5 ">
                        ${data.map((product) => `

                       <div class=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer ">

                            <div class=" w-[100%] ">
                                <a href="/#/products/${product.id}"> <img src="${product.image}" alt=""></a>
                            </div>
                            <div class="py-[10px] px-[10px] leading-8">
                                <a href="/#/products/${product.id}">
                                    <h4 class="font-bold hover:underline">${product.name}</h4>
                                </a>
                                <p class="text-[15px] text-[red]">${product.price}</p>
                                <p>130,000,000 lượt xem</p>
                            </div>
                            <div class="conten-item ">
                                <button data-id="${product.id}" class="search">Add to cart</button>
                            </div>
                   </div>
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
        const search = document.querySelectorAll(".search");
        search.forEach((btn) => {
            btn.addEventListener("click", async () => {
                const { id } = btn.dataset;
                const { data } = await get(id);
                addToCart({ ...data, quantity: 1 }, () => {
                    toastr.success("them vao thanh cong");
                });
            });
        });
        Headers.afterRender();
    },
};
export default Search;