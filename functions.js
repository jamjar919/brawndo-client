const state = {
    map: undefined,
};

// Test data
var response = {
    Routes: [
        
    ]
}

function getFriends(includeEmpty = false) {
    const inputs = $('#friendInputs').find('input').toArray();
    const locations = [];
    for (let i = 0; i < inputs.length; i += 1) {
        const val = $(inputs[i]).val();
        if (val || includeEmpty) {
            locations.push(val);
        }
    }
    return locations;
}

function flashEmptyFriendInput() {
    const inputs = $('#friendInputs').find('input').toArray();
    for (let i = 0; i < inputs.length; i += 1) {
        if (!$(inputs[i]).val()){ 
            $(inputs[i]).effect("highlight", {}, 1000);
        }
    }
}

function addNewFriendInput(deletable = false) {
    // Only add if we have no empty values
    const locations = getFriends(true);
    add = true;
    for (let i = 0; i < locations.length; i += 1) {
        if (locations[i] == "") {
            add = false;
        }
    }
    if (add || !deletable) {
        $('<div>')
        .addClass("input-group")
        .html('<input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username">')
        .append(
            deletable ? 
            $('<div>')
            .addClass('input-group-addon')
            .html('&times;') : ''
        ).hide().prependTo('#friendInputs').fadeIn();
    } else {
        flashEmptyFriendInput();
    }
}

function search(queries) {
    console.log(queries);
    showMap();
}

function showMap() {
    $('#friendInput').slideUp();
    $('#mapContainer').slideDown();
    state.map.invalidateSize();
}

function showFriendSelect() {
    $('#friendInput').slideDown();
    $('#mapContainer').slideUp();
}

function stopLoading(callback) {
    $('#loader').fadeOut(300, callback);
}

function plotMeetupPoint(location) {

}

function plotFriend(location) {

}

function plotRoute(start, end) {

}

$(document).ready(() => {
    $('#friendInput').slideUp();
    $('#mapContainer').slideUp();
    console.log("ready");
    // Add our two initial friend inputs
    addNewFriendInput();
    addNewFriendInput();
    // Bind add new friend button
    $('#addNewInput').click(() => { addNewFriendInput(true) })
    // Bind search button
    $('#searchButton').click(() => {
        search(getFriends())
    })
    // Init the map
    state.map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org//{z}/{x}/{y}.png', {
        maxZoom: 18,
    }).addTo(state.map);
    $('#goBackToFriends').click(showFriendSelect)
    // show friend input 
    stopLoading(() => {
        showFriendSelect();
    });
})