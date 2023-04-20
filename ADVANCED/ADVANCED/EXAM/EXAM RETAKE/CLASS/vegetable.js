class VegetableStore {
  constructor(owner, location) {
    this.owner = owner;
    this.location = location;
    this.availableProducts = [];
  }

  loadingVegetables(vegetables) {
    const productsAdded = new Set();

    vegetables.forEach((item) => {
      const newItem = item.split(" ");
      const itemType = newItem[0];
      const quantity = Number(newItem[1]);
      const price = Number(newItem[2]);

      const isAdded = this.availableProducts.filter(
        (i) => i.itemType === itemType
      );

      if (isAdded.length > 0) {
        const newProducts = this.availableProducts.map((i) => {
          if (i.itemType === itemType) {
            const newPrice = i.price >= price ? i.price : price;
            const newQuantity = i.quantity + quantity;
            productsAdded.add(itemType);

            return { itemType, quantity: newQuantity, price: newPrice };
          }
          return i;
        });
        this.availableProducts = newProducts;
        return;
      }

      const newProduct = { itemType, quantity, price };
      productsAdded.add(itemType);
      this.availableProducts = [...this.availableProducts, newProduct];

      return;
    });

    return `Successfully added ${Array.from(productsAdded).join(", ")}`;
  }

  buyingVegetables(selectedProducts) {
    let totalPrice = 0.0;

    selectedProducts.forEach((item) => {
      const newItem = item.split(" ");
      const itemType = newItem[0];
      const quantity = Number(newItem[1]);

      const storeItem = this.availableProducts.filter(
        (i) => i.itemType === itemType
      );

      if (storeItem.length === 0) {
        throw new Error(
          `${itemType} is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );
      }

      if (quantity > storeItem[0].quantity) {
        throw new Error(
          `The quantity ${quantity} for the vegetable ${itemType} is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );
      }

      const itemPrice = storeItem[0].price * quantity;

      totalPrice += itemPrice;

      const newProducts = this.availableProducts.map((i) => {
        return i.itemType === itemType
          ? { ...i, quantity: storeItem[0].quantity - quantity }
          : i;
      });
      this.availableProducts = newProducts;
    });

    return `Great choice! You must pay the following amount $${totalPrice.toFixed(
      2
    )}.`;
  }

  rottingVegetable(itemType, quantity) {
    const item = this.availableProducts.filter((i) => i.itemType === itemType);
    if (item.length === 0) {
      throw new Error(`${itemType} is not available in the store.`);
    }

    if (quantity >= item[0].quantity) {
      const newProducts = this.availableProducts.map((i) => {
        return i.itemType === itemType ? { ...i, quantity: 0 } : i;
      });
      this.availableProducts = newProducts;

      return `The entire quantity of the ${itemType} has been removed.`;
    }

    const newProducts = this.availableProducts.map((i) => {
      return i.itemType === itemType
        ? { ...i, quantity: i.quantity - quantity }
        : i;
    });

    this.availableProducts = newProducts;

    return `Some quantity of the ${itemType} has been removed.`;
  }

  revision() {
    // console.log("Available vegetables:");
    let text = "Available vegetables:\n";
    const sortet = this.availableProducts.sort(
      (a, b) => b.quantity - a.quantity
    );
    sortet.map((i) => {
      text = text + `${i.itemType}-${i.quantity}-$${i.price}\n`;
      return;
    });
    return (
      text +
      `The owner of the store is ${this.owner}, and the location is ${this.location}.`
    );
  }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(
  vegStore.loadingVegetables([
    "Okra 2.5 3.5",
    "Beans 10 2.8",
    "Celery 5.5 2.2",
    "Celery 0.5 2.5",
  ])
);
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
