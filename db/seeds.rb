# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or create!d alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create!([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create!(name: 'Emanuel', city: cities.first)
Rink.delete_all

Rink.create!([
  {
    name: 'Alexander Park',
    address: '259 Whitney Ave.',
    city: 'Hamilton',
    phone: '9055463747',
    email: 'recreation@hamilton.ca',
    rink_type: 'outdoor',
    note: 'This park location may have an outdoor rink, depending on the availability of volunteer ice coordinators. Ice availability is also subject to weather conditions. Hockey equipment is not permitted on the ice.'
  },
  {
    name: 'Churchill Park',
    address: '167 Cline Ave.',
    city: 'Hamilton',
    phone: '9055463747',
    email: 'recreation@hamilton.ca',
    rink_type: 'outdoor',
    note: 'This park location may have an outdoor rink, depending on the availability of volunteer ice coordinators. Ice availability is also subject to weather conditions. Hockey equipment is not permitted on the ice.'
  },
  {
    name: 'Radial Park',
    address: '1 Spruceside Ave.',
    city: 'Hamilton',
    phone: '9055463747',
    email: 'recreation@hamilton.ca',
    rink_type: 'outdoor',
    note: 'This park location may have an outdoor rink, depending on the availability of volunteer ice coordinators. Ice availability is also subject to weather conditions. Hockey equipment is not permitted on the ice.'
  },
  {
    name: 'Victoria Park',
    address: '516 King St. W. ',
    city: 'Hamilton',
    phone: '9055463747',
    email: 'recreation@hamilton.ca',
    rink_type: 'outdoor',
    note: 'This park location may have an outdoor rink, depending on the availability of volunteer ice coordinators. Ice availability is also subject to weather conditions. Hockey equipment is not permitted on the ice.'
  },
  {
    name: 'Beasley Park',
    address: '96 Mary St.',
    city: 'Hamilton',
    phone: '9055463747',
    email: 'recreation@hamilton.ca',
    rink_type: 'outdoor',
    note: 'This park location may have an outdoor rink, depending on the availability of volunteer ice coordinators. Ice availability is also subject to weather conditions. Hockey equipment is not permitted on the ice.'
  },
  {
    name: 'Carter Park',
    address: '32 Stinson St.',
    city: 'Hamilton',
    phone: '9055463747',
    email: 'recreation@hamilton.ca',
    rink_type: 'outdoor',
    note: 'This park location may have an outdoor rink, depending on the availability of volunteer ice coordinators. Ice availability is also subject to weather conditions. Hockey equipment is not permitted on the ice.'
  },
  {
    name: 'Durand Park',
    address: '250 Park St. S',
    city: 'Hamilton',
    phone: '9055463747',
    email: 'recreation@hamilton.ca',
    rink_type: 'outdoor',
    note: 'This park location may have an outdoor rink, depending on the availability of volunteer ice coordinators. Ice availability is also subject to weather conditions. Hockey equipment is not permitted on the ice.'
  },
  {
    name: 'Myrtle Park',
    address: '13 Delaware Ave.',
    city: 'Hamilton',
    phone: '9055463747',
    email: 'recreation@hamilton.ca',
    rink_type: 'outdoor',
    note: 'This park location may have an outdoor rink, depending on the availability of volunteer ice coordinators. Ice availability is also subject to weather conditions. Hockey equipment is not permitted on the ice.'
  },
  {
    name: 'Scott Park Baseball Diamond',
    address: '1055 King St. E',
    city: 'Hamilton',
    phone: '9055463747',
    email: 'recreation@hamilton.ca',
    rink_type: 'outdoor',
    note: 'This park location may have an outdoor rink, depending on the availability of volunteer ice coordinators. Ice availability is also subject to weather conditions. Hockey equipment is not permitted on the ice.'
  },
  {
    name: 'Fay Park',
    address: '95 Broker Dr.',
    city: 'Hamilton',
    phone: '9055463747',
    email: 'recreation@hamilton.ca',
    rink_type: 'outdoor',
    note: 'This park location may have an outdoor rink, depending on the availability of volunteer ice coordinators. Ice availability is also subject to weather conditions. Hockey equipment is not permitted on the ice.'
  },
  {
    name: 'Hampton Park',
    address: '28 Lupin Ave.',
    city: 'Hamilton',
    phone: '9055463747',
    email: 'recreation@hamilton.ca',
    rink_type: 'outdoor',
    note: 'This park location may have an outdoor rink, depending on the availability of volunteer ice coordinators. Ice availability is also subject to weather conditions. Hockey equipment is not permitted on the ice.'
  },
  {
    name: 'Highview Park',
    address: '879 Brucedale Ave.',
    city: 'Hamilton',
    phone: '9055463747',
    email: 'recreation@hamilton.ca',
    rink_type: 'outdoor',
    note: 'This park location may have an outdoor rink, depending on the availability of volunteer ice coordinators. Ice availability is also subject to weather conditions. Hockey equipment is not permitted on the ice.'
  },
  {
    name: 'Macassa Park',
    address: '777 Upper Sherman Ave.',
    city: 'Hamilton',
    phone: '9055463747',
    email: 'recreation@hamilton.ca',
    rink_type: 'outdoor',
    note: 'This park location may have an outdoor rink, depending on the availability of volunteer ice coordinators. Ice availability is also subject to weather conditions. Hockey equipment is not permitted on the ice.'
  },
  {
    name: 'Mountain Drive Park',
    address: '935 Concession St.',
    city: 'Hamilton',
    phone: '9055463747',
    email: 'recreation@hamilton.ca',
    rink_type: 'outdoor',
    note: 'This park location may have an outdoor rink, depending on the availability of volunteer ice coordinators. Ice availability is also subject to weather conditions. Hockey equipment is not permitted on the ice.'
  },
  {
    name: 'Trenholme Park',
    address: 'Upper Kenilworth Ave.',
    city: 'Hamilton',
    phone: '9055463747',
    email: 'recreation@hamilton.ca',
    rink_type: 'outdoor',
    note: 'This park location may have an outdoor rink, depending on the availability of volunteer ice coordinators. Ice availability is also subject to weather conditions. Hockey equipment is not permitted on the ice.'
  },
  {
    name: 'Bruce Park',
    address: '145 Brucedale Ave. E',
    city: 'Hamilton',
    phone: '9055463747',
    email: 'recreation@hamilton.ca',
    rink_type: 'outdoor',
    note: 'This park location may have an outdoor rink, depending on the availability of volunteer ice coordinators. Ice availability is also subject to weather conditions. Hockey equipment is not permitted on the ice.'
  },
  {
    name: 'Rushdale Park',
    address: '1199 Upper Kenilworth Ave.',
    city: 'Hamilton',
    phone: '9055463747',
    email: 'recreation@hamilton.ca',
    rink_type: 'outdoor',
    note: 'This park location may have an outdoor rink, depending on the availability of volunteer ice coordinators. Ice availability is also subject to weather conditions. Hockey equipment is not permitted on the ice.'
  },
  {
    name: 'Buchanan Park',
    address: '111 Columbia Dr.',
    city: 'Hamilton',
    phone: '9055463747',
    email: 'recreation@hamilton.ca',
    rink_type: 'outdoor',
    note: 'This park location may have an outdoor rink, depending on the availability of volunteer ice coordinators. Ice availability is also subject to weather conditions. Hockey equipment is not permitted on the ice.'
  },
  {
    name: 'Colquhoun Park',
    address: '20 Leslie Ave.',
    city: 'Hamilton',
    phone: '9055463747',
    email: 'recreation@hamilton.ca',
    rink_type: 'outdoor',
    note: 'This park location may have an outdoor rink, depending on the availability of volunteer ice coordinators. Ice availability is also subject to weather conditions. Hockey equipment is not permitted on the ice.'
  },
  {
    name: 'Gourley Park',
    address: 'Duncairn Cres.',
    city: 'Hamilton',
    phone: '9055463747',
    email: 'recreation@hamilton.ca',
    rink_type: 'outdoor',
    note: 'This park location may have an outdoor rink, depending on the availability of volunteer ice coordinators. Ice availability is also subject to weather conditions. Hockey equipment is not permitted on the ice.'
  },
  {
    name: 'Kennedy East Park',
    address: '130 Malton Dr.',
    city: 'Hamilton',
    phone: '9055463747',
    email: 'recreation@hamilton.ca',
    rink_type: 'outdoor',
    note: 'This park location may have an outdoor rink, depending on the availability of volunteer ice coordinators. Ice availability is also subject to weather conditions. Hockey equipment is not permitted on the ice.'
  },
  {
    name: 'Shawinigan Park',
    address: '1 Guildwood Dr.',
    city: 'Hamilton',
    phone: '9055463747',
    email: 'recreation@hamilton.ca',
    rink_type: 'outdoor',
    note: 'This park location may have an outdoor rink, depending on the availability of volunteer ice coordinators. Ice availability is also subject to weather conditions. Hockey equipment is not permitted on the ice.'
  },
  {
    name: 'Eringate Park',
    address: '25 Shady Glen Dr.',
    city: 'Stoney Creek',
    phone: '9055463747',
    email: 'recreation@hamilton.ca',
    rink_type: 'outdoor',
    note: 'This park location may have an outdoor rink, depending on the availability of volunteer ice coordinators. Ice availability is also subject to weather conditions. Hockey equipment is not permitted on the ice.'
  },
  {
    name: 'Green Acres Park',
    address: 'Felker Cres. & Valley Dr.',
    city: 'Stoney Creek',
    phone: '9055463747',
    email: 'recreation@hamilton.ca',
    rink_type: 'outdoor',
    note: 'This park location may have an outdoor rink, depending on the availability of volunteer ice coordinators. Ice availability is also subject to weather conditions. Hockey equipment is not permitted on the ice.'
  },
  {
    name: 'Ancaster Heights',
    address: 'Massey Dr.',
    city: 'Ancaster',
    phone: '9055463747',
    email: 'recreation@hamilton.ca',
    rink_type: 'outdoor',
    note: 'This park location may have an outdoor rink, depending on the availability of volunteer ice coordinators. Ice availability is also subject to weather conditions. Hockey equipment is not permitted on the ice.'
  },
  {
    name: 'Harmony Hall',
    address: 'Anna Lee Dr.',
    city: 'Ancaster',
    phone: '9055463747',
    email: 'recreation@hamilton.ca',
    rink_type: 'outdoor',
    note: 'This park location may have an outdoor rink, depending on the availability of volunteer ice coordinators. Ice availability is also subject to weather conditions. Hockey equipment is not permitted on the ice.'
  },
  {
    name: 'Mohawk Meadows',
    address: '645 Iroquois Ave.',
    city: 'Ancaster',
    phone: '9055463747',
    email: 'recreation@hamilton.ca',
    rink_type: 'outdoor',
    note: 'This park location may have an outdoor rink, depending on the availability of volunteer ice coordinators. Ice availability is also subject to weather conditions. Hockey equipment is not permitted on the ice.'
  },
  {
    name: 'Moorland Park',
    address: 'Moorland Crescent',
    city: 'Ancaster',
    phone: '9055463747',
    email: 'recreation@hamilton.ca',
    rink_type: 'outdoor',
    note: 'This park location may have an outdoor rink, depending on the availability of volunteer ice coordinators. Ice availability is also subject to weather conditions. Hockey equipment is not permitted on the ice.'
  },
  {
    name: 'Optimist Park',
    address: '237 Manituou Way',
    city: 'Ancaster',
    phone: '9055463747',
    email: 'recreation@hamilton.ca',
    rink_type: 'outdoor',
    note: 'This park location may have an outdoor rink, depending on the availability of volunteer ice coordinators. Ice availability is also subject to weather conditions. Hockey equipment is not permitted on the ice.'
  },
  {
    name: 'Scenic Woods',
    address: 'Lavender Dr.',
    city: 'Ancaster',
    phone: '9055463747',
    email: 'recreation@hamilton.ca',
    rink_type: 'outdoor',
    note: 'This park location may have an outdoor rink, depending on the availability of volunteer ice coordinators. Ice availability is also subject to weather conditions. Hockey equipment is not permitted on the ice.'
  },
  {
    name: 'Dundas Driving Park',
    address: 'Cross St. at Parkview Row',
    city: 'Dundas',
    phone: '9055463747',
    email: 'recreation@hamilton.ca',
    rink_type: 'outdoor',
    note: 'This park location may have an outdoor rink, depending on the availability of volunteer ice coordinators. Ice availability is also subject to weather conditions. Hockey equipment is not permitted on the ice.'
  },
  {
    name: 'Little John Park',
    address: 'Little John Rd.',
    city: 'Dundas',
    phone: '9055463747',
    email: 'recreation@hamilton.ca',
    rink_type: 'outdoor',
    note: 'This park location may have an outdoor rink, depending on the availability of volunteer ice coordinators. Ice availability is also subject to weather conditions. Hockey equipment is not permitted on the ice.'
  },
  {
    name: 'Sanctuary Park',
    address: '27 Sanctuary Dr.',
    city: 'Dundas',
    phone: '9055463747',
    email: 'recreation@hamilton.ca',
    rink_type: 'outdoor',
    note: 'This park location may have an outdoor rink, depending on the availability of volunteer ice coordinators. Ice availability is also subject to weather conditions. Hockey equipment is not permitted on the ice.'
  },
  {
    name: 'Freelton Community Park',
    address: 'Freelton Road',
    city: 'Freelton',
    phone: '9055463747',
    email: 'recreation@hamilton.ca',
    rink_type: 'outdoor',
    note: 'This park location may have an outdoor rink, depending on the availability of volunteer ice coordinators. Ice availability is also subject to weather conditions. Hockey equipment is not permitted on the ice.'
  },
  {
    name: 'Rosebough Park',
    address: 'Rosebough St.',
    city: 'Greensville',
    phone: '9055463747',
    email: 'recreation@hamilton.ca',
    rink_type: 'outdoor',
    note: 'This park location may have an outdoor rink, depending on the availability of volunteer ice coordinators. Ice availability is also subject to weather conditions. Hockey equipment is not permitted on the ice.'
  }
])

