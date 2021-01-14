$(document).ready(function () {
  $mySites = $('#my-sites');

  const data = [
    {
      idWord: 'travel',
      imgSrc: './Assets/Images/travel-planner.png',
      siteTitle: 'Travel Planner',
      siteDescription:
        'This web application retrieves different information about a location. It includes information about the weather forecast upcoming events, and a map of the location.',
      url: 'https://benjdg.github.io/Travel_App/',
      tech: [
        'Day.js',
        'Bulma',
        'jQuery',
        'Font Awesome',
        'Google Fonts',
        'Google Maps API',
        'Ticketmaster API',
        'OpenWeather API'
      ]
    },
    {
      idWord: 'workday',
      imgSrc: './Assets/Images/work-day.PNG',
      siteTitle: 'Work Day Scheduler',
      siteDescription:
        'This is a web application that locally persists events into a work day scheduler.',
      url: 'https://benjdg.github.io/05_Work_Day_Scheduler/',
      tech: ['Day.js', 'Bulma', 'jQuery', 'Font Awesome', 'Open Weather API']
    },
    {
      idWord: 'weather',
      imgSrc: './Assets/Images/weather-dashboard.PNG',
      siteTitle: 'Weather Dashboard',
      siteDescription:
        'This weather dashboard gives you the current and 5-day forecast for a city. It also saves your recent weather searches.',
      url: 'https://benjdg.github.io/06_Weather_Dashboard/',
      tech: ['Day.js', 'Bulma', 'jQuery', 'Font Awesome', 'Open Weather API']
    },
    {
      idWord: 'burger',
      imgSrc: './Assets/Images/burger.PNG',
      siteTitle: 'Eat the Burger',
      siteDescription:
        'This app takes names of burgers and saves them to a database. Then you can virtually eat the burgers and the database record will be updated and the item moved to a different list.',
      url: 'https://polar-hamlet-57397.herokuapp.com/',
      tech: [
        'Node.js',
        'Express.js',
        'MySql',
        'MVC',
        'ORM',
        'Handlebars',
        'Heroku'
      ]
    }
  ];

  data.forEach(obj => {
    cardFactory(obj);
  });

  function cardFactory(arr) {
    console.log(arr.idWord);
    $colMainDiv = $('<div>').attr('class', 'col mb-4');

    $cardDiv = $('<div>').attr({
      id: arr.idWord,
      class: 'card'
    });
    $img = $('<img>').attr({
      src: arr.imgSrc,
      alt: 'picture of website',
      class: 'card-img-top border-0'
    });
    $img.appendTo($cardDiv);
    $cardDiv.appendTo($colMainDiv);
    $cardWrapper = $('<div>').attr('class', 'card-body');
    $cardTitle = $('<h5>').attr('class', 'card-title').text(arr.siteTitle);
    $cardText = $('<p>').attr('class', 'card-text').text(arr.siteDescription);
    $cardTitle.appendTo($cardWrapper);
    $cardText.appendTo($cardWrapper);
    $cardWrapper.appendTo($cardDiv);
    $cardFooterWrap = $('<div>').attr('class', 'card-footer border-0');
    $cardFooterTitle = $('<h6>')
      .attr('class', 'card-title')
      .text('Technologies');
    $cardTechList = $('<ul>');
    arr.tech.forEach(item => {
      $cardListItem = $('<li>').text(item);
      $cardListItem.appendTo($cardTechList);
    });
    $cardFooterTitle.appendTo($cardFooterWrap);
    $cardTechList.appendTo($cardFooterWrap);
    $cardFooterWrap.appendTo($cardWrapper);
    $colMainDiv.appendTo($mySites);
    $(`#${arr.idWord}`).on('click', function () {
      window.location = arr.url;
    });
  }
});
