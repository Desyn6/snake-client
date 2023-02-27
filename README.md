# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from [here](https://github.com/lighthouse-labs/snek-multiplayer). 

## Getting Started

- Follow steps inside the snek server repo to run the server side
- Run the development snake client using the `node play.js` command.
- (Optional) The default username is SNK, modify the USERNAME field in constants.js with your initials!

## Controls
- This version of Snake uses wasd for direction control.
- q/e/r are pre-programmed messages that you can customize in the constants.js file.
  - q: default message: "Hi!"
  - e: default message: "Bye!"
  - r: default message: "Gotcha!"
- Controls can be remapped by editing the values in constants.js