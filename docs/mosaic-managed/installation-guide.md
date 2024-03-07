---
title: "Installation Guide"
---
## Prerequisite: Installing SQL Server

> 📘 Note
> 
> If you already have an existing SQL Server installed & configured, you may utilise this instead. The below is a simple SQL Server Express installation for simple/standalone installations of Mandate Express

1. Based on your system specifications download the appropriate SQL server Express from the Microsoft website. You should check if your system is 32Bit or 64Bit and download the correct installer.

[Download SQL Server Express](https://www.microsoft.com/en-gb/sql-server/sql-server-downloads)

2. Once downloaded, run the installer, accept terms and conditions and click next until you get to the registration information screen.
3. Un-tick Hide advanced configuration options and click next until the named instance screen.
4. Change the named instance to “Mosaic” and click next until the authentication Mode screen.
5. Click Mixed Mode enter a passcode of your choice and hit next until installed.
6. Once installed Click finish.

## Installing Mandate Express

1. Download the Installer

Navigate to <https://mosaicsoftware.co.uk/downloads/MandateExpress/2.3.28.zip> to download the latest Mandate Express installer. _You can ignore the old version number. Mandate Express will automatically update post-launch._

2. Extract the installer from the ZIP file downloaded
3. Run `setup.exe` which has been extracted

## Configuring Mandate Express

1. Open Mandate and add a working directory. For single user Mandate the preselected option is recommended. Enter a description. 
2. If the database has been installed on the local machine in the server box type in “(local)\\Mosaic” and the Database is “MandateExpress” and for the SQL Authentication the Username is “sa” and the password is the one you selected earlier in the SQL Server set up. Once you have entered your information press Create Database followed by Test Connection then hit OK. Close all dialog boxes. Open Mandate and when prompted enter the default username and password which is “master” and “system”. 
3. Enter your Licence Key and other information then press save. Mandate should now open. 
4. Go to Admin menu then SUN and add record. Fill in your service user number and user name and select the appropriate transaction types. Click save and add profiles containing appropriate information. Once filled in close all dialog boxes until you get to the home screen. 
5. Go to the Admin menu, setup, register capicom ddl’, register all.
