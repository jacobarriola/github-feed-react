# Load Initial Data via AJAX
Demo: https://young-stream-95005.herokuapp.com/

This is a demo React app that loads data via AJAX (jQuery). The basis for most
of the fetching comes from https://facebook.github.io/react/tips/initial-ajax.html.

Basically, I'm trying to replicate a user's activity feed on GitHub, but mostly
this was an exercise to fetch an external API on initial load via React.

I made this demo as part of my learning process and hope that it will help someone
else along their path in learning React. There's still lots to do here since we
are basically just hitting an external endpoint and not really doing anything
dynamic in the UI.

## Credits
This was made with the `create-react-app` project. Read their docs to find out
how this is organized: https://github.com/facebookincubator/create-react-app.

I learned all of my React with Wes Bos' online React For Beginners tutorial.
https://reactforbeginners.com

## To Do
* Use `fetch()` API instead of jQuery - seems a bit much to load jQuery just for a
API call.
* Create a filter allow users to fetch certain types of data
* Create a form to make the username dynamic
