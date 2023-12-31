class CreateDeities < ActiveRecord::Migration[7.0]
  def change
    create_table :deities do |t|
      t.string :romaji_correct_answer,      null: false
      t.string :kana_correct_answer,        null: false
      t.string :deity_info               
      t.references  :user,                  null: false, foreign_key: true
      t.timestamps
    end
  end
end
