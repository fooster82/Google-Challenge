const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch("dd7af3d32db77f287995f4e2abf91cf50a3c9a136a5ded2da028879752fc6c6c");

const params = {
  engine: "google",
  q: "Coffee"
};

const callback = function(data) {
  console.log(data['organic_results']);
};

// Show result as JSON
search.json(params, callback);
