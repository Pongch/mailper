class TagsController < ApplicationController

  def index
    @tags = Tag.all
  end

  def new
  end

  def show
  end

  def create
    @email = Email.find(params[:id])
    @tag = @email.tags.create(tag_params)
  end

  def update
  end

  def destroy
  end

  private
    def tag_params
      params.require(:tag).permit(:name)
    end
end
