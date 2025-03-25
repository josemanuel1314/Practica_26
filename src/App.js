import Header from "./components/Header/Header";
import Song from "./components/Songs/Songs";
import './index.css';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="song-list">
          <Song title="Cancion 1" artist="Artista 1" album="Album 1" />
          <Song title="Cancion 2" artist="Artista 2" album="Album 2" />
          <Song title="Cancion 3" artist="Artista 3" album="Album 3" />
      </div>
        
      </div>
  );
}

export default App;
