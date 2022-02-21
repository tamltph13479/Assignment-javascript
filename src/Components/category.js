import { getAll } from "../api/category";

const navcatory = {
        async render() {
            const { data } = await getAll();
            return /* html */ `
     
                 <ul class="border-solid border-2 border[#f3f3f3]">
                         ${data.map((category) => `

        <li class="px-[30px] py-[10px]  hover:bg-[#f3f3f3] "><a class="" href="">${category.name}</a></li>
              <hr>


         `).join("")}
  
              </ul>

       

        
        `;
    },

};
export default navcatory;