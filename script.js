const phoneNumber = '6285358316708';
const currentDomain = window.location.hostname;
const domainAddress = `https://${currentDomain}`;
const message = `Halo, saya tertarik membeli domain ini: ${domainAddress}. Apakah masih tersedia?`;

const domainName = document.getElementById('domainName');
const whatsappLink = document.getElementById('whatsappLink');

if (currentDomain) {
  domainName.textContent = currentDomain;
}

const encodedMessage = encodeURIComponent(message);
whatsappLink.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
