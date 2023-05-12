
![item badge](https://badgen.net/pypi/license/pip)
![branch badge](https://badgen.net/badge/main/passing/green)
![release badge](https://badgen.net/badge/version/v1.0.0/blue) 
![item badge](https://badgen.net/badge/realease%20status/not%20in%20pypi/black) 
![branch badge](https://badgen.net/pypi/python/black)


```This will only work with it's Volto dependant module``` : [volto-site-status](https://github.com/cybrosystech/Plone-CMS/tree/main/Addons/volto-site-status)

# Site Status

A site status banner is a UI component that displays a message or notification at the top of a website or web application. This banner typically has a distinctive color or icon to indicate the urgency or severity of the message, and can be used to display various types of information, such as system alerts, maintenance notifications, or user feedback.


# Features

- Alert visitors to important information
- Provide updates on service status
- Reduce customer support inquiries
- Improve the user experience



## Installation

Download the current directory 

### Folder Structure 

```
cybroplone.sitestatus
├── CHANGES.rst
├── constraints.txt
├── CONTRIBUTORS.rst
├── docs
├── LICENSE.rst
├── MANIFEST.in
├── README.rst
├── requirements.txt
├── setup.py
├── src
└── tox.ini


```
Place this in the ```src``` folder of your Plone directory 


### Buildout.cfg

```
[buildout]
extends = https://dist.plone.org/release/6.0.4/versions.cfg
parts = instance

extensions =
        mr.developer

auto-checkout +=
        cybroplone.sitestatus
[instance]
recipe = plone.recipe.zope2instance

eggs =
   cybroplone.sitestatus

user = admin:admin

[sources]
cybroplone.sitestatus = fs cybroplone.sitestatus path=src

```

After adding this to the buildout.cfg run ```./bin.buildout ``` and go to the addons section and install this addons


![Screenshot from 2023-05-12 11-05-43](https://github.com/cybrosystech/Plone-CMS/assets/129945593/91c0552f-fac5-4415-a0f0-dadd3af1c6c4)





