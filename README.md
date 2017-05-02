# bluemixangular
bluemix and angular

Inspiration from blog post https://www.ibm.com/blogs/bluemix/2015/08/simple-angular-node-application/

Creating a simple AngularJS application

It is always better to begin with something simple. Hence, let’s create a small single page application called “MyFirstApp”.
Standard folder structure for your Angular application:

    Create an empty directory and name it “MyFirstApp”- This will hold all your project files.
    Create the below set of sub-folders inside the directory MyFirstApp:

    css – for holding stylesheets
    img – for holding images
    js – for holding angular scripts
    Create an empty HTML file, name it as index.html, place it inside the directory MyFirstApp
    Create an empty JavaScript file, name it as app.js, place it inside the directory MyFirstApp/js
    Create an empty cascaded style sheet, name it as main.css, place it inside the directory MyFirstApp/css .

Skeletal code to your simple Angular application:

main.css: This is our custom CSS file that will be used to segregate the styles from HTML definitions. I have added styles for the body, header, main, footer and for the app content:
1
2
	
.app{<br/>background: #fff;<br/>box-shadow: 0 2px 5px rgba(0,0,0,0.1);<br/>font-size: 18px;<br/>margin: 0 0 8px;<br/>padding: 20px 0;<br/>}
.main {<br/>margin: 40px 0;<br/>}

app.js: A module is primarily a container for your Angular application. In our app.js, we will be creating our first Angular module called ‘myApp’. This module will have no dependencies as we want to keep this example straightforward:
1
	
var app = angular.module("myApp", []);

myController.js: We will add a JavaScript Angular controller file called myController.js under the folder MyFirstApp/js/controllers. This will hold some data that will be loaded in initial state of the scope:
1
	
app.controller('myController',['$scope', function($scope){<br/>$scope.name= "My First Angular App";<br/>$scope.version = "v1.0.1";<br/>$scope.author = "Created by &lt;add your name&gt;";<br/>$scope.release ="Released on &lt;add a date&gt;";<br/>$scope.message ="This app is &lt;add your message&gt;";<br/>}]);<br/>

index.html: This is our primary HTML file and it is composed of a <head> and a <body> section.

Inside the <head> section, we add our reference pointer to CSS and any external JavaScript library. Specifically, we include a reference pointer to our custom style sheet main.css, the Bootstrap style sheet to make the look and feel device-friendly, and the AngularJS library:
1
	
&lt;head&gt;<br/>&lt;link href="css/main.css" rel="stylesheet" /&gt;<br/>&lt;link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.1/css/bootstrap.min.css"/&gt;<br/>&lt;script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.2/angular.min.js" /&gt;<br/>&lt;/head &gt;<br/>

In the <body> section, we will add Angular directive ng-app to the body tag in order to bind it with the app.js:
1
	
&lt;body ng-app="myApp"&gt;

We bind our AngularJs controller ‘myController’ directly to the HTML definitions:
1
	
&lt;div class="main" ng-controller="myController"&gt;

Finally, we bind the scope data to HTML via Angular expressions inside the <div class = “main”> as shown below:
1
	
&lt;div class="main" ng-controller="myController"&gt;<br/>&lt;div class="container"&gt;<br/>&lt;h1&gt;{{name}}&lt;/h1&gt;<br/>&lt;div class="app"&gt;<br/>&lt;span class="version"&gt;{{version}}&lt;/span&gt;<br/>&lt;span class="msg"&gt;{{message}}&lt;/span&gt;<br/>&lt;/div&gt;<br/>&lt;/div&gt;

Our basic Angular application is now ready.
Creating a simple Node Server

To hold the Node server runtime and dependency information, we will create a file called package.json. This file will be placed inside the directory ‘MyFirstApp’ and will be used by Cloud Foundry buildpack to bring up the Node server.
1
	
{<br/>"name": "myFirstApp",<br/>"version": "1.0.0",<br/>"author": "Shubhradeep Nandi",<br/>"description": "A project that gives you a clean starting point",<br/>"dependencies": {<br/>"connect": "^2.0.0",<br/>"serve-static": "^1.5.0"<br/>},<br/>"scripts": {<br/>"start": "node server.js"<br/>}<br/>}

We will use these 5 lines of code to create a node HTML server that is capable of getting the HOST and PORT details from VCAP environment variable. We will name the file server.js and place it inside the directory ‘MyFirstApp’.
1
	
var connect = require('connect');<br/>var serveStatic = require('serve-static');<br/>var port = (process.env.VCAP_APP_PORT || 3000);<br/>var host = (process.env.VCAP_APP_HOST || 'localhost');<br/>connect().use(serveStatic(__dirname)).listen(port,host);<br/>

Our Node server is now ready.
Deploying your code in Bluemix

You need to have a Bluemix account, if you do not have then please sign up at bluemix.net.

To deploy our Angular application in Bluemix, there are multiple ways. I prefer to deploy via Cloud Foundry command line interface hence outlining the same below:

    Start the Cloud Foundry command line interface. If it is not installed in your device then please install it.
    Navigate to the location where our project ‘myFirstApp’ resides in our local device via command line.
    Connect to Bluemix: cf API <urlregion US/UK> Not sure what a region is? See Bluemix Overview: Regions for details.
    Log in to Bluemix: cf login -u <your username> -o <your organization> -s <your space>
    Push our code to Bluemix via Cloud Foundry command line interface: cf push <your app name>

If our application has been successfully uploaded and started. Then we will get a message as below:

	
1 of 1 instances running<br/>App started

