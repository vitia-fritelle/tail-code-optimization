# Tail Code Optimization

It is often difficult to connect knowledge learned in recursion with practice. 
Compilers associated with popular programming languages do not automatically transform recursive calls into iterative ones, and this ends up in a difficulty to efficiently implement recursive techniques.
Given the advantages of approaching the code recursively, such as brevity and reducing the number of states to be handled, it is worth finding a way to adapt the code in order to abstract the programming logic.
In this code, I present a way to implement the conversion for a specific case, tail recursion in JavaScript.

For using this code all you have to do is:

``` javascript
  function recursiveFuction(recursiveFunctionParameters) {
      if (someBaseCase) {
        return new BaseCase(someValue);
      } else if (anotherBaseCase) {
        return new BaseCase(anotherValue);
      } else {
        return new TailCall(newArgs);
      }
  }

  tco(recursiveFunction, recursiveFunctionArgs)

```
