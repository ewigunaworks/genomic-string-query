function genomic(str, pArr, qArr) {
    results = []
    impactFactor = {'A': 1, 'C': 2, 'G': 3, 'T': 4}

    for(let x = 0; x < pArr.length; x++) {
        let strSubs = str.substring(pArr[x], qArr[x] + 1)
        
        if(strSubs.indexOf('A') != -1) {
            results[x] = impactFactor.A
        } else if(strSubs.indexOf('C') != -1) {
            results[x] = impactFactor.C
        } else if(strSubs.indexOf('G') != -1) {
            results[x] = impactFactor.G
        } else {
            results[x] = impactFactor.T
        }
    }

    return results
}

console.log(genomic('CAGCCTA', [2, 5, 0], [4, 5, 6]))