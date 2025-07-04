//your code here
// Define song details
const songName = "Perfect";
const youtubeLink = "https://www.youtube.com/watch?v=2Vv-BfVoq4g"; // Official YouTube link


const container = document.getElementById("songContainer");


const paragraph = document.createElement("p");

// Create the <a> tag
const anchor = document.createElement("a");
anchor.href = youtubeLink;
anchor.textContent = songName;
anchor.target = "_blank"; 

// Append text + anchor to paragraph
paragraph.textContent = "My current favourite song is ";
paragraph.appendChild(anchor);

// Add paragraph to container
container.appendChild(paragraph);
