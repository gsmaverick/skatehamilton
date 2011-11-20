class RinksController < ApplicationController
  def show
    @rink = Rink.find(params[:id])
    @rink['activities'] = @rink.activities

    @rink['activities'].each do |a|
      a['times'] = a.activity_times
    end

    render :json => @rink
  end
end
