import  Sena from "./components/Sena.jsx";

function App() {
  const deneme = "props mantığı";
  return (
    <div className="App">
      <header className="App-header">
        {/* Component mantığı */}
        <Sena sena={deneme}/>
      </header>
    </div>
  );
}

export default App;