# Beverly Arena
@beverly = Rink.create!(name: 'Beverly Arena', address: '680 Hwy 8', city: 'Rockton', phone: '5196472722', email: 'recreation@hamilton.ca', rink_type: 'indoor')

@beverly_public_skate = Activity.create!(rink: @beverly, name: 'Public Skate')

@beverly_public_skate_time1 = ActivityTime.create!(activity: @beverly_public_skate, start_time: '16:00', end_time: '17:00', days: '0001000')
@beverly_public_skate_time2 = ActivityTime.create!(activity: @beverly_public_skate, start_time: '19:30', end_time: '21:00', days: '0000010')

# Carlisle Community Centre
@carlisle = Rink.create!(name: 'Carlisle Community Centre & Arena', address: '1496 Centre Road', city: 'Carlisle', phone: '9056897283', email: 'recreation@hamilton.ca', rink_type: 'indoor')

@carlisle_adult_shinny  = Activity.create!(rink: @carlisle, name: 'Adult Shinny')
@carlisle_adult_skate   = Activity.create!(rink: @carlisle, name: 'Adult Skate')
@carlisle_parent_tot    = Activity.create!(rink: @carlisle, name: 'Parent & Tot')
@carlisle_public_skate  = Activity.create!(rink: @carlisle, name: 'Public Skate')
@carlisle_senior_shinny = Activity.create!(rink: @carlisle, name: 'Senior Shinny')
@carlisle_senior_skate  = Activity.create!(rink: @carlisle, name: 'Senior Skate')
 
