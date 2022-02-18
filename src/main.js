import Navigo from "navigo";
import Homepage from "./Pages/Home";
import Dashboard from "./Pages/Admin/dashboard";
import NewPage from "./Pages/Admin/New/index";
import newlist from "./Pages/newlist";
import AddnewPage from "./Pages/Admin/New/add";
import Editnews from "./Pages/Admin/New/edit";
import singup from "./Pages/singin";
import singin from "./Pages/singup";
import userPage from "./Pages/Admin/user";
import product from "./Pages/products";
import detail from "./Pages/products/detail";
import CartPase from "./Pages/products/cart";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async(content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};
router.on("/admin/*", () => {}, {
    before(done, match) {
        if (JSON.parse(localStorage.getItem("user"))) {
            const { id } = JSON.parse(localStorage.getItem("user"));
            if (id == 1) {
                done();
            } else {
                document.location.href = "/";
            }
        } else {
            document.location.href = "/";
        }
    },
});
router.on({
    "/": () => print(Homepage),

    "/new/:id": ({ data }) => print(newlist, data.id),
    "/singup": () => print(singup),
    "/singin": () => print(singin),
    "/admin/dashboard": () => print(Dashboard),

    "/admin/new": () => print(NewPage),
    "/admin/news/add": () => print(AddnewPage),
    "/admin/news/:id/edit": ({ data }) => print(Editnews, data.id),
    "/admin/user": () => print(userPage),
    "/products": () => print(product),
    "/products/:id": ({ data }) => print(detail, data.id),
    "/cart": () => print(CartPase),

});
router.resolve();
// fetch("https://6203e391c6d8b20017dc3315.mockapi.io/Post")
//     .then((response) => response.json())
//     .then((data) => console.log(data));