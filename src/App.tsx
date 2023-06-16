import './App.sass';
import Banner from './components/Banner'
import Contacto from './components/Contacto'
import Footer from './components/Footer';
import Header from './components/Header';
import Mapa from './components/Mapa';
import Nosotros from './components/Nosotros';

function App() {
   return (
      <div className="App">
         <Header />
         <Banner />
         <div className="bg">
            <Nosotros />
            <div className="container">
               <div className="row">
                  <div className="col-lg-6 col-12">
                     <Contacto />
                  </div>
                  <div className="col-lg-6 col-12">
                     <Mapa />
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </div>
   );
}

export default App;
