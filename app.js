"use strict";
const footer_wrapper = document.querySelector("#footer_wrapper");

function renderFooter(data) {
	let res = "";
	data.map((item) => {
		res += `
    <div class="txt">
					 <h2>${item.title}</h2>		 
           ${item.desc1 ? `<p>${item.desc1}</p>` : ""}
           ${item.desc2 ? `<p>${item.desc2}</p>` : ""}
           ${item.desc3 ? `<p>${item.desc3}</p>` : ""}
           ${item.desc4 ? `<p>${item.desc4}</p>` : ""}
		</div>`;
	});
	footer_wrapper.innerHTML = res;
}

renderFooter(footer);



// Get the menu button element
var menuButton = document.querySelector(".menu-button");

// Get the modal element
var modal = document.getElementById("modal");

// Get the close button element
var closeBtn = document.getElementsByClassName("close")[0];

// Toggle the modal when the menu button is clicked
menuButton.onclick = function () {
	modal.style.display = modal.style.display === "block" ? "none" : "block";
};

// Close the modal when the close button is clicked
closeBtn.onclick = function () {
	modal.style.display = "none";
};

// Close the modal when the user clicks outside of it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};
