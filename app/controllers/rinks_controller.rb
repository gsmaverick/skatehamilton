class RinksController < ApplicationController
  def index
    @Rinks = Rink.all(:select => 'id, address, latitude, longitude, name, rink_type').to_json

    if isMobile or params[:mobile]
      render "home/mobile/index", :layout => "mobile"
    else
      render "home/desktop/index", :layout => "desktop"
    end
  end

  def show
    @rink = Rink.find(params[:id])

    respond_to do |format|
    	format.json {
    	  if params[:deep]
    	    render :json => @rink.to_json(:include => {
    	  	  :activities => {
    	  	    :include => :activity_times
    	  	  }
    	    })
    	  else
    	  	render :json => @rink.to_json
    	  end
    	}

    	format.html {
    	  # Redirect to home page and let our JS handle the
    	  # display of this rink's details in the left-panel
    	  redirect_to root_url + '#' + rink_path(params[:id])
    	}
    end
  end
end