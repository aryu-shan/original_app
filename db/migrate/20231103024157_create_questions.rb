class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.string :question_text,               null: false
      t.string :correct_answer,              null: false
      t.references :history,                 null: false, foreign_key: true,type: :bigint
      t.timestamps
    end
  end
end
