var number = 789;

if (number < 1 || number > 999) {
    console.log("Please enter a number between 1 and 999.");
} else {
    let result = "";

    let hundreds = Math.floor(number / 100);
    let tens = Math.floor((number % 100) / 10);
    let ones = number % 10;
    let remainder = number % 100;

    // Hundreds place
    switch (hundreds) {
        case 1: result += "One Hundred"; break;
        case 2: result += "Two Hundred"; break;
        case 3: result += "Three Hundred"; break;
        case 4: result += "Four Hundred"; break;
        case 5: result += "Five Hundred"; break;
        case 6: result += "Six Hundred"; break;
        case 7: result += "Seven Hundred"; break;
        case 8: result += "Eight Hundred"; break;
        case 9: result += "Nine Hundred"; break;
    }

    // Tens and Ones
    if (remainder > 0) {
        if (result !== "") result += " ";

        if (remainder >= 10 && remainder <= 19) {
            switch (remainder) {
                case 10: result += "Ten"; break;
                case 11: result += "Eleven"; break;
                case 12: result += "Twelve"; break;
                case 13: result += "Thirteen"; break;
                case 14: result += "Fourteen"; break;
                case 15: result += "Fifteen"; break;
                case 16: result += "Sixteen"; break;
                case 17: result += "Seventeen"; break;
                case 18: result += "Eighteen"; break;
                case 19: result += "Nineteen"; break;
            }
        } else {
            // Tens
            switch (tens) {
                case 2: result += "Twenty"; break;
                case 3: result += "Thirty"; break;
                case 4: result += "Forty"; break;
                case 5: result += "Fifty"; break;
                case 6: result += "Sixty"; break;
                case 7: result += "Seventy"; break;
                case 8: result += "Eighty"; break;
                case 9: result += "Ninety"; break;
            }

            // Add space if both tens and ones exist
            if (tens && ones) result += " ";

            // Ones
            switch (ones) {
                case 1: result += "One"; break;
                case 2: result += "Two"; break;
                case 3: result += "Three"; break;
                case 4: result += "Four"; break;
                case 5: result += "Five"; break;
                case 6: result += "Six"; break;
                case 7: result += "Seven"; break;
                case 8: result += "Eight"; break;
                case 9: result += "Nine"; break;
            }
        }
    }

    console.log(result);
}
