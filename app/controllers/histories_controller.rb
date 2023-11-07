class HistoriesController < ApplicationController
	def index	  def index
    @question = History.order("RAND()").first	    @questions = History.order("RAND()").limit(10)
  end	
end
