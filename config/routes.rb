Rails.application.routes.draw do
  get 'settings/romaji'
  get 'settings/kana'
  devise_for :users
  root to: 'users#index'
  get '/settings', to: 'settings#edit'
  patch '/settings', to: 'settings#update'
  resources :histories, only: :index
  resources :questions
end