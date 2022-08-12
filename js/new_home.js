window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
}); 

//template literal ES6 feature
const createInnerHtml = () => {

    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department></th>" +
                        "<th>Slary</th><th>Start Date</th><th>Actions</th>";
    const innerHtml = ${eaderHtml}
    
    <tr>
        <td><img class="profile" alt="" src="../assets/assets/profile-images/Ellipse -2.png"></td>
        <td>Vihan Dabhade</td>
        <td>Male</td>
        <td><div class='dept-label'>Enginner</div><div class='dept-label'>Finance</div></td>
        <td>3000000</td>
        <td>1 Nov 2020</td>
        <td>
            <img id="1" onclick="remove(this)" alt="delete" src="../assets/assets/icons/delete-black-18dp.svg">
            <img id="1" alt="edit" onclick="update(this)" src="../assets/assets/icons/create-black-18dp.svg">     
        </td>
    </tr>
    ;
    document.querySelector('#table-display').innerHtml = innerHtml;
}
