
//  https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-before-starting-dsa/

/* 
*****
*****
*****
*****
*****
*/


function pattern(m, n) {
    let string = ''

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            string = string + '*'
        }
        string = string + '\n'
    }

    console.log(string);

}


pattern(5, 5)