# Angular Metrics Dashboard Challenge

## next steps 
- break out table into its own module
- add more tests to confirm methods and ui

## ui issues
- the data for Source Metrics > Sales (LT) is too long and overlapping the next value. The best fix i can think of for this is to reduce the font size if the length of the value to too large. This however is outside the scope of this project

## noted data vs comp inconsistancies
- Different data for Observed metrics comp values (Total Sales, AOV, cLTV) vs data values (Total Orders, BaseLine Sales, Total Sales)
- Different table labels in the data the Incrementality headline has a percentage sign(%) where as in the comps it does not

## comments
- The readme requested that this work is done using Angular 13 but Angular is on version 16
- Summary headline is inconsistent with the other headlines
- I didn't have exact icons for the header dropdown element

## how to run
- follow the instructions to setup an Angular project https://angular.io/guide/setup-local
- clone or unzip the repo into the Angular workspace
- navigate into the new project directory
- install the dependencies `npm install`
- run the project fron the workspace `ng serve --open`