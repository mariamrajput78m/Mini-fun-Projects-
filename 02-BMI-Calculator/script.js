const form = document.querySelector("form");

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give valid height ${height}`;
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give valid weight ${weight}`;
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let category = "";
        let categoryClass = "";

        if (bmi < 18.6) {
            category = "Underweight";
            categoryClass = "under";
        } else if (bmi < 24.9) {
            category = "Normal";
            categoryClass = "normal";
        } else {
            category = "Overweight";
            categoryClass = "over";
        }

        result.innerHTML = `
           <div class="bmi-circle">
               <span class="bmi-value">${bmi}</span>
               <span class="bmi-category ${categoryClass}">${category}</span>
           </div>
       `;
    }
})