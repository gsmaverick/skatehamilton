class CreateRinks < ActiveRecord::Migration
  def change
    create_table :rinks do |t|
      t.string :name
      t.string :address
      t.string :postal_code
      t.string :city
      t.string :province
      t.string :phone
      t.string :rink_type

      t.text :description

      t.decimal :latitude, :precision => 15, :scale => 10
      t.decimal :longitude, :precision => 15, :scale => 10

      t.timestamps
    end
  end
end
