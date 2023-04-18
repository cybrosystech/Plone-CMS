
![item badge](https://badgen.net/pypi/license/pip) 
![release badge](https://badgen.net/badge/Release/v1.0.0/blue) 
![branch badge](https://badgen.net/badge/main/passing/green)


# volto-customizable-link-button

The Volto Customizable Link Button is a powerful add-on for the Volto CMS that allows users to create  customizable button that can be used to redirect to specific content. With this add-on, you can easily create button that match the look and feel of your website and draw attention to important links.

# Features

Easily create buttons that redirect to specific content
Customize the look and feel of your buttons from the Volto sidebar
Choose from a variety of pre-set colors and create your own custom style

# Screenshots

## Block View

![Screenshot from 2023-04-12 16-36-33](https://user-images.githubusercontent.com/129945593/231439822-f01f4235-88b0-4994-a191-f4f4e63bf9d0.png)

## Sidebar

![Screenshot from 2023-04-12 16-36-51](https://user-images.githubusercontent.com/129945593/231440057-6356e044-a253-43f0-b4da-d3234e84b1b0.png)

## Color Palette

![git gif](https://user-images.githubusercontent.com/129945593/231533530-9c67f9d9-c56b-4a77-88bf-eff11056e407.gif)


## Installation

Create a new Volto project (you can skip this step if you already have one):

```
npm install -g yo @plone/generator-volto
yo @plone/volto my-volto-project --addon @cybroplone/customizable-link-button
cd my-volto-project
```

Add `@cybroplone/customizable-link-button`to your package.json:

```
"addons": [
    "@cybroplone/customizable-link-button"
],

"dependencies": {
    "@cybroplone/customizable-link-button": "*"
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

  Go to http://localhost:3000, login, create a new page. The customizable button block will show up in the Volto blocks chooser.





