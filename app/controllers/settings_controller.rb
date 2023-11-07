class SettingsController < ApplicationController
  def edit
    # 設定画面の表示
  end

  def update
    # ユーザーの選択を処理するコード
    # params[:input_method] にユーザーの選択が含まれています
    input_method = params[:input_method]
    
    # ユーザーの選択に基づいた処理を行う（セッションやクッキーに保存するなど）
    
    # 設定変更後の画面にリダイレクトする例
    redirect_to root_path, notice: '設定を保存しました。'
  end
end