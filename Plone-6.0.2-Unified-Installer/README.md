
![item badge](https://badgen.net/pypi/license/pip) 
![release badge](https://badgen.net/badge/Release/v1.0.0/blue) 
![branch badge](https://badgen.net/badge/main/passing/green)
 
# Plone-6.0.2-Unified-Installer


* Version: 6.0.2
* Release date: Monday, February 27, 2023
* Check the [release schedule](https://plone.org/download/release-schedule).
* Read the [upgrade guide](https://6.docs.plone.org/upgrade/index.html), explaining the biggest changes compared to 5.2.


# How to use the installer 


To install Plone 6.0.2 Follow the below instructions

**Step 1: Download the installer**


```
wget https://github.com/cybrosystech/Plone-CMS/raw/main/Plone-6.0.2-Unified-Installer/Plone-6.0.2-Unified-Installer
```


**Step 2: Add execute permissions to the installer**


```
chmod +x Plone-6.0.2-Unified-Installer
```


**Step 3: Open the Installer**

![image](https://user-images.githubusercontent.com/129945593/230540073-f4fd6bee-1484-4914-807f-f936fbe14c59.png)

![image2](https://user-images.githubusercontent.com/129945593/230540443-62e20bbd-ccb1-4baf-ae6a-969d79716db9.png)


**Step 4: Set the Installation directory in which Plone is to be installed**

![image3](https://user-images.githubusercontent.com/129945593/230540699-f05c351e-bec7-42e8-8b9c-bf31f98c15d8.png)



    				

**Step 5: Enter the System user password to execute commands with administrative privileges**

![image4](https://user-images.githubusercontent.com/129945593/230540973-7227c801-7940-429d-8585-227286ddc621.png)


**Step 6: Enter the administrative password for your Plone instance**

![image5](https://user-images.githubusercontent.com/129945593/230541132-0f93863b-141f-453f-b8c5-2c6f21119480.png)


**Step 7: The installation process will take from 10 to 25 minutes**

![image6](https://user-images.githubusercontent.com/129945593/230541247-7dc8f4c0-0791-4a2c-9535-9826ae36eeb3.png)


**The installation is completed**

![image7](https://user-images.githubusercontent.com/129945593/230541407-8601711d-703c-44dd-a507-aee81b66dde3.png)


**Step 8: Open the terminal in which the Plone instance is created**

The Plone instance will be up and running at http://localhost:8080/


```
./bin/buildout
./bin/instance start
```


![final](https://user-images.githubusercontent.com/129945593/230541495-9ffde634-8a5c-419b-b9c4-96baf3c82003.png)

