Readme
======

Description
-----------
Angular2 component  
Data Cleansing / Quality component for use in webcentral migrations.  
Component should be integrated into existing AngularJS portal as a POC/trial for new Angular version.


Install
-------
prerequisite > 'node package manager'  
clone project to local dev environment.  
goto "DataCleansing" directory run the following commands.  
>*NOTE:  Keep in mind that we are using the apha version of AngularJS 2.  
If you are reading this you may wish to change to a later version and make any minor revisions.*

* `npm i angular2@2.0.0-alpha.46 --save --save-exact`  
* `npm i live-server --save-dev`

To start developing...   
 * start typescript transpiler:  `npm run tsc`      
 * start live-server to host the project site  `npm start`        


AppSettings
---------------

AppSettings.ts for all environment specific settings.  
open file `'src\app\components\datacleansing\AppSettings.ts'`  
alter method `serviceHost()` to return the host name of backend server  i.e. 'http://localhost:62734';
 

  
Release Notes
-------------
1) configure appsettings.ts as above

2) copy contents only of DataCleansing Project to \\bne3-0011sec\NRGMigration\v2  
>*NOTE:  once there is a good yeoman generator the build process will be automated but Angular2 is not even released yet!!!*  

3) n/a