アプリケーション名	
とりどりタイピング

アプリケーション概要
子どもから大人まで、タイピングを練習したい方まで、楽しくタイピング練習ができる。

URL	
デプロイ済みのURLを記載。デプロイが済んでいない場合は、デプロイが完了次第記載すること。

テスト用アカウント
・Basic認証パスワード：
・Basic認証ID：
・メールアドレス：
・パスワード：
	ログイン機能等を実装した場合は、ログインに必要な情報を記載。またBasic認証等を設けている場合は、そのID/Passも記載すること。

利用方法
1.トップページ（一覧ページ）よりユーザー新規登録を行う。
2.TOP画面より練習したいカテゴリを選択
3.タイピング練習を10問行い、成績表が表示される


アプリケーションを作成した背景
タイピング練習をする際、もっと楽しい文章を入力しながら練習したいと思い作成。

実装した機能についての画像やGIFおよびその説明
※	実装した機能について、それぞれどのような特徴があるのかを列挙する形で記載。画像はGyazoで、GIFはGyazoGIFで撮影すること。

実装予定の機能
洗い出した要件の中から、今後実装予定の機能がある場合は、その機能を記載。

データベース設計	ER図を添付。
https://gyazo.com/ed23582a2923932d675919b32b2b01a4

開発環境
Ruby
Javascript

ローカルでの動作方法
git cloneしてから、ローカルで動作をさせるまでに必要なコマンドを記載。

工夫したポイント
制作背景・使用技術・開発方法・タスク管理など、企業へＰＲしたい事柄を記載。
改善点	より改善するとしたらどこか、それはどのようにしてやるのか。
制作時間	アプリケーションを制作するのにかけた時間。
2023/10/27～



## users テーブル

| Column             | Type   | Options     |
| ------------------ | ------ | ----------- |
| name               | string | null: false |
| email              | string | null: false |
| encrypted_password | string | null: false |
| input_method       | string | null: false | #かな入力かローマ字入力かを示すフィールド

### Association
has_many:scores
has_many :typing_stats
has_many :histories
has_many :deities
has_many:four_character_idioms
has_many :proverbs

##historiesテーブル

| Column                | Type       | Options                        |
| --------------------- | -----------| ------------------------------ |
| romaji_correct_answer | string     | null: false                    | #ローマ字形式の正解
| kana_correct_answer   | string     | null: false                    | #かな形式の正解 
| history_info          | string     |                                |
| user                  | references | null: false, foreign_key: true |

### Association
- belongs_to :user
has_many :questions
has_many :scores
has_many :typing_stats

## deitiesテーブル

| Column                | Type       | Options                        |
| --------------------- | -----------| ------------------------------ |
| romaji_correct_answer | string     | null: false                    | 
| kana_correct_answer   | string     | null: false                    |
| deity_info            | string     |                                |
| user                  | references | null: false, foreign_key: true |

### Association
- belongs_to :user
has_many :questions
has_many :scores
has_many :typing_stats

## four_character_idiomsテーブル

| Column                    | Type       | Options                        |
| ------------------------- | -----------| ------------------------------ |
| romaji_correct_answer     | string     | null: false                    | 
| kana_correct_answer       | string     | null: false                    |
| four_character_idiom_info | string     |                                |
| user                      | references | null: false, foreign_key: true |

### Association
- belongs_to :user
 has_many :questions
 has_many :scores
 has_many :typing_stats

## proverbs テーブル

| Column                | Type       | Options                        |
| --------------------- | -----------| ------------------------------ |
| romaji_correct_answer | string     | null: false                    | 
| kana_correct_answer   | string     | null: false                    |
| proverb_info          | string     |                                |
| user                  | references | null: false, foreign_key: true |

### Association
- belongs_to :user
has_many :questions
has_many :scores
has_many :typing_stats

## questions テーブル

| Column                | Type       | Options                        |
| --------------------- | -----------| ------------------------------ |
| question_text         | string     | null: false                    | #問題文
| correct_answer        | string     | null: false                    | #正解
| history               | references | null: false,foreign_key: true  | 
| deity                 | references | null: false,foreign_key: true  | 
| four_character_idiom  | references | null: false,foreign_key: true  | 
| proverb               | references | null: false,foreign_key: true  | 

### Association
- belongs_to :history
- belongs_to :deity
- belongs_to :four_character_idiom
- belongs_to :proverb
 has_many :scores


## scores テーブル

| Column                | Type       | Options                        |
| --------------------- | -----------| ------------------------------ |
| start_time            | datetime   | null: false                    | 
| end_time              | datetime   | null: false                    |
| typing_speed          | datetime   | null: false                    | 
| accuracy              | integer    | null: false                    | 
| practice_date         | datetime   | null: false                    | 
| user                  | references | null: false,foreign_key: true  | 
| question              | references | null: false,foreign_key: true  | 
| history               | references | null: false,foreign_key: true  | 
| deity                 | references | null: false,foreign_key: true  | 
| four_character_idiom  | references | null: false,foreign_key: true  | 
| proverb               | references | null: false,foreign_key: true  | 

### Association
- belongs_to :user
- belongs_to :question
- belongs_to :history
- belongs_to :deity
- belongs_to :four_character_idiom
- belongs_to :proverb
has_many :typing_stats

## typing_statsテーブル

| Column                | Type       | Options                        |
| --------------------- | -----------| ------------------------------ |
| user                  | references | null: false,foreign_key: true  | 
| score                 | references | null: false,foreign_key: true  | 
| history               | references | null: false,foreign_key: true  | 
| deity                 | references | null: false,foreign_key: true  | 
| four_character_idiom  | references | null: false,foreign_key: true  | 
| proverb               | references | null: false,foreign_key: true  | 

### Association
- belongs_to :user
- belongs_to :score
- belongs_to :history
- belongs_to :deity
- belongs_to :four_character_idiom
- belongs_to :proverb
- belongs_to :score