@carlisle_adult_shinny_time  = ActivityTime.create!(activity: @carlisle_adult_shinny, start_time: '15:00', end_time: '17:00', days: '0001000')
@carlisle_adult_skate_time1  = ActivityTime.create!(activity: @carlisle_adult_skate, start_time: '13:00', end_time: '14:00', days: '0100000')
@carlisle_adult_skate_time2  = ActivityTime.create!(activity: @carlisle_adult_skate, start_time: '13:00', end_time: '15:00', days: '0001000')
@carlisle_parent_tot_time1   = ActivityTime.create!(activity: @carlisle_parent_tot, start_time: '09:00', end_time: '11:00', days: '1000100')
@carlisle_parent_tot_time2   = ActivityTime.create!(activity: @carlisle_parent_tot, start_time: '14:00', end_time: '15:00', days: '0010000')
@carlisle_public_skate_time1 = ActivityTime.create!(activity: @carlisle_public_skate, start_time: '14:00', end_time: '16:00', days: '0100000')
@carlisle_public_skate_time2 = ActivityTime.create!(activity: @carlisle_public_skate, start_time: '10:00', end_time: '11:00', days: '0010000')
@carlisle_public_skate_time3 = ActivityTime.create!(activity: @carlisle_public_skate, start_time: '13:00', end_time: '14:00', days: '0000100')
@carlisle_public_skate_time4 = ActivityTime.create!(activity: @carlisle_public_skate, start_time: '20:00', end_time: '22:00', days: '0000100')
@carlisle_senior_shinny_time = ActivityTime.create!(activity: @carlisle_senior_shinny, start_time: '11:00', end_time: '13:00', days: '1010100')
@carlisle_senior_skate_time  = ActivityTime.create!(activity: @carlisle_senior_skate, start_time: '08:00', end_time: '09:00', days: '0000100')

# Chedoke Twin Pad
@chedoke = Rink.create!(name: 'Chedoke Twin Pad Arena', address: '91 Chedmac Dr.', city: 'Hamilton', phone: '9055462429', email: 'recreation@hamilton.ca', rink_type: 'indoor')

@chedoke_adult_shinny  = Activity.create!(rink: @chedoke, name: 'Adult Shinny')
@chedoke_adult_skate   = Activity.create!(rink: @chedoke, name: 'Adult Skate')
@chedoke_parent_tot    = Activity.create!(rink: @chedoke, name: 'Parent & Tot')
@chedoke_public_skate  = Activity.create!(rink: @chedoke, name: 'Public Skate')
@chedoke_senior_skate  = Activity.create!(rink: @chedoke, name: 'Senior Skate')

