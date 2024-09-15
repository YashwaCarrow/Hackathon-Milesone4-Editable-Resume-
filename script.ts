(() => {
    // Selecting form elements
    const form = document.getElementById('resumeForm') as HTMLFormElement;
    const resumeSection = document.getElementById('resumeSection') as HTMLElement;
    const resumeName = document.getElementById('resumeName') as HTMLElement;
    const resumeEmail = document.getElementById('resumeEmail') as HTMLElement;
    const resumeLocation = document.getElementById('resumeLocation') as HTMLElement;
    const resumeDOB = document.getElementById('resumeDOB') as HTMLElement;
    const resumeObjective = document.getElementById('resumeObjective') as HTMLElement;
    const resumeEducation = document.getElementById('resumeEducation') as HTMLElement;
    const resumeHobbies = document.getElementById('resumeHobbies') as HTMLElement;
    const resumeSkills = document.getElementById('resumeSkills') as HTMLElement;

    const addEducationButton = document.getElementById('addEducation') as HTMLButtonElement;
    const educationFields = document.getElementById('educationFields') as HTMLElement;
    const generateResumeButton = document.getElementById('generateResume') as HTMLButtonElement;

    let educationCounter = 1;

    // Event listener for Generating Resume button
    generateResumeButton.addEventListener('click', (e: Event) => {
        e.preventDefault(); // For Prevent form submission

        // Fetch form values
        const name = (document.getElementById('name') as HTMLInputElement).value.trim();
        const email = (document.getElementById('email') as HTMLInputElement).value.trim();
        const location = (document.getElementById('location') as HTMLInputElement).value.trim();
        const dob = (document.getElementById('dob') as HTMLInputElement).value.trim();
        const objective = (document.getElementById('objective') as HTMLTextAreaElement).value.trim();
        const hobbies = (document.getElementById('hobbies') as HTMLInputElement).value.trim();
        const skills = (document.getElementById('skills') as HTMLInputElement).value.trim();

        // Validating the required fields
        if (!name || !email || !location || !dob) {
            alert("Please fill in all the required fields.");
            return;
        }

        // Setting the values to the resume display
        resumeName.innerText = name;
        resumeEmail.innerText = email;
        resumeLocation.innerText = location;
        resumeDOB.innerText = dob;
        resumeObjective.innerText = objective || '[Your Objective]';
        resumeHobbies.innerText = hobbies || '[Your Hobbies]';
        resumeSkills.innerText = skills || '[Your Skills]';

        // Handling the education section
        const degrees = document.querySelectorAll('.degree') as NodeListOf<HTMLInputElement>;
        const institutes = document.querySelectorAll('.institute') as NodeListOf<HTMLInputElement>;
        const years = document.querySelectorAll('.year') as NodeListOf<HTMLInputElement>;

        resumeEducation.innerHTML = ''; // Clearing previous education entries

        degrees.forEach((degree, index) => {
            const eduEntry = `<p>${degree.value} - ${institutes[index].value} (${years[index].value})</p>`;
            resumeEducation.innerHTML += eduEntry;
        });

        // Showing the resume section after the form is processed
        resumeSection.classList.remove('hidden');
        resumeSection.classList.add('resume');
    });

    // Event listener for adding more education fields
    addEducationButton.addEventListener('click', () => {
        educationCounter++;
        const newEducation = `
            <div class="education-entry">
                <input type="text" placeholder="Degree ${educationCounter}" class="degree" required>
                <input type="text" placeholder="Institute" class="institute" required>
                <input type="text" placeholder="Year" class="year" required>
            </div>
        `;
        educationFields.insertAdjacentHTML('beforeend', newEducation);
    });
})();
