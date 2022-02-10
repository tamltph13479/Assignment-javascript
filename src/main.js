import Navigo from "navigo";
import Homepage from "./Pages/Home";
import Dashboard from "./Pages/Admin/dashboard";
import NewPage from "./Pages/Admin/New/index";
import newlist from "./Pages/newlist";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("app").innerHTML = content;
};
router.on({
    "/": () => {
        print(Homepage.render());
    },
    "/new/:id": ({ data }) => {
        const { id } = data;
        print(newlist.render(id));
    },
    "/admin/dashboard": () => {
        print(Dashboard.render());
    },
    "/admin/news": () => {
        print(NewPage.render());
    },
});
router.resolve();
// fetch("https://6203e391c6d8b20017dc3315.mockapi.io/Post")
//     .then((response) => response.json())
//     .then((data) => console.log(data));