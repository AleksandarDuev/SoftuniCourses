function solve() {
    //TODO
 
    const model = document.getElementById('model');
    const year = document.getElementById('year');
    const description = document.getElementById('description');
    const price = document.getElementById('price');
    const tbody = document.getElementById('furniture-list');
 
    const totalPrice = document.querySelector('.total-price');
 
    document.getElementById('add').addEventListener('click', (ev) => {
 
        ev.preventDefault();
        if (model.value !== "" && year.value > 0 && description.value !== "" && price.value > 0) {
 
            createTableRows(model.value, year.value, description.value, price.value);
            clearInputFields();
        }
    });
 
    function createTableRows(model, year, description, price) {
 
        let rowInfo = e("tr", "", tbody);
        rowInfo.setAttribute("class", "info");
 
        e("td", model, rowInfo);
        e("td", Number(price).toFixed(2), rowInfo);
 
        const td = e("td", "", rowInfo);
        const moreBtn = e("button", "More Info", td);
        moreBtn.setAttribute("class", "moreBtn");
 
        const buyBtn = e("button", "Buy it", td);
        buyBtn.setAttribute("class", "buyBtn");
 
 
        let hideInfo = e("tr", "", tbody);
 
        hideInfo.setAttribute("class", "hide");
        hideInfo.setAttribute("style", "display:none");
 
        e("td", year, hideInfo);
 
        let descField = e("td", description, hideInfo);
        descField.setAttribute("colspan", "3");
 
        addEventListerMoreInfo(moreBtn);
 
        buyBtn.addEventListener("click", (ev) => {
            ev.preventDefault();
            changeInfoAboutPrice(ev, price);
        });
 
    }
 
    function addEventListerMoreInfo(reference) {
 
        reference.addEventListener("click", (ev) => {
            ev.preventDefault();
            moreInformation(ev);
        });
    }
 
 
 
    function moreInformation(ev) {
 
        ev.target.textContent = "Less Info";
        ev.target.parentNode.parentNode.nextSibling.style.display = "contents";
 
        ev.target.addEventListener("click", (ev) => {
            ev.preventDefault();
            ev.target.textContent = "More Info";
            ev.target.parentNode.parentNode.nextSibling.style.display = "none";
            addEventListerMoreInfo(ev.target);
        });
 
    }
 
    function changeInfoAboutPrice(ev, price) {
 
        let currentPrice = Number(totalPrice.textContent);
        currentPrice += Number(price);
        totalPrice.textContent = `${currentPrice.toFixed(2)}`;
 
        ev.target.parentNode.parentNode.remove();
    }
 
    function e(type, content, parent) {
 
        const element = document.createElement(type);
        element.textContent = content;
 
        if (parent) {
            parent.appendChild(element);
        }
 
        return element;
    }
 
    function clearInputFields() {
        model.value = "";
        year.value = "";
        description.value = "";
        price.value = "";
    }
 
 
}
