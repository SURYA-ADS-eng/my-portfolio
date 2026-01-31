function scrollToContact() {
  const contact = document.getElementById("contact");

  contact.scrollIntoView({ behavior: "smooth" });

  contact.classList.add("reveal-visible");

  setTimeout(() => {
    contact.classList.remove("reveal-visible");
  }, 1200);
}
function scrollToContact() {
document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });

}
