
$(document).ready(readyNow);

function readyNow() {
appendDom();
addClickHandlers();

} //end readyNow


function appendDom() {
  console.log('append');
  let table = $('<table></table>');
  table.append('<thead><th>First Name</th><th>Last Name</th><th>ID<th>Title</th><th>Annual Salary</th></thead>');

  let tbody = $('<tbody id="tableBody"></tbody>');
  table.append(tbody);

  $('.container').append(table);
  $('#tableBody').append('<tr><td>' + first + '</td><td>' + last + '</td><td>' + id + '</td><td>' + title + '</td><td>' + salary + '</td></tr>' );

}//end appendDom


function addClickHandlers() {
$('#submit').on('click', addEmployeeInfo);
} //end addClickHandlers

function addEmployeeInfo() {
  console.log('in addEmployeeInfo');

} //end addEmployeeInfo


class Employee {
  constructor( first, last, id, title, salary ) {
    this.first = first;
    this.last = last;
    this.id = id;
    this.title = title;
    this.salary = salary;
  } //end constructor
} //end Employee Class

let employees = [];

function newEmployee( first, last, id, title, salary ) {
console.log('in newEmployee:', first, last, id, title, salary );
employees.push( new Employee( first, last, id, title, salary ) )
} //end newEmployee
