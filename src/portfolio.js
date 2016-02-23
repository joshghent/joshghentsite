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
          <a class='link_to_demo'>
            <div class="card medium">
                <div class="card-image">
                    <img src="item_image">
                    <span class="card-title grey-text text-darken-4 card-title-background"> name </span>
                </div>
                <div class="card-content">
                    <p>description</p>
                </div>
            </div>
          </a>
        </div>
*/

fridgemagnets = {
    name: "Fridge Magnets",
    item_image: "images/fridgejs.png",
    description: "Designed to emulate fridge magnets in your browser, this project was made as a small note keeper. It taught me many new ways of dynamically creating content based on user input, a skill used in many modern web applications.",
    src: "http://joshghent.github.io/fridgejs/"
};
marid = {
    name: "Marid",
    item_image: "images/marid.png",
    description: "Done in collaboration with two others, Marid was purposed as a way of connecting artists with engineers and producers of music. I was brought onto the team with the task of designing and building the frontend componant.",
    src: "http://joshghent.github.io/marid-frontend/"
};
weather = {
    name: "Local Weather",
    item_image: "images/randomquotegenerator.png",
    description: "For this project I utilized the OpenWeatherMap API to collect weather data and then presented it to the user depending on their location. I used animated CSS icons to display the weather conditions at their location. I also built in a feature to allow the user to convert the temperature to different units.",
    src: "http://joshghent.github.io/weather/"
};
calculator = {
    name: "Calculator",
    item_image: "images/tictactoe.png",
    description: "This calculator application was built to further teach me about javascripts RegEx and Eval features as well as working with user input to produce a credible output. This project taught me about starting small and the incrementally adding features.",
    src: "http://joshghent.github.io/calculator/"
};
timer = {
    name: "Timer",
    item_image: "images/timer.png",
    description: "This project stemmed from the discovery that the Google timer did not use the HTML5 <a href='https://developer.mozilla.org/en/docs/Web/API/notification' target='_blank'>Notifications API</a>. Therefore, my objective was to build a basic timer app that gave a desktop notification when the timer ended.",
    src: "http://joshghent.github.io/timer/"
};
todo = {
    name: "Todo",
    item_image: "images/todo.png",
    description: "In this project, I utilized ReactJS and Meteor to create a project that interacted with a backend Mongo database to syncronise data between devices. I learnt about the MVC architecture and securely handling data from a client to post it to a server.",
    src: "http://todo.joshghent.com"
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
    
    // Make the entire clickable by adding an <a> tag with a href bound to the src element on the objects
    var portfolioCardLinkToDemo = document.createElement('a');
    portfolioCardLinkToDemo.classList.add('link_to_demo');
    portfolioCardLinkToDemo.href = obj.src;
    
    // Makes the main card div where all the content exists
    var portfolioCardEl = document.createElement('div');
    portfolioCardEl.classList.add('card');
    portfolioCardEl.classList.add('medium');
    
    // Creates the card image and title container
    var portfolioCardImageContainerEl = document.createElement('div');
    portfolioCardImageContainerEl.classList.add('card-image');
    
    // Creates the image element and sets the image to the objects item_image
    var portfolioItemImageEl = document.createElement('img');
    portfolioItemImageEl.classList.add('item_image');
    portfolioItemImageEl.classList.add('responsive-img');
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
    
    portfolioCardLinkToDemo.appendChild(portfolioCardEl);
    portfolioSizing.appendChild(portfolioCardLinkToDemo);
    
    portfolio_container.appendChild(portfolioSizing);
}

function init(){
    create_portfolio_items(fridgemagnets);
    create_portfolio_items(marid);
    create_portfolio_items(calculator);
    create_portfolio_items(weather);
    create_portfolio_items(timer);
    create_portfolio_items(todo);
}

window.onload = init();