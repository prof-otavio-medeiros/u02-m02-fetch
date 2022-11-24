import fetch from "node-fetch";

let response;
let data;
let fetchOptions;

///////////////////////////////////////////////////////////////////////////////

//
// GET (READ)
//

fetchOptions = {
  method: "GET",
};
response = await fetch(
  "https://jsonplaceholder.typicode.com/posts/1",
  fetchOptions
);
// response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
data = await response.json();
console.log(`
<< GET (READ) >>
<< https://jsonplaceholder.typicode.com/posts/1 >>

${JSON.stringify(data, null, 2)}
`);

///////////////////////////////////////////////////////////////////////////////

//
// PUT (UPDATE)
//

fetchOptions = {
  method: "PUT",
  body: JSON.stringify({
    userId: 28,
    title: "This is my new title",
    body: "This is my new body",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};

response = await fetch(
  "https://jsonplaceholder.typicode.com/posts/1",
  fetchOptions
);
data = await response.json();
console.log(`
<< PUT (UPDATE) >>
<< https://jsonplaceholder.typicode.com/posts/1 >>

${JSON.stringify(data, null, 2)}
`);

///////////////////////////////////////////////////////////////////////////////

//
// PUT (UPDATE) -> INCOMPLETE - CAUTION
//

fetchOptions = {
  method: "PUT",
  body: JSON.stringify({
    title: "This is my new title - PUT (UPDATE) -> INCOMPLETE - CAUTION",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};

response = await fetch(
  "https://jsonplaceholder.typicode.com/posts/1",
  fetchOptions
);
data = await response.json();
console.log(`
<< PUT (UPDATE) -> INCOMPLETE - CAUTION >>
<< https://jsonplaceholder.typicode.com/posts/1  >>

${JSON.stringify(data, null, 2)}
`);

///////////////////////////////////////////////////////////////////////////////

//
// PATCH (PARTIAL UPDATE)
//

fetchOptions = {
  method: "PATCH",
  body: JSON.stringify({
    title: "This is my new title using PATCH",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};

response = await fetch(
  "https://jsonplaceholder.typicode.com/posts/1",
  fetchOptions
);
data = await response.json();
console.log(`
<< PATCH (PARTIAL UPDATE) >>
<< https://jsonplaceholder.typicode.com/posts/1 >>

${JSON.stringify(data, null, 2)}
`);

///////////////////////////////////////////////////////////////////////////////

//
// POST (CREATE)
//

fetchOptions = {
  method: "POST",
  body: JSON.stringify({
    userId: 1,
    title: "foo",
    body: "bar",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};

response = await fetch(
  "https://jsonplaceholder.typicode.com/posts",
  fetchOptions
);
data = await response.json();
console.log(`
<< POST (CREATE) >>
<< https://jsonplaceholder.typicode.com/posts >>

${JSON.stringify(data, null, 2)}
`);

///////////////////////////////////////////////////////////////////////////////

//
// DELETE (DELETE)
//

fetchOptions = {
  method: "DELETE",
};

response = await fetch(
  "https://jsonplaceholder.typicode.com/posts/1",
  fetchOptions
);
data = await response.json();
console.log(`
<< DELETE (DELETE) >>
<< https://jsonplaceholder.typicode.com/posts/1 >>

${JSON.stringify(data, null, 2)}
`);
