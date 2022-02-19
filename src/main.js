import Navigo from "navigo";
import Homepage from "./Pages/Home";
import Dashboard from "./Pages/Admin/dashboard";
import NewPage from "./Pages/Admin/New/index";
import newlist from "./Pages/newlist";
import AddnewPage from "./Pages/Admin/New/add";
import Editnews from "./Pages/Admin/New/edit";
import singup from "./Pages/singup";
import singin from "./Pages/singin";
import product from "./Pages/products";
import detail from "./Pages/products/detail";
import CartPase from "./Pages/products/cart";
import AddnewUser from "./Pages/Admin/user/add";
import Editnewsuser from "./Pages/Admin/user/edit";
import users from "./Pages/Admin/user";
import productsadmin from "./Pages/Admin/Products";

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
    // homePase
    "/": () => print(Homepage),

    "/new/:id": ({ data }) => print(newlist, data.id),
    "/singup": () => print(singup),
    "/singin": () => print(singin),
    "/admin/dashboard": () => print(Dashboard),
    "/products": () => print(product),
    "/products/:id": ({ data }) => print(detail, data.id),
    "/cart": () => print(CartPase),
    // admin dashboard
    // add post
    "/admin/news": () => print(NewPage),
    "/admin/news/add": () => print(AddnewPage),
    "/admin/news/:id/edit": ({ data }) => print(Editnews, data.id),
    // add user
    "/admin/user": () => print(users),
    "/admin/news/adduser": () => print(AddnewUser),
    "/admin/news/:id/edituser": ({ data }) => print(Editnewsuser, data.id),
    // add products
    "/admin/products": () => print(productsadmin),
    "/admin/products/add": () => print(AddnewUser),
    "/admin/products/:id/edit": ({ data }) => print(Editnewsuser, data.id),

});
router.resolve();
// fetch("https://6203e391c6d8b20017dc3315.mockapi.io/Post")
//     .then((response) => response.json())
//     .then((data) => console.log(data));