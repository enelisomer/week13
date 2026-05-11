const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
const targetImage = document.querySelector('.profile-image img');
let i = 1;

targetImage.addEventListener('click', () => {

    targetImage.style.opacity = '0';

    setTimeout(() => {

        
    if (i === images.length - 1) {
        i = 0;
    }

     targetImage.src = 'images/' + images[i];
    i++;

    targetImage.style.opacity = '1';

    },500);

});

fetch("data.json")
  .then(response => response.json())
  .then(data => {

    // nimi
    document.getElementById("full-name").textContent =
      `${data.firstName} ${data.lastName}`;

    // kontaktid
    const contactList = document.getElementById("contact-list");

    contactList.innerHTML = `
      <li>
        <i class="fa-solid fa-envelope"></i>
        ${data.email}
      </li>

      <li>
        <i class="fa-solid fa-phone"></i>
        ${data.phone}
      </li>

      <li>
        <i class="fa-solid fa-location-dot"></i>
        ${data.location}
      </li>

      <li>
        <i class="fa-solid fa-user"></i>
        Vanus: ${data.age}
      </li>
    `;

    // oskused
    const skillsList = document.getElementById("skills-list");

    skillsList.innerHTML = "";

    data.skills.forEach(skill => {
      skillsList.innerHTML += `<li>${skill}</li>`;
    });

  })
  .catch(error => console.log(error));