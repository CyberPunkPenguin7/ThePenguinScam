const payment =
document.getElementById("payment");

const escape =
document.getElementById("escape");

const message =
document.getElementById("message");

payment.addEventListener("click",
function() {
    message.textContent =
      "Your payment has been rejected. Penguins demand fish!";
});

escape.addEventListener("click",
function() {
    message.textContent =
      "The penguins have approved your freedom. Goodbye! Don't show your face in Antarctica ever again..";
});

