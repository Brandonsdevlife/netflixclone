import Row from "./Row";
import "./App.css";
import requests from "./requests";
import Banner from "./Banner";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Banner/>
      
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} isSmallRow/>
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} isSmallRow/>
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} isSmallRow/>
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} isSmallRow/>
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} isSmallRow/>
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} isSmallRow/>
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} isSmallRow/>
    </div>
  );
}

export default App;
