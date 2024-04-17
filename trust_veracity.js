/* Assuming the trust index
* 1 . increase the more chains there is
* 2 . decrease the longer the chains are
*/
function veracityIndex() {
    let vIndex = 1.0;
    let numberOfChian = 1.0;
    let medOfChain = 1.0;
    let nbrTrustIndex = 0.9;
    let lengthTrustIndex = 0.9;
    let validationAdded = 1.0;

    numberOfChain = Object.keys(veracity).length;
    // for each chain
    for (const [key, value] of Object.entries(veracity)) {
        // increase trust value based on length of the chain * trust index
        //the trust index is how puch we lose for each member of the chain added
        medOfChain = medOfChain + ((lengthTrustIndex ** (value - 1)));
    }
    // devide it by the length of the chain
    medOfChain = medOfChain / numberOfChain;

    // now we calculate what is the added value of the chains defined by their number multiplied by the nbrTrustIndex
    // defining how much more we trust a certificate based on how much there is validation chains
    if (numberOfChain > 1) {
        validationAdded = 1 + (1 - nbrTrustIndex ** (numberOfChain - 1));
    }
    vIndex = validationAdded * medOfChain;
    return vIndex;
}

const veracity = {
    V1: 1,
    V2: 4,
    V3: 2
}

console.log(veracityIndex(veracity));