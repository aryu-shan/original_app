class ApplicationController < ActionController::Base
<<<<<<< HEAD
  before_action :configure_permitted_parameters, if: :devise_controller?
=======
	before_action :configure_permitted_parameters, if: :devise_controller?
>>>>>>> main

  private
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end
end
