fetch("profile.json")
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

    // keeled
const languagesList = document.getElementById("languages-list");

languagesList.innerHTML = "";

data.languages.forEach(language => {
  languagesList.innerHTML += `<li>${language}</li>`;
});

    // oskused
    const skillsList = document.getElementById("skills-list");

    skillsList.innerHTML = "";

    data.skills.forEach(skill => {
      skillsList.innerHTML += `<li>${skill}</li>`;
    });

  })
  .catch(error => console.log(error));