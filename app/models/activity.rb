class Activity < ActiveRecord::Base
  has_many :activity_times
  belongs_to :rink
end
