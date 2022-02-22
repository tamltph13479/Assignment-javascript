import { getAll } from "../api/banner";

const navcatory = {
        async render() {
            const { data } = await getAll();
            return /* html */ `
     
    
                         ${data.map((banner) => `
           <img src=" ${banner.image}" alt=""> 


         `).join("")}
  
     

       

        
        `;
    },

};
export default navcatory;