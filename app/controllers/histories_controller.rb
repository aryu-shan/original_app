class HistoriesController < ApplicationController
  def index
    @questions = History.order("RANDOM()").limit(10)
  end
end

