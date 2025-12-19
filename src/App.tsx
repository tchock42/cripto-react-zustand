import { useEffect } from "react";
import CriptoSearchForm from "./components/CriptoSearchForm"
import { useCryptoStore } from "./store"
import CryptoPriceDisplay from "./components/CryptoPriceDisplay";


function App() {

  const fetchCryptos = useCryptoStore(state => state.fetchCryptos)      // extrae fetchCryptos del store

  useEffect(() => {                                                     // ejecuta fetchCryptos al iniciar la aplicación
    fetchCryptos()
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>Criptomonedas</span>
        </h1>

        <div className="content">
          <CriptoSearchForm/>
          <CryptoPriceDisplay/>
        </div>

      </div>
    </>
  )
}

export default App
