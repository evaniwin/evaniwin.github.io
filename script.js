function popup() {
    // Create a pop-up element
    const popUp = document.createElement("div");
    popUp.classList.add("popup");
    popUp.innerHTML = `
                <div class="popup-content">
                    <h1>Contact Details</h1>
                        <div id="linkedin" class="contacts">
                        <img src="images/linkedin.svg" alt="linkedin" class="icon">
                        <a href="https://www.linkedin.com/in/evan-iwin-biju-a3036432a/">linkedin.com</a>
                    </div>
                    <div id="gmail" class="contacts">
                        <img src="images/mail.png" alt="mail" class="icon">
                        <a href="mailto:evaniwinbiju@gmail.com">evaniwinbiju@gmail.com</a>
                    </div>
                    <div id="projects" class="contacts">
                        <img src="images/github-mark.png" alt="github" class="icon">
                        <a href="https://github.com/evaniwin/evaniwin">github.com/evaniwin/evaniwin</a>
                    </div>
                    <button onclick="closePopup()">Close</button>
                </div>
            `;

    // Add the pop-up to the body
    document.body.appendChild(popUp);
}

// Close the pop-up
function closePopup() {
    const popUp = document.querySelector(".popup");
    if (popUp) {
        popUp.remove();
    }
}
