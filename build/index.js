"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const CharsCollection_1 = require("./CharsCollection");
const numbersCollection = new CharsCollection_1.CharsCollection('vefeafea');
const sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
