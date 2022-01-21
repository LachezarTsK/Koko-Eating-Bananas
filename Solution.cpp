
#include<vector>
#include<algorithm>
using namespace std;

class Solution {
public:

    int minEatingSpeed(vector<int>& piles, int h) {

        // min/maxLimit: values from which it makes sense to start the search. 
        int minLimit = 1;
        int maxLimit = *max_element(piles.begin(), piles.end());

        while (minLimit < maxLimit) {

            int speed = minLimit + (maxLimit - minLimit) / 2;

            int time = 0;
            for (int pile : piles) {
                time += ceil((double) pile / speed);
            }
            /*
            The problem necessitates that (pile/speed) is rounded up,
            thus there might be multiple speeds where time = h.

            Therefore, in order to find the minimum possible speed for the given time,
            the checks continue until minLimit = maxLimit;
             */
            if (time > h) {
                minLimit = speed + 1;
            } else {
                maxLimit = speed;
            }
        }

        return minLimit;
    }
};
