// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {

  // Get user input to create and return an array of employee objects
  const employeesArray = [];
  let done = false;

  while (!done) {
    // store user input
    const fName = prompt("Enter First Name:");
    const lName = prompt("Enter Last Name:");
    
    let salary; 
    while ( isNaN(salary) ) {
      salary = parseFloat(prompt("Enter Salary:", "$0"));
    }
    
    // create object containing employee data from input and append to the array of employees
    employeesArray.push(
      {
        firstName: fName,
        lastName: lName,
        salary: salary,
      }
    )

    // prompt user to enter new employee
    const addNew = prompt("Do you want to add another employee?");
    if (addNew === null) {
      done = true;
    }
  }

  return employeesArray;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  
  // calculate average salary
  let averageSalary = 0;

  for (const employee of employeesArray) {
    averageSalary+= employee.salary;
  }
  averageSalary = (averageSalary/employeesArray.length).toFixed(2);

  // log salary and num employees to the console
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${averageSalary}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
