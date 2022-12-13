async function sendOfflineRequestsToServer() {
    var req = indexedDB.open("PlayerTrackingPostDB");
    req.onsuccess = function (event) {
        var db = event.target.result;
        var tx = db.transaction('postrequest', 'readwrite');
        var store = tx.objectStore('postrequest');
        var allRecords = store.getAll();
        allRecords.onsuccess = function () {
            if (allRecords.result && allRecords.result.length > 0) {

                var records = allRecords.result
                //make recursive call to hit fetch requests to server in a serial manner
                sendFetchRequestsToServer(
                    fetch(records[0].url, {
                        method: records[0].method,
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: records[0].payload
                    }), records[0].url, records[0].payload, records.slice(1))

                store.clear();
            }
        }
    }
    req.onupgradeneeded = function (event) {
        var db = event.target.result;
        db.onerror = function (event) {
            console.log("Why didn't you allow my web app to use IndexedDB?!");
        };
        db.createObjectStore('postrequest', {
            autoIncrement: true
        });
    }
}

async function sendFetchRequestsToServer(data, reqUrl, payload, records) {

    Promise.resolve(data).then((response) => {

        console.log('Successfully sent request to server')
        if (records.length !== 0) {

            sendFetchRequestsToServer(
                fetch(records[0].url, {
                    method: records[0].method,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: records[0].payload
                }), records[0].url, records[0].authHeader, records[0].payload, records.slice(1))
        }
        return true
    }).catch((e) => {
        //fetch fails only in case of network error. Fetch is successful in case of any response code
        console.log('Exception while sending post request to server' + e)
        saveIntoIndexedDb(reqUrl, payload)
    })
}


function saveIntoIndexedDb(url, payload) {
    var myRequest = {};
    let jsonPayload = payload !== "{}" ? JSON.parse(payload) : "";
    //add payload if required. If not skip parsing json and stringifying it again
    //jsonPayLoad['eventTime'] = getCurrentTimeString(eventTime)
    myRequest.url = url;
    myRequest.payload = JSON.stringify(jsonPayload);
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
        db.onerror = function (event) {
            console.log("Why didn't you allow my web app to use IndexedDB?!");
        };
        db.createObjectStore('postrequest', {
            autoIncrement: true
        });
    }
}

export default sendOfflineRequestsToServer;