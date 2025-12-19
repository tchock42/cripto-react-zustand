import { Currency } from "../types";

// datos que aparecen en el select del formulario
export const currencies : Currency[] = [            // tipo Curreny creado por zod
  { code: 'USD', name: 'Dolar de Estados Unidos'},
  { code: 'MXN', name: 'Peso Mexicano'},
  { code: 'EUR', name: 'Euro'},
  { code: 'GBP', name: 'Libra Esterlina'},
]