const form = document.querySelector('form');
//this usecase give you empty value
// const weight = parseInt(document.querySelector("#weight").value);

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`
    } else {
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;

        // if (weight < 18.6) {
        //     const underWeight = document.createElement('div');
        //         underWeight.setAttribute("title", "generated title");
        //         underWeight.style.backgroundColor = "green";
        //         underWeight.style.padding = "15px";
        //     const addText = document.createTextNode(
        //       "BMI Under Weight = Less than 18.6"
        //     );
        //     underWeight.appendChild(addText);
        //     document.body.appendChild(underWeight);
        // } else if (weight > 24.9) {
        //     normalWeight.innerHTML = `Normal Range = 18.6 and 24.9`;
        // } else {
        //     overWeight.innerHTML = `Overweight = Greater than 24.9`;
        // }
    }
    
})