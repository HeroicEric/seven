import ToriiAuthenticator from '../authenticators/torii';

export default {
  name: 'authentication',

  initialize: function(container) {
    container.register('authenticator:torii', ToriiAuthenticator);
  }
};
