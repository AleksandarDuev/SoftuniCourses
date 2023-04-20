// function solve() {
//   // get references to needed elements;
//   // configure event listeners;
//   const fields = document.querySelectorAll("#container input");
//   const addBtn = document.querySelector("#container button");
//   const adoptionList = document.querySelector("#adoption ul");
//   const adoptedList = document.querySelector("#adopted ul");
//   const input = {
//     name: fields[0],
//     age: fields[1],
//     kind: fields[2],
//     currentOwner: fields[3],
//   };
//   addBtn.addEventListener("click", addPet);
//   adoptionList.appendChild(pet);

//   // add pet;
//   // -> read input fields;
//   // -> validate values;
//   // -> create new list item <li>;
//   // -> configure event listener for the  new <li>;
//   function addPet(event) {
//     event.preventDefault();
//     const name = input.name.value;
//     const age = Number(input.age.value);
//     const kind = input.kind.value;
//     const currentOwner = input.currentOwner.value;
//     if (
//       name === "" ||
//       input.age.value === "" ||
//       Number.isNaN(age) ||
//       kind === "" ||
//       currentOwner === ""
//     ) {
//       return;
//     }
//     const contactBtn = e("button");
//     const pet = e(
//       "li",
//       {},
//       e(
//         "p",
//         {},
//         e("strong", {}, name),
//         " is a ",
//         e("strong", {}, age),
//         " year old ",
//         e("strong", {}, kind)
//       ), // name from function addPet
//       e("span", {}, `Owner: ${currentOwner}`),
//       contactBtn
//     );
//     contactBtn.addEventListener("click", () => {});
//     pet.adoptionList.appendChild(pet);
//   }

//   // Contact owner;
//   //-> Create confirmation div(field and button);
//   //-> configure event listener for the new button;
//   //-> replace the existing button with confirmation div;

//   // adopt pet;
//   //-> Read and validate input;
//   // -> create new checking button;
//   // -> configure event listener for the new check button;
//   //-> replace the confirmation div with the new check button;
//   //-> change text content of the "owner" span;
//   //-> move the changed element to other list;

//   // checking of adopted pet;
//   //-> remove element from DOM tree;
//   function e(type, attr, ...content) {
//     const element = document.createElement(type);
//     for (let prop in attr) {
//       element[prop] = attr[prop];
//     }
//     for (let item of content) {
//       if (typeof item === "string" || typeof item === "number") {
//         item = document.createTextNode(item);
//       }
//       element.appendChild(item);
//     }
//     return element;
//   }
// }



function solve() {
    // TODO ...
    const form = document.getElementById('container');
    const petsList = document.querySelector('#adoption > ul');
    const adoptedList = document.querySelector('#adopted > ul');
 
    let [name, age, kind, owner, addBtn] = Array.from(form.children);
    addBtn.addEventListener('click', addPet);
 
    function addPet(e) {
        e.preventDefault();
        if (!(name.value && Number(age.value) && kind.value && owner.value)) {
            return;
        }        
 
        let li = document.createElement('li');
        let p = document.createElement('p');
        p.innerHTML = `<strong>${name.value}</strong> is a <strong>${age.value}</strong> year old <strong>${kind.value}</strong>`
        let sOwner = document.createElement('span');
        sOwner.textContent = `Owner: ${owner.value}`;
        let contactBtn = document.createElement('button');
        contactBtn.textContent = 'Contact with owner';
 
        li.appendChild(p);
        li.appendChild(sOwner);
        li.appendChild(contactBtn);
        petsList.appendChild(li);
 
        contactBtn.addEventListener('click', makeContact);
    }
 
    function makeContact(e) {
        const parent = e.target.parentElement;
        e.target.remove();
 
        const takeBtn = el('button');
        takeBtn.textContent = 'Yes! I take it!';
 
        const div = el('div');
        const inputEl = el('input', '', { placeholder: 'Enter your names' });
 
        div.appendChild(inputEl);
        div.appendChild(takeBtn);
 
        parent.appendChild(div);
 
        takeBtn.addEventListener('click', (e) => {
            if (!inputEl.value) { return; }
 
            e.target.textContent = 'Checked';
            adoptedList.appendChild(e.target.parentElement.parentElement);
 
            const span = e.target.parentElement.parentElement.querySelector('span');
            span.textContent = `New Owner: ${inputEl.value}`;
 
            const checkBtn = el('button', 'Checked');
            e.target.parentElement.parentElement.appendChild(checkBtn);
            e.target.parentElement.remove();
 
            checkBtn.addEventListener('click', (ev) => {
                ev.target.parentElement.remove();
            });
        });
    }
 
    function el(type, content, attributes) {
        let result = document.createElement(type);
 
        if (content) {
            result.textContent = content;
        }
 
        if (attributes) {
            Object.assign(result, attributes);
        }
 
        return result;
    }
}