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

it('searching google', () => {
    expect(googleSearch('nothing',dbMock)).toEqual([])
    expect(googleSearch('dog',dbMock)).toEqual(["dog.com", "doglover.com", "dogis.com"])
})