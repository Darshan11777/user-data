
import React, { useState } from "react";

export default function Form(props) {

  const { setEmployees, id, editEmployee, editId, employees } = props;

  // show warning if user data is empty

  const [warning, setwarning] = React.useState(false);

  // show update to currnt
  const [update, setUpdate] = React.useState(false);

  const initialData = {
    name: "",
    userName: "",
  };
  const [formData, setFormData] = useState(initialData);

  // when input value changes input value to formData

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: value };
    });
  }

  // updateList function update employees old emplyees to new employee

  function updateList(event) {
    event.preventDefault();
    setUpdate(false);

    setEmployees((prevVal) => {
      const newArr = prevVal.filter((i) => i.id !== editId);
      
      return [
      { id: id(), userName: formData.userName, name: formData.name },
      ...newArr,
    ]});
    setFormData(initialData);
  }

  // handleSubmit function add new employee

  function handleSubmit(event) {
    event.preventDefault();

    if (formData.name.length >= 1 && formData.userName.length >= 1) {
      setFormData(initialData);

      setwarning(false);

      setEmployees((prevVal) => [
        { id: id(), userName: formData.userName, name: formData.name },
        ...prevVal,
      ]);
    } else {
      setwarning(true);
    }
  }

  //  when edit id changes set form value to employee that we want to change and set update to true
  React.useEffect(() => {
    if (editId) {
      const curruntEmployee = employees.find((item) => item.id === editId);

      setFormData({
        name: curruntEmployee.name,
        userName: curruntEmployee.userName,
      });
      setUpdate(true);
    }
  }, [editId]);



  return (
    <>
      <div className="form">
        <h2 className="inputTitle">Add user</h2>
        <form onSubmit={update ? updateList : handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-bolder">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
              onChange={handleChange}
              name="name"
              value={formData.name}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="userName" className="form-label fw-bolder">
              Username
            </label>
            <input
              className="form-control"
              id="userName"
              type="text"
              onChange={handleChange}
              name="userName"
              value={formData.userName}
            />
          </div>

          {warning && <div className="warning">Please enter valid value</div>}

          <button type="submit" className="btn btn-primary fw-bolder max">
            Add new user
          </button>
        </form>
      </div>
    </>
  );
}