class RinksController < ApplicationController
  def show
    @rink = Rink.find(params[:id])
    
    render :json => @rink
  end
end
