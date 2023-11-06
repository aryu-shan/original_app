class QuestionsController < ApplicationController
  before_action :load_question, only: [:index, :evaluate_answer]

  def index
    @question = Question.order("RAND()").first
  end

  def evaluate_answer
    user_answer = params[:user_answer] # フォームからのユーザーの回答を取得する仮定
    correct_answer = @question.correct_answer # 正解の回答を取得する仮定
  
    # ユーザーの回答が正解と一致する場合
    if user_answer == correct_answer
      # スコアを加算する処理を追加する（例: @score += 1）
    end
  
    # 次の質問をランダムに取得して表示する
    @question = Question.order("RAND()").first
    render :index
  end

  private

  def load_question
    @question = Question.order("RAND()").first
  end
end