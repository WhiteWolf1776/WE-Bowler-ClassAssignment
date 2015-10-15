/**
 * Created by nbliz0 on 10/15/2015.
 */

function DataService(){
    this.lookupMultiplier = function(){
        return 5;
    }
}

function FooWithDataDependency(dataService) {
    this.calculateValueUsingLookup = function(someInt){
        return someInt * dataService.lookupMultiplier();
    }
}

function EmailService(){
    this.send = function(someString){
        return someString;
    }
}

function Bar(emailService){
    this.doSomethingThatSendsEmail = function(){
        emailService.send("hello, world!");
    }
}