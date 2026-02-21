import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <main style={{padding: "2rem"}}>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <p><Link to="/">Go back to Home</Link> or <Link to="/directors">Browse Directors</Link></p>
        </main>
    );
}

export default ErrorPage;