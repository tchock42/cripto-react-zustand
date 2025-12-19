import {create} from 'zustand'
import {devtools} from 'zustand/middleware'
import { CryptoCurrency, CryptoPrice, Pair } from './types'
import { fetchCurrentCryptoPrice, getCryptos } from './services/CryptoService'                   // servicio de conexión a la API

type CryptoStore = {                                                    // definicion de states
    cryptoCurrencies: CryptoCurrency[]                                  // criptomonedas para el select
    result: CryptoPrice                                                 // consulta ersultado
    spinner: boolean                                                    // state spinner
    fetchCryptos: () => Promise<void>
    fetchData: (pair: Pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()( 
    devtools(
        (set) => ({               // creacion del hook del store
            cryptoCurrencies: [],                                       // declara el valor inicial state cryptoCurrencies
            result: {                                                   // declara el valor inicial de state result
                IMAGEURL: '',
                PRICE: '',
                HIGHDAY: '',
                LOWDAY: '',
                CHANGEPCT24HOUR: '',
                LASTUPDATE: '',
                FROMSYMBOL: ''
            },
            spinner: false,                                             // valor inicial del spinner
            fetchCryptos: async () => {                                 // primer action, consultar cryptos de forma asyncrona
                const cryptoCurrencies = await getCryptos()             // recupera el data validado con zod junto con el schema
                set( () => ({                                           // set del state
                    cryptoCurrencies
                }))
            },
            fetchData: async (pair) => {                                // segunda consulta a la API
                set( () => ({
                    spinner: true
                })) 
                const result = await fetchCurrentCryptoPrice(pair)
                
                set( () => ({
                    result,
                    spinner: false
                }))
            }
        })
    )
)