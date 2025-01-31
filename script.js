// script.js
document.getElementById("voting-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let zipcode = document.getElementById("zipcode").value;
    let topic = document.getElementById("topic").value;
    let side = document.getElementById("side").value;

    // For now, just display the form data for testing
    let result = `ZIP Code: ${zipcode} \nTopic: ${topic} \nPosition: ${side}`;

    document.getElementById("result").innerText = result;
});
