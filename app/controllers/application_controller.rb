class ApplicationController < ActionController::Base
  helper :all
  protect_from_forgery

  def isMobile
    user_agent = request.env['HTTP_USER_AGENT'].downcase
    if user_agent.index('ipod')
      return true
    elsif user_agent.index('android')
      return true
    else
      return false
    end
  end
end
