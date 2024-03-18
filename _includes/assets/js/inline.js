// Add your inline JS here

function smoothScroll(targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;

  const offsetTop = target.getBoundingClientRect().top + window.scrollY;
  const offsetLeft = target.getBoundingClientRect().left + window.scrollX;

  window.scroll({
    top: offsetTop,
    left: offsetLeft,
    behavior: "smooth",
  });
}

// Add event listener to all links with the class 'smooth-scroll'
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".smooth-scroll");
  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default anchor behavior
      const targetId = this.getAttribute("href").substring(1); // Get target id without '#'
      smoothScroll(targetId);
    });
  });
});
