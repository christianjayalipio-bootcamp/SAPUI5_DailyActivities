var height = 5;
var row = 0;

while (row < height) {
    var spaces = "";
    var stars = "";
    var spaceCount = row;
    var starCount = height - row;

    var i = 0;
    while (i < spaceCount) {
        spaces += " ";
        i++;
    }

    var j = 0;
    while (j < starCount) {
        stars += "*";
        j++;
    }

    console.log(spaces + stars);
    row++;
}
