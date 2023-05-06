
![item badge](https://badgen.net/pypi/license/pip) 
![release badge](https://badgen.net/badge/Release/v1.0.0/blue) 
![branch badge](https://badgen.net/badge/main/passing/green)


# Volto Circle Countdown Block

The "Circle Countdown Block" is a Volto add-on block that provides a circular countdown display. This block can be added to any Volto-based website or application to display a real-time countdown timer in a visually appealing circular format. Users can configure the timer to countdown to a specific date and time, and can also customize the colors and size of the countdown display to fit their specific design needs. This block is easy to install and use, and can add a valuable interactive element to any Volto-based project.
# Features

- Customizable design: Users can customize the size and color of the countdown display to fit their specific design needs.Customize the look and feel of your buttons from the Volto sidebar.
- Choose from a variety of pre-set colors and create your own custom style.
- Users can configure the timer to countdown to a specific date and time, making it useful for various scenarios such as product launches, events, and promotions.

# Screenshots

## Block View
![chrome-capture-2023-3-17](https://user-images.githubusercontent.com/129945593/232465258-90997808-6286-4074-b554-94bd57b9426c.gif)


## Sidebar

![Screenshot from 2023-04-17 16-28-55](https://user-images.githubusercontent.com/129945593/232465482-ced7c7d8-87aa-45af-8c73-ef89b4afca11.png)

## Installation

Create a new Volto project (you can skip this step if you already have one):

```
npm install -g yo @plone/generator-volto
yo @plone/volto my-volto-project --addon @cybroplone/circle-countdown-block
cd my-volto-project
```

Add `@cybroplone/circle-countdown-block`to your package.json:

```
"addons": [
    "@cybroplone/circle-countdown-block"
],

"dependencies": {
    "@cybroplone/circle-countdown-block": "*"
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

  Go to http://localhost:3000, login, create a new page. The countdown block will show up in the Volto blocks chooser.



