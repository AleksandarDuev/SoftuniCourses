function lockedProfile() {
  // add toggle event listener to all profile buttons

  // find associated profile details
  // -- if it is visible, hide it and display lable to "show more"
  // -- otherwise show it and display lable to "hide"
  document.getElementById("main").addEventListener("click", onToggle); // delegation
  //   Array.from(document.querySelectorAll(".profile button")).forEach((button) =>        without delegation
  //     button.addEventListener("click", onToggle)
  //   );
  function onToggle(ev) {
    if (e.targt.tagname == "BUTTON") {
      const profile = ev.target.parentElement;
      const isUnlocked = profile.querySelector(
        'input[type = "radio"][value = "unlock"]'
      ).checked;

      const infoDif = profile.querySelector("div");
      // const infoDif = Array.from(
      //   ev.target.parentElement.querySelectorAll("div")
      // ).find((div) => div.id.includes("HiddenFields"));
      if (isUnlocked) {
        if (ev.target.textContent == "Show more") {
          infoDif.style.display = "block";
          ev.target.textContent = "Hide it";
        } else {
          infoDif.style.display = "";
          ev.target.textContent = "Show more";
        }
      }
    }
  }
}
