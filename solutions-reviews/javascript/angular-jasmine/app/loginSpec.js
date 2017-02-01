describe('Login controller', function() {

  var httpBackend, LoginController;

  beforeEach(function(){
    module('lasersExample');

    inject(function($controller, $httpBackend) {
      httpBackend = $httpBackend;
      LoginController = $controller('LoginController');
    })
  })

  describe('message', function () {
    it('should be exposed', function() {
      expect(LoginController.message).toBeDefined();
    })
    it('should greet', function() {
      expect(LoginController.message).toEqual('hi from angular');
    })
    it('cica should not be exposed', function() {
      expect(LoginController.cica).not.toBeDefined();
    })
  })

  describe('postLogin', function () {
    it('should be defined', function() {
      expect(LoginController.postLogin).toBeDefined();
    })

    it('should send request', function() {
      httpBackend
        .when('POST', '/lobab/login')
        .respond(200, { foo: 'bar' });

      LoginController.postLogin()
      httpBackend.flush()
      httpBackend.expectPOST('/lobab/login');
    })

    it('should log in user', function() {
      httpBackend
        .when('POST', '/lobab/login')
        .respond(200, { foo: 'bar' });

      LoginController.postLogin()
      httpBackend.flush()
      expect(LoginController.isLoggedIn).toBe(true);
    })

    it('should process response', function() {
      httpBackend
        .when('POST', '/lobab/login')
        .respond(200, { foo: 'bar' });

      LoginController.postLogin()
      httpBackend.flush()
      expect(LoginController.loginData).toEqual({ foo: 'bar' });
    })
  })

  it('has a dummy spec to test 2 + 2', function() {
    expect(2 + 2).toEqual(4);
  });
});
