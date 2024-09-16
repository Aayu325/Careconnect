export const calculateTotalDoctors = (doctors) => doctors.filter(doc => doc.designation === 'Doctor').length;

export const calculateAvailableDoctors = (doctors) => doctors.filter(doc => doc.available && doc.designation === 'Doctor').length;

export const calculateUnavailableDoctors = (doctors) => {
  const totalDoctors = calculateTotalDoctors(doctors);
  return totalDoctors - calculateAvailableDoctors(doctors);
};