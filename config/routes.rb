Rails.application.routes.draw do
  # For details on the DSL available within this file, see
  resources :emails
  resources :tags, only: :index
  root 'emails#index'
end
