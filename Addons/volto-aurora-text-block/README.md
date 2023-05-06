
![item badge](https://badgen.net/pypi/license/pip) 
![release badge](https://badgen.net/badge/Release/v1.0.0/blue) 
![branch badge](https://badgen.net/badge/main/passing/green)


# Volto Aurora Text Block

This text block creates  a visually appealing aurora effect over a text and can be used as a header for a website or a landing page . 

# Features

- Visually appealing design that captures the viewer's attention
- Suitable for use as a header on a website or landing page
- Gradient background with aurora-like colors

# Demo 

![chrome-capture-2023-4-5](https://user-images.githubusercontent.com/129945593/236600573-73f87864-7b79-4663-990b-a267bcd47b25.gif)




## Installation

Create a new Volto project (you can skip this step if you already have one):



Add `@cybroplone/volto-aurora-text-block`to your package.json:

```
"addons": [
    "@cybroplone/volto-aurora-text-block"
],

```

Add the addon path to ```jsconfig.json``` 

```
{
    "compilerOptions": {
        "paths": {  
            "@cybroplone/volto-aurora-text-block":["addons/volto-aurora-text-block/src"]
        },
        "baseUrl": "src"
    }
}
```
Start Volto with:

```
yarn start
```

  Go to http://localhost:3000, login, create a new page. The aurora text block.oop. will show up in the Volto blocks chooser.



