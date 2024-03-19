// Add your inline JS here

// add smooth scrolling to anchor links
function smoothScroll(targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;

  let offsetTop = target.getBoundingClientRect().top + window.scrollY;
  if (window.innerWidth >= 768) {
    offsetTop -= 130; // Subtract 50 pixels for larger screens
  }
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

window.addEventListener("scroll", function () {
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  var stickyElement = document.getElementById("sticky");

  if (window.innerWidth <= 768 && scrollPosition >= 50) {
    stickyElement.style.position = "fixed";
    stickyElement.style.bottom = "0";
    stickyElement.style.display = "block";
  } else {
    stickyElement.style.position = "static";
    stickyElement.style.bottom = "auto";
    stickyElement.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the header element
  const header = document.querySelector("header");

  // Function to toggle the scroll class based on scroll position
  function toggleScrollClass() {
    if (window.scrollY > 50) {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }
  }

  // Listen for scroll events and call toggleScrollClass function
  window.addEventListener("scroll", toggleScrollClass);
});

// implement expand/collapse functionality for FAQ items
document.addEventListener("DOMContentLoaded", function () {
  const expandAllBtn = document.getElementById("expand-all-btn");
  const faqItems = document.querySelectorAll(".faq-item");

  expandAllBtn.addEventListener("click", function () {
    let allExpanded = true;
    faqItems.forEach(function (item) {
      const answer = item.querySelector(".answer");
      const toggleIcon = item.querySelector(".toggle-icon");
      const expanded = item.classList.contains("expanded");
      if (!expanded) {
        toggleAnswer(item);
        allExpanded = false;
      }
    });
    if (allExpanded) {
      collapseAll();
      expandAllBtn.textContent = "Expand All";
      expandAllBtn.setAttribute("aria-expanded", "false");
    } else {
      expandAllBtn.textContent = "Collapse All";
      expandAllBtn.setAttribute("aria-expanded", "true");
    }
  });

  faqItems.forEach(function (item) {
    const question = item.querySelector(".question");
    question.addEventListener("click", function () {
      toggleAnswer(item);
    });
    question.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.keyCode === 13) {
        toggleAnswer(item);
      }
    });
  });

  function toggleAnswer(item) {
    const answer = item.querySelector(".answer");
    const toggleIcon = item.querySelector(".toggle-icon");
    const expanded = item.classList.contains("expanded");

    if (!expanded) {
      answer.style.maxHeight = answer.scrollHeight + "px";
      answer.setAttribute("aria-hidden", "false");
      item.classList.add("expanded");
      toggleIcon.textContent = "-";
    } else {
      answer.style.maxHeight = 0;
      answer.setAttribute("aria-hidden", "true");
      item.classList.remove("expanded");
      toggleIcon.textContent = "+";
    }
  }

  function collapseAll() {
    faqItems.forEach(function (item) {
      const answer = item.querySelector(".answer");
      const toggleIcon = item.querySelector(".toggle-icon");
      answer.style.maxHeight = 0;
      answer.setAttribute("aria-hidden", "true");
      item.classList.remove("expanded");
      toggleIcon.textContent = "+";
    });
  }
});

// search functionality
document.addEventListener("DOMContentLoaded", function () {
  const openSearchBtn = document.querySelector(".open-search");
  const searchInput = document.getElementById("search-input");
  const searchForm = document.getElementById("search-form");
  const closeSearchBtn = document.getElementById("close-button");

  openSearchBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleSearchPopup();
    searchInput.focus(); // Focus on the input field
  });

  document.addEventListener("click", function (event) {
    if (
      !event.target.matches(".open-search") &&
      !event.target.closest(".search-popup")
    ) {
      closeSearchPopup();
    }
    if (event.target === closeSearchBtn) {
      closeSearchPopup();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeSearchPopup();
    }
  });

  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    executeSearch();
  });

  searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      executeSearch();
    }
  });

  function toggleSearchPopup() {
    const searchPopup = document.querySelector(".search-popup");
    searchPopup.style.display =
      searchPopup.style.display === "block" ? "none" : "block";
  }

  function closeSearchPopup() {
    const searchPopup = document.querySelector(".search-popup");
    searchPopup.style.display = "none";
  }

  function executeSearch() {
    const query = searchInput.value.trim();
    if (query !== "") {
      window.location.href = "/search?q=" + encodeURIComponent(query);
    }
  }
});