@chedoke_adult_shinny_time1 = ActivityTime.create!(activity: @chedoke_adult_shinny, start_time: '12:30', end_time: '14:30', days: '1111100')
@chedoke_adult_shinny_time2 = ActivityTime.create!(activity: @chedoke_adult_shinny, start_time: '09:00', end_time: '11:00', days: '0000100')
@chedoke_adult_skate_time   = ActivityTime.create!(activity: @chedoke_adult_skate, start_time: '11:00', end_time: '12:30', days: '1111100')
@chedoke_parent_tot_time    = ActivityTime.create!(activity: @chedoke_parent_tot, start_time: '10:00', end_time: '11:00', days: '1111100')
@chedoke_public_skate_time1 = ActivityTime.create!(activity: @chedoke_public_skate, start_time: '18:30', end_time: '20:30', days: '1000000')
@chedoke_public_skate_time2 = ActivityTime.create!(activity: @chedoke_public_skate, start_time: '13:30', end_time: '15:30', days: '0000001')
@chedoke_senior_skate_time  = ActivityTime.create!(activity: @chedoke_senior_skate, start_time: '08:30', end_time: '10:30', days: '1111100')

# Coronation Arena
@coronation = Rink.create!(name: 'Coronation Arena and Pool', address: '81 Macklin St. N', city: 'Hamilton', phone: '9055463109', email: 'recreation@hamilton.ca', rink_type: 'indoor')

@coronation_adult_shinny  = Activity.create!(rink: @coronation, name: 'Adult Shinny')
@coronation_family_skate  = Activity.create!(rink: @coronation, name: 'Family Skate')
@coronation_parent_tot    = Activity.create!(rink: @coronation, name: 'Parent & Tot')
@coronation_public_skate  = Activity.create!(rink: @coronation, name: 'Public Skate')
@coronation_senior_skate  = Activity.create!(rink: @coronation, name: 'Senior Skate')

@coronation_adult_shinny_time  = ActivityTime.create!(activity: @coronation_adult_shinny, start_time: '14:00', end_time: '16:00', days: '0000100')
@coronation_family_skate_time  = ActivityTime.create!(activity: @coronation_family_skate, start_time: '12:00', end_time: '14:00', days: '0000100')
@coronation_parent_tot_time    = ActivityTime.create!(activity: @coronation_parent_tot, start_time: '10:00', end_time: '12:00', days: '0000100')
@coronation_public_skate_time1 = ActivityTime.create!(activity: @coronation_public_skate, start_time: '18:00', end_time: '20:00', days: '0000100')
@coronation_public_skate_time2 = ActivityTime.create!(activity: @coronation_public_skate, start_time: '14:00', end_time: '16:00', days: '0000001')
@coronation_senior_skate_time  = ActivityTime.create!(activity: @coronation_senior_skate, start_time: '08:00', end_time: '10:00', days: '0000100')

# Eastwood Arena
@eastwood = Rink.create!(name: 'Eastwood Arena', address: '111 Burlington St. East', city: 'Hamilton', phone: '9055463152', email: 'recreation@hamilton.ca', rink_type: 'indoor')

@eastwood_adult_shinny  = Activity.create!(rink: @eastwood, name: 'Adult Shinny')
@eastwood_adult_skate   = Activity.create!(rink: @eastwood, name: 'Adult Skate')
@eastwood_parent_tot    = Activity.create!(rink: @eastwood, name: 'Parent & Tot')
 
@eastwood_adult_shinny_time = ActivityTime.create!(activity: @eastwood_adult_shinny, start_time: '13:00', end_time: '15:00', days: '1001000')
@eastwood_adult_skate_time  = ActivityTime.create!(activity: @eastwood_adult_skate, start_time: '11:00', end_time: '13:00', days: '1001000')
@eastwood_parent_tot_time   = ActivityTime.create!(activity: @eastwood_parent_tot, start_time: '10:00', end_time: '11:00', days: '1001000')

puts "Eastwood completed."

# Glanbrook Arena
@glanbrook = Rink.create!(name: 'Glanbrook Arena & Auditorium', address: '4300 Binbrook Road', city: 'Binbrook', phone: '9056929331', email: 'recreation@hamilton.ca', rink_type: 'indoor')

@glanbrook_adult_shinny  = Activity.create!(rink: @glanbrook, name: 'Adult Shinny')
@glanbrook_adult_skate   = Activity.create!(rink: @glanbrook, name: 'Adult Skate')
@glanbrook_family_skate  = Activity.create!(rink: @glanbrook, name: 'Family Skate')
@glanbrook_parent_tot    = Activity.create!(rink: @glanbrook, name: 'Parent & Tot')
@glanbrook_public_skate  = Activity.create!(rink: @glanbrook, name: 'Public Skate')
@glanbrook_senior_skate  = Activity.create!(rink: @glanbrook, name: 'Senior Skate')
 
@glanbrook_adult_shinny_time1 = ActivityTime.create!(activity: @glanbrook_adult_shinny, start_time: '09:00', end_time: '11:00', days: '0101000')
@glanbrook_adult_shinny_time2 = ActivityTime.create!(activity: @glanbrook_adult_shinny, start_time: '15:30', end_time: '16:30', days: '0000100')
@glanbrook_adult_skate_time   = ActivityTime.create!(activity: @glanbrook_adult_skate, start_time: '11:00', end_time: '13:00', days: '0001000')
@glanbrook_family_skate_time  = ActivityTime.create!(activity: @glanbrook_family_skate, start_time: '11:00', end_time: '12:00', days: '0100000')
@glanbrook_parent_tot_time1   = ActivityTime.create!(activity: @glanbrook_parent_tot, start_time: '12:00', end_time: '13:00', days: '0100000')
@glanbrook_parent_tot_time2   = ActivityTime.create!(activity: @glanbrook_parent_tot, start_time: '13:00', end_time: '15:00', days: '0001000')
@glanbrook_public_skate_time1 = ActivityTime.create!(activity: @glanbrook_public_skate, start_time: '16:00', end_time: '17:00', days: '0100000')
@glanbrook_public_skate_time2 = ActivityTime.create!(activity: @glanbrook_public_skate, start_time: '12:00', end_time: '13:00', days: '0000100')
@glanbrook_public_skate_time3 = ActivityTime.create!(activity: @glanbrook_public_skate, start_time: '19:00', end_time: '20:30', days: '0000010')
@glanbrook_public_skate_time4 = ActivityTime.create!(activity: @glanbrook_public_skate, start_time: '13:00', end_time: '14:00', days: '0000001')
@glanbrook_senior_skate_time  = ActivityTime.create!(activity: @glanbrook_senior_skate, start_time: '08:00', end_time: '09:00', days: '0100000')

# Inch Park Arena
@inch = Rink.create!(name: 'Inch Park Arena & Pool', address: '400 Queensdale Ave.', city: 'Hamilton', phone: '9055464922', email: 'recreation@hamilton.ca', rink_type: 'indoor')

