function calculateAge() {

    const today = new Date();
    const birthDateInput = document.getElementById('birthdate').value;
    const birthDateParts = birthDateInput.split('-');
    const birthDay = birthDateParts[0];
    const birthMonth = birthDateParts[1] - 1; // Months are 0-indexed in JavaScript 
    const birthYear = birthDateParts[2];
    const birthDate = new Date(birthYear, birthMonth, birthDay);


    console.log(birthDateInput);
    console.log(birthDateParts);
    console.log(birthDay);
    console.log(birthMonth);
    console.log(birthYear);

    const isValidDate = (date) => {

        return(
            Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)
        );

    };

    if (!isValidDate(birthDate)) {
        alert('El formato de la fecha es invalido.');
        return;
    }


    const ageInMilliseconds = today - birthDate;
    const ageInSeconds = Math.floor(ageInMilliseconds / 1000);
    const ageInMinutes = Math.floor(ageInSeconds / 60);
    const ageInHours = Math.floor(ageInMinutes / 60);
    const ageInDays = Math.floor(ageInHours / 24);
    const ageInWeeks = Math.floor(ageInDays / 7);
    const ageInMonths = Math.floor(ageInDays / 30.44); // Average month length
    const ageInYears = Math.floor(ageInDays / 365.25); // Average year length accounting for leap years

    const resultContainer = document.getElementById('resultContainer');
    const result = document.getElementById('result');
    
    result.innerHTML = `
        <div class="result-item">
            <h3>Edad: </h3>
            <p>${ageInYears} Años ${ageInMonths % 12} Meses ${ageInDays % 30} Dias</p>
        </div>

        <div class="result-item">
            <h3>Meses pasados: </h3>
            <p>${ageInMonths}</p>
        </div>

        <div class="result-item">
            <h3>Semanas pasadas: </h3>
            <p>${ageInWeeks}</p>
        </div>

        <div class="result-item">
            <h3>Dias pasadss: </h3>
            <p>${ageInDays}</p>
        </div>

        <div class="result-item">
            <h3>Horas pasadas: </h3>
            <p>${ageInHours}</p>
        </div>

        <div class="result-item">
            <h3>Minutos pasados: </h3>
            <p>${ageInMinutes}</p>
        </div>

        <div class="result-item">
            <h3>Segundos pasados: </h3>
            <p>${ageInSeconds}</p>
        </div>
    `;
    resultContainer.style.display = 'block'; 
}






const ageCalculatorForm = document.getElementById('ageCalculator');
ageCalculatorForm.addEventListener('submit', (event) => {
    event.preventDefault();
    calculateAge();
    
});