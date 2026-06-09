import React from "react";
import { getRentalReport } from "../lib/rentalUtils";

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

export default function RentalDashboard() {
  const report = getRentalReport(rentals);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Rental Dashboard</h1>

      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card p-3">
            <h5>Total Returned Rentals</h5>
            <h2>{report.totalReturnedCount}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            <h5>Total Revenue</h5>
            <h2>${report.totalRevenue}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            <h5>Most Expensive Rental</h5>
            <p className="mb-1">{report.mostExpensiveRental.customer}</p>
            <h2>${report.mostExpensiveRental.cost}</h2>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h4>Returned Rentals</h4>
        </div>

        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Movie</th>
                <th>Genre</th>
                <th>Days Rented</th>
                <th>Cost</th>
              </tr>
            </thead>

            <tbody>
              {report.rentals.map((rental) => (
                <tr key={rental.id}>
                  <td>{rental.customer}</td>
                  <td>{rental.movie}</td>
                  <td>{rental.genre}</td>
                  <td>{rental.daysRented}</td>
                  <td>${rental.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
