// Synchronous function
function syncPrograming() {
    console.log("Start");
    console.log("End");
}

syncPrograming();

// Asynchronous function
function asyncPrograming() {
    console.log("Start");
    setTimeout(() => {
        console.log("This is an asynchronous message!");
    }, 2000);
    console.log("End");
}

asyncPrograming();

