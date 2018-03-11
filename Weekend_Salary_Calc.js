
class Employee {
  constructor( first, last, id, title, salary ) {
    this.first = first;
    this.last = last;
    this.id = id;
    this.title = title;
    this.salary = salary;
  } //end constructor
} //end Employee Class

let newGuy1 = new Employee ('Kerry', 'Burns', 124, 'Jr. Developer', '$60,000');
let newGuy2 = new Employee ('Katie', 'Vannelli', 156, 'Digital Specialist', '$50,000');
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
}
function appendDom() {
  console.log('append');
  let table = $('<table></table>');
  table.append('<thead><th>First Name</th><th>Last Name</th><th>ID<th>Title</th><th>Annual Salary</th></thead>');

  let tbody = $('<tbody id="tableBody"></tbody>');
  table.append(tbody);

  $('.container').append(table);
}//end appendDom

function updateTable() {

for (employee of employees) {
  let firstName = employee.first;
  let lastName = employee.last;
  let id = employee.id;
  let title = employee.title;
  let salary = employee.salary;
console.log(employee);

  $('#tableBody').append('<tr><td>' + firstName + '</td><td>' + lastName + '</td><td>' + id + '</td><td>' + title + '</td><td>' + salary + '</td></tr>' );

  }// end loop
}//end updateTable

// function newEmployee( first, last, id, title, salary ) {
// console.log('in newEmployee:', first, last, id, title, salary );
// employees.push( new Employee( first, last, id, title, salary ) )
// } //end newEmployee, test to see if array receives info.
