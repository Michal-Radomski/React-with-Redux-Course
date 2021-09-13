//- Przykład funkcji Memoized z Lodash:

function getUser(id) {
  fetch("https://jsonplaceholder.typicode.com/users/");
  return "Made a request";
}

getUser(2);

const memoizedGetUser = (user) => _.memoize(getUser);
// console.log("memoizedGetUser(2)", memoizedGetUser(2));
// console.log("memoizedGetUser(3)", memoizedGetUser(3));
// console.log("memoizedGetUser(4)", memoizedGetUser(4));

//- ----------------------------------------------------
