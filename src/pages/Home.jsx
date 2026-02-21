import { Link } from "react-router-dom"

function Home() {
  return (
    <>
      <main>
        <h1>🎬 Welcome to the Movie Directory 🎥</h1>
        <p>
          Explore a collection of famous directors and their iconic movies. Click
          below to start exploring!
        </p>
        <nav>
          <Link to="/directors">Browse Directors</Link> | {" "}
          <Link to="/about">About This App</Link>
        </nav>
      </main>
    </>
  )
}

export default Home;