@inch_public_skate = Activity.create!(rink: @inch, name: 'Public Skate')

@inch_public_skate_time = ActivityTime.create!(activity: @inch_public_skate, start_time: '15:00', end_time: '17:00', days: '0000010')

# Lawfield Arena
@lawfield = Rink.create!(name: 'Lawfield Arena', address: '150 Folkstone Ave.', city: 'Hamilton', phone: '9055464923', email: 'recreation@hamilton.ca', rink_type: 'indoor')

@lawfield_adult_shinny  = Activity.create!(rink: @lawfield, name: 'Adult Shinny')
@lawfield_adult_skate   = Activity.create!(rink: @lawfield, name: 'Adult Skate')
@lawfield_parent_tot    = Activity.create!(rink: @lawfield, name: 'Parent & Tot')
@lawfield_public_skate  = Activity.create!(rink: @lawfield, name: 'Public Skate')
@lawfield_senior_shinny = Activity.create!(rink: @lawfield, name: 'Senior Shinny')
 
@lawfield_adult_shinny_time  = ActivityTime.create!(activity: @lawfield_adult_shinny, start_time: '13:00', end_time: '15:00', days: '0100000')
@lawfield_adult_skate_time1  = ActivityTime.create!(activity: @lawfield_adult_skate, start_time: '11:00', end_time: '13:00', days: '1000000')
@lawfield_adult_skate_time2  = ActivityTime.create!(activity: @lawfield_adult_skate, start_time: '11:30', end_time: '13:00', days: '0101100')
@lawfield_parent_tot_time1   = ActivityTime.create!(activity: @lawfield_parent_tot, start_time: '10:00', end_time: '11:00', days: '0100000')
@lawfield_parent_tot_time2   = ActivityTime.create!(activity: @lawfield_parent_tot, start_time: '13:30', end_time: '15:00', days: '0001000')
@lawfield_public_skate_time  = ActivityTime.create!(activity: @lawfield_public_skate, start_time: '18:00', end_time: '20:00', days: '0000010')
@lawfield_senior_shinny_time = ActivityTime.create!(activity: @lawfield_senior_shinny, start_time: '09:00', end_time: '11:00', days: '1001100')

# Market Street Arena
@market = Rink.create!(name: 'Market Street (J.L. Grightmire) Arena', address: '35 Market St. South', city: 'Dundas', phone: '9055406678', email: 'recreation@hamilton.ca', rink_type: 'indoor')

@market_adult_shinny  = Activity.create!(rink: @market, name: 'Adult Shinny')
@market_family_skate  = Activity.create!(rink: @market, name: 'Family Skate')
@market_parent_tot    = Activity.create!(rink: @market, name: 'Parent & Tot')
@market_public_skate  = Activity.create!(rink: @market, name: 'Public Skate')
@market_senior_skate  = Activity.create!(rink: @market, name: 'Senior Skate')

@market_adult_shinny_time  = ActivityTime.create!(activity: @market_adult_shinny, start_time: '11:00', end_time: '13:00', days: '0101000')
@market_family_skate_time1 = ActivityTime.create!(activity: @market_family_skate, start_time: '12:00', end_time: '11:00', days: '0010000')
@market_family_skate_time2 = ActivityTime.create!(activity: @market_family_skate, start_time: '14:00', end_time: '15:00', days: '0001000')
@market_parent_tot_time1   = ActivityTime.create!(activity: @market_parent_tot, start_time: '13:00', end_time: '15:00', days: '0100000')
@market_parent_tot_time2   = ActivityTime.create!(activity: @market_parent_tot, start_time: '10:00', end_time: '12:00', days: '0010000')
@market_parent_tot_time3   = ActivityTime.create!(activity: @market_parent_tot, start_time: '13:00', end_time: '13:45', days: '0000011')
@market_public_skate_time1 = ActivityTime.create!(activity: @market_public_skate, start_time: '10:00', end_time: '11:00', days: '0100000')
@market_public_skate_time2 = ActivityTime.create!(activity: @market_public_skate, start_time: '13:00', end_time: '14:00', days: '0001000')
@market_public_skate_time3 = ActivityTime.create!(activity: @market_public_skate, start_time: '14:00', end_time: '15:30', days: '0000011')
@market_senior_skate_time1 = ActivityTime.create!(activity: @market_senior_skate, start_time: '09:00', end_time: '10:00', days: '0100000')
@market_senior_skate_time1 = ActivityTime.create!(activity: @market_senior_skate, start_time: '13:00', end_time: '15:00', days: '0010000')

puts "Market completed."

# Morgan Firestone Arena
@morgan = Rink.create!(name: 'Morgan Firestone Arena', address: '385 Jerseyville Road West', city: 'Ancaster', phone: '9055463769', email: 'recreation@hamilton.ca', rink_type: 'indoor')

@morgan_adult_shinny  = Activity.create!(rink: @morgan, name: 'Adult Shinny')
@morgan_adult_skate   = Activity.create!(rink: @morgan, name: 'Adult Skate')
@morgan_parent_tot    = Activity.create!(rink: @morgan, name: 'Parent & Tot')
@morgan_parent_mini   = Activity.create!(rink: @morgan, name: 'Parent & Tot/Mini Skills')
@morgan_public_skate  = Activity.create!(rink: @morgan, name: 'Public Skate')
@morgan_senior_skate  = Activity.create!(rink: @morgan, name: 'Senior Skate')
 
