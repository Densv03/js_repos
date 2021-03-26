capital = capitals =>  capitals.map(c => `The capital of ${c.state||c.country} is ${c.capital}`)
console.log(capital([{'country' : 'Spain', 'capital' : 'Madrid'}]));