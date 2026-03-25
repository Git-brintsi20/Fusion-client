import api from "./api";

const studentService = {
  // Get student information
  getStudentsInfo: () =>
    api.get("/hostelmanagement/students_get_students_info/"),

  // Get student's own leaves
  getMyLeaves: () => api.get("/hostelmanagement/my_leaves/"),

  // Get fines for student
  getStudentFines: () => api.get("/hostelmanagement/fine-show/"),

  // Submit leave request
  requestLeave: (data) =>
    api.post("/hostelmanagement/create_hostel_leave/", data),

  // Get complaints
  getComplaints: () => api.get("/hostelmanagement/hostel_complaints/"),

  // Request guest room
  requestGuestRoom: (data) =>
    api.post("/hostelmanagement/book_guest_room/", data),

  // Get guest room bookings
  getGuestRoomBookings: () =>
    api.get("/hostelmanagement/get_guest_room_request_students/"),

  // Get attendance
  viewAttendance: (year, month) =>
    api.get(`/hostelmanagement/view_attendance/?year=${year}&month=${month}`, {
      responseType: "blob",
    }),
};

export default studentService;
