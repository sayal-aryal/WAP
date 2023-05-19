
document.getElementById("patientform").addEventListener("submit", onsubmit, false);

document.getElementById("chkShowOutPatients").addEventListener("change", loadTableData1, false);

document.getElementById("chkElderlyPatients").addEventListener("change", filterTableData, false);

let patientInputData = [];

function onsubmit(event) {
    event.preventDefault();
    const inputData = Object.fromEntries(new FormData(event.target));
    console.log(inputData);
    patientInputData.push(inputData);
    loadTableData();
    document.getElementById("patientform").reset();
}

function filterTableData() {
    debugger;
    loadTableData();
}

function loadTableData() {
    let tableContainer = document.getElementById("tbodyPatientsList");

    let patientfilteredData = chkShowOutPatients.checked
        ? patientInputData.filter((patient) => patient.radioIsOutPatient === "Yes")
        : patientInputData;

    patientfilteredData = chkElderlyPatients.checked
        ? patientInputData.filter(
            (patient) => calculateAge(patient.dateOfBirth) > 65
        )
        : patientInputData;

    tableContainer.innerHTML = "";

    patientfilteredData.forEach(function (element) {
        var patientIdRow = document.createElement("tr");

        var patientIdCell = document.createElement("td");
        patientIdCell.textContent = element.patientIdNumber;
        patientIdRow.appendChild(patientIdCell);

        var firstNameCell = document.createElement("td");
        firstNameCell.textContent = element.firstName;
        patientIdRow.appendChild(firstNameCell);

        var middleInitialsCell = document.createElement("td");
        middleInitialsCell.textContent = element.middleInitials;
        patientIdRow.appendChild(middleInitialsCell);

        var lastNameCell = document.createElement("td");
        lastNameCell.textContent = element.lastName;
        patientIdRow.appendChild(lastNameCell);

        var dateOfBirthCell = document.createElement("td");
        dateOfBirthCell.textContent = element.dateOfBirth;
        patientIdRow.appendChild(dateOfBirthCell);

        var ddlDepartmentCell = document.createElement("td");
        ddlDepartmentCell.textContent = element.ddlDepartment;
        patientIdRow.appendChild(ddlDepartmentCell);

        var radioIsOutPatientCell = document.createElement("td");
        radioIsOutPatientCell.textContent = element.radioIsOutPatient;
        patientIdRow.appendChild(radioIsOutPatientCell);

        tableContainer.appendChild(patientIdRow);

    });

    function calculateAge(dob) {
        let ageMilliSeconds = Date.now() - new Date(dob);
        let ageDate = new Date(ageMilliSeconds);
        let age = Math.abs(ageDate.getUTCFullYear() - 1970);
        return age;
    }


}

function loadTableData1() {
    let tableContainer = document.getElementById("tbodyPatientsList");

    let patientfilteredData = chkShowOutPatients.checked
        ? patientInputData.filter((patient) => patient.radioIsOutPatient === "Yes")
        : patientInputData;



    tableContainer.innerHTML = "";

    patientfilteredData.forEach(function (element) {
        var patientIdRow = document.createElement("tr");

        var patientIdCell = document.createElement("td");
        patientIdCell.textContent = element.patientIdNumber;
        patientIdRow.appendChild(patientIdCell);

        var firstNameCell = document.createElement("td");
        firstNameCell.textContent = element.firstName;
        patientIdRow.appendChild(firstNameCell);

        var middleInitialsCell = document.createElement("td");
        middleInitialsCell.textContent = element.middleInitials;
        patientIdRow.appendChild(middleInitialsCell);

        var lastNameCell = document.createElement("td");
        lastNameCell.textContent = element.lastName;
        patientIdRow.appendChild(lastNameCell);

        var dateOfBirthCell = document.createElement("td");
        dateOfBirthCell.textContent = element.dateOfBirth;
        patientIdRow.appendChild(dateOfBirthCell);

        var ddlDepartmentCell = document.createElement("td");
        ddlDepartmentCell.textContent = element.ddlDepartment;
        patientIdRow.appendChild(ddlDepartmentCell);

        var radioIsOutPatientCell = document.createElement("td");
        radioIsOutPatientCell.textContent = element.radioIsOutPatient;
        patientIdRow.appendChild(radioIsOutPatientCell);

        tableContainer.appendChild(patientIdRow);

    });
}