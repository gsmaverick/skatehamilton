# Database fields based GRAF fields (http://openhamilton.ca/graf)
# Facilities and rinks are compressed together because we're only 
# dealing with one type of resources (skating rink)
class CreateRinks < ActiveRecord::Migration
  def change
    create_table :rinks do |t|
      # The name of the skating rink/facility
      t.string :name

      # Fields from the facility definition
      t.string :address
      t.string :city
      t.string :postal_code
      t.string :phone
      t.string :email

      # Fields from the resource definition
      t.decimal :latitude, :precision => 15, :scale => 10
      t.decimal :longitude, :precision => 15, :scale => 10

      # Extensible/free-form fields for this resource      
      t.string :rink_type
      t.text :note
      
      t.timestamps
    end
  end
end
