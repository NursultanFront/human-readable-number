module.exports = function toReadable(number) {
    const simpleNumbers = {
        0: "",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };

    const tenNumbers = {
        0: "ten",
        1: "eleven",
        2: "twelve",
        3: "thirteen",
        4: "fourteen",
        5: "fifteen",
        6: "sixteen",
        7: "seventeen",
        8: "eighteen",
        9: "nineteen",
    };

    const ntyNumbers = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    const hundred = "hundred";
    if (number === 0) return "zero";
    let num = number.toString().split("").reverse();
    let result = "";
    console.log(num);

    for (let i = num.length; i > 0; i--) {
        switch (i) {
            case 3:
                if (num[i - 1] === "0") {
                    break;
                }
                result += `${simpleNumbers[num[i - 1]]} ${hundred} `;
                if (num[i - 2] === "0" && num[i - 3] === "0") {
                    i -= 2;
                    break;
                }
                break;
            case 2:
                if (num[i - 1] === "0") {
                    break;
                } else if (num[i - 1] === "1") {
                    result += `${tenNumbers[num[i - 2]]} `;
                    i -= 1;
                    break;
                } else {
                    result += `${ntyNumbers[num[i - 1]]} `;
                }
                break;
            case 1:
                if (num[i - 1] === "0") {
                    break;
                } else {
                    result += `${simpleNumbers[num[i - 1]]}`;
                }
                break;
        }
    }

    console.log(result.trim());
    return result.trim();
};
