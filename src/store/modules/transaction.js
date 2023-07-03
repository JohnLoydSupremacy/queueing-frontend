const state = {
  userType: null,
  studentId: null,
  department: null,
  departmentName: null,
  service: null,
  serviceName: null,
  requests: [],
};

const getters = {
  getUserType: (state) => state.userType,
  getStudentId: (state) => state.studentId,
  getDepartment: (state) => state.department,
  getDepartmentName: (state) => state.departmentName,
  getService: (state) => state.service,
  getServiceName: (state) => state.serviceName,
  getRequests: (state) => state.requests,
};

const mutations = {
  addRequest(state, newRequest) {
    state.requests.push(newRequest);
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
  // Clear the state properties
  clearState(state) {
    state.userType = null;
    state.studentId = null;
    state.department = null;
    state.departmentName = null;
    state.service = null;
    state.serviceName = null;
    state.requests = [];
  },
};

const actions = {
  addRequestAction({ commit }, newRequest) {
    commit("addRequest", newRequest);
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
  // Action to clear the state
  clearStateAction({ commit }) {
    commit("clearState");
  },
};

const plugins = [
  // Persist state using local storage
  (store) => {
    store.subscribe((mutation, state) => {
      localStorage.setItem("requests", JSON.stringify(state.requests));
      localStorage.setItem("userType", JSON.stringify(state.userType));
      localStorage.setItem("studentId", JSON.stringify(state.studentId));
      localStorage.setItem("department", JSON.stringify(state.department));
      localStorage.setItem(
        "departmentName",
        JSON.stringify(state.departmentName)
      );
      localStorage.setItem("service", JSON.stringify(state.service));
      localStorage.setItem("serviceName", JSON.stringify(state.serviceName));
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
