const EventEmitter = require("events");
const {sayHello} = require("./greeting");

const eventEmitter = new EventEmitter();

// EVENT LISTENER
eventEmitter.on("click", () => sayHello("Go Digital event users"));
eventEmitter.on("calculate", () => console.log(5 + 5));

function simulateClick() {
    // EVENT TRIGGER
    eventEmitter.emit("click");
}

setTimeout(() => {
  simulateClick();
}, 3000);

setTimeout(() => {
  eventEmitter.emit("calculate");
}, 4000);

setTimeout(() => {
  simulateClick();
}, 4500);

setTimeout(() => {
  simulateClick();
}, 5000);