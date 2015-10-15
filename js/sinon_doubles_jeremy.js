
function DataService() {
  this.lookupMultiplier = function() {
      return 5;
  }

}

function FooWithDataDependency() {
  this.calculateValueUsingLookup = function( someInt ){
    return someInt * DataService.lookupMultiplier;
  }
}

function EmailService() {
  this.send = function( someString ) {
    return someString;
  }
}

function Bar() {
  this.doSomethingThatSendsEmail = function() {
    EmailService.send("hello, world!");
  }
}
