window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
}); 

//template literal ES6 feature

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
    let empPayrollList = createEmployeePayrollDataJSON()[0];
    let innerHtml = `${headerHtml}`;
    for (const empPayrollData of empPayrollList) {

        innerHtml = `${innerHtml}
            <tr>
                <td><img class="profile" alt="" src="${employeePayrollList[index]._profilePic}"></td>
                <td>${employeePayrollList[index]._name}</td>
                <td>${employeePayrollList[index]._gender}</td>
                <td>${getDeptHtml(employeePayrollList[index]._department)}</td>
                <td>${employeePayrollList[index]._salary}</td>
                <td>${stringifyDate(employeePayrollList[index]._startDate)}</td>
                <td>
                    <img id="${index}" onclick="remove(this)" src="../assets/assets/icons/delete-black-18dp.svg" alt="delete">
                    <img id="${index}" onclick="update(this)" src="../assets/assets/icons/create-black-18dp.svg" alt="edit">
                </td>
            </tr>
        `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}  

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class="dept-label">${dept}</div>`
    }

    return deptHtml;
}

const createEmployeePayrollDataJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Narayan Mahadevan',
            _gender: 'male',
            _department: [
                         'Engineering',
                         'Finance'
            ],
            _salary: '500000',
            _startDate: '29 Oct 2019',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../assets/assets/profile-images/Ellipse -2.png'
        },
        {
            _name: 'Anupama Kumar',
            _gender: 'female',
            _department: [
                         'Sales'
            ],
            _salary: '400000',
            _startDate: '29 Oct 2019',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../assets/assets/profile-images/Ellipse -1.png'
        },

    ];
    return empPayrollListLocal;
}