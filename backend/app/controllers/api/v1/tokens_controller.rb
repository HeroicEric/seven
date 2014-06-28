module Api::V1
  class TokensController < BaseController
    def create
      token = {
        access_token: '0ddb922452c983a70566e30dce16e2017db335103e35d783874c448862a78168',
        token_type: 'bearer',
        expires_in: 7200,
        refresh_token: 'f2188c4165d912524e04c6496d10f06803cc08ed50271a0b0a73061e3ac1c06c',
        scope: 'public'
      }

      render json: token
    end
  end
end
