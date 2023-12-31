import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CREATE_STUDENT_BEGIN,
  CREATE_STUDENT_SUCCESS,
  CREATE_STUDENT_ERROR,
  GET_STUDENTS_BEGIN,
  GET_STUDENTS_SUCCESS,
} from "./actions";
import { initialState } from "./appContext";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertText: "Please, provide all values!",
      alertType: "danger",
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertText: "",
      alertType: "",
    };
  }
  if (action.type === SETUP_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: action.payload.alertText,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      studentLocation: action.payload.location,
    };
  }
  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      showSidebar: !state.showSidebar,
    };
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
      userLocation: "",
      studentLocation: "",
    };
  }
  if (action.type === UPDATE_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "User profile updated!",
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      studentLocation: action.payload.location,
    };
  }
  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    };
  }
  if (action.type === CLEAR_VALUES) {
    const initialState = {
      isEditing: false,
      editStudentId: "",
      studentName: "",
      studentEmail: "",
      studentLocation: state.userLocation,
      studentStatus: "pending",
      studentCourse: "General English",
    };

    return {
      ...state,
      ...initialState,
    };
  }
  if (action.type === CREATE_STUDENT_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === CREATE_STUDENT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "New student created!",
    };
  }
  if (action.type === CREATE_STUDENT_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === GET_STUDENTS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_STUDENTS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      students: action.payload.students,
      totalStudents: action.payload.totalStudents,
      numOfPages: action.payload.numOfPages,
    };
  }

  throw new Error(`no such action: ${action.type}`);
};

export default reducer;
