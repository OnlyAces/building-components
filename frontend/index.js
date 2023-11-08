function moduleProject3() {

 // 👉 TASK 1 - Write a `buildNav` component that returns a nav

function buildNav(links) {
  const nav = document.createElement('nav');

  links.forEach(linkInfo => {
    const link = document.createElement('a');
    link.href = linkInfo.href;
    link.textContent = linkInfo.textContent;
    link.title = linkInfo.title;
    nav.appendChild(link);
  });

  return nav;
}

// ❗ DOM creation using your `buildNav` component (do not change):
document.querySelector('header').appendChild(buildNav([
  { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
  { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
  { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
  { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
  { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
]))

// 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

function buildLearnerCard(learner, languages) {
  const card = document.createElement('div');
  card.classList.add('learner-card');

  const learnerName = document.createElement('h2');
  learnerName.textContent = learner.fullName;

  const favoriteLanguage = languages.find(language => language.id === learner.favLanguage);

  const favLanguageInfo = document.createElement('p');
  favLanguageInfo.textContent = `Favorite Language: ${favoriteLanguage.name}`;

  card.appendChild(learnerName);
  card.appendChild(favLanguageInfo);

  return card;
}

// 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

let languages = [
  { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
  { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
  { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
  { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
  { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
];

let learners = [
  { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
  { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
  { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
  { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
  { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
];

const learnersContainer = document.querySelector('.learners-container');

learners.forEach(learner => {
  const learnerCard = buildLearnerCard(learner, languages);
  learnersContainer.appendChild(learnerCard);
});

// 👉 TASK 3 - Write a `buildFooter` component that returns a footer

function buildFooter(footerData) {
  const footer = document.createElement('footer');

  const companyName = document.createElement('p');
  companyName.textContent = footerData.companyName;

  const address = document.createElement('p');
  address.textContent = footerData.address;

  const contactEmail = document.createElement('p');
  contactEmail.textContent = `Email: ${footerData.contactEmail}`;

  const socialMedia = document.createElement('div');
  socialMedia.classList.add('social-media');

  for (const [platform, link] of Object.entries(footerData.socialMedia)) {
    const socialLink = document.createElement('a');
    socialLink.href = link;
    socialLink.textContent = platform;
    socialMedia.appendChild(socialLink);
  }

  footer.appendChild(companyName);
  footer.appendChild(address);
  footer.appendChild(contactEmail);
  footer.appendChild(socialMedia);

  return footer;
}

// ❗ DOM creation using your `buildFooter` component (do not change):
document.body.appendChild(buildFooter({
  companyName: 'Bloom Institute of Technology',
  address: '123 Main Street, City, Country',
  contactEmail: 'info@example.com',
  socialMedia: {
    twitter: 'https://twitter.com/example',
    facebook: 'https://www.facebook.com/example',
    instagram: 'https://www.instagram.com/example',
  },
}))

// 👉 TASK 4 - Clicking on the section should deactivate the active card

const sections = document.querySelectorAll('.section');

sections.forEach(section => {
  section.addEventListener('click', () => {
    
    const activeCards = document.querySelectorAll('.learner-card.active');
    activeCards.forEach(card => {
      card.classList.remove('active');
    });
  });
});


// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
