import api from "./api";

const adminService = {
  // View hostels
  viewHostel: () => api.get("/hostelmanagement/admin-hostel-list"),

  // Add hostel
  addHostel: (data) => api.post("/hostelmanagement/add-hostel/", data),

  // Get caretakers
  getCaretakers: () => api.get("/hostelmanagement/get_caretakers/"),

  // Assign caretakers
  assignCaretakers: (data) =>
    api.post("/hostelmanagement/assign_caretakers/", data),

  // Get wardens
  getWardens: () => api.get("/hostelmanagement/get_wardens/"),

  // Assign wardens
  assignWarden: (data) => api.post("/hostelmanagement/assign_warden/", data),

  // Get batches
  getBatches: () => api.get("/hostelmanagement/get_batches/"),

  // Assign batch
  assignBatch: (formData) =>
    api.post("/hostelmanagement/batch-assign/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
};

export default adminService;
