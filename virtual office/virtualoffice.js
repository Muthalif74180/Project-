// Smooth scrolling when clicking on navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
    window.addEventListener('load', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    })
});
     // Get the current URL path
    //  var currentPath = window.location.href;

    //  // Select all the anchor tags in the navigation
    //  var navLinks = document.querySelectorAll('nav ul li a');
 
    //  // Loop through the anchor tags to check if their href matches the current URL
    //  for (var i = 0; i < navLinks.length; i++) {
    //      var href = navLinks[i].getAttribute('href');
         
    //      // Check if the currentPath matches the href attribute
    //      if (currentPath === href) {
    //          // Add the "active" class to the parent list item
    //         //  navLinks[i].parentElement.classList.add('active');
    //         navLinks[i].className = "active"
    //      } else {
    //          // Remove the "active" class from the parent list item
    //          navLinks[i].parentElement.classList.remove('active');
    //      }
    //  }

    document.addEventListener("DOMContentLoaded", function() {
        var links = document.querySelectorAll("ul li a");

        links.forEach(function(link) {
            link.addEventListener("click", function() {
                // Remove the 'active-link' class from all links
                links.forEach(function(l) {
                    l.classList.remove("active-link");
                });
                // Add the 'active-link' class to the clicked link
                link.classList.add("active-link");
            });
        });

        // Check the current URL and apply the 'active-link' class accordingly
        var currentURL = window.location.hash;
        links.forEach(function(link) {
            if (link.getAttribute("href") === currentURL) {
                link.classList.add("active-link");
            }
        });
    });