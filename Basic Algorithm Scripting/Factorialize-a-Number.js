
function factorialize(num) {
    if(num <= 1) {
        return num
    } else {
        return num * factorialize(num-1)
    }
}

function factorialize(num) {
    var cnt = 1;
    for (var i = 1; i <= num ; i++) {
        cnt *= i;
    }
    return cnt;
}
