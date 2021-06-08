const fetch = require('node-fetch')

const getPeople = async fetch => {
    const getRequest = await fetch('https://swapi.py4e.com/api/people')
    const data = await getRequest.json()

    return {
        count: data.count,
        results: data.results
    }
}

module.exports = getPeople