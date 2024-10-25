// Array of speakers data
const speakers = [
  {
    name: "Yochai Benkler",
    title: "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
    description: "Yochai studies commons-based peer production and its impact on society.",
    image: "speaker1.jpg"
  },
  {
    name: "Kilnam Chon",
    title: "Internet Pioneer, Advocate for Open Web",
    description: "Kilnam helped bring the Internet to Asia and advocates for digital commons.",
    image: "speaker2.jpg"
  },
  {
    name: "SohYeong Noh",
    title: "Director of Art Centre Nabi",
    description: "SohYeong promotes cross-disciplinary collaboration through art and science.",
    image: "speaker3.jpg"
  },
  {
    name: "Julia Leda",
    title: "President of Young Pirates of Europe",
    description: "Julia leads initiatives in European political integration and youth participation.",
    image: "speaker4.jpg"
  },
  {
    name: "Lila Tretikov",
    title: "Executive Director of the Wikimedia Foundation",
    description: "Lila works on free knowledge dissemination through Wikipedia.",
    image: ""
  },
  {
    name: "Ryan Merkley",
    title: "CEO of Creative Commons",
    description: "Ryan leads open-source projects at the Mozilla Foundation.",
    image: "speaker6.jpg"
  }
];

// Function to generate speaker elements dynamically
function loadSpeakers() {
  const speakersGrid = document.getElementById('speakersGrid');

  speakers.forEach(speaker => {
    // Create a wrapper div for each speaker
    const wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('wrapper-speakers');

    // Create and append image
    const img = document.createElement('img');
    img.src = speaker.image;
    img.alt = speaker.name;
    wrapperDiv.appendChild(img);

    // Create and append text container
    const textDiv = document.createElement('div');
    textDiv.classList.add('textin');

    const nameElement = document.createElement('h5');
    nameElement.innerText = speaker.name;
    textDiv.appendChild(nameElement);

    const titleElement = document.createElement('p');
    titleElement.innerText = speaker.title;
    titleElement.style.color = '#f55800'; // Orange color for title
    textDiv.appendChild(titleElement);

    const descriptionElement = document.createElement('p');
    descriptionElement.innerText = speaker.description;
    textDiv.appendChild(descriptionElement);

    // Append text container to wrapper
    wrapperDiv.appendChild(textDiv);

    // Append wrapper to the grid
    speakersGrid.appendChild(wrapperDiv);
  });
}

// Load speakers on page load
window.onload = loadSpeakers;
