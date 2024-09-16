
// import { useGlobalContext } from '../context/Context';
// import { AiOutlineUser, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
// import avatar from '../public/avatar.jpg';
// import Dashboard from './Dashboard';

// const Overview = () => {
//   const { doctors, patients, inventory, accountDetails, calculateTotalDoctors, calculateAvailableDoctors, calculateUnavailableDoctors } = useGlobalContext();

//   // Provide default values to prevent errors
//   const account = accountDetails || { name: 'N/A', email: 'N/A', phone: 'N/A' };

//   return (
//     <div>
//       <Dashboard />
//       <div className="mt-10 mb-10 ml-4 md:ml-60 rounded-2xl bg-indigo-200 min-h-screen p-4">
//         <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">Overview</h2>

//         {/* Account Details Section */}
//         <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex flex-col md:flex-row items-center md:items-start">
//           <img src={avatar} className='w-24 h-24 md:w-32 md:h-32 rounded-md mb-4 md:mb-0' alt="avatar" />
//           <div className='md:ml-4'>
//             <h3 className="text-xl font-semibold mb-4 text-gray-800">Account Details</h3>
//             <div className="flex items-center mb-2">
//               <AiOutlineUser className="text-[#7695FF] mr-2 text-2xl" />
//               <p className="text-lg font-semibold text-gray-800">Name: {account.name}</p>
//             </div>
//             <div className="flex items-center mb-2">
//               <AiOutlineMail className="text-[#7695FF] mr-2 text-2xl" />
//               <p className="text-lg font-semibold text-gray-800">Email: {account.email}</p>
//             </div>
//             <div className="flex items-center mb-2">
//               <AiOutlinePhone className="text-[#7695FF] mr-2 text-2xl" />
//               <p className="text-lg font-semibold text-gray-800">Phone: {account.phone}</p>
//             </div>
//           </div>
//         </div>

//         {/* Stats Summary */}
//         <div className="bg-white p-4 rounded-lg shadow-md">
//           <h3 className="text-xl font-semibold mb-4 text-gray-800">Stats Summary</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             <div className="flex items-center p-4 bg-[#FF9874] text-white rounded-lg shadow-md">
//               <AiOutlineUser className="text-2xl mr-3" />
//               <p className="text-lg font-semibold">Total Doctors: {calculateTotalDoctors()}</p>
//             </div>
//             <div className="flex items-center p-4 bg-[#7695FF] text-white rounded-lg shadow-md">
//               <AiOutlineUser className="text-2xl mr-3" />
//               <p className="text-lg font-semibold">Available Doctors: {calculateAvailableDoctors()}</p>
//             </div>
//             <div className="flex items-center p-4 bg-[#FF6F6F] text-white rounded-lg shadow-md">
//               <AiOutlineUser className="text-2xl mr-3" />
//               <p className="text-lg font-semibold">Unavailable Doctors: {calculateUnavailableDoctors()}</p>
//             </div>
//             <div className="flex items-center p-4 bg-[#FF9874] text-white rounded-lg shadow-md">
//               <AiOutlineUser className="text-2xl mr-3" />
//               <p className="text-lg font-semibold">Total Patients: {patients.length}</p>
//             </div>
//             <div className="flex items-center p-4 bg-[#FF9874] text-white rounded-lg shadow-md">
//               <AiOutlineUser className="text-2xl mr-3" />
//               <p className="text-lg font-semibold">Total Inventory Items: {inventory.length}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Overview;

import { AiOutlineUser, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import avatar from '../../public/avatar.jpg';
import Dashboard from './Dashboard';
import { useGlobalContext } from '../context/Context'; // Adjust the import path as needed

const Overview = () => {
  const { doctors, patients, calculateTotalDoctors, calculateAvailableDoctors, calculateUnavailableDoctors, inventory } = useGlobalContext();

  // Provide default values to prevent errors
  const account = { name: 'N/A', email: 'N/A', phone: 'N/A' }; // Replace with actual account data

  return (
    <div>
      <Dashboard />
      <div className="mt-10 mb-10 ml-4 md:ml-60 rounded-2xl bg-indigo-200 min-h-screen p-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">Overview</h2>

        {/* Account Details Section */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex flex-col md:flex-row items-center md:items-start">
          <img src={avatar} className='w-24 h-24 md:w-32 md:h-32 rounded-md mb-4 md:mb-0' alt="avatar" />
          <div className='md:ml-4'>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Account Details</h3>
            <div className="flex items-center mb-2">
              <AiOutlineUser className="text-[#7695FF] mr-2 text-2xl" />
              <p className="text-lg font-semibold text-gray-800">Name: John Doe</p>
            </div>
            <div className="flex items-center mb-2">
              <AiOutlineMail className="text-[#7695FF] mr-2 text-2xl" />
              <p className="text-lg font-semibold text-gray-800">Email: johndoe12@gmail.com</p>
            </div>
            <div className="flex items-center mb-2">
              <AiOutlinePhone className="text-[#7695FF] mr-2 text-2xl" />
              <p className="text-lg font-semibold text-gray-800">Phone: +81 9999900011</p>
            </div>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Stats Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center p-4 bg-[#FF9874] text-white rounded-lg shadow-md">
              <AiOutlineUser className="text-2xl mr-3" />
              <p className="text-lg font-semibold">Total Doctors: {calculateTotalDoctors()}</p>
            </div>
            <div className="flex items-center p-4 bg-[#7695FF] text-white rounded-lg shadow-md">
              <AiOutlineUser className="text-2xl mr-3" />
              <p className="text-lg font-semibold">Available Doctors: {calculateAvailableDoctors()}</p>
            </div>
            <div className="flex items-center p-4 bg-[#FF6F6F] text-white rounded-lg shadow-md">
              <AiOutlineUser className="text-2xl mr-3" />
              <p className="text-lg font-semibold">Unavailable Doctors: {calculateUnavailableDoctors()}</p>
            </div>
            <div className="flex items-center p-4 bg-[#FF9874] text-white rounded-lg shadow-md">
              <AiOutlineUser className="text-2xl mr-3" />
              <p className="text-lg font-semibold">Total Patients: {patients.length}</p>
            </div>
            <div className="flex items-center p-4 bg-[#FF9874] text-white rounded-lg shadow-md">
              <AiOutlineUser className="text-2xl mr-3" />
              <p className="text-lg font-semibold">Total Inventory Items: {inventory.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;