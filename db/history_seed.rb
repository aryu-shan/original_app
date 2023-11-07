# ユーザーデータを作成
email = params[:email]
user = User.find_by(email: email)

# 問題1
history1 = History.create!(
  romaji_correct_answer: 'minamotonoyoritomo',
  kana_correct_answer: 'みなもとのよりとも',
  history_info: '鎌倉幕府を建立した武士 源頼朝',
  user: user
)

# 問題2
history2 = History.create!(
  romaji_correct_answer: 'takizawabakin',
  kana_correct_answer: 'たきざわばきん',
  history_info: '南総里見八犬伝の作者 滝沢馬琴',
  user: user
)