---
layout: page
title: Errata
permalink: /errata/
---

Surprisingly, I've yet to find an actual issue I caused in the content in the book; instead, all of the errata items listed here affect readers because they change the way external tools work invalidating content in the book.

## Chapter 2

In the section of this chapter entitled **Making a Web App Installable**, I mentioned that one of the criteria for Chrome to recognize a PWA as installable was that the PWA "has registered a service worker with a fetch event handler". At the time I wrote that, the service worker simply had to listen for the `fetch` event to meet the criteria, but in the 2020 Chrome Developer Conference Google presented a session called [New logic to detect PWA offline support](https://developer.chrome.com/devsummit/sessions/new-logic-to-detect-pwa-offline-support/) where they outlined some changes to how Chrome detects installable PWAs. They apparently removed the recording at that link, so now you can find the details at [Improving Progressive Web App offline support detection](https://developer.chrome.com/blogimproved-pwa-offline-detection/).

In the session, Asami Doi described how the browser will soon start validating more than just the existence of the event handler. Apparently Chrome will create a private sandbox, turn off the network connection in the sandbox, then run the PWA there looking to see if the service worker returns an HTTP 200 response code for a random page request (indicating that the service worker properly handles offline scenarios). This means that if you're working through the examples in Chapter 2 and Chrome doesn't try to make your PWA installable, then you're going to have to implement a more robust service worker. You'll need to implement something like what I show in Chapter 4 in the **Adding an Offline Page** section ([sw-44.js](https://github.com/johnwargo/learning-pwa-code/blob/master/chapter-04/public/service-workers/sw-44.js)) to handle the offline scenario.

I'll create an alternate version of the Chapter 2 sample code that implements this in the `tip-calculator-end (alternate)` folder in the [chapter's code repository](https://github.com/johnwargo/learning-pwa-code/tree/master/chapter-02).  Give me some time to get that updated (please).

## Updated Server Code for Chapters 3 through 5

The sample applications used in chapters 3 through 5 use a server application that leverages the Bing News Search API. On October 29, 2020, Microsoft announced that "Bing Search APIs will transition from Azure Cognitive Services to Azure Marketplace on 31 October 2023."  In the announcement, they said:

> "The existing instances of the following Bing Search APIs under Azure Cognitive Services will no longer be supported after 31 October 2023. You can continue to create new instances of Bing Search APIs under the Azure Marketplace."

Existing Bing Search API keys will continue to work until the 2023 deadline, but Microsoft removed the ability to create new API keys for the service I used in the book and server code. This means that the content and server source code used in Chapter 3 is no longer valid for new readers. Existing readers who already created their Bing Search API keys to use with the book's code can continue to do so, and all of the existing code in other folders in the repository will continue to operate as expected (until October 31, 2023). After that date, readers must switch to the new API and updated server code.

To make it easier for readers, I added a folder to the book's source code repository called `updated-server` ([link to folder](https://github.com/johnwargo/learning-pwa-code/tree/master/updated-server)); this folder contains the updated server source code that uses the **New Bing Search API Keys**. The folder's readme file contains complete instructions for how to use the updated code plus describes when you must switch to this updated code. Give the document a read and let me know (through issues created in the repo) if I need to make any fixes to the code or documentation.

## Chapter 3

In Chapter 3, where the book tells readers to create a new API key using the following link: [https://portal.azure.com/#create/Microsoft.CognitiveServicesBingSearch-v7](https://portal.azure.com/#create/Microsoft.CognitiveServicesBingSearch-v7); that no longer works (due to the Bing Search API changes described earlier on this page). Readers must use the following link instead: [https://portal.azure.com/#create/Microsoft.BingSearch](https://portal.azure.com/#create/Microsoft.BingSearch).

## Chapter 8

On page 191, I reference a simplified version of the tip calculator app I have hosted at [Netlify](https://netlify.com). In the book, I list the app URL as https://tip-calc-test.netlify.com/, but after the book went to press, Netlify announced that any hosted app that doesn't have a custom domain associated with it will use netlify.app. Going forward, the URL for the test app is [https://tip-calc-test.netlify.app/](https://tip-calc-test.netlify.app/).

## Everywhere

With the recent popularity or replacing a GitHub Repository's `master` branch with `main`, I made the change to the book's source code repository. With this change in place, many of the URLs in the book have changed. For example, any reference to the book's online Chapter 1 code will look like this in the book:

https://github.com/johnwargo/learning-pwa-code/tree/master/chapter-01

but, because of the recent change, it now looks like this:

https://github.com/johnwargo/learning-pwa-code/tree/main/chapter-01

This shouldn't be a big issue because I'm pretty sure the book only references a local clone of the repo, but I wanted to make sure I explained the changes here.
