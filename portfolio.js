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

        <div class="col s12 m7">
          <div class="card">
            <div class="card-image">
              <img src="item_image">
              <span class="card-title"> name </span>
            </div>
            <div class="card-content">
              <p>description</p>
            </div>
          </div>
        </div>
*/
function create_portfolio_items(obj){
    // Get the ID of the portfolio container
    var portfolio_container = document.getElementById('portfolio');
    
    // Establishes the grid sizing
    var portfolioSizing = document.createElement('div');
    portfolioSizing.classList.add('col s12 m7');
    
    // Makes the main card div where all the content exists
    var portfolioCardEl = document.createElement('div');
    portfolioCardEl.classList.add('card');
    
    // Creates the card image and title container
    var portfolioCardImageContainerEl = document.createElement('div');
    portfolioCardImageContainerEl.classList.add('card-image');
    
    // Creates the image element and sets the image to the objects item_image
    var portfolioItemImageEl = document.createElement('img');
    portfolioItemImageEl.style.backgroundUrl = obj.item_image;
    
    // Creates the title element and sets it to the objects name key
    var portfolioCardTitleEl = document.createElement('span');
    portfolioCardTitleEl.classList.add('card-title');
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
}

window.onload = init();