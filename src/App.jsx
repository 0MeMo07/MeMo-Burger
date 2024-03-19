import { useState, useEffect } from 'react'
import './css/App.css'
import Routes from './routes/Routes'
import Loading from './components/Loading'
import NavBar from './components/NavBar'
import Footer2 from './components/Footer2'

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.onload = () => {
      setLoading(false);
    };

    return () => {
      window.onload = null;
    };
  }, [])

  return (
    <>
      {
      loading ? (
        <Loading/>
      ) : (
        <>
          <NavBar/>
          <Routes/>
          <Footer2/>
        </>
      )}
    </>
  )
}

export default App
