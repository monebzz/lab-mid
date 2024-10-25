
const speakers = [
  {
    name: "Yochai Benkler",
    title: "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
    description: "Yochai studies commons-based peer production and its impact on society.",
    image: "Elon-Musk.jpg"
  },
  {
    name: "Kilnam Chon",
    title: "Internet Pioneer, Advocate for Open Web",
    description: "Kilnam helped bring the Internet to Asia and advocates for digital commons.",
    image: "Brian-Moynihan.jpg"
  },
  {
    name: "SohYeong Noh",
    title: "Director of Art Centre Nabi",
    description: "SohYeong promotes cross-disciplinary collaboration through art and science.",
    image: "getty_608058812_2000133320009280105_172411.jpg"
  },
  {
    name: "Julia Leda",
    title: "President of Young Pirates of Europe",
    description: "Julia leads initiatives in European political integration and youth participation.",
    image: "images (3).jpg"
  },
  {
    name: "Lila Tretikov",
    title: "Executive Director of the Wikimedia Foundation",
    description: "Lila works on free knowledge dissemination through Wikipedia.",
    image: "p-1-top-ceos-decide-to-endorse-stakeholder-capitalism-over-shareholder-primacy.jpg"
  },
  {
    name: "Ryan Merkley",
    title: "CEO of Creative Commons",
    description: "Ryan leads open-source projects at the Mozilla Foundation.",
    image: "istockphoto-1371934584-612x612.jpg"
  }
];


function loadSpeakers() {
  const speakersGrid = document.getElementById('speakersGrid');

  speakers.forEach(speaker => {
   
    const wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('wrapper-speakers');

    
    const img = document.createElement('img');
    img.src = speaker.image;
    img.alt = speaker.name;
    wrapperDiv.appendChild(img);

   
    const textDiv = document.createElement('div');
    textDiv.classList.add('textin');

    const nameElement = document.createElement('h5');
    nameElement.innerText = speaker.name;
    textDiv.appendChild(nameElement);

    const titleElement = document.createElement('p');
    titleElement.innerText = speaker.title;
    titleElement.style.color = '#f55800'; 
    textDiv.appendChild(titleElement);

    const descriptionElement = document.createElement('p');
    descriptionElement.innerText = speaker.description;
    textDiv.appendChild(descriptionElement);

   
    wrapperDiv.appendChild(textDiv);

    speakersGrid.appendChild(wrapperDiv);
  });
}


window.onload = loadSpeakers;
