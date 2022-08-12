window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
}); 

//template literal ES6 feature

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Nane</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHtml = `${headerHtml}`;{
    innerHtml = `${innerHtml}
            <tr>
                <td><img class="profile" alt="" src="${employeePayrollList[index]._profilePic}"></td>
                <td>${employeePayrollList[index]._name}</td>
                <td>${employeePayrollList[index]._gender}</td>
                <td>${getDeptHtml(employeePayrollList[index]._department)}</td>
                <td>${employeePayrollList[index]._salary}</td>
                <td>${stringifyDate(employeePayrollList[index]._startDate)}</td>
                <td>
                    <img id="${index}" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg" alt="delete">
                    <img id="${index}" onclick="update(this)" src="../assets/icons/create-black-18dp.svg" alt="edit">
                </td>
            </tr>
        `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}
