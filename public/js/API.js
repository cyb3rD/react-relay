import ServerActions from "./actions/ServerActions";

let API = {

  fetchLinks() {
    console.log('I\'m in API');

    // AJAX request to read data/links
    let request = new XMLHttpRequest();
    request.open('GET', '/data/links', true);

    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        let resp = request.responseText;
        console.log('Server response: ', JSON.parse(resp));
        //
        ServerActions.receiveLinks(resp);
      } else {
        // We reached our target server, but it returned an error
        throw "Error from the server!"
      }
    };

    request.onerror = () => {
      // There was a connection error of some sort
    };

    request.send();
  }

};

export default API;
