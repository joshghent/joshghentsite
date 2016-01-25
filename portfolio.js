//====================================
// This function takes an object with the keys
//      * name
//      * item_image
//      * description
// It then creates the required DOM along with the content in the object 
// and appends it to a section of the page
//====================================

/*
END RESULT 

        <div class="col s12 m6 l4">
          <div class="card medium">
            <div class="card-image">
              <img src="item_image">
              <span class="card-title grey-text text-darken-4 card-title-background"> name </span>
            </div>
            <div class="card-content">
              <p>description</p>
            </div>
          </div>
        </div>
*/

fridgemagnets = {
    name: "Fridge Magnets",
    item_image: "images/fridgejs.png",
    description: "Designed to emulate fridge magnets in your browser, this project was made as a small note keeper. It taught me many new ways of dynamically creating content based on user input, a skill used in many modern web applications."
};
marid = {
    name: "Marid",
    item_image: "images/marid.png",
    description: "Done in collaboration with two others, Marid was purposed as a way of connecting artists with engineers and producers of music. I was brought onto the team with the task of designing and building the frontend componant."
};
randomquotegenerator = {
    name: "Random Quote Machine",
    item_image: "images/randomquotegenerator.png",
    description: "The Random Quote Machine was done as part of course work for the FreeCodeCamp course. I learned a vast amount about working with API's and building a application from a given specification."
};
tictactoe = {
    name: "Tic Tac Toe",
    item_image: "images/tictactoe.png",
    description: "This project was done as part of the FreeCodeCamp course. I learned about checking for different conditions based on user actions and displaying different content accordingly."
};
timer = {
    name: "Timer",
    item_image: "images/timer.png",
    description: "This project stemmed from the discovery that the Google timer did not use the HTML5 <a href='https://developer.mozilla.org/en/docs/Web/API/notification' target='_blank'>Notifications API</a>. Therefore, my objective was to build a basic timer app that gave a desktop notification when the timer ended."
};
todo = {
    name: "Todo",
    item_image: "images/todo.png",
    description: "I created a Todo application as part of learning to use the new HTML5 features. In this case I used localstorage to store the users 'todo list' after they had navigated away from the page. I learnt a lot about storage of data and using that data to build up a dynamic page."
};

function create_portfolio_items(obj){
    // Get the ID of the portfolio container
    var portfolio_container = document.getElementById('portfolio');
    
    // Establishes the grid sizing
    var portfolioSizing = document.createElement('div');
    portfolioSizing.classList.add('col');
    portfolioSizing.classList.add('s12');
    portfolioSizing.classList.add('m6');
    portfolioSizing.classList.add('l4');
    
    // Makes the main card div where all the content exists
    var portfolioCardEl = document.createElement('div');
    portfolioCardEl.classList.add('card');
    portfolioCardEl.classList.add('medium');
    
    // Creates the card image and title container
    var portfolioCardImageContainerEl = document.createElement('div');
    portfolioCardImageContainerEl.classList.add('card-image');
    
    // Creates the image element and sets the image to the objects item_image
    var portfolioItemImageEl = document.createElement('img');
    portfolioItemImageEl.src = obj.item_image;
    
    // Creates the title element and sets it to the objects name key
    var portfolioCardTitleEl = document.createElement('span');
    portfolioCardTitleEl.classList.add('card-title');
    portfolioCardTitleEl.classList.add('grey-text');
    portfolioCardTitleEl.classList.add('text-darken-4');
    portfolioCardTitleEl.classList.add('card-title-background');
    portfolioCardTitleEl.innerHTML = obj.name;
    
    // Creates the description container
    var portfolioCardContentContainerEl = document.createElement('div');
    portfolioCardContentContainerEl.classList.add('card-content');
    
    // Creates a standard paragraph element and sets the text to the objects description key
    var portfolioItemDescription = document.createElement('p');
    portfolioItemDescription.innerHTML = obj.description;
    
    // Append the elements
    portfolioCardImageContainerEl.appendChild(portfolioItemImageEl);
    portfolioCardImageContainerEl.appendChild(portfolioCardTitleEl);
    
    portfolioCardContentContainerEl.appendChild(portfolioItemDescription);
    
    portfolioCardEl.appendChild(portfolioCardImageContainerEl);
    portfolioCardEl.appendChild(portfolioCardContentContainerEl);
    
    portfolioSizing.appendChild(portfolioCardEl);
    
    portfolio_container.appendChild(portfolioSizing);
}

function init(){
    create_portfolio_items(fridgemagnets);
    create_portfolio_items(marid);
    create_portfolio_items(tictactoe);
    create_portfolio_items(randomquotegenerator);
    create_portfolio_items(timer);
    create_portfolio_items(todo);
}

window.onload = init();