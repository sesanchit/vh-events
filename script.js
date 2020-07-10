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
        <p>Continue as:</p>
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

const cardData = [ 
    {
        eventId: 7,
        eventName: 'Premium Web Event 1',
        eventTypeId: 5,
        eventTypeCat: 'pow',
        eventTypeName: 'Premium only webinar',
        applyStatus: false,
        eventShortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
        eventDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        eventId: 1,
        eventName: 'Meet Up Event 1',
        eventTypeId: 1,
        eventTypeCat: 'meet-up',
        eventTypeName: 'Meet Up',
        applyStatus: false,
        eventShortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
        eventDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        eventId: 2,
        eventName: 'Meet Up Event 2',
        eventTypeId: 1,
        eventTypeCat: 'meet-up',
        eventTypeName: 'Meet Up',
        applyStatus: false,
        eventShortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
        eventDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        eventId: 3,
        eventName: 'Leap Event 1',
        eventTypeId: 2,
        eventTypeCat: 'leap',
        eventTypeName: 'Leap',
        applyStatus: false,
        eventShortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
        eventDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        eventId: 4,
        eventName: 'Meet Up Event 3',
        eventTypeId: 1,
        eventTypeCat: 'meet-up',
        eventTypeName: 'Meet Up',
        applyStatus: false,
        eventShortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
        eventDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        eventId: 5,
        eventName: 'Recruiting Mission Event 1',
        eventTypeId: 3,
        eventTypeCat: 'rec-mis',
        eventTypeName: 'Recruiting Mission',
        applyStatus: false,
        eventShortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
        eventDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        eventId: 6,
        eventName: 'VanHackathon Event 1',
        eventTypeId: 4,
        eventTypeCat: 'vanh',
        eventTypeName: 'VanHackathon',
        applyStatus: false,
        eventShortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
        eventDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        eventId: 8,
        eventName: 'Open webinar Event 1',
        eventTypeId: 6,
        eventTypeCat: 'ow',
        eventTypeName: 'Open webinar',
        applyStatus: false,
        eventShortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
        eventDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        eventId: 9,
        eventName: 'Leap Event 2',
        eventTypeId: 2,
        eventTypeCat: 'leap',
        eventTypeName: 'Leap',
        applyStatus: false,
        eventShortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
        eventDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
];

let userApplyList = [];

let getEventDetails = function(id){
    return cardData.filter(card => card.eventId == id);
}

let initEventsPage = function(){
    const template = `
        <h1 style="padding: 15px;">Upcoming Events</h1>
        <div class="cards-content-wrapper">
            <div class="cards-container"></div>
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
            <div class="card-header ${card.eventTypeCat}">
                ${card.eventName}
                <div class="card-badge ${card.eventTypeCat}">
                ${card.eventTypeName}
                </div>
            </div>
            
            <div class="card-body">
                <span id="badge-id-${card.eventId}" class="status-badge"></span>
                <br>
                ${card.eventShortDesc}
            </div>
            <div class="card-footer">
                <button id="event-id-${card.eventId}" class="see-details">See Details</button>
            </div>
        </div>
    `;
    document.querySelector(".cards-container").innerHTML += template;
    const eventId = "event-id-"+ card.eventId;
    setTimeout(()=>{
        document.getElementById(eventId).addEventListener("click", seeDetails, false);
    },0);
}

let seeDetails = function(evt){
    const eventId = evt.currentTarget.id.charAt(evt.currentTarget.id.length-1);
    const details = getEventDetails(eventId)[0];

    let hasUserApplied = userApplyList.indexOf(eventId);

    let applyButton="";

    if(hasUserApplied > -1){
        applyButton =`
            <button id="${eventId}" class="applied">Already applied</button>
        `;
    }
    else{
        applyButton =`
            <button id="${eventId}" class="apply">Apply</button>
        `;
    }

    let buyPremium = "";

    if(details.eventTypeId == 5 && appUser.type != 'premium'){
        buyPremium = `
            <button id="apply-disable" disabled>Apply</button>
            <p>This is a Premium only Webinar. Proceed to buy or read more about premium</p>
            <button id="buy-premium" class="buy-premium">Buy Premium</button>
            <button>Read more</button>
        `;
        applyButton = buyPremium;
    }

    const template = `
        <div class="modal">
            <div class="modal-header">
                <h1 style="text-align: center;">${details.eventName}</h1>
                <button class="close">Close</button>
            </div>
            <hr/>
            <div class="modal-body">
                ${applyButton}
                <p>${details.eventDesc}</p>
            </div>
        </div>
    `;

    const divContainer = document.createElement('div');
    divContainer.classList.add("modal-container");
    divContainer.innerHTML = template;
    document.querySelector("body").appendChild(divContainer);
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector(".close").addEventListener("click",closeModal,false);
    if(!buyPremium && hasUserApplied == -1)
        document.querySelector(".apply").addEventListener("click",applyEvent,false);
}

let closeModal = function(){
    const modalContainer = document.querySelector(".modal-container");
    document.querySelector("body").removeChild(modalContainer);
    document.querySelector("body").style.overflow = "visible";
}

let applyEvent = function(evt){
    userApplyList.push(evt.currentTarget.id);
    document.querySelector(".apply").innerText = "Applied";
    document.querySelector(`#badge-id-${evt.currentTarget.id}`).innerText = "Applied";
    document.querySelector(".apply").removeEventListener("click",applyEvent,false);
}