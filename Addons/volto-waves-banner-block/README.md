
![item badge](https://badgen.net/pypi/license/pip) 
![release badge](https://badgen.net/badge/Release/v1.0.0/blue) 
![branch badge](https://badgen.net/badge/main/passing/green)


# Volto Waves Text Block

This is a banner block component for the Volto that displays a header and subtitle over a parallax wave effect background.
# Features

- Customizable header and subtitle text
- Customizable height for the header section
- Parallax wave effect background

# Demo 

![chrome-capture-2023-4-12](https://github.com/cybrosystech/Plone-CMS/assets/129945593/10fa8b76-fefe-49ff-8f20-7c217c481364)


## Customization

The component includes a CSS file (styles.css) for customizing the appearance of the banner block. You can modify this file to change the font, colors, and animation properties of the banner.


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
            "@cybroplone/volto-waves-banner-block":["addons/volto-waves-banner-block/src"]
        },
        "baseUrl": "src"
    }
}
```
Start Volto with:

```
yarn start
```

  Go to http://localhost:3000, login, create a new page. The waves text block.oop. will show up in the Volto blocks chooser.


## Credits

This component is based on the CSS wave animation by Csspoints on CodePen.


## License

This package is licensed under the MIT License.




