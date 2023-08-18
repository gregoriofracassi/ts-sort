import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharsCollection } from './CharsCollection'

const numbersCollection = new CharsCollection('vefeafea')
const sorter = new Sorter(numbersCollection)
sorter.sort()
console.log(numbersCollection.data)
