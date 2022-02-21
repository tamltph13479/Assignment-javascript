import toastr from "toastr";
import Headers from "../../Components/Header";
import footer from "../../Components/Footer";
import {get, getAll } from "../../api/products";
import { $ } from "../../utils";
import { addToCart } from "../../utils/cart";
import "toastr/build/toastr.min.css";
import producthome from "../../Components/produc";

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
       ${await producthome.render()}
            </div>
        </article>
                <footer class="bg-[#f3f3f3] min-w-full m-auto">
                ${footer.render()}
                </footer>



        `;
    },
    afterRender(id) {
        Headers.afterRender();
        $("#btnAddToCart").addEventListener("click", async() => {
            const { data } = await get(id);
            console.log(data);
            addToCart({...data, quantity: 1 },

                () => {
                    toastr.success(`Them san pham ${data.name} Thanh cong`);
                },
            );
        });
    },
};
export default product;