class DeitiesController < ApplicationController
	def index
    @questions = Deity.order("RANDOM()").limit(10)
  end
 end

