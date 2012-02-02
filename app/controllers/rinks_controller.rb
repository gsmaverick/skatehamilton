class RinksController < ApplicationController
  def index
    @Rinks = Rink.all.to_json(:include => {
      :activities => {
        :include => :activity_times
      }
    })

    if isMobile or params[:mobile]
      render "home/mobile/index", :layout => "mobile"
    else
      render "home/desktop/index", :layout => "desktop"
    end
  end

  def widget
    @Rinks = Rink.all(:select => 'id, address, latitude, longitude, name, rink_type')

    respond_to do |format|
      format.json {
        render :json => @Rinks.to_json,
               :callback => params[:callback]
      }

      format.html {
        redirect_to root_url
      }
    end
  end

  def show
    @rink = Rink.find(params[:id])

    respond_to do |format|
    	format.json {
    	  if params[:deep]
          if params[:callback]
            render :json => @rink.to_json(:include => {
    	  	    :activities => {
    	  	      :include => :activity_times
    	  	    }
            }),
            :callback => params[:callback]
          else
            render :json => @rink.to_json(:include => {
              :activities => {
                :include => :activity_times
              }
            })
          end
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

  # Search endpoint returning Rinks by proximity to lat, lng co-ordinates
  def search
    if params[:lat].present? and params[:lng].present?
      @rinks = Rink.near([params[:lat].to_f, params[:lng].to_f], 20, :order => :distance, :limit => 10)
      render :json => @rinks.to_json
    elsif params[:query].present?
      @rinks = Rink.find(:all, :conditions => ["name #{DATABASE_OPERATOR[:like_operator]} ?", "%#{params[:query]}%"])
      render :json => @rinks.to_json
    else
      render :json => {:error => "Missing lat and lng url parameters or a name parameter"}
    end
  end
end