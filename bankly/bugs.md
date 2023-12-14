## UNIT TESTS written for 1,2,4,5 only 


### BUG #1 

the static function getAll() should not require a username and password as input bc the route already validates it. You imported the username in the middleware file /middleware/.auth.js 

### BUG #2

In the authenticate static async function in models for user.js, user returns the ENTIRE record for the username, we only need the username and password, so the query is Extra results. I corrected it so it can authenticate the username + password

## BUG #3

In users.js in models, the static update function needs data to be in .json format but it is unspecified and unparsed. The sqlForPartialUpdate takes in items that needs to have a key or username and values which it doesnt. I dont know how to write a unit test for this

## BUG #4

The duplicateCheck in the register static function in user.js in models does NOT check for duplicates bc it is only taking the first element of the list. I added .length > 1 statement meaning if the duplicateCheck quantity is > 1, that means there is a duplicate. 

## BUG #5 

We only need to return the username and password for authenticate purposes. 

## BUG #6

IN the authUser function in middleware/auth.js, the token can be take from the body or the query, I think it should only be able to be taken from the body of the req. But I do not know how to write a unit test for this.  