@morgan_adult_shinny_time1 = ActivityTime.create!(activity: @morgan_adult_shinny, start_time: '10:00', end_time: '12:00', days: '0100000')
@morgan_adult_shinny_time2 = ActivityTime.create!(activity: @morgan_adult_shinny, start_time: '11:00', end_time: '13:00', days: '0001000')
@morgan_adult_skate_time1  = ActivityTime.create!(activity: @morgan_adult_skate, start_time: '11:00', end_time: '13:30', days: '0100000')
@morgan_adult_skate_time2  = ActivityTime.create!(activity: @morgan_adult_skate, start_time: '10:00', end_time: '12:00', days: '0010000')
@morgan_parent_tot_time1   = ActivityTime.create!(activity: @morgan_parent_tot, start_time: '10:00', end_time: '12:30', days: '1000100')
@morgan_parent_tot_time2   = ActivityTime.create!(activity: @morgan_parent_tot, start_time: '09:30', end_time: '11:00', days: '0110000')
@morgan_parent_tot_time3   = ActivityTime.create!(activity: @morgan_parent_tot, start_time: '13:30', end_time: '15:00', days: '0000100')
@morgan_parent_mini_time1  = ActivityTime.create!(activity: @morgan_parent_mini, start_time: '13:30', end_time: '15:00', days: '1000000')
@morgan_parent_mini_time2  = ActivityTime.create!(activity: @morgan_parent_mini, start_time: '11:00', end_time: '13:30', days: '0010000')
@morgan_public_skate_time1 = ActivityTime.create!(activity: @morgan_public_skate, start_time: '18:00', end_time: '20:00', days: '0010000')
@morgan_public_skate_time2 = ActivityTime.create!(activity: @morgan_public_skate, start_time: '16:00', end_time: '17:30', days: '0000100')
@morgan_public_skate_time3 = ActivityTime.create!(activity: @morgan_public_skate, start_time: '10:00', end_time: '12:30', days: '0000010')
@morgan_public_skate_time4 = ActivityTime.create!(activity: @morgan_public_skate, start_time: '13:00', end_time: '15:00', days: '0000001')
@morgan_senior_skate_time  = ActivityTime.create!(activity: @morgan_senior_skate, start_time: '09:00', end_time: '10:00', days: '0111100')

# Mountain Arena
@mountain = Rink.create!(name: 'Mountain (Dave Andreychuk) Arena', address: '25 Hester St.', city: 'Hamilton', phone: '9055464938', email: 'recreation@hamilton.ca', rink_type: 'indoor')

@mountain_adult_figure  = Activity.create!(rink: @mountain, name: 'Adult Figure Skate')
@mountain_adult_skate   = Activity.create!(rink: @mountain, name: 'Adult Skate')
@mountain_family_skate  = Activity.create!(rink: @mountain, name: 'Family Skate')
@mountain_parent_tot    = Activity.create!(rink: @mountain, name: 'Parent Tot Skate')
@mountain_public_skate  = Activity.create!(rink: @mountain, name: 'Public Skate')
@mountain_senior_skate  = Activity.create!(rink: @mountain, name: 'Senior Skate')
 
@mountain_adult_figure_time  = ActivityTime.create!(activity: @mountain_adult_figure, start_time: '12:00', end_time: '13:30', days: '1000100')
@mountain_adult_skate_time1  = ActivityTime.create!(activity: @mountain_adult_skate, start_time: '12:00', end_time: '13:30', days: '0111000')
@mountain_adult_skate_time2  = ActivityTime.create!(activity: @mountain_adult_skate, start_time: '21:30', end_time: '23:00', days: '0001000')
@mountain_adult_skate_time3  = ActivityTime.create!(activity: @mountain_adult_skate, start_time: '21:00', end_time: '23:00', days: '0000001')
@mountain_family_skate_time1 = ActivityTime.create!(activity: @mountain_family_skate, start_time: '20:30', end_time: '22:15', days: '0000100')
@mountain_family_skate_time2 = ActivityTime.create!(activity: @mountain_family_skate, start_time: '21:00', end_time: '23:00', days: '0000010')
@mountain_parent_tot_time1   = ActivityTime.create!(activity: @mountain_parent_tot, start_time: '11:00', end_time: '12:00', days: '1011100')
@mountain_parent_tot_time2   = ActivityTime.create!(activity: @mountain_parent_tot, start_time: '10:00', end_time: '11:00', days: '0100000')
@mountain_parent_tot_time3   = ActivityTime.create!(activity: @mountain_parent_tot, start_time: '13:30', end_time: '14:30', days: '0000100')
@mountain_public_skate_time1 = ActivityTime.create!(activity: @mountain_public_skate, start_time: '16:00', end_time: '17:00', days: '0100100')
@mountain_public_skate_time2 = ActivityTime.create!(activity: @mountain_public_skate, start_time: '15:00', end_time: '17:00', days: '0010010')
@mountain_public_skate_time3 = ActivityTime.create!(activity: @mountain_public_skate, start_time: '15:30', end_time: '16:30', days: '0001000')
@mountain_public_skate_time4 = ActivityTime.create!(activity: @mountain_public_skate, start_time: '13:30', end_time: '15:30', days: '0000001')
@mountain_senior_skate_time  = ActivityTime.create!(activity: @mountain_senior_skate, start_time: '09:00', end_time: '11:00', days: '1011100')

# North Wentworth
@north = Rink.create!(name: 'North Wentworth Community Centre & Arena', address: '27 Hwy 5', city: 'Flamborough', phone: '9056896666', email: 'recreation@hamilton.ca', rink_type: 'indoor')

@north_adult_shinny  = Activity.create!(rink: @north, name: 'Adult Shinny')
@north_adult_skate   = Activity.create!(rink: @north, name: 'Adult Skate')
@north_family_skate  = Activity.create!(rink: @north, name: 'Family Skate')
@north_parent_tot    = Activity.create!(rink: @north, name: 'Parent Tot')
@north_public_skate  = Activity.create!(rink: @north, name: 'Public Skate')
@north_senior_skate  = Activity.create!(rink: @north, name: 'Senior Skate')
 
@north_adult_shinny_time = ActivityTime.create!(activity: @north_adult_shinny, start_time: '11:00', end_time: '13:00', days: '0110100')
@north_adult_skate_time  = ActivityTime.create!(activity: @north_adult_skate, start_time: '13:00', end_time: '14:00', days: '0100000')
@north_family_skate_time = ActivityTime.create!(activity: @north_family_skate, start_time: '13:00', end_time: '14:00', days: '0010000')
@north_parent_tot_time1  = ActivityTime.create!(activity: @north_parent_tot, start_time: '09:00', end_time: '11:00', days: '0100000')
@north_parent_tot_time2  = ActivityTime.create!(activity: @north_parent_tot, start_time: '13:00', end_time: '14:00', days: '0000100')
@north_public_skate_time = ActivityTime.create!(activity: @north_public_skate, start_time: '14:00', end_time: '16:00', days: '0000001')
@north_senior_skate_time = ActivityTime.create!(activity: @north_senior_skate, start_time: '14:00', end_time: '15:00', days: '0110000')

puts "North completed."

