let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let o = ["th", "st", "nd", "rd"];

for (let i = 0; i < color.length; i++) {
    let position = i + 1;
    let suffix;

    if (position === 1) {
        suffix = o[1]; // st
    } else if (position === 2) {
        suffix = o[2]; // nd
    } else if (position === 3) {
        suffix = o[3]; // rd
    } else {
        suffix = o[0]; // th
    }

    console.log(`${position}${suffix} choice is ${color[i]}.`);
}
