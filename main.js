document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const inputroll = document.getElementById('inputroll').value;
    const inputage = document.getElementById('inputAge').value;
    var e = document.getElementById("gender");
    var text = e.options[e.selectedIndex].text;
    if (document.getElementById('flexRadioDefault1').checked) {
        value = "Indian";
      }
    else{
        value = 'International';
    }
    const formData = {
        firstName: firstName,
        lastName: lastName,
        Gender: text,
        inputage: inputage,
        inputroll: inputroll,
        Nationality: value,
    };
    console.log(formData)
    saveFormData(formData);
});

function saveFormData(formData) {
    const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];

    storedFormData.push(formData);

    localStorage.setItem('formData', JSON.stringify(storedFormData));
}