//bot token
var telegram_bot_id = "6011678924:AAEmlmGg9mjbif_UWpACz5K2lidvwUO1rGw";
//chat id
var chat_id = 5330988237;
var u_name, age, email, message;
var ready = function () {
    u_name = document.getElementById("name").value;
    age = document.getElementById("age").value;
    email = document.getElementById("email").value;
    address = document.getElementById("address").value;
    message = "Name: " + u_name + "Age: " + age + "\nEmail: " + email + "\nAddress: " + address;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
    return false;
};
