single page application, since not much resources are needed to load the entire experience

the 3001 change also required the mock server to be moved to 3002, but it's not used for anything.

Upgraded to React 17, so that I could utilize the later version of MatrialUI.

React Router - https://reactrouter.com/en/main/route/action
This is a way to handle routing, since this can some of the more complext code to write, I chose to use a library to help.
Allows for a clean way of organizing data dependencies for each page in the route definition.

Material UI 
This is to help with adding layout and consistent component styling

Additional Info Page
- the load of the data happens when the page is rendered to the DOM