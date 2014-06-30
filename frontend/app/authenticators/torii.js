import Ember from 'ember';
import OAuth2 from 'simple-auth-oauth2/authenticators/oauth2';

export default OAuth2.extend({
  serverTokenEndpoint: '/api/v1/auth/token',

  authenticate: function(options) {
    var _this = this;

    var promise = new Ember.RSVP.Promise(function(resolve, reject) {
      options.torii.open(options.provider).then(function(authData) {
        resolve({
          grant_type: 'authorization_code',
          code: authData.authorizationCode,
          client_id: ''
        });
      }, function(error) {
        reject(error);
      });
    });

    return promise.then(function(data) {
      return new Ember.RSVP.Promise(function(resolve, reject) {
        _this.makeRequest(data).then(function(response) {
          Ember.run(function() {
            resolve({ access_token: response.access_token });
          });
        }, function(xhr) {
          Ember.run(function() {
            reject(xhr.responseJSON || xhr.responseText);
          });
        });
      });
    });
  }
});
