# Database fields based GRAF fields (http://openhamilton.ca/graf)
class CreateActivityTimes < ActiveRecord::Migration
  def change
    create_table :activity_times do |t|
      t.references :activity
      t.string :start_time
      t.string :end_time
      t.string :days # Express as a 7-bit binary string if activity occurs on said day

      t.timestamps
    end
    add_index :activity_times, :activity_id
  end
end
