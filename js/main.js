import users from './data.js';
console.log(users);

const content = document.querySelector('.content');
const df = document.createDocumentFragment();

// users.forEach((user) => {
// 	// create properties
// 	const name = `${user.first_name} ${user.last_name}`;
// 	const imgUrl = user.avatar;
// 	const dob = user.date_of_birth;
// 	const address = `${user.address.street_address}, ${user.address.city}, ${user.address.state}, ${user.address.zip_code}`;
// 	const phone = user.phone_number;
// 	const cc = user.credit_card.cc_number;

// 	// create a card
// 	const card = document.createElement('div');
// 	card.classList.add('card');

// 	// create avatar
// 	const avatar = document.createElement('div');
// 	avatar.classList.add('avatar');

// 	const avi = document.createElement('img');
// 	avi.src = imgUrl;
// 	avi.alt = `Avatar of ${name}`;
// 	avatar.appendChild(avi);

// 	card.appendChild(avatar);

// 	// create details
// 	const details = document.createElement('div');
// 	details.classList.add('details');

// 	const h2 = document.createElement('h2');
// 	h2.textContent = name;
// 	details.appendChild(h2);

// 	const pdob = document.createElement('p');
// 	pdob.innerHTML = `<strong>Date of Birth:</strong> ${dob}`;

// 	const paddress = document.createElement('p');
// 	paddress.innerHTML = `<strong>Address:</strong> ${address}`;

// 	const pphone = document.createElement('p');
// 	pphone.innerHTML = `<strong>Phone Number:</strong> ${phone}`;

// 	const pcc = document.createElement('p');
// 	pcc.innerHTML = `<strong>Credit Card:</strong> ${cc}`;

// 	details.appendChild(pdob);
// 	details.appendChild(paddress);
// 	details.appendChild(pphone);
// 	details.appendChild(pcc);

// 	card.appendChild(details);

// 	// append the card to the document fragment
// 	df.appendChild(card);
// });

// content.append(df);

const userCardsHTML = users.map((user) => {
	// Destructure user properties
	const {
		first_name,
		last_name,
		avatar,
		date_of_birth,
		address,
		phone_number,
		credit_card,
	} = user;

	// Create properties
	const name = `${first_name} ${last_name}`;
	const imgUrl = avatar;
	const dob = date_of_birth;
	const formattedAddress = [
		address.street_address,
		address.city,
		address.state,
		address.zip_code,
	].join(', ');
	const phone = phone_number;
	const cc = credit_card.cc_number;

	// Create user card HTML
	return `
    <div class="card">
      <div class="avatar">
        <img src="${imgUrl}" alt="Avatar of ${name}">
      </div>
      <div class="details">
        <h2>${name}</h2>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Address:</strong> ${formattedAddress}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Credit Card:</strong> ${cc}</p>
      </div>
    </div>
  `;
});

// Set the HTML content of the container
content.innerHTML = userCardsHTML.join('');
