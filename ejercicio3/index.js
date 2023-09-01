/*

                                   Count
  Game  Score  Minimum  Maximum   Min Max
   0      12     12       12       0   0
   1      24     12       24       0   1
   2      10     10       24       1   1
   3      24     10       24       1   1


 */

   let scores = [12, 24, 10, 24];

   function breakingRecords(scores) {
    // Write your code here
        let countMin = 0;
        let countMax = 0;
        let max = scores[0];
        let min = scores[0];

        for(let i = 0; i<scores.length; i++){
            if(scores[i] > max){
                countMax++;
                max = scores[i];
            }
            if(scores[i] < min){
                countMin++;
                min = scores[i];
            }
        }
       return [countMax, countMin];
}

console.log(
    breakingRecords(scores)
);