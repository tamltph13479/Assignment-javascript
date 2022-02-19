import Headers from "../Components/Header";
import content from "../Components/Conten";
import footer from "../Components/Footer";

const Homepage = {
    async render() {
        return /* html */ `
        <header>
        ${Headers.render()}
        </header> 
            <article class=" mx-auto w-[1200px] ">
              ${await content.render()}
        </article>
                <footer class="  min-w-full m-auto bg-[#f3f3f3]">
                ${footer.render()}
                </footer>
        `;
    },
    afterRender() {
        Headers.afterRender();
    },
};
export default Homepage;