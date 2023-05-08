
![item badge](https://badgen.net/pypi/license/pip)
![branch badge](https://badgen.net/badge/main/passing/green)
![release badge](https://badgen.net/badge/version/v1.0.0/blue) 
![item badge](https://badgen.net/badge/realease%20status/not%20in%20pypi/black) 
![branch badge](https://badgen.net/pypi/python/black)




# User Group Shift

User Group Shift is a Plone add-on that allows administrators to easily add or remove multiple users from a group in Plone. With this add-on, administrators can make bulk changes to user groups, making it easier to manage permissions and access control in their Plone site.

# Features

- Add or remove multiple users from a group at once
- Supports both local and LDAP groups
- User-friendly interface for selecting users to add or remove

# Screenshot 




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
        cybro.usergroup.shift
[instance]
recipe = plone.recipe.zope2instance

eggs =
   cybro.usergroup.shift

user = admin:admin

[sources]
cybro.usergroup.shift = fs cybro.usergroup.shift path=src

```

After adding this to the buildout.cfg run ```./bin.buildout ``` and go to the addons section and install this 

 
![Screenshot from 2023-05-08 16-58-42](https://user-images.githubusercontent.com/129945593/236812624-d6e48204-5094-4e04-ae4a-2a4c63658ee0.png)

after the installation we can see the new option in control panel

![users_configlet](https://user-images.githubusercontent.com/129945593/236812805-7b772da8-685f-4819-b079-e28726db1333.png)


![Screenshot from 2023-05-08 15-42-37](https://user-images.githubusercontent.com/129945593/236812348-f633090e-c8c8-4487-87a9-e531a27d6c05.png)

From here we can change the multiple users group.





