// Code your solution here

function findMatching( drivers, string ) {
    let match = drivers.filter(d => {
        return d.toUpperCase() === string.toUpperCase()
    })
    return match
}

function fuzzyMatch( drivers, string ) {
    let match = drivers.filter(d => {
        if (d.slice(0, string.length) == string) {
            return d
        }
    })
    return match
}

function matchName( drivers, string ) {
    let match = drivers.filter(d => {
        if (d["name"] == string) {
            return d
        }
    })
    return match
}