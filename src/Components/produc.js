import { getAll } from "../api/products";

const producthome = {
        async render() {
            const { data } = await getAll();
            return /* html */ `
     

            
                     <div class="product grid grid-cols-4 gap-5 ">
                        ${data.map((product) => `
                    <form action="">
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
                                <button>Add to cart</button>
                            </div>
                   </div>

    
     
        
                    </form>
                           `).join("")}
                </div>



        
        
        `;
    },

};
export default producthome;