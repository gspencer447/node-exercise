import query from "../db/utils.js";

const findAll = async () => {
  return query("SELECT EmployeeID, FirstName, LastName, Title FROM employees");
};

const findOne = async (id) => {
  return query("SELECT EmployeeID, FirstName, LastName, Title FROM employees WHERE EmployeeID = ?", [
    id
  ]);
};

const addOne = async (employee) => {
    return await query("INSERT INTO employees SET ?", [employee]);
  };
  
  const updateOne = async (id, employee) => {
    return await query("UPDATE employees SET ? WHERE EmployeeID = ?", [
      employee,
      id,
    ]);
  };
  
  const removeOne = async (id) => {
    return await query("DELETE FROM employees WHERE EmployeeID = ?", [id]);
  };

  export default {
    findAll,
    findOne,
    addOne,
    updateOne,
    removeOne,
  };