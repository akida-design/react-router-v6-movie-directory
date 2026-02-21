import { useOutletContext, Outlet } from "react-router-dom"
import { Link, useParams } from "react-router-dom"

function DirectorCard() {
    const outlet = useOutletContext();
    const directors = outlet?.directors ?? [];
    const { directorId, movieId } = useParams();

    const director = directors.find((d) => String(d.id) === String(directorId)) || null;

    if (!directors || directors.length === 0) return <h2>Loading directors...</h2>
    if (!director) return <h2>Director not found.</h2>
    

    return (
        <section>
            <h2>{director.name}</h2>
            <p>{director.bio}</p>
            <p>
                <Link to={"new"}>Add New Movie</Link>
            </p>
            {movieId ? (
                <>
                <h3>Movies:</h3>
                {(!director.movies || director.movies.length === 0) ? (
                    <div>
                    <p>No movies available for {director.name}</p>
                    <Link to={"new"}>Add the first movie</Link>
                    </div>
                ) : (
                    <ul>
                    {director.movies.map((movie) => (
                        <li key={movie.id}>
                            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
                        </li>
                    ))}
                    </ul>
                )}
                </>
            ) : null}
            <Outlet context={outlet} />
        </section>
    );
}

export default DirectorCard;
