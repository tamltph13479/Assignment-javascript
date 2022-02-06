import Headers from "../Components/Header";
import footer from "../Components/Footer";

const Aboutpage = {
    render() {
        return /* html */ `
   ${Headers.render()}
        </header> 
            <article class=" mx-auto w-[1200px] ">
         
        </article>
                <footer class="conten-item2">
                ${footer.render()}
                </footer>`;
    },
};
export default Aboutpage;