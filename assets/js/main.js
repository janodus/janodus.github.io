$(function () {
  console.log('Page loaded');
});

//======================
// INITIALIZING
//======================
var search = instantsearch({
  // Replace with your own values
  appId: 'Q4H3H3ENOR',
  apiKey: 'fc88e84b11f7c43344250af47daee0ae',
  indexName: 'legendary1',
  urlSync: true
});

//======================
// WIDGETS
//======================

// SEARCH WIDGET
search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#jv-search-box',
    placeholder: 'Search for Restaurants by Name, Cuisine, or Location'
  })
);

// HITS WIDGET
search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    hitsPerPage: 3,
    templates: {
      item: getTemplate('hit'),
      empty: getTemplate('no-results')
    }
  })
);

// STATS (Top of Page)
search.addWidget(
  instantsearch.widgets.stats({
    container: '#stats'
  })
);

// PAGINATION
search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination',
    padding: 0,
    showFirstLast : false, 
    labels: {
    	next: "Show More", 
    	previous: "Previous",
    },
    scrollTo: "footer",
  })
);

// MENU WIDGET
search.addWidget(
  instantsearch.widgets.menu({
    container: '#food_type',
    attributeName: 'food_type',
    limit: 7, 
    templates: {
      header: '<h5>Cuisine / Food Type</h5>'
    },
    cssClasses: {
      link: 'ais-menu-link',
      count: ['pull-right', 'grayed', 'ais-menu-count'],
      active: 'active-item',
    },
  })
);

//STARS (RATING) WIDGET 
search.addWidget(
  instantsearch.widgets.starRating({
    container: '#stars',
    attributeName: 'stars_count',
    max: 5,
    templates: {
      header: '<h5>Rating</h5>'
    },
    labels: {
      andUp: ''
    }, 
        cssClasses: {
    count: 'dont-show',
    },
  })
);

//======================
// UTILITY FUNCTIONS
//======================
// Gets template conditionals 
function getTemplate(templateName) {
  return document.getElementById(templateName + '-template').innerHTML;
}

//======================
// START
//======================
search.start();














