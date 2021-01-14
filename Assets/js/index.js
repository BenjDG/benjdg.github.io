$(document).ready(function () {
  $mySites = $('#my-sites');

  const data = [
    {
      "idWord": "travel",
      "imgSrc": "./Assets/Images/travel-planner.png",
      "siteTitle": "Title",
      "siteDescription": "Description"
    },
    {
      "idWord": "workday",
      "imgSrc": "./Assets/Images/work-day.PNG",
      "siteTitle": "Title",
      "siteDescription": "Description"
    }
  ]

  cardFactory(
    'travel',
    './Assets/Images/travel-planner.png',
    'Title',
    'Description'
  );

  function cardFactory(idWord, imgSrc, siteTitle, siteDescription) {
    $colMainDiv = $('<div>').attr('class', 'col mb-4');

    $cardDiv = $('<div>').attr({
      id: idWord,
      class: 'card'
    });
    $img = $('<img>').attr({
      src: imgSrc,
      alt: 'picture of website',
      class: 'card-img-top border-0'
    });

    $img.appendTo($cardDiv);
    $cardDiv.appendTo($colMainDiv);

    $cardWrapper = $('<div>').attr('class', 'card-body');
    $cardTitle = $('<h5>').attr('class', 'card-title').text(siteTitle);
    $cardText = $('<p>').attr('class', 'card-text').text(siteDescription);

    $cardTitle.appendTo($cardWrapper);
    $cardText.appendTo($cardWrapper);
    $cardWrapper.appendTo($cardDiv);

    $cardFooterWrap = $('<div>').attr('class', 'card-footer border-0');
    $cardFooterTitle = $('<h6>')
      .attr('class', 'card-title')
      .text('Technologies');
    $cardTechList = $('<ul>');
    $cardListItem = $('<li>').text('A technology 1');

    $cardListItem.appendTo($cardTechList);
    $cardFooterTitle.appendTo($cardFooterWrap);
    $cardTechList.appendTo($cardFooterWrap);
    $cardFooterWrap.appendTo($cardWrapper);
    $colMainDiv.appendTo($mySites);
  }

  $('#travel').on('click', function () {
    window.location = 'https://benjdg.github.io/Travel_App/';
  });

  $('#workday').on('click', function () {
    window.location = 'https://benjdg.github.io/05_Work_Day_Scheduler/';
  });

  $('#weather').on('click', function () {
    window.location = 'https://benjdg.github.io/06_Weather_Dashboard/';
  });

  $('#burger').on('click', function () {
    $('.burger-click').empty();
    $('.burger-click').parent().addClass('text-center');
    $('.burger-click')
      .removeClass('card')
      .addClass('loader fas fa-hamburger fa-9x');
    setTimeout(() => {
      window.location = 'https://polar-hamlet-57397.herokuapp.com/';
    }, 5000);
  });
});
