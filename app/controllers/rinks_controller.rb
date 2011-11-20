class RinksController < ApplicationController
  def show
    @rink = Rink.find(params[:id])
    @rink['activities'] = @rink.activities

    render :json => @rink
  end
end
