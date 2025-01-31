import {
  QuestionMarkCircleIcon,
  UserCircleIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import logo from "../../assets/images/images.png"
import AdminDashboard from "../Pages/AdminDashboard";
const AdminHeader = () => {
  return (
    <>
    <header className="bg-white shadow-md flex  px-4 py-4 justify-between">
      {/* Logo and Title */}
      <div className="flex items-center space-x-4 ">
        <img src={logo} className="w-20"/>
      </div>

      <h1 className="text-sm  md:text-xl items-center py-2 font-bold text-blue-600 ">
        Protocol Deviation Classification
      </h1>

      <div className="flex items-center space-x-6">
        {/* User Name */}
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 flex items-center justify-center rounded-full ">
            <UserCircleIcon />
          </div>
          <span className="text-gray-700 font-medium">User Name</span>
          <div className="h-8 w-8 flex items-center justify-center  rounded-full ">
            <QuestionMarkCircleIcon />
          </div>

          <div className="h-8 w-8 flex items-center justify-center  rounded-full ">
            <ArrowRightStartOnRectangleIcon />
          </div>
        </div>
      </div>
    </header>
    <AdminDashboard/>
    </>
  );
};
export default AdminHeader;
