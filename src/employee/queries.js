const getEmployees = "SELECT * FROM employees";
const getEmployeeById = "SELECT * FROM employees WHERE id = $1"
const checkEmailExists = "SELECT e FROM employees WHERE e.emailid = $1"

module.exports = {
    getEmployees,
    getEmployeeById,
    checkEmailExists,
};