import { useState } from 'react';
import { AiOutlineEdit, AiOutlineSave, AiOutlineDelete, AiOutlineMessage } from 'react-icons/ai';
import Dashboard from './Dashboard';
import { useGlobalContext } from '../context/Context';

const Doctors = () => {
  const { doctors, setDoctors } = useGlobalContext();  // Use global context for doctors
  const [search, setSearch] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [message, setMessage] = useState('');
  const [newDoctor, setNewDoctor] = useState({ name: '', available: true, time: '', designation: 'Doctor' });

  // Filter doctors based on search
  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(search.toLowerCase())
  );

  // Handle adding new doctor
  const handleAddDoctor = () => {
    if (newDoctor.name.trim() && newDoctor.time.trim()) {
      const newDoctorData = {
        id: doctors.length ? Math.max(...doctors.map(doc => doc.id)) + 1 : 1,
        ...newDoctor,
      };
      setDoctors([...doctors, newDoctorData]); // Update global state
      setNewDoctor({ name: '', available: true, time: '', designation: 'Doctor' });
    }
  };

  // Handle editing existing doctor
  const handleEditDoctor = (doctor) => {
    setSelectedDoctor(doctor);
    setNewDoctor({ name: doctor.name, available: doctor.available, time: doctor.time, designation: doctor.designation });
  };

  // Save the edited doctor
  const handleSaveEdit = () => {
    if (selectedDoctor && newDoctor.name.trim() && newDoctor.time.trim()) {
      setDoctors(doctors.map(doc => doc.id === selectedDoctor.id ? { ...doc, ...newDoctor } : doc)); // Update global state
      setSelectedDoctor(null);
      setNewDoctor({ name: '', available: true, time: '', designation: 'Doctor' });
    }
  };

  // Handle delete doctor
  const handleDeleteDoctor = (id) => {
    setDoctors(doctors.filter(doc => doc.id !== id)); // Update global state
  };

  // Send a message to the selected doctor
  const handleSendMessage = () => {
    if (selectedDoctor && message.trim()) {
      alert(`Message sent to ${selectedDoctor.name}: ${message}`);
      setMessage('');
    }
  };

  // Toggle availability
  const handleAvailabilityToggle = () => {
    setNewDoctor(prev => ({ ...prev, available: !prev.available }));
  };

  return (
    <div>
      <Dashboard />
      <div className="p-6 mt-10 mb-10 ml-20 md:ml-60 md:mr-10 rounded-2xl bg-indigo-200 min-h-screen">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Doctors Management</h2>

        {/* Add/Edit Doctor Section */}
        <div className="bg-white p-4 rounded-lg shadow-md space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Add/Edit Doctor or Staff</h3>
            <input
              type="text"
              className="border border-[#9DBDFF] p-2 rounded-lg mb-2 w-full bg-white text-sm"
              placeholder="Doctor's Name"
              value={newDoctor.name}
              onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })}
            />
            <input
              type="text"
              className="border border-[#9DBDFF] p-2 rounded-lg mb-2 w-full bg-white text-sm"
              placeholder="Available Time"
              value={newDoctor.time}
              onChange={(e) => setNewDoctor({ ...newDoctor, time: e.target.value })}
            />
            <div className="flex items-center mb-2">
              <label className="mr-2 text-gray-800">Available:</label>
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-[#7695FF] rounded"
                checked={newDoctor.available}
                onChange={handleAvailabilityToggle}
              />
            </div>
            <select
              className="border border-[#9DBDFF] p-2 rounded-lg mb-2 w-full bg-white text-sm"
              value={newDoctor.designation}
              onChange={(e) => setNewDoctor({ ...newDoctor, designation: e.target.value })}
            >
              <option value="Doctor">Doctor</option>
              <option value="Staff">Staff</option>
            </select>
            <button
              onClick={selectedDoctor ? handleSaveEdit : handleAddDoctor}
              className="bg-[#7695FF] text-white p-2 rounded-lg shadow-md hover:bg-[#6A7DFF] transition-transform"
            >
              {selectedDoctor ? <AiOutlineSave /> : 'Add Doctor'}
            </button>
          </div>
        </div>

        {/* Search and List Section */}
        <div className="bg-white rounded-lg shadow-md mt-6">
          <h3 className="text-xl px-4 pt-2 font-semibold mb-4 text-gray-800">Doctors & Staff List</h3>
          <div className="px-4 mb-4 flex items-center rounded-lg shadow-sm">
            <input
              type="text"
              className="border border-[#9DBDFF] p-2 rounded-lg w-full bg-white text-sm"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-[#7695FF] text-white">
                <th className="border p-2">Name</th>
                <th className="border p-2">Available</th>
                <th className="border p-2">Time</th>
                <th className="border p-2">Designation</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredDoctors.map((doctor) => (
                <tr key={doctor.id} className="hover:bg-gray-200 cursor-pointer">
                  <td className="border p-2">{doctor.name}</td>
                  <td className="border p-2">{doctor.available ? 'Available' : 'Not Available'}</td>
                  <td className="border p-2">{doctor.time}</td>
                  <td className="border p-2">{doctor.designation}</td>
                  <td className="border p-2 flex space-x-2">
                    <button
                      onClick={() => handleEditDoctor(doctor)}
                      className="bg-[#FFD7C4] text-[#FF9874] p-1 rounded-lg shadow-md hover:bg-[#FF9874] hover:text-white transition-transform"
                    >
                      <AiOutlineEdit />
                    </button>
                    <button
                      onClick={() => handleDeleteDoctor(doctor.id)}
                      className="bg-[#FF9874] text-white p-1 rounded-lg shadow-md hover:bg-[#FF6F6F] transition-transform"
                    >
                      <AiOutlineDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Doctors;