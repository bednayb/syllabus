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

  describe('getData', function () {
    it('should be defined', function() {
      expect(LoginController.getData).toBeDefined();
    })

    it('should send request', function() {
      httpBackend
        .when('GET', 'http://localhost/bar')
        .respond(200, { foo: 'bar' });

      LoginController.getData()
      httpBackend.flush()
      httpBackend.expectGET('http://localhost/bar');
    })

    it('should process response', function() {
      httpBackend
        .when('GET', 'http://localhost/bar')
        .respond(200, { foo: 'bar' });

      LoginController.getData()
      httpBackend.flush()
      expect(LoginController.barData).toEqual({ foo: 'bar' });
    })
  })

  it('has a dummy spec to test 2 + 2', function() {
    expect(2 + 2).toEqual(4);
  });
});
