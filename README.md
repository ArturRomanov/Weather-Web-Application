# Weather-Web-Application

This application uses Foreca Weather to search and retrieve weather forecast for a specific location and logs actions of users in the back-end.

To use the application write npm install to server and to client and then write npm run dev.

This application uses redux for states and, therefore, has the following structure: Actions, Components, Reducers, Models,
Routes.

To load a state to a component, actions retrieve data from Foreca Weather and dispatch data to reducers.

The main components are Main.js which has an input field to search for a location and which shows search results and Weather.js which shows current weather and forecast weather for a location.

This applications satisfies the following functional requirements:

"Front-end
1. Layout is responsive
2. Page has input field on top for location search
3. Search input has validation to allow only letters including space, up to 30
characters
4. Error message for invalid input field value appears in red bellow the input field
5. Search results are listed below up to 5 locations
6. Clicking on location in result list opens:
a. Current weather conditions for selected location
b. 7 days forecast
7. Going back preserves previous search results
Back-end
1. Created node.js application which logs user actions into console performed in UI for:
a. Keywords of searched locations
b. Current weather conditions with timestamp for selected location"

"Technical requirements:
1. Front-end: React
2. Back-end: Node.js
3. Styled components
4. Custom styling
5. Documentation
6. Placed source code in Github"

"Bonus:
1. Save user actions into MongoDB"