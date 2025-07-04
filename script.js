const songName = "Perfect";
const youtubeLink = "https://www.youtube.com/watch?v=2Vv-BfVoq4g";

const container = document.getElementById("songContainer");
const paragraph = document.createElement("p");

// Create and append text node (so it doesn’t overwrite the anchor later)
paragraph.appendChild(document.createTextNode("My current favourite song is "));

// Create anchor tag
const anchor = document.createElement("a");
anchor.href = youtubeLink;
anchor.textContent = songName;
anchor.target = "_blank";

// Append anchor to paragraph
paragraph.appendChild(anchor);

// Append paragraph to container
container.appendChild(paragraph);
