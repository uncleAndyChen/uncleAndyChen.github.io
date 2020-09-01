function* fibs() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

//let [first, second, third, fourth, fifth, sixth] = fibs();
//let [first, second, third] = fibs();
let [first, second] = fibs();
//alert(sixth);// 5
document.writeln("second value is: " + second)
