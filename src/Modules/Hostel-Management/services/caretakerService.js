import api from "./api";

const caretakerService = {
  // Get caretaker's student information
  getStudentsInfo: () =>
    api.get("/hostelmanagement/caretaker_get_students_info/"),

  // Get fines for management
  getFines: () => api.get("/hostelmanagement/fetch-fine/"),

  // Update fine status
  updateFineStatus: (fineId, status) =>
    api.post(`/hostelmanagement/update-fine-status/${fineId}/`, { status }),

  // Impose fine on student
  imposeFine: (data) => api.post("/hostelmanagement/impose-fine/", data),

  // Get leave requests
  getLeaveRequests: () => api.get("/hostelmanagement/all_leave_data/"),

  // Update leave status
  updateLeaveStatus: (data) =>
    api.post("/hostelmanagement/update_leave_status/", data),

  // Upload attendance
  uploadAttendance: (formData) =>
    api.post("/hostelmanagement/upload_attendance/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),

  // Create notice
  createNotice: (data) => api.post("/hostelmanagement/create_notice/", data),

  // Delete notice
  deleteNotice: (data) => api.post("/hostelmanagement/delete_notice/", data),
};

export default caretakerService;
