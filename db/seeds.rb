require_relative 'history_seed'

# ここで必要な問題データを読み込む
History.all.each do |history|
  Question.create!(
    question_text: history.history_info,
    correct_answer: history.romaji_correct_answer,
    history: history
  )
end