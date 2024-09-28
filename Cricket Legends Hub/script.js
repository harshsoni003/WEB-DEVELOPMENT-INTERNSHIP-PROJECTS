function initializeCarousel() {
    // Placeholder for future carousel features
}


function initMap() {

    const map = L.map('map').setView([20, 0], 2);


    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    const players = [
        {
            name: "Sachin Tendulkar",
            location: [19.075983, 72.877655], 
            image: "images/players/sachin.jpg",
            description: "Mumbai, India"
        },
        {
            name: "Virat Kohli",
            location: [28.704060, 77.102493], 
            image: "images/players/virat.jpg",
            description: "Delhi, India"
        },
        {
            name: "Brian Lara",
            location: [10.691803, -61.222503], 
            image: "images/players/brian.jpg",
            description: "Bridgetown, Barbados"
        },
        {
            name: "Michael Holding",
            location: [18.465539, -66.105735], 
            image: "images/players/michael.jpg",
            description: "Santurce, Puerto Rico"
        },
        {
            name: "Steve Waugh",
            location: [ -33.868820, 151.209290], 
            image: "images/players/steve.jpg",
            description: "Sydney, Australia"
        },
        {
            name: "Enderby Negarandei",
            location: [34.052235, -118.243683], 
            image: "images/players/endre.jpg",
            description: "Los Angeles, USA"
        }
    ];


    players.forEach(player => {
        const marker = L.marker(player.location).addTo(map);
        const popupContent = `
            <div style="text-align:center;">
                <img src="${player.image}" alt="${player.name}" style="width:100px; height:100px; border-radius:50%;">
                <h3>${player.name}</h3>
                <p>${player.description}</p>
            </div>
        `;
        marker.bindPopup(popupContent);
    });
}

function handleStorySubmission() {
    const storyForm = document.getElementById('story-form');

    storyForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const playerName = document.getElementById('player-name').value.trim();
        const story = document.getElementById('story').value.trim();

   
        if(playerName && story) {
        
            alert('Thank you for submitting your story!');
         
            storyForm.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
}


function vote(playerName) {

    alert(`You voted for ${playerName}! Thank you for your vote.`);
}


function smoothScroll() {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}


document.addEventListener('DOMContentLoaded', () => {
    initializeCarousel();
    initMap();
    handleStorySubmission();
    smoothScroll();
});