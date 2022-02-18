import headeradmin from "../../Components/Admindashoard/Headderadmin";
import Navadmin from "../../Components/Admindashoard/Navadmin";

const Dashboard = {
    render() {
        return /* html */ `
          <div class="flex h-screen bg-gray-50 dark:bg-gray-900" :class="{ 'overflow-hidden': isSideMenuOpen}">
    <!-- Desktop sidebar -->
        ${Navadmin.render()}
    <div class="flex flex-col flex-1 w-full">
${headeradmin.render()}
        <main class="h-full overflow-y-auto">
            <div class="container px-6 mx-auto grid">
                <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                    Dashboard
                </h2>

            </div>
        </main>
    </div>

</div>
            `;
    },
};
export default Dashboard;