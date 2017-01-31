describe('Login controller', function() {

  var LoginController;

  beforeEach(function(){
    module('lasersExample');

    inject(function($controller, $httpBackend) {
      httpBackend = $httpBackend;
      LoginController = $controller('LoginController');
    })
  })

  it('should expose message', function() {
    expect(LoginController.message).toEqual('hi from angular');
  })

  it('should send request', function() {
    httpBackend
      .when('GET', 'http://localhost/bar')
      .respond(200, { foo: 'bar' });

    // expect(LoginController.getData).toBeDefined();
    LoginController.getData()
    httpBackend.flush()
    expect(LoginController.barData).toEqual({ foo: 'bar' });
  })

  it('has a dummy spec to test 2 + 2', function() {
    // An intentionally failing test. No code within expect() will never equal 4.
    expect(2 + 2).toEqual(4);
  });
});
