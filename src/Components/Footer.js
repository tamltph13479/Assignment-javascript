const footer = {
    render() {
        return /* html */ `
            <div class=" w-[1200px] m-auto grid grid-cols-4 pt-10 pb-10 gap-[20px] ">
                <div class="w-[320px] px-[20px] ">
                    <div>
                        <img src="https://rafcart.rslahmed.com/assets/images/svg/logo.svg" alt="">
                    </div>
                    <p class="py-[10px] leading-5"><a href="#">Lorem ipsum, or it is sometimes kno wn, is dummy text used in laying out print.</a></p>
                    <div>
                        <div class="footer_newslet">
                            <h6 class="font-bold py-[10px]">NEWSLETTER</h6>
                            <form class="footernews_form">
                                <input type="text" placeholder="Your email address" class="py-[10px] rounded-lg bg-none">
                                <a href="#">
                                    <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sing in</button>
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="intro px-[20px]">
                    <div>
                        <h2 class="font-bold ">MY ACCOUNT</h2>
                    </div>
                    <div class="pt-[10px] leading-8">
                        <p><a href="">Orders</a></p>
                        <p><a href="">Wishlist</a></p>
                        <p><a href="">Track Order</a></p>
                        <p><a href="">Manage Account</a></p>
                        <p><a href="">Return Order</a></p>
                    </div>
                </div>
                <div class="intro px-[20px]">
                    <div>
                        <h2 class="font-bold "> INFORMATION</h2>
                    </div>
                    <div class="pt-[10px] leading-8">
                        <p><a href="">About Us</a></p>
                        <p><a href="">Return Policy</a></p>
                        <p><a href="">Terms & condition</a></p>
                        <p><a href="">Privacy Policy</a></p>
                        <p><a href="">
FAQ</a></p>
                    </div>
                </div>
                <div class="intro px-[20px]">
                    <div>
                        <h2 class="font-bold leading-8 ">CONTACT</h2>
                    </div>
                    <div class="pt-[10px] leading-8">
                        <p><a href="">Tòa nhà FPT Polytechnic, P. Trịnh Văn Bô, Xuân Phương, Nam Từ Liêm, Hà Nội</a></p>
                        <p><a href="">Phone :+566 477 256, +566 254 575</a></p>
                        <p><a href="">Email : Thetam1998@gmail.com</a></p>

                    </div>
                </div>
            </div>
            <div class="py-3 bg-[#2b2d42] text-center text-xs text-[#ffffff]">
                <p>© RAFCART - All Rights Reserved</p>
            </div>
        
        
        `;
    },

};
export default footer;