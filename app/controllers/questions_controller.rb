<<<<<<< HEAD

class QuestionsController < ApplicationController
  before_action :load_questions, only: [:index, :evaluate_answer]
  before_action :initialize_score, only: [:index]

  def index
    @question = @questions.first
  end

  def evaluate_answer
    user_answer = params[:user_answer] # フォームからのユーザーの回答を取得する仮定
    correct_answer = @question.correct_answer # 正解の回答を取得する仮定
  
    # ユーザーの回答が正解と一致する場合
    if user_answer == correct_answer
      @score += 1 # スコアを加算する
    end
  
    # 次の質問をランダムに取得して表示する
    @questions = @questions.where.not(id: @question.id).order("RAND()").limit(9)
    @question = @questions.first
    render :index
  end

  private

  def load_questions
    @questions = Question.order("RAND()").limit(10)
  end

  def initialize_score
    @score = 0
  end
end
=======
class QuestionsController < ApplicationController
		before_action :load_questions, only: [:index, :evaluate_answer]
		before_action :initialize_score, only: [:index]
	
	
		def index
			@question = @questions.first
		end
	
	
		def evaluate_answer
	
		@@ -11,17 +13,22 @@ def evaluate_answer
	
	
			# ユーザーの回答が正解と一致する場合
			if user_answer == correct_answer
				@score += 1 # スコアを加算する
			end
	
	
			# 次の質問をランダムに取得して表示する
			@questions = @questions.where.not(id: @question.id).order("RAND()").limit(9)
			@question = @questions.first
			render :index
		end
	
	
		private
	
	
		def load_questions
			@questions = Question.order("RAND()").limit(10)
		end
	
	
		def initialize_score
			@score = 0
		end
	end
>>>>>>> main
