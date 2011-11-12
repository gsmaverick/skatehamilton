class HomeController < ApplicationController
  include HomeHelper

  def index
    @Rinks = Rink.all(:select => 'id, address, latitude, longitude, name, rink_type').to_json

    if isMobile
      render "home/mobile/index", :layout => "mobile"
    else
      render "home/desktop/index", :layout => "desktop"
    end

  end
end