# Olympic Arena
@olympic = Rink.create!(name: 'Olympic Arena', address: '70 Olympic Dr.', city: 'Dundas', phone: '9055406686', email: 'recreation@hamilton.ca', rink_type: 'indoor')

@olympic_adult_shinny  = Activity.create!(rink: @olympic, name: 'Adult Shinny')
@olympic_family_skate  = Activity.create!(rink: @olympic, name: 'Family Skate')
@olympic_parent_tot    = Activity.create!(rink: @olympic, name: 'Parent & Tot')
@olympic_public_skate  = Activity.create!(rink: @olympic, name: 'Public Skate')
@olympic_senior_skate  = Activity.create!(rink: @olympic, name: 'Senior Skate')

@olympic_adult_shinny_time  = ActivityTime.create!(activity: @olympic_adult_shinny, start_time: '11:00', end_time: '13:00', days: '0101000')
@olympic_family_skate_time1 = ActivityTime.create!(activity: @olympic_family_skate, start_time: '12:00', end_time: '11:00', days: '0010000')
@olympic_family_skate_time2 = ActivityTime.create!(activity: @olympic_family_skate, start_time: '14:00', end_time: '15:00', days: '0001000')
@olympic_parent_tot_time1   = ActivityTime.create!(activity: @olympic_parent_tot, start_time: '13:00', end_time: '15:00', days: '0100000')
@olympic_parent_tot_time2   = ActivityTime.create!(activity: @olympic_parent_tot, start_time: '10:00', end_time: '12:00', days: '0010000')
@olympic_parent_tot_time3   = ActivityTime.create!(activity: @olympic_parent_tot, start_time: '13:00', end_time: '13:45', days: '0000011')
@olympic_public_skate_time1 = ActivityTime.create!(activity: @olympic_public_skate, start_time: '10:00', end_time: '11:00', days: '0100000')
@olympic_public_skate_time2 = ActivityTime.create!(activity: @olympic_public_skate, start_time: '13:00', end_time: '14:00', days: '0001000')
@olympic_public_skate_time3 = ActivityTime.create!(activity: @olympic_public_skate, start_time: '14:00', end_time: '15:30', days: '0000011')
@olympic_senior_skate_time1 = ActivityTime.create!(activity: @olympic_senior_skate, start_time: '09:00', end_time: '10:00', days: '0100000')
@olympic_senior_skate_time1 = ActivityTime.create!(activity: @olympic_senior_skate, start_time: '13:00', end_time: '15:00', days: '0010000')

# Parkdale Arena
@parkdale = Rink.create!(name: 'Parkdale (Pat Quinn) Arena and Pool', address: '1770 Main St. East', city: 'Hamilton', phone: '9055464785', email: 'recreation@hamilton.ca', rink_type: 'indoor')

@parkdale_public_skate  = Activity.create!(rink: @parkdale, name: 'Public Skate')
@parkdale_senior_shinny = Activity.create!(rink: @parkdale, name: 'Senior Shinny')

@parkdale_public_skate_time1 = ActivityTime.create!(activity: @parkdale_public_skate, start_time: '13:00', end_time: '15:00', days: '0000010')
@parkdale_public_skate_time2 = ActivityTime.create!(activity: @parkdale_public_skate, start_time: '16:00', end_time: '18:00', days: '0000001')
@parkdale_senior_shinny_time = ActivityTime.create!(activity: @parkdale_senior_shinny, start_time: '10:00', end_time: '12:00', days: '1001000')

# Rosedale Arena
@rosedale = Rink.create!(name: 'Rosedale Arena and Pool', address: '100 Greenhill Ave.', city: 'Hamilton', phone: '9055464805', email: 'recreation@hamilton.ca', rink_type: 'indoor')

@rosedale_adult_shinny  = Activity.create!(rink: @rosedale, name: 'Adult Shinny')
@rosedale_adult_skate   = Activity.create!(rink: @rosedale, name: 'Adult Skate')
@rosedale_parent_tot    = Activity.create!(rink: @rosedale, name: 'Parent & Tot')
@rosedale_public_skate  = Activity.create!(rink: @rosedale, name: 'Public Skate')
 
@rosedale_adult_shinny_time  = ActivityTime.create!(activity: @rosedale_adult_shinny, start_time: '10:00', end_time: '12:00', days: '0100000')
@rosedale_adult_skate_time   = ActivityTime.create!(activity: @rosedale_adult_skate, start_time: '11:00', end_time: '13:00', days: '0000100')
@rosedale_parent_tot_time1   = ActivityTime.create!(activity: @rosedale_parent_tot, start_time: '13:00', end_time: '15:00', days: '0100100')
@rosedale_parent_tot_time2   = ActivityTime.create!(activity: @rosedale_parent_tot, start_time: '10:00', end_time: '11:00', days: '0001000')
@rosedale_public_skate_time1 = ActivityTime.create!(activity: @rosedale_public_skate, start_time: '17:30', end_time: '19:00', days: '1000000')
@rosedale_public_skate_time2 = ActivityTime.create!(activity: @rosedale_public_skate, start_time: '12:00', end_time: '13:00', days: '0100000')
@rosedale_public_skate_time3 = ActivityTime.create!(activity: @rosedale_public_skate, start_time: '18:00', end_time: '20:00', days: '0000100')

puts "Rosedale completed."

# Saltfleet Arena
@saltfleet = Rink.create!(name: 'Saltfleet Arena', address: '24 Sherwood Park Road', city: 'Stoney Creek', phone: '9056433883', email: 'recreation@hamilton.ca', rink_type: 'indoor')

@saltfleet_public_skate = Activity.create!(rink: @saltfleet, name: 'Public Skate')

@saltfleet_public_skate_time = ActivityTime.create!(activity: @saltfleet_public_skate, start_time: '12:30', end_time: '14:00', days: '0000001')

# Scott Park Arena
@scott = Rink.create!(name: 'Scott Park Arena', address: '876 Cannon St. East', city: 'Hamilton', phone: '9055464919', email: 'recreation@hamilton.ca', rink_type: 'indoor')

@scott_public_skate = Activity.create!(rink: @scott, name: 'Public Skate')

@scott_public_skate_time1 = ActivityTime.create!(activity: @scott_public_skate, start_time: '10:00', end_time: '12:00', days: '0000010')
@scott_public_skate_time2 = ActivityTime.create!(activity: @scott_public_skate, start_time: '13:00', end_time: '15:00', days: '0000001')

