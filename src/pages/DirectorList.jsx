import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom"


const DirectorList = () => {
    const { directors } = useOutletContext();

    return (
        <div>
            <p>
                <Link to="new">Add a Director</Link>
            </p>
            {(!directors || directors.length === 0) ? (
                <div>
                    <p>No directors available.</p>
                </div>
            ) : (
                <ul>
                    {directors.map((director) => (
                        <li key={director.id}>
                            <Link to={`${director.id}`}>{director.name}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
    
}

export default DirectorList;
