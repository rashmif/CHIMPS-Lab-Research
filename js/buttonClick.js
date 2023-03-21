function handleClick() {
    // // Define an array of pre-defined topics
    // var topics = ["What is your favorite book?", "Do you prefer tea or coffee?", "What is your favorite hobby?"];
    
    // // Generate a random number between 0 and the length of the topics array
    // var randomIndex = Math.floor(Math.random() * topics.length);
    
    // // Use DOM manipulation to display the topic on the webpage
    document.getElementById("topic").innerHTML = "\"compared prompts\" clicked";
}

var myButton = document.getElementById('comparePrompts');
myButton.onclick = handleClick;