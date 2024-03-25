import { Cases } from "./components/Cases";
import { Landing } from "./components/Landing";
import { Mosquito } from "./components/Mosquito";
import { Nav } from "./components/Nav";
import { Services } from "./components/Services";

function App() {
  return (
    <>
      <Mosquito />
      <Nav />
      <Landing />
      <Services />
      <Cases />
    </>
  );
}

export default App;
