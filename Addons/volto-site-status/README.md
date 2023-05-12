
![item badge](https://badgen.net/pypi/license/pip)
![branch badge](https://badgen.net/badge/main/passing/green)
![release badge](https://badgen.net/badge/version/v1.0.0/blue) 




# Volto Site Status Banner

A site status banner is a UI component that displays a message or notification at the top of a website or web application. This banner typically has a distinctive color or icon to indicate the urgency or severity of the message, and can be used to display various types of information, such as system alerts, maintenance notifications, or user feedback.

The site status banner can be displayed in different modes, such as success, warning, and error, depending on the type of message that needs to be conveyed. For example, a success message may be used to indicate that a user's action was completed successfully, while an error message may be used to alert the user to an issue that needs to be addressed.

The site status banner is a useful tool for keeping users informed and engaged with the website or web application. It can help to improve the user experience by providing timely and relevant information, and can help to reduce confusion or frustration by providing clear and concise messaging. Additionally, the site status banner can be customized to match the branding and style of the website or web application, making it a seamless part of the overall user interface.

# Features

- Alert visitors to important information
- Provide updates on service status
- Reduce customer support inquiries
- Improve the user experience

## Warning mode

![Screenshot from 2023-05-12 10-13-58](https://github.com/cybrosystech/Plone-CMS/assets/129945593/70b892c9-a820-40c3-bab7-66dd3a013415)


## Error mode

![Screenshot from 2023-05-12 10-16-14](https://github.com/cybrosystech/Plone-CMS/assets/129945593/3e2bd0da-4430-4e5c-a5f7-3503db3d4c9a)

## Success mode

![Screenshot from 2023-05-12 10-19-29](https://github.com/cybrosystech/Plone-CMS/assets/129945593/96a893d4-d9e5-48fa-9819-9667a606c278)


# Reusablity

The source of this app is well documented that it can customised according to the user's preference , and can also use this to learn the restapi and and data fetching from redux.

## Installation

Has a dependant backend app [cybroplone.sitestatus](https://www.example.com/my%20great%20page)


Create a new Volto project (you can skip this step if you already have one):



Add `@cybroplone/volto-site-status` to your package.json:

```
"addons": [
    "@cybroplone/volto-site-status"
],

```

Add the addon path to ```jsconfig.json``` 

```
{
    "compilerOptions": {
        "paths": {  
            "@cybroplone/volto-site-status":["addons/volto-site-status/src"]
        },
        "baseUrl": "src"
    }
}
```
Start Volto with:

```
yarn start
```

  Go to http://localhost:3000, and navigate settings

  ![Screenshot from 2023-05-12 10-31-38](https://github.com/cybrosystech/Plone-CMS/assets/129945593/0aa5d7ae-c6d8-4c3c-b27f-a4a660a760c3)

Click on the ```Site Status Configuration```
and from there we can set the settings,

![Screenshot from 2023-05-12 10-34-07](https://github.com/cybrosystech/Plone-CMS/assets/129945593/fdd3940b-3355-4689-80e8-31f4d636d2d9)


# License
Sitestatus is licensed under the MIT License.


