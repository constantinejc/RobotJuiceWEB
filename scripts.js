document.addEventListener("DOMContentLoaded", () => { // Only executes once page is fully loaded, probably unnecessary with the defer in the html but no time to test
    const reviewsContainer = document.getElementById("productReviewsSection");
    const apiLink = "https://cis1110apicw.computing.edgehill.ac.uk/reviews";
    fetch(apiLink)
        .then(response => {
            return response.json(); // Convert everything in the link to json format
        })
        .then(data => {
            data.forEach(review => {
                // Iterate through each review in the json and create an <article> tag with class="productApiReview"
                const reviewArticle = document.createElement("article");
                reviewArticle.classList.add("productApiReview");

                // Within said <article> tag paste a basic template with the values taken from the link
                reviewArticle.innerHTML = `
                    <p>${review.nickname} - Rating: ${review.rating}/5</p>
                    <p>"${review.review}"</p>
                `;
                // Append the entire generated content to the #productReviewsSection tag
                reviewsContainer.append(reviewArticle);
            });
        });
});
