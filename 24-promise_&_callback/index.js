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

// Promise function
function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Fetched Data with Promise";
            resolve(data);
        }, 2000);
    });
}