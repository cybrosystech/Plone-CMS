
![item badge](https://badgen.net/pypi/license/pip) 
![release badge](https://badgen.net/badge/Release/v1.0.0/blue) 
![branch badge](https://badgen.net/badge/main/passing/green)
 
# Plone-6.0.4-Unified-Installer


* Version: 6.0.4


# How to use the installer 


To install Plone 6.0.4 Follow the below instructions

**Step 1: Download the installer**


```
wget https://github.com/cybrosystech/Plone-CMS/raw/main/Plone-6.0.4-Unified-Installer/Plone-6.0.4-Unified-Installer
```


**Step 2: Add execute permissions to the installer**



```
chmod +x Plone-6.0.4-Unified-Installer
```


**Step 3: Open the Installer**


![image2](https://github.com/cybrosystech/Plone-CMS/assets/129945593/1ab04fd5-b4ba-4271-9e93-939fe79ce514)


**Step 4: Set the Installation directory in which Plone is to be installed**

![image3](https://user-images.githubusercontent.com/129945593/230540699-f05c351e-bec7-42e8-8b9c-bf31f98c15d8.png)



    				

**Step 5: Enter the System user password to execute commands with administrative privileges**

![image4](https://user-images.githubusercontent.com/129945593/230540973-7227c801-7940-429d-8585-227286ddc621.png)


**Step 6: Enter the administrative password for your Plone instance**

![image5](https://user-images.githubusercontent.com/129945593/230541132-0f93863b-141f-453f-b8c5-2c6f21119480.png)


**Step 7: The installation process will take from 10 to 25 minutes**

![Screenshot from 2023-05-18 16-01-52](https://github.com/cybrosystech/Plone-CMS/assets/129945593/b33e1bd7-ea5b-4c11-90e7-4c4c35fc3eda)



**The installation is completed**

![Screenshot from 2023-05-18 16-04-35](https://github.com/cybrosystech/Plone-CMS/assets/129945593/b3481da5-43b0-4e07-b2a9-01c9f9e5ac5c)



**Step 8: Open the terminal in which the Plone instance is created**

The Plone instance will be up and running at http://localhost:8080/


```
./bin/buildout
./bin/instance start
```


![final](https://user-images.githubusercontent.com/129945593/230541495-9ffde634-8a5c-419b-b9c4-96baf3c82003.png)

