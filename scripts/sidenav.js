// Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict
var dropdowns = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdowns.length; i++) {
  dropdowns[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    var arrow = this.firstElementChild
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
      arrow.classList = "arrow right"    
    } else {
      dropdownContent.style.display = "block";
      arrow.classList = "arrow down"
    }
  });
}