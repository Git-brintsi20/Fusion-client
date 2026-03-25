import api from "./api";

const commonService = {
  // Get notices
  getNotices: () => api.get("/hostelmanagement/hostel_notices/"),

  // Create notice
  createNotice: (data) => api.post("/hostelmanagement/create_notice/", data),

  // Delete notice
  deleteNotice: (data) => api.post("/hostelmanagement/delete_notice/", data),

  // Get student info (used across modules)
  getStudentsInfo: () =>
    api.get("/hostelmanagement/students_get_students_info/"),

  // Get caretaker's students info
  getCaretakerStudentsInfo: () =>
    api.get("/hostelmanagement/caretaker_get_students_info/"),
};

export default commonService;
