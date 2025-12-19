import { useState } from "react"
import { currencies } from "../data"
import { useCryptoStore } from "../store"
import { Pair } from "../types"
import ErrorMessage from "./ErrorMessage"

const CriptoSearchForm = () => {

    const cryptoCurrencies = useCryptoStore(state => state.cryptoCurrencies)        // extrae las monedas de la consulta para el select
    const fetchData = useCryptoStore(state => state.fetchData)                      // extrae funcion para consultar API
    const [pair, setPair] = useState<Pair>({                                        // state local de monedas seleccionadas
        currency: '',
        criptocurrency: ''
    })
    const [error, setError] = useState('')                                          // state de error

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>{              // funcion para setear el state de monedas
        setPair({
            ...pair,
            [e.target.name]: e.target.value
        })
    }

    // envío del formulario y validación
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(Object.values(pair).includes('')){
            setError('Todos los campos son obligatorios')           // setea el error
            return;                                                 // evita que se ejecute el resto de código
        }
        setError('')                                                // cumple la validación
        // consultar la API

        fetchData(pair)
    }
    return (
        <form className="form" onSubmit={handleSubmit}>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <div className='field'>
                <label htmlFor="currency">Moneda:</label>
                <select 
                    name="currency" 
                    id="currency"
                    onChange={handleChange}
                    value={pair.currency}
                >
                    <option value="">-- Seleccione --</option>
                    {currencies.map(currency => (
                        <option value={currency.code} key={currency.code}>{currency.name}</option>
                    ))}
                </select>
            </div>

            <div className='field'>
                <label htmlFor="criptocurrency">Criptomoneda:</label>
                <select 
                    name="criptocurrency" 
                    id="criptocurrency"
                    onChange={handleChange}
                    value={pair.criptocurrency}
                >
                    <option value="">-- Seleccione --</option>
                    {cryptoCurrencies.map( cryptoCurrency => (
                        <option
                            key={cryptoCurrency.CoinInfo.FullName}
                            value={cryptoCurrency.CoinInfo.Name}
                        >{cryptoCurrency.CoinInfo.FullName}</option>
                    ))}
                </select>
            </div>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default CriptoSearchForm
