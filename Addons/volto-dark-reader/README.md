


![release badge](https://badgen.net/badge/release/v1.0.0/blue) 
![branch badge](https://badgen.net/badge/main/passing/green)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


# Volto Dark Reader
Volto Dark Reader is a Volto add-on that enables users to switch the Volto application from light mode to dark mode. It uses the React Dark Reader package to provide the dark mode functionality, and also includes React Icons for displaying the dark mode toggle icon.

## Features
 
- Enables users to switch the Volto application from light mode to dark mode.
- Uses the React Dark Reader package to provide the dark mode functionality.
- Includes React Icons for displaying the dark mode toggle icon.
- Adds a button in the header of the Volto site to toggle between dark mode and light mode.
- Provides a better viewing experience in low-light environments or at night.
- Helps to reduce eye strain and fatigue caused by prolonged screen time.
- Easy to install and integrate into Volto projects.


# Usage
This Addon adds a button in the header of volto site which help to toggle between Dark mode and Light mode 


# Dependencies
Volto Dark Reader has two dependencies:
-  Dark Reader (version 1.5.5)
-  React Icons (version 4.8.0)

# Screenshot

![dark-reader (1)](https://user-images.githubusercontent.com/129945593/232989200-2d79eb4b-f2a9-4d9c-833b-610eb2b3a505.gif)

## Installation

Create a new Volto project (you can skip this step if you already have one):

```
npm install -g yo @plone/generator-volto
yo @plone/volto my-volto-project --addon @cybroplone/volto-dark-reader
cd my-volto-project
```

Add `@cybroplone/volto-dark-reader`to your package.json:

```
"addons": [
    "@cybroplone/volto-dark-reader"
],

"dependencies": {
    "@cybroplone/volto-dark-reader": "*"
}
```

Download and install the new add-on by running:

```
yarn install
```

Start Volto with:

```
yarn start
```

  Go to http://localhost:3000, The Dark mode button will be available .
  
  ![Screenshot from 2023-04-19 12-47-47](https://user-images.githubusercontent.com/129945593/232997969-b682b4eb-cea0-4242-adb0-4da9a649eff4.png)


