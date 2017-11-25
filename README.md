
# CS 487 - Team Project (Fall 2017)
 Team B - Robert Judka, Mayank Bansal, Changyu Wu, Paul Myers

## mySchedule
**Class Scheduling Made Easy!**

The basic functionality of the application will allow students to plan out and create a class schedule given a list of classes they want to take. To create their class list, students will be able to query IIT’s available classes and select the ones they want to take. The application will be able to resolve any time-conflicts that may arise with the student’s classes, and if multiple schedule options   are   possible,   the   application   will   present   them   all   to   the   student.

### Prerequisites
This guide assumes you're running a linux or compatible machine. You will need nde package manager and  bower for this project, and have access to the root apache directory for being able to rewrite URL requests. Documentation for other webservers will be added in the future.

Install node on a linux machine by pasting this in your terminal
```
$ sudo apt-get update
$ sudo apt-get install nodejs
$ sudo apt-get install npm
```

Use this link for other modes of installation - [DigitalOcean - Installing npm](https://goo.gl/XYVE6q)

After installing npm, install bower by entering the following command
```
$ npm install -g bower
```

### Installation + Setup
To start setting up the dependencies, run
```
$ sudo bower install --allow-root
```

### Deployment
We need to make a .htaccess file with the following rewrite rule for pretty links and Google crawler friendly links. Copy the following code into your .htaccess file. If you can't find it, you may make one and put it in the root directory of your webserver.
```
RewriteEngine On
  # If an existing asset or directory is requested go to it as it is
  RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR]
  RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d
  RewriteRule ^ - [L]

  # If the requested resource doesn't exist, use index.html
  RewriteRule ^ cs487teamb/index.html
```
Replace `cs487teamb` with the base directory if you cloned this repository directly into your `htdocs`.

You will want to change the `<base href='/'>` link in the `index.html` page if you are installing in another location.

### Notes
* If the javascript isn't loading, then rename the js folder and refactor on the index.html page.

### Authors
* **Robert Judka** - rjudka@hawk.iit.edu
* **Mayank Bansal** - mbansal5@hawk.iit.edu
* **Changyu Wu** - cwu49@hawk.iit.edu
* **Paul Myers** - pmyers@hawk.iit.edu