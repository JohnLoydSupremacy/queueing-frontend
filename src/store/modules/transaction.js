const state = {
  userType: null,
  studentId: null,
  department: null,
  departmentName: null,
  service: null,
  serviceName: null,
  requests: [],
  section: null,
  ticket: null,
};

const getters = {
  getUserType: (state) => state.userType,
  getStudentId: (state) => state.studentId,
  getDepartment: (state) => state.department,
  getDepartmentName: (state) => state.departmentName,
  getService: (state) => state.service,
  getServiceName: (state) => state.serviceName,
  getRequests: (state) => state.requests,
  getSection: (state) => state.section,
  getTicket: (state) => state.ticket,
};

const mutations = {
  addRequest(state, newRequest) {
    state.requests.push(newRequest);
  },
  removeRequest(state, index) {
    state.requests.splice(index, 1);
  },
  setRequests(state, requests) {
    state.requests = requests;
  },
  setUserType(state, userType) {
    state.userType = userType;
  },
  setStudentId(state, studentId) {
    state.studentId = studentId;
  },
  setDepartment(state, department) {
    state.department = department;
  },
  setDepartmentName(state, departmentName) {
    state.departmentName = departmentName;
  },
  setService(state, service) {
    state.service = service;
  },
  setServiceName(state, serviceName) {
    state.serviceName = serviceName;
  },
  setSection(state, section) {
    state.section = section;
  },
  setTicket(state, ticket) {
    state.ticket = ticket;
  },
  // Clear the state properties
  clearState(state) {
    state.userType = null;
    state.studentId = null;
    state.department = null;
    state.departmentName = null;
    state.service = null;
    state.serviceName = null;
    state.requests = [];
    state.section = null;
    state.ticket = null;
  },
};

const actions = {
  addRequestAction({ commit }, newRequest) {
    commit("addRequest", newRequest);
  },
  removeRequestAction({ commit }, index) {
    commit("removeRequest", index);
  },
  setRequestsAction({ commit }, requests) {
    commit("setRequests", requests);
  },
  setUserTypeAction({ commit }, userType) {
    commit("setUserType", userType);
  },
  setStudentIdAction({ commit }, studentId) {
    commit("setStudentId", studentId);
  },
  setDepartmentAction({ commit }, department) {
    commit("setDepartment", department);
  },
  setDepartmentNameAction({ commit }, departmentName) {
    commit("setDepartmentName", departmentName);
  },
  setServiceAction({ commit }, service) {
    commit("setService", service);
  },
  setServiceNameAction({ commit }, serviceName) {
    commit("setServiceName", serviceName);
  },
  setSectionAction({ commit }, section) {
    commit("setSection", section);
  },
  setTicketAction({ commit }, ticket) {
    commit("setTicket", ticket);
  },
  // Action to clear the state
  clearStateAction({ commit }) {
    commit("clearState");
  },
  loadStoredState({ commit }) {
    const userType = localStorage.getItem("userType");
    const studentId = localStorage.getItem("studentId");
    const department = localStorage.getItem("department");
    const departmentName = localStorage.getItem("departmentName");
    const service = localStorage.getItem("service");
    const serviceName = localStorage.getItem("serviceName");
    const requests = JSON.parse(localStorage.getItem("requests"));
    const section = localStorage.getItem("section");
    const ticket = JSON.parse(localStorage.getItem("ticket"));

    commit("setUserType", userType);
    commit("setStudentId", studentId);
    commit("setDepartment", department);
    commit("setDepartmentName", departmentName);
    commit("setService", service);
    commit("setServiceName", serviceName);
    commit("setRequests", requests);
    commit("setSection", section);
    commit("setTicket", ticket);
  },
};

const plugins = [
  // Persist state using local storage
  (store) => {
    store.subscribe((mutation, state) => {
      localStorage.setItem("requests", JSON.stringify(state.requests));
      localStorage.setItem("userType", state.userType);
      localStorage.setItem("studentId", state.studentId);
      localStorage.setItem("department", state.department);
      localStorage.setItem("departmentName", state.departmentName);
      localStorage.setItem("service", state.service);
      localStorage.setItem("serviceName", state.serviceName);
      localStorage.setItem("section", state.section);
      localStorage.setItem("ticket", JSON.stringify(state.ticket));
    });
  },
];

export default {
  state,
  getters,
  actions,
  mutations,
  plugins,
};
