document.addEventListener("DOMContentLoaded", () => {
    const employeeForm = document.getElementById("employeeForm");
    const employeeList = document.getElementById("employeeList");
    const searchInput = document.getElementById("searchInput");
    const sortBy = document.getElementById("sortBy");
    const prevPageBtn = document.getElementById("prevPage");
    const nextPageBtn = document.getElementById("nextPage");
    const pageNumber = document.getElementById("pageNumber");

    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    let currentPage = 1;
    const employeesPerPage = 5;

    displayEmployees();

    // Add Employee
    employeeForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const position = document.getElementById("position").value;
        const salary = document.getElementById("salary").value;

        if (name && position && salary) {
            const employee = { id: Date.now(), name, position, salary: parseFloat(salary) };
            employees.push(employee);
            updateLocalStorage();
            displayEmployees();
            employeeForm.reset();
        }
    });

    // Function to display employees in the table with sorting, search & pagination
    function displayEmployees() {
        let filteredEmployees = employees.filter(emp =>
            emp.name.toLowerCase().includes(searchInput.value.toLowerCase())
        );

        // Sorting Logic
        if (sortBy.value === "nameAsc") {
            filteredEmployees.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy.value === "nameDesc") {
            filteredEmployees.sort((a, b) => b.name.localeCompare(a.name));
        } else if (sortBy.value === "salaryAsc") {
            filteredEmployees.sort((a, b) => a.salary - b.salary);
        } else if (sortBy.value === "salaryDesc") {
            filteredEmployees.sort((a, b) => b.salary - a.salary);
        }

        // Pagination Logic
        const totalPages = Math.ceil(filteredEmployees.length / employeesPerPage);
        currentPage = Math.max(1, Math.min(currentPage, totalPages));
        pageNumber.textContent = `Page ${currentPage} of ${totalPages || 1}`;

        const startIndex = (currentPage - 1) * employeesPerPage;
        const displayedEmployees = filteredEmployees.slice(startIndex, startIndex + employeesPerPage);

        // Update table
        employeeList.innerHTML = "";
        displayedEmployees.forEach(employee => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${employee.name}</td>
                <td>${employee.position}</td>
                <td>$${employee.salary}</td>
                <td>
                    <button onclick="editEmployee(${employee.id})">Edit</button>
                    <button onclick="deleteEmployee(${employee.id})">Delete</button>
                </td>
            `;
            employeeList.appendChild(row);
        });

        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === totalPages || totalPages === 0;
    }

    // Function to update `localStorage`
    function updateLocalStorage() {
        localStorage.setItem("employees", JSON.stringify(employees));
    }

    // Function to delete an employee
    window.deleteEmployee = function (id) {
        employees = employees.filter(employee => employee.id !== id);
        updateLocalStorage();
        displayEmployees();
    };

    // Function to edit an employee
    window.editEmployee = function (id) {
        const employee = employees.find(emp => emp.id === id);
        if (employee) {
            document.getElementById("name").value = employee.name;
            document.getElementById("position").value = employee.position;
            document.getElementById("salary").value = employee.salary;

            // Remove the old employee data before updating
            employees = employees.filter(emp => emp.id !== id);
            updateLocalStorage();
            displayEmployees();
        }
    };

    // Search functionality
    searchInput.addEventListener("input", () => displayEmployees());

    // Sorting functionality
    sortBy.addEventListener("change", () => displayEmployees());

    // Pagination buttons
    prevPageBtn.addEventListener("click", () => {
        currentPage--;
        displayEmployees();
    });

    nextPageBtn.addEventListener("click", () => {
        currentPage++;
        displayEmployees();
    });

// CSV import export

    document.getElementById("exportCSV").addEventListener("click", function () {
        if (employees.length === 0) {
            alert("No employees to export!");
            return;
        }
    
        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "Name,Position,Salary\n";
    
        employees.forEach(employee => {
            csvContent += `${employee.name},${employee.position},${employee.salary}\n`;
        });
    
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "employees.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
    
    document.getElementById("importCSV").addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (!file) return;
    
        const reader = new FileReader();
        reader.onload = function (e) {
            const csvData = e.target.result.split("\n").slice(1);
            csvData.forEach(row => {
                const [name, position, salary] = row.split(",");
                if (name && position && salary) {
                    employees.push({
                        id: Date.now(),
                        name: name.trim(),
                        position: position.trim(),
                        salary: parseFloat(salary.trim())
                    });
                }
            });
    
            updateLocalStorage();
            displayEmployees();
            alert("Employees imported successfully!");
        };
    
        reader.readAsText(file);
    });
    
});
