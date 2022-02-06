import Headers from "../Components/Header";
import content from "../Components/Conten";
import footer from "../Components/Footer";

const Homepage = {
    render() {
        return /* html */ `
        <header>
        ${Headers.render()}
        </header> 
            <article class=" mx-auto w-[1200px] ">
              ${content.render()}
        </article>
                <footer class="bg-[#f3f3f3] min-w-full m-auto">
                ${footer.render()}
                </footer>
        `;
    },
};
export default Homepage;