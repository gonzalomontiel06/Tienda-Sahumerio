import { stock } from '../data/stock'

export const pedirStock = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(stock)
        },2000)
    })
}