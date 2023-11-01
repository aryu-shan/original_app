class HistoriesController < ApplicationController

  def index
   @history=History.all
  end




end
