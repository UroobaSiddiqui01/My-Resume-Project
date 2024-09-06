"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const educationSection = document.getElementById('education');
function addEducation(degree, school) {
    const educationList = document.createElement('li');
    educationList.textContent = `${degree}, ${school}`;
    educationSection?.appendChild(educationList);
}
addEducation('Master of Science', 'ABC University');
