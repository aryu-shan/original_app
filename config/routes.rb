Rails.application.routes.draw do
  get 'settings/romaji'	  get 'settings/romaji'
  get 'settings/kana'	  get 'settings/kana'
  devise_for :users	  devise_for :users
  devise_scope :user do	  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'	    get '/users/sign_out' => 'devise/sessions#destroy'
  end	  end
  root to: 'users#index'	  root to: 'users#index'
  get '/settings', to: 'settings#edit'	  get '/settings', to: 'settings#edit'
  patch '/settings', to: 'settings#update'	  patch '/settings', to: 'settings#update'
  resources :histories, only: :index	  resources :histories, only: :index
  resources :questions	  resources :questions do
    member do
      post :evaluate_answer
    end
  end
end	end