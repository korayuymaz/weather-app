import Main from "./components/Main";
import { CityProvider } from "./context/CityContext"

function App() {
  return (
    <CityProvider>
        <Main />
    </CityProvider>
  );
}

export default App;
