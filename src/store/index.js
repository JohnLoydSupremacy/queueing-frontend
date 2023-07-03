import { createStore } from "vuex";
import transactionModule from "./modules/transaction";

const store = createStore(transactionModule);

const persistedState = localStorage.getItem("requests");
if (persistedState) {
  store.state.requests = JSON.parse(persistedState);
}

export default store;
