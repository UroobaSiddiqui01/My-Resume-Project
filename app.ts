const educationSection = document.getElementById('education');

function addEducation(degree: string, school: string) {
    const educationList = document.createElement('li');
    educationList.textContent = `${degree}, ${school}`;
    educationSection?.appendChild(educationList);
}

addEducation('Master of Science', 'ABC University');
