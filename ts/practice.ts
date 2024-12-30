// 1
function factorial(num: number): number {
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
}
console.log(factorial(5));

// 2
interface User1 {
  name: string;
  age: number;
  email: string;
}

function formatUser(user: User1): string {
  return `User ${user.name}, ${user.age}, ${user.email}`;
}

const userData: User1 = {
  name: "a",
  age: 22,
  email: "abc@abc",
};

console.log(formatUser(userData));

// 3
interface Product {
  price: number;
  quantity: number;
}

function calTotal(products: Product[]): number {
  return products.reduce(
    (total: number, product: Product) =>
      total + product.price * product.quantity,
    0
  );
}

let cart: Product[] = [
  { price: 100, quantity: 2 },
  { price: 500, quantity: 5 },
];

console.log(calTotal(cart));

// 4
type CarP = {
  type: "car";
  make: string;
  model: string;
  year: number;
};

type BikeP = {
  type: "bike";
  brand: string;
  cc: number;
};

type VehicleData = BikeP | CarP;

function getVehicleData(vehicle: VehicleData) {
  if (vehicle.type === "car") {
    console.log(`${vehicle.model}`);
  } else if (vehicle.type === "bike") {
    console.log(`${vehicle.cc}`);
  }
}

let myCar: VehicleData = {
  type: "car",
  make: "a",
  model: "a",
  year: 2024,
};

let myBike: VehicleData = {
  type: "bike",
  brand: "Yamaha",
  cc: 600,
};

getVehicleData(myCar);
getVehicleData(myBike);
