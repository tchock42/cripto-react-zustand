import { useMemo } from "react"
import { useCryptoStore } from "../store"
import Spinner from "./Spinner"


const CryptoPriceDisplay = () => {

    const result = useCryptoStore(state => state.result)            // importa del state el resultado de la segunda consulta a la API
    const spinner = useCryptoStore(state => state.spinner)          // importa del state el state del spinner

    const hasResult = useMemo( () => !Object.values(result).includes(''), [result])  // false si está vacío, true si tiene elementos 

    return (
        <div className="result-wrapper">

            {spinner ? <Spinner/> : hasResult && (                                         // evalua si existe un resultado
                <>
                    <h2>Cotización</h2>
                    <div className="result">
                        <img 
                            src={`https://cryptocompare.com/${result.IMAGEURL}`} 
                            alt="imagen cryptomoneda" 
                        />
                        <div>
                            <p>El precio de: <span>{result.PRICE}</span></p>
                            <p>Precio más alto del día: <span>{result.HIGHDAY}</span></p>
                            <p>Precio más bajo del día: <span>{result.LOWDAY}</span></p>
                            <p>Variación últimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></p>
                            <p>Ultima actualización: <span>{result.LASTUPDATE}</span></p>
                            <p>Símbolo de la moneda: <span>{result.FROMSYMBOL}</span></p>
                        </div>
                    </div>
                </>
            )}
            
        </div>
    )
}

export default CryptoPriceDisplay
