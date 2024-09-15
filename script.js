(function () {
    // Selecting form elements
    var form = document.getElementById('resumeForm');
    var resumeSection = document.getElementById('resumeSection');
    var resumeName = document.getElementById('resumeName');
    var resumeEmail = document.getElementById('resumeEmail');
    var resumeLocation = document.getElementById('resumeLocation');
    var resumeDOB = document.getElementById('resumeDOB');
    var resumeObjective = document.getElementById('resumeObjective');
    var resumeEducation = document.getElementById('resumeEducation');
    var resumeHobbies = document.getElementById('resumeHobbies');
    var resumeSkills = document.getElementById('resumeSkills');
    var addEducationButton = document.getElementById('addEducation');
    var educationFields = document.getElementById('educationFields');
    var generateResumeButton = document.getElementById('generateResume');
    var educationCounter = 1;
    // Event listener for Generate Resume button
    generateResumeButton.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent form submission
        // Fetch form values
        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var location = document.getElementById('location').value.trim();
        var dob = document.getElementById('dob').value.trim();
        var objective = document.getElementById('objective').value.trim();
        var hobbies = document.getElementById('hobbies').value.trim();
        var skills = document.getElementById('skills').value.trim();
        // Validate the required fields
        if (!name || !email || !location || !dob) {
            alert("Please fill in all the required fields.");
            return;
        }
        // Set the values to the resume display
        resumeName.innerText = name;
        resumeEmail.innerText = email;
        resumeLocation.innerText = location;
        resumeDOB.innerText = dob;
        resumeObjective.innerText = objective || '[Your Objective]';
        resumeHobbies.innerText = hobbies || '[Your Hobbies]';
        resumeSkills.innerText = skills || '[Your Skills]';
        // Handle the education section
        var degrees = document.querySelectorAll('.degree');
        var institutes = document.querySelectorAll('.institute');
        var years = document.querySelectorAll('.year');
        resumeEducation.innerHTML = ''; // Clear previous education entries
        degrees.forEach(function (degree, index) {
            var eduEntry = "<p>".concat(degree.value, " - ").concat(institutes[index].value, " (").concat(years[index].value, ")</p>");
            resumeEducation.innerHTML += eduEntry;
        });
        // Show the resume section after the form is processed
        resumeSection.classList.remove('hidden');
        resumeSection.classList.add('resume');
    });
    // Event listener for adding more education fields
    addEducationButton.addEventListener('click', function () {
        educationCounter++;
        var newEducation = "\n            <div class=\"education-entry\">\n                <input type=\"text\" placeholder=\"Degree ".concat(educationCounter, "\" class=\"degree\" required>\n                <input type=\"text\" placeholder=\"Institute\" class=\"institute\" required>\n                <input type=\"text\" placeholder=\"Year\" class=\"year\" required>\n            </div>\n        ");
        educationFields.insertAdjacentHTML('beforeend', newEducation);
    });
})();
