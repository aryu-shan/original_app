class HistoriesController < ApplicationController
  def index
    @questions = History.order("RAND()").limit(10)
  end
end

