
const songName = "Perfect";
const youtubeLink = "https://www.youtube.com/watch?v=2Vv-BfVoq4g; 

const container = document.getElementById("songContainer");
const paragraph = document.createElement("p");

const anchor = document.createElement("a");
anchor.href = youtubeLink;
anchor.textContent = songName;
anchor.target = "_blank"; 

paragraph.textContent = "My current favourite song is ";
paragraph.appendChild(anchor);

container.appendChild(paragraph);
