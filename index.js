function fetchBooks() {
    // To pass the tests, don't forget to return your fetch!
    // To pass this lab:
    // DONE: 1. This function should include a fetch request to the Game of Thrones API (https://anapioficeandfire.com/api/books
    // (Links to an external site.)).
    // DONE: 2. The returned response should be converted to JSON.
    // DONE: 3. Then, it should call the second function, renderBooks(), passing in the JSON-ified data as the argument.
    // DONE: 4. To check if you have done this correctly, open up the index.html page of this lab; you should see a list of Game Of Thrones titles on your webpage.
    // Additional Deliverables:
    // DONE: 1. Show the 5th book in the series
    // NEXT TIME: 2. The 1031st character in the series
    // NEXT TIME: 3. The total number of pages of all the books
    return fetch("https://anapioficeandfire.com/api/books")
        // .then((response) => console.log(response));
        .then((response) => response.json())
        .then((json) => renderBooks(json));
        // .then((json) => console.log("typeof(json): ", typeof(json)));    
    // ADDITIONAL DELIVERABLES:
    // Show the fifth book in the series:
    // .then((json) => console.log(json[4]));
}

function renderBooks(books) {
    const main = document.querySelector('main');
    books.forEach(book => {
        const h2 = document.createElement('h2');
        // Replacing this with .textContent() to avoid XSS:
        h2.textContent = book.name;
        // h2.innerHTML = book.name;
        main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
