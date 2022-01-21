
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {

    // min/maxLimit: values from which it makes sense to start the search. 
    let minLimit = 1;
    let maxLimit = (piles).reduce((x, y) => Math.max(x, y));

    while (minLimit < maxLimit) {

        let spped = minLimit + Math.floor((maxLimit - minLimit) / 2);

        let time = 0;
        for (let pile of piles) {
            time += Math.ceil(pile / spped);
        }
        /*
         The problem necessitates that (pile/speed) is rounded up,
         thus there might be multiple speeds where time = h. 
         
         Therefore, in order to find the minimum possible speed for the given time,
         the checks continue until minLimit = maxLimit;
         */
        if (time > h) {
            minLimit = spped + 1;
        } else {
            maxLimit = spped;
        }
    }

    return minLimit;
};
