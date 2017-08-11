class EmailsController < ApplicationController
  def index
    @emails = Email.all
  end

  def new
    @email = Email.new
  end

  def create
    @email = Email.new(email_params)

    if @book.save
      redirect_to :action => 'index'
    else
      @emails = Email.all
      render :action => 'new'
    end
  end

  def show
    @email = Email.find(params[:id])
  end

  def edit
    @email = Email.find(params[:id])
  end

  def update
    @email = Email.find(params[:id])

    if @email.update_attributes(email_param)
      redirect_to :action => 'show' , :id => @email
    else
      @emails = Email.all
      render :actin => 'edit'
    end
  end

  def delete
    Email.find(params[:id]).destroy
    redirect_to :action => 'index'
  end

def email_param
  params.require(:emails).permit(:title, :body)
end

end
