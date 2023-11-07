# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...





## users テーブル

| Column             | Type   | Options     |
| ------------------ | ------ | ----------- |
| name               | string | null: false |
| email              | string | null: false |
| encrypted_password | string | null: false |
| input_method       | string |             | #かな入力かローマ字入力かを示すフィールド

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
| history_info          | string     | null: false                    |
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
| deity_info            | string     | null: false                    |
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
| four_character_idiom_info | string     | null: false                    |
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
| proverb_info          | string     | null: false                    |
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
