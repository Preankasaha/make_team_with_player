function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    return inputFieldValue;
}


function setTextValueById(elementId, value) {
    const expenditureTextField = document.getElementById(elementId, value);
    expenditureTextField.innerText = value;

}