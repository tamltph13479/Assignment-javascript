import Navigo from "navigo";
import Homepage from "./Pages/Home";
import Aboutpage from "./Pages/About";

const routes = new Navigo("/", { linksSelector: "a" });
const print = (content) => {
    document.querySelector("#app").innerHTML = content.render();
};
routes.on({
    "/": () => {
        print(Homepage);
    },
    "/about": () => {
        print(Aboutpage);
    },
});
routes.resolve();