function updateEmployeeWithKeyAndValue(employee, _streetAddress, value) {
    
    const newEmployee = { ...employee, streetAddress: value };
    
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {

    employee[key] = value;

    return employee;
}
function deleteFromEmployeeByKey(employee, key) { 

    const newEmployee = {...employee}

    delete newEmployee[key];

    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {

    delete employee[key];

    return employee;
    
}
const employee = { 
    name: 'Rafal',
};

updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway');
destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway');
deleteFromEmployeeByKey(employee, 'name')
destructivelyDeleteFromEmployeeByKey(employee, 'name')