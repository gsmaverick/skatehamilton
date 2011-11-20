class ActivityTime < ActiveRecord::Base
  belongs_to :activity

  validates :days, :length => { :is => 7, :wrong_length => "Wrong length days" }
  validates :start_time, :length => { :is => 5, :wrong_length => "Wrong length start time" }
  validates :end_time, :length => { :is => 5, :wrong_length => "Wrong length end time" }
end
