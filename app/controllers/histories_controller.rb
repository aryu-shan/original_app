class HistoriesController < ApplicationController
	def index	 
   @question = History.order("RAND()").first	
  end	
end
