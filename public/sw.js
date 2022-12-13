let cacheData = "appV1";

let cacheURLs = [
  "/static/js/main.chunk.js",
  "/static/js/0.chunk.js",
  "/static/js/bundle.js",
  "/index.html",
  "/logo.png",
  "/",
];

function saveIntoIndexedDb(url, payload, requestMethod) {
  var myRequest = {};
  let jsonPayload = {};
  if (payload) {
    jsonPayload = JSON.parse(payload)
  }
  //add payload if required. If not skip parsing json and stringifying it again
  //jsonPayLoad['eventTime'] = getCurrentTimeString(eventTime)
  myRequest.url = url;
  myRequest.payload = JSON.stringify(jsonPayload);
  myRequest.method = requestMethod;
  var request = indexedDB.open("PlayerTrackingPostDB", 1);
  request.onsuccess = function (event) {
    var db = event.target.result;
    var tx = db.transaction('postrequest', 'readwrite');
    var store = tx.objectStore('postrequest');
    var query = store.put(myRequest);

    query.onsuccess = function (event) {
      console.log(event);
    };

    // handle the error case
    query.onerror = function (event) {
      console.log(event.target.errorCode);
    }

    // close the database once the 
    // transaction completes
    tx.oncomplete = function () {
      db.close();
    };
  }
  request.onupgradeneeded = function (event) {
    var db = event.target.result;
    // db.onerror = function (event) {
    //   console.log("Why didn't you allow my web app to use IndexedDB?!");
    // };
    let store = db.createObjectStore('postrequest', {
      autoIncrement: true
    });
  }
}

this.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheData).then((data) => {
      data.addAll(cacheURLs);
    })
  );
  /*
  ** check network state after certain time interval
  ** If online for the first time, create an indexed db and a table
  ** If online after going offline, hit all requests saved in indexed table to server and empty the table
  */
});

this.addEventListener("fetch", (e) => {
  var requestMethod = e.request.method;

  // Check if the request type and persist accordingly
  if (e.request.method === "Get") {
    if (!navigator.onLine) {
      e.respondWith(
        caches.match(e.request).then((resp) => {
          if (resp) {
            return resp;
          }
        })
      );
    }
  } else {
    if (!navigator.onLine) {
      //here you can check for specific urls to be saved in indexed db
      var reqUrl = e.request.url;
      Promise.resolve(e.request.text()).then((payload) => {
        //save offline requests to indexed db
        saveIntoIndexedDb(reqUrl, payload, requestMethod)
      })
    }
  }

});
