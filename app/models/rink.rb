class Rink < ActiveRecord::Base
  has_many :activities

  validates_presence_of :name, :address, :city, :rink_type, :email, :phone

  validates :phone, :length => { :is => 10, :wrong_length => "Wrong length phone" }

  # ENUM simluation condition
  validates_inclusion_of :rink_type, :in => [:indoor, :outdoor]

  # Auto-geocoding
  geocoded_by :full_street_address
  after_validation :geocode

  # Methods for emulating an ENUM data type
  def rink_type
    read_attribute(:rink_type).to_sym
  end

  def rink_type= (value)
    write_attribute(:rink_type, value.to_s)
  end

  def full_street_address
    [address, city, 'Ontario', 'Canada'].compact.join(', ')
  end
end