describe('Login controller', function() {

  var LoginController;

  beforeEach(function(){
    module('lasersExample');

    inject(function($controller) {
      LoginController = $controller('LoginController');
    })
  })

  it('should expose message', function() {
    expect(LoginController.message).toEqual('hi from angular');
  })

  it('has a dummy spec to test 2 + 2', function() {
    // An intentionally failing test. No code within expect() will never equal 4.
    expect(2 + 2).toEqual(4);
  });
});