# Spring Valley Arena
@spring = Rink.create!(name: 'Spring Valley Arena', address: '29 Orchard Dr.', city: 'Ancaster', phone: '9056484404', email: 'recreaction@hamilton.ca', rink_type: 'indoor')

@spring_adult_shinny  = Activity.create!(rink: @spring, name: 'Adult Shinny')
@spring_adult_skate   = Activity.create!(rink: @spring, name: 'Adult Skate')
@spring_parent_tot    = Activity.create!(rink: @spring, name: 'Parent & Tot')
@spring_parent_mini   = Activity.create!(rink: @spring, name: 'Parent & Tot/Mini Skills')
@spring_public_skate  = Activity.create!(rink: @spring, name: 'Public Skate')
@spring_senior_skate  = Activity.create!(rink: @spring, name: 'Senior Skate')
 
@spring_adult_shinny_time1 = ActivityTime.create!(activity: @spring_adult_shinny, start_time: '10:00', end_time: '12:00', days: '0100000')
@spring_adult_shinny_time2 = ActivityTime.create!(activity: @spring_adult_shinny, start_time: '11:00', end_time: '13:00', days: '0001000')
@spring_adult_skate_time1  = ActivityTime.create!(activity: @spring_adult_skate, start_time: '11:00', end_time: '13:30', days: '0100000')
@spring_adult_skate_time2  = ActivityTime.create!(activity: @spring_adult_skate, start_time: '10:00', end_time: '12:00', days: '0010000')
@spring_parent_tot_time1   = ActivityTime.create!(activity: @spring_parent_tot, start_time: '10:00', end_time: '12:30', days: '1000100')
@spring_parent_tot_time2   = ActivityTime.create!(activity: @spring_parent_tot, start_time: '09:30', end_time: '11:00', days: '0110000')
@spring_parent_tot_time3   = ActivityTime.create!(activity: @spring_parent_tot, start_time: '13:30', end_time: '15:00', days: '0000100')
@spring_parent_mini_time1  = ActivityTime.create!(activity: @spring_parent_mini, start_time: '13:30', end_time: '15:00', days: '1000000')
@spring_parent_mini_time2  = ActivityTime.create!(activity: @spring_parent_mini, start_time: '11:00', end_time: '13:30', days: '0010000')
@spring_public_skate_time1 = ActivityTime.create!(activity: @spring_public_skate, start_time: '18:00', end_time: '20:00', days: '0010000')
@spring_public_skate_time2 = ActivityTime.create!(activity: @spring_public_skate, start_time: '16:00', end_time: '17:30', days: '0000100')
@spring_public_skate_time3 = ActivityTime.create!(activity: @spring_public_skate, start_time: '10:00', end_time: '12:30', days: '0000010')
@spring_public_skate_time4 = ActivityTime.create!(activity: @spring_public_skate, start_time: '13:00', end_time: '15:00', days: '0000001')
@spring_senior_skate_time  = ActivityTime.create!(activity: @spring_senior_skate, start_time: '09:00', end_time: '10:00', days: '0111100')

# Stoney Creek Arena
@stoney = Rink.create!(name: 'Stoney Creek Arena', address: '37 King St. West', city: 'Stoney Creek', phone: '9056622426', email: 'recreation@hamilton.ca', rink_type: 'indoor')

@stoney_parent_tot    = Activity.create!(rink: @stoney, name: 'Parent & Tot')
@stoney_public_skate  = Activity.create!(rink: @stoney, name: 'Public Skate')
@stoney_senior_skate  = Activity.create!(rink: @stoney, name: 'Senior Skate')

@stoney_parent_tot_time1   = ActivityTime.create!(activity: @stoney_parent_tot, start_time: '13:00', end_time: '15:00', days: '0101000')
@stoney_parent_tot_time2   = ActivityTime.create!(activity: @stoney_parent_tot, start_time: '13:00', end_time: '15:30', days: '0000100')
@stoney_public_skate_time1 = ActivityTime.create!(activity: @stoney_public_skate, start_time: '15:30', end_time: '17:00', days: '1000100')
@stoney_public_skate_time2 = ActivityTime.create!(activity: @stoney_public_skate, start_time: '11:00', end_time: '13:00', days: '0101000')
@stoney_public_skate_time3 = ActivityTime.create!(activity: @stoney_public_skate, start_time: '14:00', end_time: '15:30', days: '0000001')
@stoney_senior_skate_time  = ActivityTime.create!(activity: @stoney_senior_skate, start_time: '09:00', end_time: '11:00', days: '0101000')

# Valley Park
@valley = Rink.create!(name: 'Valley Park Arena & Rec Centre', address: '970 Paramount Dr.', city: 'Stoney Creek', phone: '9055733600', email: 'recreation@hamilton.ca', rink_type: 'indoor')

@valley_adult_shinny  = Activity.create!(rink: @valley, name: 'Adult Shinny')
@valley_parent_tot    = Activity.create!(rink: @valley, name: 'Parent & Tot')
@valley_public_skate  = Activity.create!(rink: @valley, name: 'Public Skate')
@valley_senior_skate  = Activity.create!(rink: @valley, name: 'Senior Skate')
 
@valley_adult_shinny_time1 = ActivityTime.create!(activity: @valley_adult_shinny, start_time: '08:30', end_time: '10:30', days: '0010000')
@valley_adult_shinny_time2 = ActivityTime.create!(activity: @valley_adult_shinny, start_time: '13:30', end_time: '15:20', days: '0001000')
@valley_parent_tot_time    = ActivityTime.create!(activity: @valley_parent_tot, start_time: '10:30', end_time: '11:30', days: '0010000')
@valley_public_skate_time1 = ActivityTime.create!(activity: @valley_public_skate, start_time: '18:30', end_time: '20:00', days: '0000100')
@valley_public_skate_time2 = ActivityTime.create!(activity: @valley_public_skate, start_time: '13:00', end_time: '14:00', days: '0000010')
@valley_public_skate_time3 = ActivityTime.create!(activity: @valley_public_skate, start_time: '13:00', end_time: '14:30', days: '0000001')
@valley_senior_skate_time  = ActivityTime.create!(activity: @valley_senior_skate, start_time: '07:30', end_time: '08:30', days: '0011000')