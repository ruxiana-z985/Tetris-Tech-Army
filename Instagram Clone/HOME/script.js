
//FRONT PAGE LOADER
if (!sessionStorage.getItem('visited')) {
    // If it's the first time, redirect to load.html
    sessionStorage.setItem('visited', 'true');
    window.location.href = '../Instagram Clone/HOME/loading_page/load.html';
  }


  const notificationDialog = document.getElementById('notification');
  const searchDialog = document.getElementById('search');
  const notificationIcon = document.querySelector('[data-sidebar="notification"]');
  const searchIcon = document.querySelector('[data-sidebar="search"]');
  
  // Show the dialog when clicking the notification icon
notificationIcon.addEventListener('click', (e) => {
  e.stopPropagation();
  notificationDialog.show();

  // Select the notification button only once
  const notificationBtn = document.querySelectorAll('.notificationBtn');
   notificationBtn.forEach(element=>{
    element.addEventListener('click', function () {
      if (element.style.backgroundColor === "grey") {
          element.style.backgroundColor = "blue";
          element.textContent="Follow";
      } else {
          element.style.backgroundColor = "grey";
          element.textContent="Following"
      }
  }); 
   });
 
  
});

  
  // Show the dialog when clicking the search icon
  searchIcon.addEventListener('click', (e) => {
      e.stopPropagation(); 
      searchDialog.show(); 
  });
  
  // Close the dialogs when clicking outside of them
  document.addEventListener('click', (e) => {
      if (!notificationDialog.contains(e.target) && e.target !== notificationIcon) {
          notificationDialog.close(); // Close the notification dialog
      }
      if (!searchDialog.contains(e.target) && e.target !== searchIcon) {
          searchDialog.close(); // Close the search dialog
      }
  });
  




//HEART/LIKE OR UNLIKE FUNCTIONALITY  
const hearts = document.querySelectorAll(".heart-icon");
const likes = document.querySelectorAll(".like-count");

// Create a single counter for each like-count element
const counters = Array.from(likes).map(() => likeCount());

function likeCount() {
    let count = 0;

    return {
        increment: function () {
            return ++count;
        },
        decrement: function () {
            return --count;
        },
    };
}

hearts.forEach((heart, index) => {
    const counter = counters[index]; // Use the corresponding counter for each heart

    heart.addEventListener("click", function () {
        const path = heart.querySelector("path"); // Select the path inside the SVG
        const currentFill = path.getAttribute("fill");

        if (currentFill === "red") {
            path.setAttribute("fill", "none");
            path.setAttribute("stroke", "white");
            likes[index].textContent = counter.decrement(); // Update the specific like-count
        } else {
            path.setAttribute("fill", "red");
            path.setAttribute("stroke", "none");
            likes[index].textContent = counter.increment(); // Update the specific like-count
        }
    });
});








//CREATE POST FUNCTIONALITY


const dialog=document.getElementById("dialog");
const create=document.querySelectorAll(".create");
const dialog_cancel=document.querySelector(".dialog-cancel");
const dialogFlex = document.querySelector('.dialog-flex');

create.forEach(element => {
    element.addEventListener("click",function(){
    dialog.showModal();
});
});



document.addEventListener('click', (event) => {
    // Check if the click is outside `.dialog-flex`
    if (!dialogFlex.contains(event.target) && !create.contains(event.target)) {
      dialog.close(); // Close the dialog
    }
  });
dialog_cancel.addEventListener("click", function(){
    dialog.close();
});



const imageChange = document.querySelectorAll('img[src="../Instagram Clone/HOME/icons/instagram-text-icon.svg"]');


window.addEventListener('resize', function () {
    const windowWidth = window.innerWidth;
  
    imageChange.forEach(element => {
      if (windowWidth < 1266 && windowWidth >768) {
        element.src = "../Instagram Clone/HOME/icons/icons8-instagram.svg";
        element.style.height = "35px"; // Apply new height
        element.style.width = "35px";  // Apply new width
      } else {
        element.src = "../Instagram Clone/HOME/icons/instagram-text-icon.svg";
        element.style.height = "50px"; // Reset to default
        element.style.width = "100px";  // Reset to default
      }
    });
  });
  



  const mobileNotification = document.querySelector('.notiIcon');

  mobileNotification.addEventListener('click', function () {
    const windowWidth = window.innerWidth;
    if (windowWidth < 768) {
      window.location.href = "../Instagram Clone/notification/index.html";
    }
  });


  //make all profiles take you to a profile page
  const profilePicture=document.querySelectorAll('.profile-pic');
  profilePicture.forEach(profile=>{
    profile.addEventListener('click',function(){
      window.location.href="../Instagram Clone/htmlProfile/profile.html";
    });
  });
  


  


 



 