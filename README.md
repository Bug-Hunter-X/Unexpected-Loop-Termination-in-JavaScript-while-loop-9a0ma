# Unexpected Loop Termination in JavaScript while loop
This example demonstrates an uncommon error in JavaScript involving a `while` loop and a `break` statement. The loop is designed to iterate 10 times but unexpectedly terminates early because of the break statement in the code. 

## Description
The `while` loop will stop its execution when the value of `i` reaches 5 due to the `break` statement. This might lead to unexpected behavior if the programmer hasn't accounted for this early termination. 

## How to reproduce
1. Save the code in a file named `bug.js`.
2. Run the code using a JavaScript interpreter (e.g., Node.js).
3. Observe that the loop terminates when `i` becomes 5, not when `i` is 10.

## Solution
This specific issue does not require a fix. The break statement is correctly implemented based on the code's logic. However, to avoid this type of unexpected behavior in the future, you might consider using a `for` loop with an explicit termination condition.