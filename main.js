// declarations for our song values
let photo;
let playPhoto;

// spotify client creds
const clientId = "ae35e12af455c494992ebbfa05c551244";
const clientSecret = "1fbf61c4b7ce4fd2bf475d751b4aa672";

const get_token = async () => {
    const result = await fetch(`https://accounts.spotify.com/api/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });

    const data = await result.json();
    return data.access_token
};

// function to get photo info when the image is clicked
/** 
* @param img_index
* @param item_index
*
*/ 
async function clickedEvent(img_index, item_index) {
    // get track name
    let track = document.getElementsByTagName('img')[img_index].attributes[1].value;

    // get token
    let token = await _getToken();

    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json'],
        ['Authorization', `bearer ${token}`]
    ]);

    let request = new Request(`https://api.spotify.com/v1/search?q=${track}&type=track&limit=15`, {
        method: 'GET',
        headers: headers
    });

    let result = await fetch(request);

    let response = await result.json();

    console.log(response);
    let photo = response.tracks.items[item_index].preview_url

    // check if song is playing and stop it
    if (playPhoto) {
        stopSnippet();
    }
    photoSnippet(photo)
}

/**
 * @param id
 * @param event
 * 
 * id = image if for gallery image 
 * event = mouse event given by the action of the user
 * 
 * function produces songs from the clickedEvent based
 * on index of image
 */

function getPhoto(id, event) {
    switch(id){
        case 'fig1': { // me
            event.stopPropagation();
            clickedEvent(0,0)
            break;
        }
        case 'fig2': { // 
            event.stopPropagation();
            clickedEvent(1,0)
            break;
        }
        case 'fig3': { // 
            event.stopPropagation();
            clickedEvent(2,0)
            break;
        }
        case 'fig4': { // 
            event.stopPropagation();
            clickedEvent(3,0)
            break;
        }
        case 'fig5': { // 
            event.stopPropagation();
            clickedEvent(4,0)
            break;
        }
        case 'fig6': { // 
            event.stopPropagation();
            clickedEvent(5,0)
            break;
        }
    }
}