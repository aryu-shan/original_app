class HistoriesController < ApplicationController
<<<<<<< HEAD
  def index
    @questions = History.order("RAND()").limit(10)
  end
end
=======
	def index	 
   @question = History.order("RAND()").first	
  end	
end
>>>>>>> main
