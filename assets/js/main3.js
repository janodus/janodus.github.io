$(function () {
  console.log('Page loaded');
});

//======================
// INITIALIZING
//======================
var search = instantsearch({
  // Replace with your own values
  appId: 'Q4H3H3ENOR',
  apiKey: 'fc88e84b11f7c43344250af47daee0ae', // search only API key, no ADMIN key
  indexName: 'legendary1',
  urlSync: true
});


//======================
// WIDGETS
//======================

// Searchbox 
search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#jv-search-box',
    placeholder: 'Search for Restaurants by Name, Cuisine, or Location'
  })
);

// Hits 
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

// Stats
search.addWidget(
  instantsearch.widgets.stats({
    container: '#stats'
  })
);

// Pagination
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

// Type Menu ** required
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

search.addWidget(
  instantsearch.widgets.numericRefinementList({
    container: '#stars',
    attributeName: 'stars_count',
    options: [
      {end: 0, name: '(0)'},
      {start: 1, end: 1, name: '(1)'},
      {start: 2, end: 2, name: '(2)'},
      {start: 3, end: 3, name: '(3)'},
      {start: 4, end: 4, name: '(4)'},
      {start: 5, end: 5, name: '(5)'},
    ],
    templates: {
      header: '<h5>Rating</h5>'
    },
    cssClasses:{
    	link: 'linkcss',
    },
  })
);



// Star Widget
// search.addWidget(
//   instantsearch.widgets.starRating({
//     container: '#stars',
//     attributeName: 'stars_count',
//     max: 5,
//     templates: {
//       header: '<h5>Rating</h5>'
//     },
//     labels: {
//       andUp: ''
//     }, 
//     cssClasses: {
//     count: 'dont-show',
//     star: 'starcss',
//     },
//   })
// );



//======================
// UTILITY FUNCTIONS
//======================

// Gets template conditionals 
function getTemplate(templateName) {
  return document.getElementById(templateName + '-template').innerHTML;
}

//======================
// BOOM METHOD
//======================
search.start();

function addStarListIds() {	
	var starsList = document.getElementsByClassName('ais-refinement-list--label');

	for(var i = 0; i < starsList.length; i ++) {
		starsList[i].id = "starsRating_" + i;
	}

	$("#starsRating_0").append("<span id='star-span'><img src='../../resources/graphics/star-empty.png'></span>");
}













