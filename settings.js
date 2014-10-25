/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 10/23/14.
 */

module.exports = {

  pointTables: {
    cicos_2014: [
      "Commercial Banks",
      "Offsite ATMs",
      "Postal Outlets",
      "Bank Customer Service Points",
      "MFIs"
    ]
//    library_2014: [
//      "Public Library",
//      "Village",
//      "Private Library",
//      "District"
//    ],
//    health_2014: [
//      "Sub Health Centres",
//      "ANM or District Training Centres",
//      "District Hospitals",
//      "Additional Primary Health Centres (APHC)",
//      "Community Health Centre (CHC)/First Referral Units",
//      "Nursing Schools",
//      "Approved Nursing Training Centres (Private Sector)",
//      "Sub Divisional District Hospitals",
//      "Medical Colleges and Hospitals",
//      "Primary Health Centre (PHC)",
//      "Private hospitals and clinics"
//    ],
//    agriculture_2014: [
//      "Dairy Processors",
//      "Day old chick hatcheries",
//      "Private sector Agricultural service providers",
//      "Government Vets",
//      "Market Locations",
//      "Agro-dealers",
//      "Warehouse/Storage/Aggregation Centres",
//      "Dairy chilling plants",
//      "Processors/value addition points",
//      "Farmer Organisations and Cooperatives",
//      "Artificial Insemination Centres",
//      "National/Regional/State Research Stations",
//      "Seed Multipliers"
//    ]
  },

  // PostGIS Database Connection
  postgres: {
    server: 'localhost',
    port: '5432',
    database: 'fsp',
    user: 'postgres',
    password: ''
  }

};