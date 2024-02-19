function changeBackgroundColor(){
    document.body.style.backgroundColor="lightpink";

}
document.getElementById("changeColorBtn").addEventListener("click",changeBackgroundColor);
document.getElementById("submitBtn").addEventListener("click", function (event) {
    event.preventDefault(); 
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    if (nameInput.value.trim() === "" || emailInput.value.trim() === "") {
      
      alert("Please fill in all required fields.");
    } else {
      alert("Form submitted successfully!");
    }
  });

var image = document.getElementById("image");
image.addEventListener("mouseover", function () {
  image.src = "new_image.jpg";
});
image.addEventListener("mouseout", function () {
  image.src = "image.jpg";
});