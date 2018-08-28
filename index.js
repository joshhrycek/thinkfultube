const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
    const query = {
      q: `${searchTerm}`,
      per_page: 5,
      part: 'snippet',
      key: 'AIzaSyBhOcoF1S_fjyESECT5yfimZ5nRLL4pXfk'
    }
    $.getJSON(YOUTUBE_URL, query, callback);
  }
  
  function renderResult(result) {
    return `
    <p>Returned 5 Results!<p>
    <section aria-live="assertive">
      <a href="https://www.youtube.com/watch?v=${result.items[0].id.videoId}">
      <div>  
          <img src="${result.items[0].snippet.thumbnails.medium.url}">
      </div>
      </a>

      <a href="https://www.youtube.com/watch?v=${result.items[1].id.videoId}">
        <div>
          <img src="${result.items[1].snippet.thumbnails.medium.url}">
      </div>
      </a>

      <a href="https://www.youtube.com/watch?v=${result.items[2].id.videoId}">
        <div>
          <img src="${result.items[2].snippet.thumbnails.medium.url}">
      </div>
      </a>

      <a href="https://www.youtube.com/watch?v=${result.items[3].id.videoId}">
        <div>
          <img src="${result.items[3].snippet.thumbnails.medium.url}">
      </div>
      </a>

      <a href="https://www.youtube.com/watch?v=${result.items[4].id.videoId}">
        <div>
          <img src="${result.items[4].snippet.thumbnails.medium.url}">
      </div>
      </a>

    </section>`;
  }
  
  function displayYoutubeSearchData(data) {
    $('.js-search-results').html(renderResult(data)).prop('hidden', false);
  }
  
  function watchSubmit() {
    $('.js-search-form').submit(event => {
      event.preventDefault();
      const queryTarget = $(event.currentTarget).find('.js-query');
      const query = queryTarget.val();
      // clear out the input
      queryTarget.val("");
      getDataFromApi(query, displayYoutubeSearchData);
    });
  }
  
  $(watchSubmit);
  