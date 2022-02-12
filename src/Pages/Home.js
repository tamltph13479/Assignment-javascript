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
                <footer class="  min-w-full m-auto">
                ${footer.render()}
                </footer>
        `;
    },
};
export default Homepage;