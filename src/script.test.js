const googleSearch = require('./script')

const dbMock = [
    'cat.com',
    'dog.com',
    'doglover.com',
    'hello.com',
    'dogis.com'
]

it('it is a silly test', () => {
    expect('anime').toBe('anime')
})

describe('googleSearch', () => {
    it('searching google', () => {
        expect(googleSearch('nothing',dbMock)).toEqual([])
        expect(googleSearch('dog',dbMock)).toEqual(['dog.com', 'doglover.com', 'dogis.com'])
    })
    
    it('work with undefined and null input', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([])
        expect(googleSearch(null, dbMock)).toEqual([])
    })
    
    it('does not return more than 3 matches', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3)
    })
})