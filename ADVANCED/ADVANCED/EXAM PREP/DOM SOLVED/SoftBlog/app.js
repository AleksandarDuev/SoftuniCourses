function solve(){
 
   let createBTN = document.getElementsByClassName("btn create")[0];
 console.log(createBTN);
   let postsArea = document.querySelector(".site-content main section");
   let archiveArea = document.querySelector(".archive-section ol");
 
   let author = document.getElementById("creator");
   let title = document.getElementById("title");
   let category = document.getElementById("category");
   let content = document.getElementById("content");
 
 
   createBTN.addEventListener("click", (ev) => {
      ev.preventDefault();
      content.value = content.textContent;
      if(author.value != "" && title.value != "" && category.value != "" && content.value != "") {
         let newArticle = document.createElement("article");
         let newH1 = document.createElement("h1");
         let newP = document.createElement("p");
         let newStrong = document.createElement("strong");
         let newP2 = document.createElement("p");
         let newStrong2 = document.createElement("strong");
         let newP3 = document.createElement("p");
         let newDiv = document.createElement("div");
         let newButton = document.createElement("button");
         let newButton1 = document.createElement("button");
 
         newH1.textContent = title.value;
         newP.textContent = "Category:";
         newStrong.textContent = category.value;
         newP2.textContent = "Creator:";
         newStrong2.textContent = author.value;
         newP3.textContent = content.value;
         newDiv.setAttribute("class", "buttons");
         newButton.textContent = "Delete";
         newButton.setAttribute("class", "btn delete");
         newButton1.textContent = "Archive";
         newButton1.setAttribute("class", "btn archive");
 
         newP.appendChild(newStrong);
         newP2.appendChild(newStrong2);
         newDiv.appendChild(newButton);
         newDiv.appendChild(newButton1);
         newArticle.appendChild(newH1);
         newArticle.appendChild(newP);
         newArticle.appendChild(newP2);
         newArticle.appendChild(newP3);
         newArticle.appendChild(newDiv);
 
         postsArea.appendChild(newArticle);
 
         author.value = "";
         title.value = "";
         category.value = "";
         content.value = "";
      };
   });
   postsArea.addEventListener("click", (ev) => {
      if(ev.target.textContent == "Archive") {
         let currArticle = ev.target.parentNode.parentNode;
         let title = currArticle.querySelector("h1");
         let newLiArchive = document.createElement("li");
         newLiArchive.textContent = title.textContent;
         currArticle.remove();
         archiveArea.appendChild(newLiArchive);
         let allArchives = Array.from(archiveArea.querySelectorAll("li"));
         if(allArchives.length >= 2) {
            let sorted = allArchives.sort((a, b) => a.textContent.localeCompare(b.textContent));
            allArchives.forEach(x => x.remove());
            sorted.forEach(x => archiveArea.appendChild(x));
         }
         
      }
      if(ev.target.textContent == "Delete") {
         let currArticle = ev.target.parentNode.parentNode;
         currArticle.remove();
      }
   });
 
  }
