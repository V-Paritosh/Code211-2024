/*function openLevel(evt, levelName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(levelName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function () {
  var workshops = document.getElementsByClassName("workshop");

  Array.from(workshops).forEach(function (workshop) {
    var beginnerTab = workshop.querySelector(
      '.tab button[data-level="Beginner"]'
    );
    if (beginnerTab) {
      beginnerTab.click();

      // Trigger click event on corresponding tab content after a short delay
      setTimeout(function () {
        var beginnerTabContent = document.getElementById(
          beginnerTab.getAttribute("data-level") + "-lang"
        );
        if (beginnerTabContent) {
          beginnerTabContent.style.display = "block";
        }
      }, 100);

      // Add "active" class to the tab
      beginnerTab.classList.add("active");
    }
  });
});
*/
