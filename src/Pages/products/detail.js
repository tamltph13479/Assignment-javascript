import toastr from "toastr";
import Headers from "../../Components/Header";
import footer from "../../Components/Footer";
import {get } from "../../api/products";
import { $ } from "../../utils";
import { addToCart } from "../../utils/cart";
import "toastr/build/toastr.min.css";

const detail = {
    async render(id) {
        const { data } = await get(id);
        return /* html */ `
          <header>
        ${Headers.render()}
        </header>
            <article class=" mx-auto w-[1200px] ">
     <div class="mx-auto w-[1200px] my-10">

            <div class="grid grid-cols-2 mb-3">
                <h2 class="font-bold text-xl ">${data.name}</h2>
                <div class="mt-2 flex justify-end">
                    <a href="" class="mt-1">
            <ul class="flex ">
                <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                    </svg>
                </li>
                <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                    </svg>
                </li>
                <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                    </svg>
                </li>
                <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                    </svg>
                </li>
                <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                    </svg>
                </li>
            </ul>
        </a>
                    <a href="" class="ml-2 text-sky-600 hover:underline relative hover:font-semibold">13 đánh giá</a>
                    <a href="" class="ml-1 text-sky-600 hover:underline relative hover:font-semibold">| 4110 Hỏi &amp; đáp</a>
                </div>
            </div>
            <hr>
            <div class="grid grid-cols-2 mt-7">
                <div class="mr-3">
                    <div class="border-[1px]">
                        <a href="">
                            <img src="https://media-cdn.laodong.vn/Storage/NewsPortal/2021/5/26/913299/Ngan-Ha25.jpg">
                        </a>
                    </div>
                    <div class="flex flex-row justify-center">
                        <a href="" class="mt-3 text-center hover:font-bold">
                            <img class="phone-color" src="https://images.fpt.shop/unsafe/fit-in/40x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/15/637673217820889289_iphone-13-pro-max-vang-1.jpg">
                            <p class="ml-3">Vàng</p>
                        </a>
                        <a href="" class="mt-3 text-center hover:font-bold ml-3">
                            <img class="phone-color " src="https://images.fpt.shop/unsafe/fit-in/40x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/15/637673217826201634_iphone-13-pro-max-xanh-1.jpg">
                            <p class="ml-3">Xanh</p>
                        </a>
                        <a href="" class="mt-3 text-center hover:font-bold ml-3">
                            <img class="phone-color" src="https://images.fpt.shop/unsafe/fit-in/40x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/15/637673217819795830_iphone-13-pro-max-xam-1.jpg">
                            <p class="ml-3">Xám</p>
                        </a>
                        <a href="" class="mt-3 text-center hover:font-bold ml-3">
                            <img class="phone-color" src="https://images.fpt.shop/unsafe/fit-in/40x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/15/637673217819171028_iphone-13-pro-max-bac-1.jpg">
                            <p class="ml-3">Bạc</p>
                        </a>
                    </div>
                    <div class="flex mt-3 justify-center">
                        <div class="flex mr-2">
                            <i class="fas fa-award text-red-700  mr-2"></i>
                            <p class="text-sm">Hàng chính hãng - bảo hành 12 Tháng</p>
                        </div>
                        <div class="flex">
                            <i class="fas fa-shipping-fast text-red-700  mr-2"></i>
                            <p class="text-sm">Giao hàng toàn quốc</p>
                        </div>
                    </div>
                </div>
                <div class="detail">
                    <div class="flex ">
                        <span class="text-red-700 font-semibold text-2xl mr-5 mt-2">${data.price}</span>
                        <span class="font-semibold text-lg line-through mt-3">30.990.000₫</span>
                        <span class="ml-52">Trả góp chỉ từ 3.000.500₫/tháng</span>
                    </div>
                    <div class="mt-2 bg-slate-100 grid grid-cols-4 rounded-md">
                        <label class="radio">
                            <input type="radio" class="form-radio" name="GB" value="">
                            <span class="ml-1 font-bold">128GB</span>
                            <span class="block">30.990.000₫</span>
                        </label>
                        <label class="radio">
                            <input type="radio" class="form-radio" name="GB" value="">
                            <span class="ml-1 font-bold">256GB</span>
                            <span class="block">33.490.000₫</span>
                        </label>
                        <label class="radio">
                            <input type="radio" class="form-radio" name="GB" value="">
                            <span class="ml-1 font-bold">512GB</span>
                            <span class="block">40.990.000₫</span>
                        </label>
                        <label class="radio">
                            <input type="radio" class="form-radio" name="GB" value="">
                            <span class="ml-1 font-bold">1TB</span>
                            <span class="block">45.990.000₫</span>
                        </label>
                    </div>
                    <div class="box-Promo">
                      <div class="endow py-[20px]">
                            <span class="bg-[#e9ecef] px-3 font-bold">Ưu đãi thêm</span>
                        </div>
                        <ul class="content-promo">
                            <li class="inline-flex">
                                <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                <div>
                                    <span>
                                        Tặng gói iCloud 50GB miễn phí 3 tháng
                                    </span>
                                    <a href="" class="text-blue-600 hover:underline">Xem chi tiết</a>
                                </div>
                            </li>
                            <li class="inline-flex">
                                <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                <div>
                                    <span>
                                        Giảm sốc 50% cho gói bảo hành vàng chỉ từ 550.000đ
                                    </span>
                                    <a href="" class="text-blue-600 hover:underline">Xem chi tiết</a>
                                </div>
                            </li>
                            <li class="inline-flex">
                                <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                <div>
                                    <span>
                                        Thu cũ đổi mới trợ giá 15%
                                    </span>
                                    <a href="" class="text-blue-600 hover:underline">Xem chi tiết</a>
                                </div>
                            </li>
                            <li class="inline-flex">
                                <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                <div>
                                    <span>
                                        Bảo hành 2 năm chính hãng
                                    </span>
                                    <a href="" class="text-blue-600 hover:underline">Xem chi tiết</a>
                                </div>
                            </li>
                            <li class="inline-flex">
                                <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                <div>
                                    <span>
                                        Tặng PMH 200.000đ mua Sạc Magsafe
                                    </span>
                                    <a href="" class="text-blue-600 hover:underline">Xem chi tiết</a>
                                </div>
                            </li>
                            <li class="inline-flex">
                                <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                <div>
                                    <span>
                                        Tặng PMH 300.000đ mua Ốp lưng chính hãng
                                    </span>
                                    <a href="" class="text-blue-600 hover:underline">Xem chi tiết</a>
                                </div>
                            </li>
                            <li class="inline-flex">
                                <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                <div>
                                    <span>
                                        Cơ hội trúng 22 Hổ Vàng trị giá 6 triệu
                                    </span>
                                    <a href="" class="text-blue-600 hover:underline">Xem chi tiết</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="btn-buy ">
                        <button class="w-full bg-red-700 mt-4 rounded-md text-white hover:bg-red-800" id="btnAddToCart">
                            <div>
                                <strong>MUA NGAY</strong>
                            </div>
                            <p class="text-sm">Giao hàng miễn phí hoặc nhận tại shop</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class ="">
              <h1 class="uppercase text-[16px] font-bold border-b-[1px] mt-2 pl-1"> Thông tin chi tiết sản phẩm </h1>

              <p class="text-[14px] leading-[1.8] mb-3"> le the tam
                </p>
        </div>

                    <div class="conten my-[20px]">
                <h1 class="font-bold text-[20px] py-[20px]">New Arrivals</h1>
                <div class="product grid grid-cols-4 gap-5 ">
                    <form action="">
                        <div class=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg  ">
                            <div class=" w-[100%] ">
                                <a href="#"> <img src="https://vnn-imgs-f.vgcloud.vn/2019/08/07/23/apple-tiep-tuc-thong-tri-thi-truong-may-tinh-bang.jpg" alt=""></a>
                            </div>
                            <div class="py-[10px] px-[10px] leading-8">
                                <a href="#">
                                    <h4 class="font-bold hover:underline">HP Pavilion 15</h4>
                                </a>
                                <p class="text-[15px] text-[red]">$450.000000</p>
                                <p>130,000,000 lượt xem</p>
                            </div>
                            <div class="conten-item ">
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </form>
                    <form action="">
                        <div class=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg  ">
                            <div class=" w-[66%]  m-auto ">
                                <a href="#"> <img src="https://image.made-in-china.com/202f0j00KZUiGpwMLhos/M9-Plus-7-0inch-12g-512g-24MP-Cheap-Smart-Phones-4G-Mobile-Android-Cell-Phones-Lowest-Price-Mobail-Phone.webp" alt="" height="100px"></a>
                            </div>
                            <div class="py-[10px] px-[10px] leading-8">
                                <a href="#">
                                    <h4 class="font-bold hover:underline">HP Pavilion 15</h4>
                                </a>
                                <p class="text-[15px] text-[red]">$450.000000</p>
                                <p>130,000,000 lượt xem</p>
                            </div>
                            <div class="conten-item ">
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </form>
                    <form action="">
                        <div class=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg  ">
                            <div class=" w-[100%] ">
                                <a href="#"> <img src="https://vnn-imgs-f.vgcloud.vn/2019/08/07/23/apple-tiep-tuc-thong-tri-thi-truong-may-tinh-bang.jpg" alt=""></a>
                            </div>
                            <div class="py-[10px] px-[10px] leading-8">
                                <a href="#">
                                    <h4 class="font-bold hover:underline">HP Pavilion 15</h4>
                                </a>
                                <p class="text-[15px] text-[red]">$450.000000</p>
                                <p>130,000,000 lượt xem</p>
                            </div>
                            <div class="conten-item ">
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </form>
                    <form action="">
                        <div class=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg  ">
                            <div class=" w-[100%] ">
                                <a href="#"> <img src="https://vnn-imgs-f.vgcloud.vn/2019/08/07/23/apple-tiep-tuc-thong-tri-thi-truong-may-tinh-bang.jpg" alt=""></a>
                            </div>
                            <div class="py-[10px] px-[10px] leading-8">
                                <a href="#">
                                    <h4 class="font-bold hover:underline">HP Pavilion 15</h4>
                                </a>
                                <p class="text-[15px] text-[red]">$450.000000</p>
                                <p>130,000,000 lượt xem</p>
                            </div>
                            <div class="conten-item ">
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </article>
                <footer class="bg-[#f3f3f3] min-w-full m-auto">
                ${footer.render()}
                </footer>

        `;
    },
    afterRender(id) {
        Headers.afterRender();
        $("#btnAddToCart").addEventListener("click", async() => {
            const { data } = await get(id);
            console.log(data);
            addToCart({...data, quantity: 1 },

                () => {
                    toastr.success(`Them san pham ${data.name} Thanh cong`);
                },
            );
        });
    },
};
export default detail;