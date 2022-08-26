


/* 
     *   
    ***
   *****
  *******
 *********

*/

function pattern(m) {
    let string = ''


    for (let i = 0; i <= m; i++) {
        // spaces
        for (let j = 0; j < m - i; j++) {
            string = string + ' '
        }

        // stars
        for (let j = 0; j < i; j++) {
            string = string + '*'
        }
        /* 
        Till here we will get this 
       
    *
   **
  ***
 ****
*****
     
Now add the right side part of stars as below for loop.
In every line, put 1 less star,
on i = 1,  0 stars
on i = 2,  1 star
on i = 3,  1 stars
       */

        // stars
        for (let j = 0; j < i - 1; j++) {
            string = string + '*'
        }

        string = string + '\n'
    }

    console.log(string);

}


pattern(5)


