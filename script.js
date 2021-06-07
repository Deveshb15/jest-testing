const googleDatabase = [
    'anime.com',
    'choco.com',
    'date.com',
    'chocolover.com',
    'animelover.com',
    'animeninja.com'
]

const googleSearch = (searchInput) => {
    const matches = googleDatabase.filter(website => {
        return website.includes(searchInput)
    })

    return matches.length > 3 ? matches.slice(0,3) : matches
}

console.log(googleSearch('anime'));