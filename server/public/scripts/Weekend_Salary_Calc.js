
class Employee {
  constructor( first, last, id, title, salary ) {
    this.first = first;
    this.last = last;
    this.id = id;
    this.title = title;
    this.salary = salary;
  } //end constructor
} //end Employee Class
let monthlyBudget = 20000;
let newGuy1 = new Employee ('Kerry', 'Burns', 124, 'Jr. Developer', 60000);
let newGuy2 = new Employee ('Katie', 'Vannelli', 156, 'Digital Specialist', 50000);

let employees = [];



$(document).ready(readyNow);

function readyNow() {
appendDom(); //apends Dom for table populating
$('#submit').on('click', addNewEmployee);

} //end readyNow

function addNewEmployee() {
  let addEmployee = new Employee( $('#firstNameIn').val(), $('#lastNameIn').val(), $('#idIn').val(), $('#titleIn').val(), $('#annualSalaryIn').val() );
  //push new employee into array
  employees.push( addEmployee );
  updateTable(); //updates table with employees in array
} // end addNewEmployee

function appendDom() {
  console.log('append table');
  let table = $('<table></table>');
  table.append('<thead><th>First Name</th><th>Last Name</th><th>ID<th>Title</th><th>Annual Salary</th></thead>');

  let tbody = $('<tbody id="tableBody"></tbody>');
  table.append(tbody);

  $('.container').append(table);

}//end appendDom


function updateTable() {
let totalSalary = 0;

let outputElement = $('#tableBody');
outputElement.empty();

for (employee of employees) {
  let firstName = employee.first;
  let lastName = employee.last;
  let id = employee.id;
  let title = employee.title;
  let salary = employee.salary;


  outputElement.append('<tr><td>' + firstName + '</td><td>' + lastName + '</td><td>' + id + '</td><td>' + title + '</td><td>' + '$' + Number (salary).toFixed(2) + '</td></tr>' );
  totalSalary += Number (salary)/12;
  }// end loop
  console.log('total salary:', totalSalary);
  updateMonthlyBudget( totalSalary );
}//end updateTable

function updateMonthlyBudget( allSalaries ) {
console.log('in updateMonthlyBudget:', allSalaries);
let remainingBudget = monthlyBudget - allSalaries;
console.log('in remaining budget:', remainingBudget);
let budgetOutput = $('.totalsalary');
budgetOutput.empty();
budgetOutput.append('<h2>Total Monthly Budget Remaining: $' + remainingBudget.toFixed(2) + '</h2>')
if (remainingBudget < 0) {
budgetOutput.css('color', 'red');
  } // end red color for negative budget
} // end updateMonthlyBudget

// function newEmployee( first, last, id, title, salary ) {
// console.log('in newEmployee:', first, last, id, title, salary );
// employees.push( new Employee( first, last, id, title, salary ) )
// } //end newEmployee, test to see if array receives info.

