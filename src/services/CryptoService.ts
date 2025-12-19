import axios from 'axios'
import { CryptoCurrenciesResponseSchema, cryptoPriceSchema } from '../schema/crypto-schema'
import { Pair } from '../types'

// consulta la API por las 20 criptos mas preciadas
export async function getCryptos(){ 
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`   // endpoint 20 elementos
    const {data: {Data}} = await axios(url)                                                 // doble destructuring, primero data y luego Data
    
    const result = CryptoCurrenciesResponseSchema.safeParse(Data)                           // validacion del schema
    if(result.success){
        return result.data
    }
}

// consulta la API por la equivalencia de dos monedas
export async function fetchCurrentCryptoPrice(pair: Pair){
    
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`
    const {data: {DISPLAY}} = await axios(url)

    const result = cryptoPriceSchema.safeParse(DISPLAY[pair.criptocurrency][pair.currency])

    if(result.success){
        return result.data
    }
}