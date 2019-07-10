/***************************************************************************
 Hey, I thought we agreed that we weren't going to dig into Service Workers 
 in this chapter, what gives?  OK, I'll explain the contents of this file 
 below, but you can also find more information in the following chapters 
 (where I cover Service Workers) or here: 
 https://developers.google.com/web/ilt/pwa/introduction-to-service-worker
***************************************************************************/

// Since this is a service worker for an app I'm using to just
// illustrate how to install it, I'm not going to do any app
// file caching (although most PWAs would).

self.addEventListener('install', e => {
    // fires when the browser installs the app
    // here we're just logging the event and the contents
    // of the object passed to the event. the purpose of this event
    // is to give the service worker a place to setup the local 
    // environment after the installation completes.
    console.log('Event: install');
    console.dir(e)
});

self.addEventListener('activate', event => {
    // fires after the service worker completes its installation. 
    // It's a place for the service worker to clean up from previous 
    // service worker versions
    console.log('Event: activate');
    // console.dir(event);
    console.table(event);
});

self.addEventListener('fetch', event => {
    // Fires whenever the app requests a resource (file or data)
    // normally this is where the service worker would check to see
    // if the requested resource is in the local cache before going
    // to the server to get it. There's a whole chapter in the book
    // covering different cache strategies, so I'm not going to say 
    // any more about this here
    console.log('Event: fetch');
    console.table(e);
    // console.dir(e);
    // Go get the requested resource from the network, nothing fancy
    // going on here.
    return fetch(event.request);
});