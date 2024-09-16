// import { createContext, useContext, useState, useEffect } from 'react';

// // Initial inventory data
// const initialInventoryData = [
//   { id: 1, name: 'Aspirin', quantity: 100, price: 5.0 },
//   { id: 2, name: 'Paracetamol', quantity: 200, price: 2.5 },
//   { id: 3, name: 'Ibuprofen', quantity: 150, price: 3.0 },
// ];

// const GlobalContext = createContext();

// export const GlobalProvider = ({ children }) => {
//   const [doctors, setDoctors] = useState([]);
//   const [patients, setPatients] = useState(() => {
//     const storedPatients = localStorage.getItem('patients');
//     return storedPatients ? JSON.parse(storedPatients) : [];
//   });
//   const [inventory, setInventory] = useState(() => {
//     const storedInventory = localStorage.getItem('inventory');
//     return storedInventory ? JSON.parse(storedInventory) : initialInventoryData;
//   });

//   const addInventoryItem = (item) => {
//     setInventory(prevInventory => [...prevInventory, item]);
//   };

//   const updateInventoryItem = (updatedItem) => {
//     setInventory(prevInventory =>
//       prevInventory.map(item =>
//         item.id === updatedItem.id ? updatedItem : item
//       )
//     );
//   };

//   const deleteInventoryItem = (id) => {
//     setInventory(prevInventory => prevInventory.filter(item => item.id !== id));
//   };

//   const addPatient = (patient) => {
//     setPatients(prevPatients => [...prevPatients, patient]);
//   };

//   const editPatient = (updatedPatient) => {
//     setPatients(prevPatients =>
//       prevPatients.map(patient =>
//         patient.id === updatedPatient.id ? updatedPatient : patient
//       )
//     );
//   };

//   const deletePatient = (id) => {
//     setPatients(prevPatients => prevPatients.filter(patient => patient.id !== id));
//   };

//   const calculateTotalDoctors = () => doctors.length;
//   const calculateAvailableDoctors = () => doctors.filter(doctor => doctor.available).length;
//   const calculateUnavailableDoctors = () => doctors.filter(doctor => !doctor.available).length;

//   useEffect(() => {
//     localStorage.setItem('patients', JSON.stringify(patients));
//   }, [patients]);

//   useEffect(() => {
//     localStorage.setItem('inventory', JSON.stringify(inventory));
//   }, [inventory]);

//   return (
//     <GlobalContext.Provider value={{
//       doctors,
//       setDoctors,
//       patients,
//       addPatient,
//       editPatient,
//       deletePatient,
//       inventory,
//       setInventory,
//       setPatients,
//       addInventoryItem,
//       updateInventoryItem,
//       deleteInventoryItem,
//       calculateTotalDoctors,
//       calculateAvailableDoctors,
//       calculateUnavailableDoctors,
//       totalPatients: patients.length,
//     }}>
//       {children}
//     </GlobalContext.Provider>
//   );
// };

// export const useGlobalContext = () => useContext(GlobalContext);
import { createContext, useContext, useState, useEffect } from 'react';

// Initial inventory data
const initialInventoryData = [
  { id: 1, name: 'Aspirin', quantity: 100, price: 5.0 },
  { id: 2, name: 'Paracetamol', quantity: 200, price: 2.5 },
  { id: 3, name: 'Ibuprofen', quantity: 150, price: 3.0 },
];

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [doctors, setDoctors] = useState(() => {
    const storedDoctors = localStorage.getItem('doctors');
    return storedDoctors ? JSON.parse(storedDoctors) : [{ id: 1, name: 'Dr. Smith', available: true, time: '09:00 - 17:00', designation: 'Doctor' },
      { id: 2, name: 'Dr. Johnson', available: false, time: '11:00 - 19:00', designation: 'Doctor' },
      { id: 3, name: 'Ms. Davis', available: true, time: '08:00 - 16:00', designation: 'Staff' },];
  });
  
  const [patients, setPatients] = useState(() => {
    const storedPatients = localStorage.getItem('patients');
    return storedPatients ? JSON.parse(storedPatients) : [];
  });

  const [inventory, setInventory] = useState(() => {
    const storedInventory = localStorage.getItem('inventory');
    return storedInventory ? JSON.parse(storedInventory) : initialInventoryData;
  });

  const addInventoryItem = (item) => {
    setInventory(prevInventory => [...prevInventory, item]);
  };

  const updateInventoryItem = (updatedItem) => {
    setInventory(prevInventory =>
      prevInventory.map(item =>
        item.id === updatedItem.id ? updatedItem : item
      )
    );
  };

  const deleteInventoryItem = (id) => {
    setInventory(prevInventory => prevInventory.filter(item => item.id !== id));
  };

  const addPatient = (patient) => {
    setPatients(prevPatients => [...prevPatients, patient]);
  };

  const editPatient = (updatedPatient) => {
    setPatients(prevPatients =>
      prevPatients.map(patient =>
        patient.id === updatedPatient.id ? updatedPatient : patient
      )
    );
  };

  const deletePatient = (id) => {
    setPatients(prevPatients => prevPatients.filter(patient => patient.id !== id));
  };

  const addDoctor = (doctor) => {
    setDoctors(prevDoctors => [...prevDoctors, doctor]);
  };

  const editDoctor = (updatedDoctor) => {
    setDoctors(prevDoctors =>
      prevDoctors.map(doctor =>
        doctor.id === updatedDoctor.id ? updatedDoctor : doctor
      )
    );
  };

  const deleteDoctor = (id) => {
    setDoctors(prevDoctors => prevDoctors.filter(doctor => doctor.id !== id));
  };

  const calculateTotalDoctors = () => doctors.length;
  const calculateAvailableDoctors = () => doctors.filter(doctor => doctor.available).length;
  const calculateUnavailableDoctors = () => doctors.filter(doctor => !doctor.available).length;

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]);

  useEffect(() => {
    localStorage.setItem('inventory', JSON.stringify(inventory));
  }, [inventory]);

  useEffect(() => {
    localStorage.setItem('doctors', JSON.stringify(doctors));
  }, [doctors]);

  return (
    <GlobalContext.Provider value={{
      doctors,
      setDoctors,
      addDoctor,
      editDoctor,
      deleteDoctor,
      patients,
      setPatients,
      addPatient,
      editPatient,
      deletePatient,
      inventory,
      setInventory,
      addInventoryItem,
      updateInventoryItem,
      deleteInventoryItem,
      calculateTotalDoctors,
      calculateAvailableDoctors,
      calculateUnavailableDoctors,
      totalPatients: patients.length,
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
