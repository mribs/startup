
## Roomate Grocery List

At least once in every roommate's life they'll notice that they have a lot of the same groceries. This app gives you and your roomates a place to make a collaborative list. You (and anyone you invite) can work on it throughout the week, then when you finish you can use it to show how to evenly divide the cost of your groceries.

![Startup Design](https://user-images.githubusercontent.com/98202044/215239985-548c9cbc-6ab9-4690-869d-e2bad07b4033.jpeg)

### Key Features

-Login to view your lists

-Invite friends to collaborate

-Create and divide an estimated cost

-Divide the actual cost

-Work on your lists throughout the week



### Other Stuff

Pressing the escape key works wonders when  you accidentally get somewhere you don't want to be *thumbs up*

Don't forget to make your .sh files executable, it really messed up the first simon thingy.

Closing the things in HTML is important, otherwise entire paragraphs are links (whoops).

In the event that you lose your .pem file you do in fact have to start a new instance. 

Important for centering things: justify-content: space-around;

In order to get the styling I want, I end up using a mix of regular CSS and Bootstrap.

Also there are several ways to do CSS, the two main being internal (in the HTML) and external (a .css file)

As a whole, JS is pretty easy to incorporate. That being said, DON'T FORGET TO LINK THE JS FILE TO IT'S RESPECTIVE HTML FILE. That caused me a lot of grief with simon.

node.js has many very useful additions (npm install)

Mongodb is being used to persistently store data. Along with that: hide your credentials in envoronment variables

Typically login (username & passwords) are done with cookies

npm is being a pain in my neck

WebSocket can only technically go between two people, if doing a group then everybody connects to websocket and then it will like send it out individually (at least that was what I understood)

React is really powerful. A lot of use can be found *navigation aspects anybody? But like, lowkey you will have to adjust a lot of like foundational work.

When in doubt, staring at it doesn't do much, but other people can be very helpful.

Websockets allows peer to peer communication

json is basically how JavaScript stores Objects, and mondoDB will store jsons documents in collections.





### Notes from review
Dns record to another record use CNAME (alias) (‘A’ record for IP address)

—know some json syntax— i.e. double quotes, null (!never undefined!)

“Pals before marriage” (ie. Content => padding, border =>margins

Reduce takes an array and reduces it to a single value

\<li\> list item (something in the list)
  
\<ul\> unordered list


### Final Review Notes
Cookie: Allows a server to store data on the client (the client stores it)
Standard HTTP headers include: Host, content-type, cookie (NOT language) **this is not the url
Fetch can be used in front-end and back-end code
JSX purposes include:  inject HTML into JavaScript, componentize your HTML, and allow for composability of HTML (NOT combine CSS, HTML, and JS… i.e. does not touch CSS at all)

Fetch request:
const r = await fetch(‘/fav/ringo’, {
method: ‘DELETE’
});  
Express middleware that matches: (will cause unending loading, but it will match)
app.delete(/fav\/(.*)/, () => }{)


Linux daemon: Starts when computer is rebooted, executes independent of a user, PM2 is an example of a daemon
Hashing stored passwords is important because it improves security by making the password unreadable
NavLink and Route path are pretty much exactly what you think.
WebSocket is peer to peer instead of client to server 
Port 80 is reserved for HTTP, HTTPS is 443

MongoDB query
{ $or: [{name: /J.*/}, {score: {$lt:3}}]}
If either that or that matches
Something about a J (case sensitive)
Less than 3 (lte means less than or equal)
{name: walker, score: -55} matches

HTTP status code in  300 range are for redirecting
400 client error
500 server error
200 success
100 informational

NPM install ws: adds a dependency to your package.json file, adds the websocket source code to the node_modules directory, locks the version of the websocket package for your application. (it does NOT add template code for websockets to your JavaScript (obviously, that would mean it’s writing code for you))

