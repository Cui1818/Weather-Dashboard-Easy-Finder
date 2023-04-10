$("#add-friend-button").click(saveFriend)

function saveFriend(){
    var name = $("#friends-input").val();

    var savedFriends = JSON.parse(localStorage.getItem("friends")) || [];

    //is this friend already saved
    if(!savedFriends.includes(name)){
        savedFriends.push(name);
        localStorage.setItem("friends", JSON.stringify(savedFriends))
    }

    displayFriendButtons();
}

function displayFriendButtons(){
    $("#friend-list").empty();

    var savedFriends = JSON.parse(localStorage.getItem("friends")) || [];

    for (var i = 0; i < savedFriends.length; i++) {
        var friendName = savedFriends[i];
        addFriendsButton(friendName);
    }
}

function addFriendsButton (name) {
      $("#friend-list").append(
        `
        <button type="button" class="btn friends-button btn-primary">
            ${name}
        </button>
        `
    )
}

displayFriendButtons()
