# Memory

This App represents a memory card game where players need to match pairs of cards with identical images. 

##  Components:
* MainMenu component serves as the main interface for users to interact with the game. It manages the game's status, user information, and game progression. Here's an overview of the key features and functionalities:
* StartGame Component: Displays the start game button and facilitates user interactions for creating a new user or selecting an existing user.
* PlayingGame Component: Manages the gameplay logic and updates the number of moves and matches found.
* GameResult Component: Renders the game result based on the outcome of the game, either "win" or "lose."

### <font color="#d5abed">[ MainMenu ]</font><br>
  
  * Game Status Management: Tracks the current status of the game, including "menu," "playing," "win," and "lose" states.
  * User Interaction: Allows users to start the game, create a new user, select an existing user, and view game results.
  * Game Progression: Monitors the number of moves made by the user, matches found, and displays relevant information during gameplay.
  * Modal Component: Utilizes a modal component to facilitate user interactions such as creating a new user or selecting an existing user.
  * Restart Game: Enables users to restart the game after completing a round or losing.
### <font color="#d5abed">[ PlayingGame ]</font><br>

* Data Fetching using React Query:

    It fetches data from the Cats API using the useQuery hook from React Query. The fetched data represents images of cats, which are used as content for the cards in the game.


* State Management:
    * <font color="#fcba03">[cards]</font>: This state holds the array of card objects fetched from the API. Each card object typically contains an ID and a URL to an image.
    * <font color="#fcba03">[shouldDisableAllCards]</font>: This state determines whether all cards should be disabled (i.e., not clickable). It's used to prevent interaction with cards during certain game states, such as when two cards are already flipped.
    * <font color="#fcba03">[clearedCards]</font>: This state keeps track of cards that have been successfully matched and cleared from the game board.
  * <font color="#fcba03">[openCards]</font>: This state holds the indices of the currently open (flipped) cards on the game board.


* Effect Hook:

    It sets up an effect that triggers whenever openCards state changes. This effect is responsible for evaluating whether the two flipped cards match and handling the game logic accordingly.


* Event Handlers:

  * <font color="#fcba03">handleCardClick</font>: This function handles the click event on a card. It manages the state of openCards and determines whether to disable further card clicks based on the number of open cards.
  

* Game Logic:

    * <font color="#fcba03">evaluate</font>: This function evaluates whether the two flipped cards match. If they match, it marks them as cleared and updates the clearedCards state. If they don't match, it flips the cards back after a short delay (FLIP_BACK_TIME).

  
* Rendering:

In App we are rendering the GamingTable component, which likely represents the game board/grid.
Inside the GamingTable, it maps over the cards array and renders a Card component for each card object fetched from the API.
Each Card component receives props such as card, isDisabled, isInactive, isFlipped, and onClick, which determine its appearance and behavior based on the game state and user interaction.
Overall, this component manages the game state, handles user interactions, and renders the game board and cards based on the fetched data. It orchestrates the logic of the memory card game.
