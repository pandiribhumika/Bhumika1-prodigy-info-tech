let employees = [
    { id: 1, name: "bhumika pandiri", age: 21, address: "hyderabad", phone: "8074605608", email: "bhumikapandiri48@gmail.com", post: "Manager", salary: 50000, experience: 0 }
      
      ];

const addEmployeeForm = document.getElementById('addEmployeeForm');
const employeeTableBody = document.querySelector('#employeeTable tbody');

// Function to populate employees in the table
function populateEmployees() {
    employeeTableBody.innerHTML = '';
    employees.forEach(employee => {
        let row = `<tr>
                       <td>${employee.id}</td>
                       <td>${employee.name}</td>
                       <td>${employee.age}</td>
                       <td>${employee.address}</td>
                       <td>${employee.phone}</td>
                       <td>${employee.email}</td>
                       <td>${employee.post}</td>
                       <td>${employee.salary}</td>
                       <td>${employee.experience}</td>
                       <td>
                           <button onclick="editEmployee(${employee.id})">Edit</button>
                           <button onclick="deleteEmployee(${employee.id})">Delete</button>
                       </td>
                   </tr>`;
        employeeTableBody.innerHTML += row;
    });
}

// Function to add new employee
addEmployeeForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = addEmployeeForm.elements.name.value;
    const age = parseInt(addEmployeeForm.elements.age.value);
    const address = addEmployeeForm.elements.address.value;
    const phone = addEmployeeForm.elements.phone.value;
    const email = addEmployeeForm.elements.email.value;
    const post = addEmployeeForm.elements.post.value;
    const salary = parseInt(addEmployeeForm.elements.salary.value);
    const experience = parseInt(addEmployeeForm.elements.experience.value);
    
    const newEmployee = {
        id: employees.length + 1,
        name: name,
        age: age,
        address: address,
        phone: phone,
        email: email,
        post: post,
        salary: salary,
        experience: experience
    };
    employees.push(newEmployee);
    addEmployeeForm.reset();
    populateEmployees();
});

// Function to delete employee (dummy, replace with backend API call)
function deleteEmployee(employeeId) {
    employees = employees.filter(employee => employee.id !== employeeId);
    populateEmployees();
}

// Function to edit employee (dummy, replace with backend API call)
function editEmployee(employeeId) {
    // Placeholder for edit functionality
    alert(`Edit employee with ID ${employeeId}`);
}

// Initial population of employees
populateEmployees();
