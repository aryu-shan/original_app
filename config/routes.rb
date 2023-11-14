Rails.application.routes.draw do
  get '/static/admin/javascript/hetong.js', to: 'your_controller#your_action'
  get 'settings/romaji'
  get 'settings/kana'
  devise_for :users
  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end
  root to: 'users#index'
  get '/settings', to: 'settings#edit'
  patch '/settings', to: 'settings#update'
  resources :histories, only: :index
  resources :questions do
    member do
      post :evaluate_answer
    end
  end
end