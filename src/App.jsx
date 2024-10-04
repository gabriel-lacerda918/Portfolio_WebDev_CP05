import Sobre from "./Componentes/Sobre/Sobre";
import Experiencia from "./Componentes/Experiencia/Experiencia";
import Footer from "./Componentes/Footer/Footer";
import Home from "./Componentes/Home/Home";
import Navbar from "./Componentes/Navbar/Navbar";
import Projetos from "./Componentes/Projetos/Projetos";

function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <Sobre />
      <Experiencia />
      <Projetos />
      <Footer />
    </div>
  );
}

export default App;
