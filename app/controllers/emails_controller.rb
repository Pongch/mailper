class EmailsController < ApplicationController
  def index
    @emails = if params[:term]
      Email.where('title || body LIKE ?', "%#{params[:term]}%")
    else
      Email.all
    end
  end

  def new
    @email = Email.new
    @tags = Tag.all.map{ |c| [c.name, c.id]}
  end

  def create
    @email = Email.new(email_param)
    @email.tag_id = params[:tag_id]

    if @email.save
      redirect_to :action => 'index'
    else
      @emails = Email.all
      render :action => 'new'
    end
  end

  def show
    @email = Email.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.js #show.js.erb
      format.json { render json: @email }
    end
  end

  def edit
    @email = Email.find(params[:id])
    @tags = Tag.all.map{ |c| [c.name, c.id]}
  end

  def update
    @email = Email.find(params[:id])
    @email.tag_id = params[:tag_id]

    if @email.update_attributes(email_param)
      redirect_to :action => 'show' , :id => @email
    else
      @emails = Email.all
      render :actin => 'edit'
    end
  end

  def destroy
    Email.find(params[:id]).destroy
    redirect_to :action => 'index'
  end

def email_param
  params.require(:email).permit(:title, :body, :term, :tag_id)
end

end
