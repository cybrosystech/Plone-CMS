
![item badge](https://badgen.net/pypi/license/pip)
![branch badge](https://badgen.net/badge/main/passing/green)
![release badge](https://badgen.net/badge/version/v1.0.0/blue) 
![item badge](https://badgen.net/badge/realease%20status/not%20in%20pypi/black) 
![branch badge](https://badgen.net/pypi/python/black)




# Theme Horizon Red

Theme Horizon Red is a Plone theme package that provides a modern look and feel to your Plone site with red color accents. The package is built on top of the Plone default theme and includes customizations that give your site a distinctive style.

# Features

- Red color accents
- Modern and stylish design

# Screenshot 

![Screenshot from 2023-05-05 15-38-40](https://user-images.githubusercontent.com/129945593/236762067-125adc3f-909c-4b6c-a87b-0111c0af3e7e.png)

## Installation

Download the current directory 

### Folder Structure 

```
cybro.usergroup.shift/
├── base.cfg
├── CHANGES.rst
├── CONTRIBUTORS.rst
├── DEVELOP.rst
├── dist
├── docs
├── LICENSE.GPL
├── LICENSE.rst
├── MANIFEST.in
├── README.rst
├── setup.cfg
├── setup.py
└── src

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
        cybro.horizon.red
[instance]
recipe = plone.recipe.zope2instance

eggs =
   cybro.horizon.red

user = admin:admin

[sources]
cybro.horizon.red = fs cybro.horizon.red path=src

```

after adding this to the buildout.cfg run ```./bin.buildout ``` and go to the addons section and install this 

 
![Screenshot from 2023-05-08 14-36-02](https://user-images.githubusercontent.com/129945593/236784174-3939a09a-55fc-4d0e-8aee-4e78aabe22d0.png)


The theme will be activated after the installation of this addon !

![Screenshot from 2023-05-08 14-38-42](https://user-images.githubusercontent.com/129945593/236784622-1c0dd5ec-cf51-4fce-87a3-db0fad97c1a4.png)





