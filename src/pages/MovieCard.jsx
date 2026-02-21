import { useOutletContext, useParams } from "react-router-dom"

function MovieCard() {
  const outlet = useOutletContext();
  const directors = outlet?.directors ?? [];
  const { directorId, movieId } = useParams();

  const director = directors.find((d) => String(d.id) === String(directorId)) || null;
  if (!director) return <h2>Director not found.</h2>
  
  const movie = (director.movies || []).find((m) => String(m.id) === String(movieId)) || null;
  if (!movie) return <h2>Movie not found.</h2>

  return (
    <div style={{ border: "2px solid magenta", padding: "0.5rem", marginTop: "1rem" }}>
      <h2>{movie.title}</h2>
      <p>⏱️ Duration: {movie.time} minutes</p>
      <p>🎬 Genres: {Array.isArray(movie.genres) ? movie.genres.join(", ") : movie.genres}</p>
      {movie.description && <p>📝 Description: {movie.description}</p>}
    </div>
  )
}

export default MovieCard
