const form = doucment.querySelector("form");

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give valid height ${height}`;
    }
    if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give valid height ${weight}`;
    }

})