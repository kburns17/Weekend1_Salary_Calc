
$(document).ready(readyNow);

function readyNow() {
//appendDom();
addClickHandlers();


} //end readyNow

function addClickHandlers() {
$('#submit').on('click', addEmployeeInfo);
} //end addClickHandlers

function addEmployeeInfo() {
  console.log('in addEmployeeInfo');
  let whatTheUserTyped = ($('#firstNameIn').val(), $('#lastNameIn').val());
console.log('the user typed:', whatTheUserTyped);
$('.container').append('<td>' + whatTheUserTyped + '<td>');

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
