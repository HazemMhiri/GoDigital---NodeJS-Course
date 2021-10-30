function sayHello(name) {
  console.log("Hello " + name);
}

async function sayGoodbye() {
  getName((name) => {
    console.log("Goodbye " + name);
  });

  console.log("other code 1");

  getNamePromise().then(name=> {
    console.log("First promised goodbye to "+ name);
  })

  console.log("other code 2");

  const name = await getNamePromise();
  console.log("Second promised goodbye to "+ name);

  console.log("other code 3");
}

function getName(callback) {
  setTimeout(() => {
    callback("GoDigital");
  }, 2000);
}

function getNamePromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("GoDigital");
    }, 2000);
  });
}

module.exports.sayHello = sayHello;
exports.sayGoodbye = sayGoodbye;
exports.str = "Hello";
exports.nbr = 12;
exports.bol = true;
exports.obj = { foo: "bar" };
