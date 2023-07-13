import { FormRow, FormRowSelect, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const AddStudent = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    studentName,
    studentEmail,
    studentLocation,
    studentStatus,
    studentStatusOptions,
    studentCourse,
    studentCourseOptions,
    handleChange,
    clearValues,
    createStudent,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!studentName || !studentEmail || !studentLocation) {
      displayAlert();
      return;
    }

    if (isEditing) {
      return;
    }

    createStudent();
  };

  const handleStudentInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit" : "add"} student</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            type="text"
            labelText="name"
            name="studentName"
            value={studentName}
            handleChange={handleStudentInput}
          />
          <FormRow
            type="email"
            labelText="email"
            name="studentEmail"
            value={studentEmail}
            handleChange={handleStudentInput}
          />
          <FormRow
            type="text"
            labelText="location"
            name="studentLocation"
            value={studentLocation}
            handleChange={handleStudentInput}
          />
          <FormRowSelect
            name="studentStatus"
            labelText="student status"
            value={studentStatus}
            handleChange={handleStudentInput}
            list={studentStatusOptions}
          />
          <FormRowSelect
            name="studentCourse"
            labelText="student course"
            value={studentCourse}
            handleChange={handleStudentInput}
            list={studentCourseOptions}
          />
          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              Submit
            </button>
            <button
              className="btn btn-block clear-btn"
              onClick={(e) => {
                e.preventDefault();
                clearValues();
              }}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddStudent;
