const shows = [
  { title: "Stranger Things", genre: "Sci-Fi", rating: 8.7, isAvailable: true },
  { title: "Breaking Bad", genre: "Drama", rating: 9.5, isAvailable: true },
  { title: "Martin", genre: "Comedy", rating: 9.9, isAvailable: true },
  { title: "The Fresh Prince of Bel-Air", genre: "Comedy", rating: 9.6, isAvailable: true },
  { title: "Dark", genre: "Sci-Fi", rating: 8.7, isAvailable: false }
];

// Return only shows available to stream
export function getAvailableShows() {
  return shows.filter(show => show.isAvailable);
}

// Return only shows with a rating of 9 or higher
export function getTopRatedShows() {
  return shows.filter(show => show.rating >= 9);
}

// Accept a genre and return matching shows
export function getGenreRecommendations(genre) {
  return shows.filter(show => show.genre === genre);
}