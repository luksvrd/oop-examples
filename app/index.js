const urls = [
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/comments",
  "https://jsonplaceholder.typicode.com/albums",
  "https://jsonplaceholder.typicode.com/photos",
];

// A fetch returns a Promise, so we can use Promise.all to wait for all of them to complete
// the map will give us a new array of Promises
Promise.all(urls.map((url) => fetch(url)))
  .then((responses) =>
    Promise.all(responses.map((response) => response.json()))
  )
  .then((allData) => {
    console.log(allData);
  })
  .catch((error) => {
    console.error(error);
  });

try {
  const responses = await Promise.all(urls.map((url) => fetch(url)));
  const datum = await Promise.all(responses.map((response) => response.json()));

  console.log(datum);
} catch (error) {
  console.error(error);
}
