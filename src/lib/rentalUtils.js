const rentals = [
  {
    id: 1,
    customer: "Alex",
    movie: "Inception",
    genre: "Sci-Fi",
    daysRented: 3,
    dailyRate: 4.99,
    isReturned: true,
    membershipTier: "gold",
  },
  {
    id: 2,
    customer: "Jordan",
    movie: "The Dark Knight",
    genre: "Action",
    daysRented: 5,
    dailyRate: 3.99,
    isReturned: false,
    membershipTier: "silver",
  },
  {
    id: 3,
    customer: "Sam",
    movie: "Interstellar",
    genre: "Sci-Fi",
    daysRented: 2,
    dailyRate: 4.99,
    isReturned: true,
    membershipTier: "none",
  },
  {
    id: 4,
    customer: "Taylor",
    movie: "The Notebook",
    genre: "Romance",
    daysRented: 7,
    dailyRate: 2.99,
    isReturned: true,
    membershipTier: "gold",
  },
  {
    id: 5,
    customer: "Morgan",
    movie: "Oppenheimer",
    genre: "Drama",
    daysRented: 4,
    dailyRate: 4.99,
    isReturned: false,
    membershipTier: "silver",
  },
  {
    id: 6,
    customer: "Casey",
    movie: "Dunkirk",
    genre: "Action",
    daysRented: 3,
    dailyRate: 3.99,
    isReturned: true,
    membershipTier: "none",
  },
];

// 1. Get returned rentals
function getReturnedRentals(rentals) {
  return rentals.filter((rental) => rental.isReturned);
}

console.log(getReturnedRentals(rentals));

// 2. Calculate rental cost
function calculateRentalCost(rental) {
  let cost = rental.daysRented * rental.dailyRate;

  if (rental.membershipTier === "gold") {
    cost *= 0.8;
  } else if (rental.membershipTier === "silver") {
    cost *= 0.9;
  }

  return {
    ...rental,
    cost: Number(cost.toFixed(2)),
  };
}

console.log(calculateRentalCost(rentals[0]));

// 3. Total revenue
function getTotalRevenue(rentals) {
  return Number(
    rentals.reduce((total, rental) => total + rental.cost, 0).toFixed(2),
  );
}

console.log(
  getTotalRevenue(getReturnedRentals(rentals).map(calculateRentalCost)),
);

// 4. Rentals by genre
function getGenreRentals(genre, rentals) {
  return rentals.filter((rental) => rental.genre === genre);
}

console.log(getGenreRentals("Sci-Fi", rentals));

// 5. Orchestrator
export function getRentalReport(rentals) {
  const returnedRentals = getReturnedRentals(rentals);

  const rentalsWithCosts = returnedRentals.map(calculateRentalCost);

  const totalRevenue = getTotalRevenue(rentalsWithCosts);

  const mostExpensiveRental = rentalsWithCosts.reduce((highest, rental) =>
    rental.cost > highest.cost ? rental : highest,
  );

  return {
    totalReturnedCount: rentalsWithCosts.length,
    totalRevenue,
    mostExpensiveRental,
    rentals: rentalsWithCosts,
  };
}

console.log(getRentalReport(rentals));
