---
layout: page
title: FAQ
permalink: /faq/
---

## Sites

**If this is a book about Progressive Web Apps (PWAs) why isn't this site a PWA?**

This site is not a PWA because it doesn’t need to be a PWA. It’s just a marketing landing page for the book and there are no browser notifications I want to send to visitors nor is there a need to cache the site’s content for increased performance or offline use. Just because I can make the site into a PWA doesn’t mean that I should. Use the power of PWAs only for those sites that really need them.

**Why does the [PWA News](https://pwa-news.com) site list items for other topics?**

While PWA is a well known term to web developers, it's also an acronym used by other organizations. The server process that calls the Bing web search API to locate articles uses the following search string:

```JavaScript
const SEARCH_STRING = 'PWA | progressive web app';
```

This includes articles that contain progressive web app or PWA. As PWAs become more popular, I expected that authors would skip the longer form in their articles, so I wrote the search criteria like I did. I could restrict the output a little by doing this:

```JavaScript
const SEARCH_STRING = 'pwa AND progressive web app';
```

 or this:

 ```JavaScript
const SEARCH_STRING = 'progressive web app';
```

but both would omit articles that only referenced PWA.
