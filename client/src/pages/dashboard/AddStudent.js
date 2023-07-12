import { useState } from "react";
import { FormRow, FormRowSelect, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const AddStudent = () => {
  const {
    isEditing,
    showAlert,
    displayAlert,
    studentName,
    studentLastName,
    studentEmail,
    studentLocation,
    studentStatus,
    studentStatusOptions,
    studentCourse,
    studentCourseOptions,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!studentName || !studentEmail || !studentLocation) {
      displayAlert();
      return;
    }

    console.log("create job");
  };

  const handleStudentInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name}: ${value}`);
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
            type="text"
            labelText="last name"
            name="studentLastName"
            value={studentLastName}
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
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddStudent;
