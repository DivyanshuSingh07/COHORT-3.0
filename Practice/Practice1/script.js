const bulb = document.querySelector('.bulb');
const btn = document.querySelector('.btn');
const btn2 = document.querySelector('.btn2');
const body = document.querySelector('body');

let isOn = false;

btn.addEventListener('click', function () {

    if (isOn === false) {
        bulb.style.backgroundColor = 'yellow';
        btn.innerText = 'Off';
        isOn = true;
    } else {
        bulb.style.backgroundColor = 'transparent';
        btn.innerText = 'On';
        isOn = false;
    }

});

// 1. Store your list of multiple colors in an array
const colors = ["White", "Pink", "LightBlue", "LightGreen", "Gold"];
// 2. Track the current color position using a number index instead of a boolean
let colorIndex = 0;

btn2.addEventListener('click', function () {
    // 3. Move to the next color index
    colorIndex = colorIndex + 1;

    // 4. If we reach the end of the list, reset back to 0
    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }

    // 5. Apply the current color from the array to the body
    body.style.backgroundColor = colors[colorIndex];
});


// let btn2ison = false;
// btn2.addEventListener('click', function () {
//     if(btn2ison)
//     {
//         body.style.backgroundColor = "White";
//         btn2ison = false;
//     }
//     else{
//         body.style.backgroundColor = "Pink";
//         btn2ison = true;
//     }

// });