const fetch = require('node-fetch')

const swapi = require('./script2')

it('calls the swapi function', () => {

    expect.assertions(2)

    return swapi(fetch).then(data => {
        expect(data.count).toEqual(87)
        expect(data.results.length).toBeGreaterThan(5)
    })
})