// Script to get date and insert it into a page as per project requirements.
// In addition a bit of a fiddle with finding the difference between two dates for fun.
const messageLocation = document.querySelector("#greeting");
const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dateToday = new Date();

// Set date of ND's first album release NOTE: month is zero based (i.e. Jan = 0, Feb = 1...)
dateFirstAlbumRelease = new Date(1969, 6, 3);
// Subtract ND's first album date from today's date to get milliseconds since
const millisecsSinceDeath = dateToday.getTime() - dateFirstAlbumRelease.getTime();
// Convert milliseconds to days
const daysSinceDeath = Math.floor(millisecsSinceDeath / (1000 * 60 * 60 * 24));
// Replace text in #greeting placeholder in page
let message = `It's ${dayOfWeek[dateToday.getDay()]} ${dateToday.toLocaleDateString()}, which means it's now ${daysSinceDeath} days since the release of Nick Drake's first album.`;
messageLocation.textContent = message;