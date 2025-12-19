import {z} from 'zod'
import { CryptoCurrencyResponseSchema, CurrencySchema, PairSchema, cryptoPriceSchema} from '../schema/crypto-schema'

export type Currency = z.infer<typeof CurrencySchema>           // type monedas convencionales

export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>   // type monedas de la API

export type Pair = z.infer<typeof PairSchema>                   // type del state local del formulario

export type CryptoPrice = z.infer<typeof cryptoPriceSchema>          // type de la respuesta a la segunda consulta de la API