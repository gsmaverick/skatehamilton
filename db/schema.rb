# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20111120010620) do

  create_table "activities", :force => true do |t|
    t.integer  "rink_id"
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "activities", ["rink_id"], :name => "index_activities_on_rink_id"

  create_table "activity_times", :force => true do |t|
    t.integer  "activity_id"
    t.string   "start_time"
    t.string   "end_time"
    t.string   "days"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "activity_times", ["activity_id"], :name => "index_activity_times_on_activity_id"

  create_table "rinks", :force => true do |t|
    t.string   "name"
    t.string   "address"
    t.string   "city"
    t.string   "postal_code"
    t.string   "phone"
    t.string   "email"
    t.decimal  "latitude",    :precision => 15, :scale => 10
    t.decimal  "longitude",   :precision => 15, :scale => 10
    t.string   "rink_type"
    t.text     "note"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
