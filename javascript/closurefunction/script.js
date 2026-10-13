function outer() {
    let message = "Hello, Students!";

    function inner() {
        console.log(message);
    }

    return inner;
}

const greet = outer();

greet();