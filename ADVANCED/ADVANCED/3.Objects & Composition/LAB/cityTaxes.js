function cityTaxes(name, population, treasury) {
  const city = {
    name, population, treasury,
    taxRate: 10,
    collectTaxes() {
      this.treasury += this.population * this.taxRate;
    },
    applyGrowth(percent) {
      this.population += Math.floor(this.population * percent / 100);
    },
    applyRecession(percent) {
      this.treasury -= Math.floor(this.treasury * percent / 100);
    },
  };
  console.log(city);
  return city
}

cityTaxes("Tortuga", 7000, 150000);
