const mongoose = require("mongoose");

const connectionString = "mongodb://localhost:27017/testDb"; // Задаваме базата в адреса!!

//създаваме правила(схема)!
const carShema = new mongoose.Schema({
  name: { type: String, required: true }, // if required:true = Не можем да имаме запис без име!
  price: { type: Number, default: 0 }, //  ако не подадем цена ще бъде 0
});

//можем да създаваме методи към конструктора
carShema.methods.startEngine = function(){
    console.log(`${this.name} starting Vrooommm`);
};

//можем да създадем виртуално свойство
carShema.virtual('VAT').get(function(){
return this.price * 0.2
});

// създаваме колекция 'Car'
const Car = mongoose.model("Car", carShema);

start();

async function start() {
  await mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("Database connected");

  //create new record
//   const car = new Car({
//     name: "Subaru Impresa",
//     price: 10000,
//   });

//   // записваме в базата.
//   await car.save();

  const data = await Car.find({});

  console.log(data);
  data.forEach( car => car.startEngine());
  data.forEach( car => console.log(car.VAT));
}
