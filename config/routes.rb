Rails.application.routes.draw do
  # For details on the DSL available within this file, see
  resources :emails
  root 'emails#index'
end