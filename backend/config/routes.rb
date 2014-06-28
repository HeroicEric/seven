Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      post '/auth/token', to: 'tokens#create'
    end
  end
end
