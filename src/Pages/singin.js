import toastr from "toastr";
import { signin } from "../api/user";
import "toastr/build/toastr.min.css";

const singin = {
    async render() {
        return /* html */ `
            <div class="container mx-auto">
        <div class="flex justify-center px-6 my-12">
            <!-- Row -->
            <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                <!-- Col -->
                <div class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg" style="background-image: url('https://thongtinz.com/wp-content/uploads/2020/08/hinh-nen-phong-canh-1.jpg')"></div>
                <!-- Col -->
                <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                    <h3 class="pt-4 text-2xl text-center">Welcome Back!</h3>
                              <a href="/"> 
                            <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block align-text-top">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                <span class="inline-block ml-1">Back</span>
            </button>
             </a>
                    <form method="Post" action="" class="mt-10" id="formSignin">

                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-normal mb-2" for="username">
                Email
              </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" v-model="form.email" type="email" required="" autofocus="" placeholder="Email" id="email-address">
                        </div>

                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-normal mb-2" for="password">
                Password
              </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" v-model="form.password" type="password" placeholder="Password" name="password" required="" autocomplete="current-password" id="password">
                        </div>
                        <div class="mt-7 flex">
                            <label for="remember_me" class="inline-flex items-center w-full cursor-pointer">
                                    <input id="remember_me" type="checkbox" class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="remember">
                                    <span class="ml-2 text-sm text-gray-600">
                                      Remember me
                                    </span>
                                </label>

                            <div class="w-full text-right">
                                <a class="text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105" href="#">
                                       Forgot password
                                    </a>
                            </div>
                        </div>

                        <div class="mt-7">
                            <button class="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                    Login
                                </button>
                        </div>

                        <div class="flex mt-7 items-center text-center">
                            <hr class="border-gray-300 border-1 w-full rounded-md">
                            <label class="block font-medium text-sm text-gray-600 w-full">
                                    Accede con
                                </label>
                            <hr class="border-gray-300 border-1 w-full rounded-md">
                        </div>

                        <div class="flex mt-7 justify-center w-full">
                            <button class="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                    
                                    Facebook
                                </button>

                            <button class="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                    
                                    Google
                                </button>
                        </div>

                        <div class="mt-7">
                            <div class="flex justify-center items-center">

                                <a href="/singup" class=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                       Not registered yet? Create an Account
                                    </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
        `;
    },
    afterRender() {
        const formSignin = document.querySelector("#formSignin");
        formSignin.addEventListener("submit", async(e) => {
            e.preventDefault();
            try {
                // call api
                const { data } = await signin({
                    email: document.querySelector("#email-address").value,
                    password: document.querySelector("#password").value,
                });

                localStorage.setItem("user", JSON.stringify(data.user));
                toastr.success("dang nhap thanh cong");
                setTimeout(() => {
                    if (data.user.id == 1) {
                        document.location.href = "/admin/news";
                    } else {
                        document.location.href = "/";
                    }
                }, 2000);
            } catch (error) {
                toastr.error(error.response.data);
            }
        });
    },
};
export default singin;