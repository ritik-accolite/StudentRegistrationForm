$(document).ready(function() {
    $('#registrationForm').submit(function(event) {
        event.preventDefault();

        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var inputroll = $('#inputroll').val();
        var inputage = $('#inputAge').val();
        var text = $('#gender option:selected').text();
        var value = $('#flexRadioDefault1').prop('checked') ? 'Indian' : 'International';

        var formData = {
            firstName: firstName,
            lastName: lastName,
            Gender: text,
            inputage: inputage,
            inputroll: inputroll,
            Nationality: value
        };

        console.log(formData);
        saveFormData(formData);
    });

    function saveFormData(formData) {
        var storedFormData = [];

        storedFormData.push(formData);
        localStorage.setItem(formData.inputroll, JSON.stringify(storedFormData));
    }
    $('#fetchByRollNoLink').click(function (event) {
        event.preventDefault();
        $('#registrationForm').addClass('d-none');
        $('#fetchByRollNoForm').removeClass('d-none');
    });

    $('#register').click(function () {
        $('#fetchByRollNoForm').addClass('d-none');
        $('#registrationForm').removeClass('d-none');
    });
    $('#fetchRecord').click(function() {
        var searchRollNo = $('#searchRollNo').val();
        var storedFormData = JSON.parse(localStorage.getItem(searchRollNo));

        if (storedFormData && storedFormData.length > 0) {
            var resultText = 'Record for Roll No ' + searchRollNo + ':\n\n';
            storedFormData.forEach(function(formData, index) {
                // resultText += 'Record ' + (index + 1) + ': \n';
                resultText += 'First Name: ' + formData.firstName + '\n';
                resultText += 'Last Name: ' + formData.lastName + '\n';
                resultText += 'Gender: ' + formData.Gender + '\n';
                resultText += 'Age: ' + formData.inputage + '\n';
                resultText += 'Nationality: ' + formData.Nationality + '\n\n';
            });
            alert(resultText);
        } else {
            alert('No record found for Roll No ' + searchRollNo);
        }
    });
});
