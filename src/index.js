module.exports = function reverse(n) {
    if (n > 0) { }
    else
        {n=-n}




    let array = ("" + n).split("").map(Number);
    console.log(array);



    const reversed = array.reverse();
    return +reversed.join("");
};
