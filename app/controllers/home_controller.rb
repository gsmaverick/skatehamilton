class HomeController < ApplicationController
  def about
    render "home/desktop/about"
  end

  def api
    render "home/desktop/api"
  end

  def contact
    render "home/desktop/contact"
  end
end
