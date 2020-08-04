//DROPDOWN CONTENT
function bellFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    
  }
//
const greenDot = document.getElementById("greenDot");
let closeNotifs = document.querySelectorAll(".close-notif");
const bellContainer = document.getElementById("bell-container");
//let myDropdown = document.getElementById("myDropdown");
//

bellContainer.addEventListener('click', (event) => {
    greenDot.style.display = "none";
})

//Iterate over all the buttons
//Add event listener
//Traverse up to the list container and remove respective child on click
closeNotifs.forEach( x => {
    x.addEventListener('click', function() {
        let span = this.parentNode;
        span.remove();
    })
})
// Close dropdown if click outside dropdownMenu





//Alert banner 
const alertBanner = document.getElementById('alert');
//Create the html for the banner

alertBanner.innerHTML = 
`
<div class="alert-banner">
      <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
to complete</p>
<p class="alert-banner-close">x</p> </div>
`

//close banner
alertBanner.addEventListener('click', e => {
    const element = e.target;
    
        if (element.classList.contains("alert-banner-close")) {
            alertBanner.style.display = "none";
        }
});
//


//Search filter input 
const memberName = document.querySelectorAll(".member-name");
let members = ["Victoria Chambers", "Dale Byrd", "Dawn Wood", "Dan Oliver"];
let search = document.getElementById("search-list");  
  
  for (let i = 0; i < members.length; i++){
      let option = document.createElement("option");
      option.value = members[i];
      search.appendChild(option)
  }  






//Local storage settings to store changes

const emailNotifications = document.getElementById('email-notifications');
const profileSettings = document.getElementById('profile-settings');
const timeZone = document.getElementById('timezone');
const save = document.getElementById('save');
const cancel = document.getElementById('cancel');

let emailPref = localStorage.getItem('emailPref');
let profilePref = localStorage.getItem('profilePref');
let timeZonePref = localStorage.getItem('timezonePref');


//Load Settings 

const loadSettings = function() {
    if (emailPref !== null) {
    emailNotifications.checked =  (emailPref === "true")
    }
    if (profilePref !== null) {
    profileSettings.checked = (profilePref === "true")
    }
    timezone.value = localStorage.getItem("timeZonePref");
}

//Test local storage -  try catch
function testStorage() {
    const test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    }  catch(e) {
        return false;
    }

}

//Here starts function to save and cancel.
if(testStorage() === true){ 
    document.getElementById("save").addEventListener("click", function(){
        localStorage.setItem('emailPref', emailNotifications.checked);
        localStorage.setItem('profilePref', profileSettings.checked);
        localStorage.setItem('timeZonePref', timezone.value);        
        alert('Settings successfully saved!');
    });
    document.getElementById("cancel").addEventListener("click", function() {
        const cancel = confirm('Are you sure you want to cancel changes?');
        if (cancel) {
            localStorage.setItem('emailPref', emailNotifications.checked = null)
            localStorage.setItem('profilePref', profileSettings.checked = null)
            localStorage.setItem('timeZonePref', timezone.value = "Select a Timezone")
        }
      });
      loadSettings();
    }

    //Message section

    const user = document.getElementById('user');
    const message = document.getElementById('message');
    const send = document.getElementById('send-message');

    send.addEventListener('click', () => {
        if (user.value === "" && message.value === "") {
            alert("Please fill out User and Message fields before sending");
        } else if (user.value === "") {
            alert("Please fill out the User before sending");
        } else if (message.value === "") {
            alert("Please fill out message before sending");
        } else {
            alert("Message sent succesfully to User");
        }
    })