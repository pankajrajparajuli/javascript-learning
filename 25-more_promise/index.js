function orderFood() {
  return new Promise((resolve, reject) => {
    console.log("Ordering food...");

    setTimeout(() => {
      const success = Math.random() < 0.5; // Simulating 50/50 scenario
      if (success) {
        resolve("Food is ready! 😋");
      } else {
        reject("Kitchen burned the food! 🔥");
      }
    }, 2000);
  });
}

orderFood()
  .then((message) => {
    console.log(message);
    console.log("Eating food 🍔");
  })
  .catch((error) => {
    console.log(error);
    console.log("Order again 😅");
  });
