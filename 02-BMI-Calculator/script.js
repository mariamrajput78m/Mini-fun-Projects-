let selectedGender = null;

function selectGender(gender) {
    selectedGender = gender;
    document.getElementById('male-box').classList.remove('selected');
    document.getElementById('female-box').classList.remove('selected');
    document.getElementById(gender + '-box').classList.add('selected');
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const age = parseFloat(document.getElementById('age').value);

    if (isNaN(height) || height <= 0) {
        alert('Please enter a valid height');
        return;
    }
    if (isNaN(weight) || weight <= 0) {
        alert('Please enter a valid weight');
        return;
    }

    const bmi = (weight / ((height * height) / 10000)).toFixed(1);

    let category = "";
    let categoryClass = "";
    let advice = "";

    if (bmi < 18.6) {
        category = "Underweight";
        categoryClass = "under";
        advice = "A BMI below 18.6 is underweight for your height. Consider a balanced diet to reach a healthier range.";
    } else if (bmi < 24.9) {
        category = "Normal";
        categoryClass = "normal";
        advice = "A BMI of 18.6 - 24.9 is in the normal range for your height. Keep up your healthy habits.";
    } else {
        category = "Overweight";
        categoryClass = "over";
        advice = "A BMI of 25.0 - 29.9 is in the overweight category for your height. Choose healthier foods and do more regular physical activities to reduce the risks.";
    }

    animateNumber(bmi);
    document.getElementById('bmi-category').textContent = category;
    document.getElementById('bmi-category').className = 'bmi-category ' + categoryClass;
    document.getElementById('summary-text').textContent =
        `Height: ${height}cm | Weight: ${weight}kg`;
    document.getElementById('advice-text').textContent = advice;

    document.getElementById('page-input').classList.remove('active');
    document.getElementById('page-result').classList.add('active');
});

document.getElementById('start-btn').addEventListener('click', function () {
    document.getElementById('page-welcome').classList.remove('active');
    document.getElementById('page-input').classList.add('active');
});

document.getElementById('retry-btn').addEventListener('click', function () {
    document.getElementById('page-result').classList.remove('active');
    document.getElementById('page-input').classList.add('active');
});


function animateNumber(target) {
    const el = document.getElementById('bmi-value');
    let current = 0;
    const steps = 30;
    const increment = target / steps;
    let step = 0;

    const interval = setInterval(() => {
        step++;
        current += increment;
        if (step >= steps) {
            el.textContent = parseFloat(target).toFixed(1);
            clearInterval(interval);
        } else {
            el.textContent = current.toFixed(1);
        }
    }, 15);
}