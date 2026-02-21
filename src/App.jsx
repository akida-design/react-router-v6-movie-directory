import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import DirectorContainer from './pages/DirectorContainer'
import DirectorList from './pages/DirectorList'
import DirectorForm from './pages/DirectorForm'
import DirectorCard from './pages/DirectorCard'
import MovieList from './pages/MovieList'
import MovieForm from './pages/MovieForm'
import MovieCard from './pages/MovieCard'
import ErrorPage from './pages/ErrorPage'
import About from './pages/About'

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/directors" element={<DirectorContainer />}>
                        <Route index element={<DirectorList />} />
                        <Route path="new" element={<DirectorForm />} />
                        <Route path=":directorId" element={<DirectorCard />}>
                            <Route index element={<MovieList />} />
                            <Route path="new" element={<MovieForm />} />
                            <Route path="movies/:movieId" element={<MovieCard />} />
                        </Route>
                    </Route>

                    {/*  Error route */}
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App