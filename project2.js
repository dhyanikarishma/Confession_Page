function submitConfession() {
    var username = document.getElementById("username").value;
    var confessionText = document.getElementById("confession").value;

    if (username && confessionText) {
        var confessionList = document.getElementById("confessionList");

        var confessionItem = document.createElement("div");
        confessionItem.className = "confession-item";
        confessionItem.innerHTML = "<strong>" + username + ":</strong> " + confessionText;

        confessionList.appendChild(confessionItem);

        // Clear the form fields after submission
        document.getElementById("username").value = "";
        document.getElementById("confession").value = "";
    } else {
        alert("Please fill in both fields before submitting.");
    }
}
