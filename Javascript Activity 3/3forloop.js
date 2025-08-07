var height = 5;

for (let row = 0; row < height; row++) {
    let line = "";

    for (let col = 0; col < height; col++) {
        if (col === row || col === height - 1 - row) {
            line += "*";
        } else {
            line += " ";
        }
    }

    console.log(line);
}