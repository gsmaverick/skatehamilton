# Database fields based GRAF fields (http://openhamilton.ca/graf)
# No fee class support, for now
class CreateActivities < ActiveRecord::Migration
  def change
    create_table :activities do |t|
      t.references :rink
      t.string :name

      t.timestamps
    end
    add_index :activities, :rink_id
  end
end
