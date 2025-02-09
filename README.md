# HackHers2025-Riddle-App
Riddle game designed with the following rules:
1. Every player starts with World 1, Level 1
2. A riddle is displayed. If the player gets the answer correct, A success message pops up and the player can choose to either go to the main menu or the next level. If the player gets the answer wrong, they have to retry or are redirected to the main menu
3. Players are given 1 hint to help solve the riddle
4. The game currently has 4 worlds, with each world having 4 levels
5. Players cannot move to the next level without finishing the previous one
6. Players cannot move to the next world without finishing the previous world
7. Once the player reaches World 4, Level 4, a success display message pops up and redirects the player to the map, where it shows all 4 worlds being completed. 

**WEB APP DESCRIPTION**
LANGUAGES USED
HTML, CSS used for the front end 
Javascript for the backend 

**MOBILE APP DESCRIPTION**
DEPENDENCIES AND LIBRARIES USED
1. Node.js (Command to install: brew install node)
2. Node Package Manager (Command to install: npm install)
3. React Native CLI used for Native React (Command to install: npm install -g react-native-cli)
4. CocoaPods: Used for IOS App Development (installed using homebrew)
5. Watchman: Used for additional app testing, specifically to reload the app every time a change was made to any of the files (Command to run: npx react-native start)
6. Xcode and IOS Simulator: used to build the app (Command to run: npx react-native run-ios)
7. React Native Dependencies used to maximize app functionality

TO RUN THE CODE: 
1. Open terminal and enter the following commands:
  cd /Users/ar/Documents/Projects/Hackhers25 (this was my project path)
  npx react-native start
2. Open another terminal and enter the following commands:
  cd /Users/ar/Documents/Projects/Hackhers25 (this was my project path)
  npx react-native run-ios

File Descriptions:
1. App.js is used to integrate the Home Page, Levels, and Map together
2. Map.js displays the map with the different worlds
3. Level.js are the individual levels from the game
4. Home.js is the home page, and what the user sees when the app is opened
