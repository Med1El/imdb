this.log = console.log;

document.addEventListener('DOMContentLoaded', function () {

    let elems = document.querySelectorAll('select');
    let instances = M.FormSelect.init(elems);
    document.getElementById('search-btn').addEventListener('click', (e) => {
        let yearFrom = document.getElementById('year-from-input').value;
        let yearTo = document.getElementById('year-to-input').value;
        let ratingFrom = document.getElementById('user-rating-from').value;
        let ratingTo = document.getElementById('user-rating-to').value;
        let votesFrom = document.getElementById('votes-from-input').value;
        let votesTo = document.getElementById('votes-to-input').value;

        let searchUrl = 'https://www.imdb.com/search/title/?title_type=' + instances[0].getSelectedValues().join(',') + '&release_date=' + yearFrom + ',' + yearTo + '&user_rating=' + ratingFrom + ',' + ratingTo + '&genres=' + instances[1].getSelectedValues().join(',') + '&num_votes=' + votesFrom + ',' + votesTo + 'languages=' + instances[2].getSelectedValues().join(',') + '&sort=user_rating';

        window.location.replace(searchUrl);

    });

});

/*
type-div
date-div
rating-div
genre-div
vote-div
lang-div
*/





//hide country
//hide lang
//hide genre
//keywords








