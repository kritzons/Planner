////Code for TIME FUNCTIONS 


function formatDateAndTime(date) {
    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toString().padStart(2, '0'); // Add 1 to month because it's zero-based
    var day = date.getDate().toString().padStart(2, '0');
    var hours = date.getHours().toString().padStart(2, '0');
    var minutes = date.getMinutes().toString().padStart(2, '0');
    
    return 'Date: '+' '+ year + '-' + month + '-' + day +' '+ 'Time: ' + hours + ':' + minutes;
}














var popupoverlay = document.querySelector(".popupoverlay")
var popbox = document.querySelector(".popbox")
var closepops = document.getElementById("adding-button")

closepops.addEventListener("click",function(){
    popbox.style.display = "block"
    popupoverlay.style.display = "block"
})

//cancel button
var cancelplan = document.getElementById("cancelPlans")
cancelplan.addEventListener('click', function(event) {
    popbox.style.display="none"
    popupoverlay.style.display="none"
    event.preventDefault()
})

//creating the tasks 
var addPlans = document.getElementById("addPlan")
addPlans.addEventListener('click', function(event){

    event.preventDefault()
    var Container = document.createElement("div")
Container.setAttribute("class","Container")
var bookContainer = document.createElement("div")
bookContainer.setAttribute("class","bookContainer")

var planTitle = document.getElementById("plan-title").value

var h1 = document.createElement("h1")/// Title appending
h1.textContent = planTitle
bookContainer.append(h1)



var h2 = document.createElement ("h2")///setting the date and time
var inputDate = document.getElementById("birthdaytime").value;
var date = new Date(inputDate);
var formattedDate = formatDateAndTime(date);

h2.textContent = formattedDate 
bookContainer.append(h2)

    var descriptions = document.getElementById("descriptions").value ///adding descriptions
  var h3 = document.createElement("h3")
  h3.textContent = descriptions
  bookContainer.append(h3)

  var Deletingbutton = document.createElement("button")///Deleting button
  Deletingbutton.setAttribute("id", "Deletingsbutton");
  Deletingbutton.textContent = "Delete"
  bookContainer.append(Deletingbutton)
 


    Container.append(bookContainer) ///appending the whole div
    document.body.appendChild(Container)


    popbox.style.display="none"
    popupoverlay.style.display="none"
    event.preventDefault()
})
document.body.addEventListener("click", function(event) {
    if (event.target.id === "Deletingsbutton") {
        event.target.parentElement.remove(); // Remove the parent element when the delete button is clicked
    }
});
