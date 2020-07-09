const APP_CONSTANTS = {
    'WELCOME_MESSAGE': 'VanHack Events',
    'HEADER_BRAND': 'VanHack',
}

let appUser = {
    id: 1,
    name: 'Test',
    type: ''
};

let splashScreen = function () {
    const template = `
    <div class="welcome-box">
        <div class="welcome-box-contents">
        <h1>${APP_CONSTANTS.WELCOME_MESSAGE}</h1>
        <hr/>
        <p>Browse as</p>
        <button id="sign-in-normal" class="btn-sign-in normal-user">Normal User</button>
        <button id="sign-in-premium" class="btn-sign-in premium-user">Premium User</button>   
        </div>
    </div>
    `;
    document.querySelector('body').innerHTML = template;
    document.querySelector('body').className = 'splash-screen';
    document.querySelector('#sign-in-normal').addEventListener("click", signInHandler, false);
    document.querySelector('#sign-in-premium').addEventListener("click", signInHandler, false);
}

let signInHandler = function (evt) {
    const userType = evt.currentTarget.id;
    if (userType == 'sign-in-premium') {
        appUser.type = 'premium';
    }
    else {
        appUser.type = 'normal';
    }
    document.querySelector('#sign-in-normal').removeEventListener("click", signInHandler, false);
    document.querySelector('#sign-in-premium').removeEventListener("click", signInHandler, false);
    populateHeader();
}

let populateHeader = function () {
    document.querySelector("body").innerHTML = '';
    document.querySelector("body").classList.remove("splash-screen");
    document.querySelector("body").classList.add("events-page");
    document.querySelector("body").classList.remove("splash-screen");
    document.querySelector("body").classList.add("events-page");
    const template = `
        <header>
            <span class="brand-name">${APP_CONSTANTS.HEADER_BRAND}</span>
            <div style="float:right;">
                <span class="user-type">${appUser.type}</span>
            </div>
        </header>
    `;
    document.querySelector("body").innerHTML = template;
    initEventsPage();
}

let switchUser = function () {
    splashScreen();
}

splashScreen();

let cardData = [
    {
        eventId: 1,
        eventName: 'Event 1',
        eventTypeId: 1,
        eventTypeName: 'Meet Up',
        eventShortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
        eventDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        eventId: 2,
        eventName: 'Event 2',
        eventTypeId: 2,
        eventTypeName: 'Leap',
        eventShortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
        eventDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        eventId: 3,
        eventName: 'Event 3',
        eventTypeId: 3,
        eventTypeName: 'Recruiting Mission',
        eventShortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
        eventDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        eventId: 4,
        eventName: 'Event 4',
        eventTypeId: 4,
        eventTypeName: 'VanHackathon',
        eventShortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
        eventDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        eventId: 5,
        eventName: 'Event 5',
        eventTypeId: 5,
        eventTypeName: 'Premium only webinar',
        eventShortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
        eventDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        eventId: 6,
        eventName: 'Event 6',
        eventTypeId: 6,
        eventTypeName: 'Open webinar',
        eventShortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
        eventDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
];

let initEventsPage = function(){
    const template = `
        <h1 style="padding: 15px;">Upcoming Events</h1>
        <div class="cards-container">
            
        </div>
    `;
    document.querySelector("body").innerHTML += template;
    cardData.forEach((card)=>{
        eventCard(card);
    })
}

 

let eventCard = function(card){
    const template = `
        <div class="card" id="">
            <div class="card-header">
                ${card.eventName}
            </div>
            <div class="card-body">
                ${card.eventShortDesc}
            </div>
            <div class="card-footer">
                <button class="">See Details</button>
            </div>
        </div>
    `;
    document.querySelector(".cards-container").innerHTML += template;
}