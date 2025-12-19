import {z} from 'zod'

// creacion del schema para ser inferido en /types/index.ts
export const CurrencySchema = z.object({
    code: z.string(),
    name: z.string()
})

export const CryptoCurrencyResponseSchema = z.object({                              // schema de respuesta de API de criptomonedas
    CoinInfo: z.object({
        FullName: z.string(),
        Name: z.string()
    })
})
export const CryptoCurrenciesResponseSchema = z.array(CryptoCurrencyResponseSchema) // array de schema anterior

export const PairSchema = z.object({            // schema para state local de Form
    currency: z.string(),
    criptocurrency: z.string()
})

export const cryptoPriceSchema = z.object({
    IMAGEURL: z.string(),
    PRICE: z.string(),
    HIGHDAY: z.string(),
    LOWDAY: z.string(),
    CHANGEPCT24HOUR: z.string(),
    LASTUPDATE: z.string(),
    FROMSYMBOL: z.string()
})