/**
 * Created by nbliz0 on 10/15/2015.
 */

var assert = chai.assert;

describe( 'test doubles', function() {

    it( 'stubbing example', function() {

        var b = new DataService();
        var a = new FooWithDataDependency( b );

        sinon.stub( b, "lookupMultiplier" ).returns( 2 );

        var result = a.calculateValueUsingLookup( 5 );

        assert.equal( result, 10 );
    } );

    it( 'mocking example', function() {

        var b = new EmailService();
        var a = new Bar( b );

        var expectation = sinon
            .mock( b )
            .expects( "send" )
            .withArgs( "hello, world!" );

        a.doSomethingThatSendsEmail();

        expectation.verify();

    } );

} );