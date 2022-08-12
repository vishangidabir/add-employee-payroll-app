window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
}); 

//template literal ES6 feature

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Nane</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHtml = `${headerHtml}
   
    <tr>
        <td><img class="profile" src="../assets/assets/profile-images/Ellipse -2.png" alt=""></td>
        <td>Narayan Mahadevan</td>
        <td>Male</td>
        <td><div class="dept-label">HR</div><div class="dept-label">Finance</div></td>
        <td>3000000</td>
        <td>1 Nov 2020</td>
        <td>
            <img id="1" onclick="remove(this)" src="../assets/assets/icons/delete-black-18dp.svg" alt="delete">
            <img id="1" onclick="update(this)" src="../assets/assets/icons/create-black-18dp.svg" alt="edit">
        </td>
    </tr>
        `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}
