# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Rink.delete_all

Rink.create([
  {
    name: 'Alexander Park',
    address: '259 Whitney Ave.',
    city: 'Hamilton',
    rink_type: 'outdoor',
    phone: '9055463747'
  },
  {
    name: 'Churchill Park',
    address: '167 Cline Ave.',
    city: 'Hamilton',
    rink_type: 'outdoor',
    phone: '9055463747'
  },
  {
    name: 'Radial Park',
    address: '1 Spruceside Ave.',
    city: 'Hamilton',
    rink_type: 'outdoor',
    phone: '9055463747'
  },
  {
    name: 'Victoria Park',
    address: '516 King St. W. ',
    city: 'Hamilton',
    rink_type: 'outdoor',
    phone: '9055463747'
  },
  {
    name: 'Beasley Park',
    address: '96 Mary St.',
    city: 'Hamilton',
    rink_type: 'outdoor',
    phone: '9055463747'
  },
  {
    name: 'Carter Park',
    address: '32 Stinson St.',
    city: 'Hamilton',
    rink_type: 'outdoor',
    phone: '9055463747'
  },
  {
    name: 'Durand Park',
    address: '250 Park St. S',
    city: 'Hamilton',
    rink_type: 'outdoor',
    phone: '9055463747'
  },
  {
    name: 'Myrtle Park',
    address: '13 Delaware Ave.',
    city: 'Hamilton',
    rink_type: 'outdoor',
    phone: '9055463747'
  },
  {
    name: 'Scott Park Baseball Diamond',
    address: '1055 King St. E',
    city: 'Hamilton',
    rink_type: 'outdoor',
    phone: '9055463747'
  },
  {
    name: 'Fay Park',
    address: '95 Broker Dr.',
    city: 'Hamilton',
    rink_type: 'outdoor',
    phone: '9055463747'
  },
  {
    name: 'Hampton Park',
    address: '28 Lupin Ave.',
    city: 'Hamilton',
    rink_type: 'outdoor',
    phone: '9055463747'
  },
  {
    name: 'Highview Park',
    address: '879 Brucedale Ave.',
    city: 'Hamilton',
    rink_type: 'outdoor',
    phone: '9055463747'
  },
  {
    name: 'Macassa Park',
    address: '777 Upper Sherman Ave.',
    city: 'Hamilton',
    rink_type: 'outdoor',
    phone: '9055463747'
  },
  {
    name: 'Mountain Drive Park',
    address: '935 Concession St.',
    city: 'Hamilton',
    rink_type: 'outdoor',
    phone: '9055463747'
  },
  {
    name: 'Trenholme Park',
    address: 'Upper Kenilworth Ave.',
    city: 'Hamilton',
    rink_type: 'outdoor',
    phone: '9055463747'
  },
  {
    name: 'Bruce Park',
    address: '145 Brucedale Ave. E',
    city: 'Hamilton',
    rink_type: 'outdoor',
    phone: '9055463747'
  },
  {
    name: 'Rushdale Park',
    address: '1199 Upper Kenilworth Ave.',
    city: 'Hamilton',
    rink_type: 'outdoor',
    phone: '9055463747'
  },
  {
    name: 'Buchanan Park',
    address: '111 Columbia Dr.',
    city: 'Hamilton',
    rink_type: 'outdoor',
    phone: '9055463747'
  },
  {
    name: 'Colquhoun Park',
    address: '20 Leslie Ave.',
    city: 'Hamilton',
    rink_type: 'outdoor',
    phone: '9055463747'
  },
  {
    name: 'Gourley Park',
    address: 'Duncairn Cres.',
    city: 'Hamilton',
    rink_type: 'outdoor',
    phone: '9055463747'
  },
  {
    name: 'Kennedy East Park',
    address: '130 Malton Dr.',
    city: 'Hamilton',
    rink_type: 'outdoor',
    phone: '9055463747'
  },
  {
    name: 'Shawinigan Park',
    address: '1 Guildwood Dr.',
    city: 'Hamilton',
    rink_type: 'outdoor',
    phone: '9055463747'
  },
  {
    name: 'Eringate Park',
    address: '25 Shady Glen Dr.',
    city: 'Stoney Creek',
    rink_type: 'outdoor',
    phone: '9055463747'
  },
  {
    name: 'Green Acres Park',
    address: 'Felker Cres. & Valley Dr.',
    city: 'Stoney Creek',
    rink_type: 'outdoor',
    phone: '9055463747'
  },
  {
    name: 'Ancaster Heights',
    address: 'Massey Dr.',
    city: 'Ancaster',
    rink_type: 'outdoor',
    phone: '9055463747'
  },
  {
    name: 'Harmony Hall',
    address: 'Anna Lee Dr.',
    city: 'Ancaster',
    rink_type: 'outdoor',
    phone: '9055463747'
  },
  {
    name: 'Mohawk Meadows',
    address: '645 Iroquois Ave.',
    city: 'Ancaster',
    rink_type: 'outdoor',
    phone: '9055463747'
  },
  {
    name: 'Moorland Park',
    address: 'Moorland Crescent',
    city: 'Ancaster',
    rink_type: 'outdoor',
    phone: '9055463747'
  },
  {
    name: 'Optimist Park',
    address: '237 Manituou Way',
    city: 'Ancaster',
    rink_type: 'outdoor',
    phone: '9055463747'
  },
  {
    name: 'Scenic Woods',
    address: 'Lavender Dr.',
    city: 'Ancaster',
    rink_type: 'outdoor',
    phone: '9055463747'
  },
  {
    name: 'Dundas Driving Park',
    address: 'Cross St. at Parkview Row',
    city: 'Dundas',
    rink_type: 'outdoor',
    phone: '9055463747'
  },
  {
    name: 'Little John Park',
    address: 'Little John Rd.',
    city: 'Dundas',
    rink_type: 'outdoor',
    phone: '9055463747'
  },
  {
    name: 'Sanctuary Park',
    address: '27 Sanctuary Dr.',
    city: 'Dundas',
    rink_type: 'outdoor',
    phone: '9055463747'
  },
  {
    name: 'Freelton Community Park',
    address: 'Freelton Road',
    city: 'Freelton',
    rink_type: 'outdoor',
    phone: '9055463747'
  },
  {
    name: 'Rosebough Park',
    address: 'Rosebough St.',
    city: 'Greensville',
    rink_type: 'outdoor',
    phone: '9055463747'
  }
])