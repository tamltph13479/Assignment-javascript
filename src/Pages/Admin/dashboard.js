import Navadmin from "../../Components/Admindashoard/Navadmin";

const Dashboard = {
    render() {
        return /* html */ `
           <div class="min-h-full">
             ${Navadmin.render()}
  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900">
        Dashboard
      </h1>
    </div>
  </header>
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
      </div>
    </div>
  </main>
</div>
            `;
    },
};
export default Dashboard;