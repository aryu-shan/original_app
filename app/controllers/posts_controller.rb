class PostsController < ApplicationController
  def index
    @posts = Post.all 
     #"これはコントローラーで定義したインスタンス変数を確認するための文字列です"
  end
  
  def new
  end

  def create
    Post.create(content: params[:content])
    redirect_to "/posts"
  end
end