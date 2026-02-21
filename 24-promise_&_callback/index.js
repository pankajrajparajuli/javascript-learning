// callback function
function fetchData(callback) {
    setTimeout(() => {
        const data = "Fetched Data";
        callback(data);
    }, 2000);
}

fetchData((data) => {
    console.log("Callback received:", data);
});

// callback function with error handling
function fetchDataWithError(callback) {
    setTimeout(() => {
        const error = null; // Simulating no error
        const data = "Fetched Data with Callback";
        if (error) {
            callback(error, null);
        } else {
            callback(null, data);
        }
    }, 2000);
}

fetchDataWithError((error, data) => {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Callback received:", data);
    }
});

function orderFood(callback) {
  console.log("Ordering food...");

  setTimeout(function() {
    console.log("Food is ready!");
    callback();
  }, 2000);
}

function eatFood() {
  console.log("Eating food 😋");
}

orderFood(eatFood);


// Promise function
function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Fetched Data with Promise";
            resolve(data);
        }, 2000);
    });
}

