# Ice Cream Counter

This is an ice cream counter web application that allows users to track the number of ice creams consumed by each person. The app is built using HTML, CSS, JavaScript, and jQuery. It features a responsive design, leaderboard sorting, and animated components. This project was developed almost entirely with the assistance of OpenAI's ChatGPT-4.

![Ice Cream Counter](/screenshots/screenshot_1.png?raw=true)

## Features

- Add and remove people from the leaderboard
- Increment and decrement ice cream counts
- Sort the leaderboard by the number of ice creams consumed
- Display timestamps of ice cream consumption
- Clear all data with a single button click
- Animated "More info" text that expands and contracts a paragraph on click

## Installation

To run this application on your local machine, follow these steps:

1. Clone the repository to your computer:

```bash
git clone https://github.com/Chr1sCon/iskrem
```

2. Navigate to the project directory:

```bash
cd iskrem
```

3. Open the index.html file in your web browser.

## Usage

Enter a person's name in the input field and click "Add Person" to add them to the leaderboard.
Click the "+" and "-" buttons to increment and decrement ice cream counts for each person.
Click the "x" button to remove a person from the leaderboard.
Click the "Clear All Data" button to reset the leaderboard and timestamp data.
Click the "More info" text to expand and contract an additional paragraph with animation.

## Credits

This project was developed with the help of OpenAI's ChatGPT-4, which provided code snippets, guidance, and answers to questions throughout the development process.

## ChatGPT 4 Prompts

### Prompt 1

```
I am building an app for counting the number of ice creams people eat. The application should have the following features:

- Add a person.
- Display the contestants in a leaderboard as a table.
- The leaderboard should be sorted by ice cream count, with the highest count on top, highlighted by a larger font.
- Each row in the leaderboard should have three functions: Remove person, decrement ice cream (- button), increment ice cream (+ button)
- The score in the leaderboard should be given by the number of ice creams, represented by a repeating number of ice cream font awesome icons, followed by the score in parenthesis.
- There should be a column in the app that lists all the timestamps of the ice creams for each person
- The app should store and retrieve data in a local json file on the server.
- The app should use bootstrap as the ui framework and have a modern, dark mode design.
- Mobile support
- Add a header, title, and a footer
- There should be a button at the bottom "clear data" that clears all the data in the app.
- The app should run in a node server environment
- The app should use best practice file structure, and split functionality into smaller files as appropriate

Ask clarifying questions as we go, as needed.

First, give me a file tree of all the files needed for the app.
```

### Prompt 2

```
Give me the commands to initialize the app development and touch all the needed files
```

### Prompt 3

```
give me index.html
```

(and so on)

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
