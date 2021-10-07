const people =[{
    "id": 1,
    "first_name": "Jessalyn",
    "last_name": "Childes",
    "email": "jchildes0@bbc.co.uk",
    "gender": "Bigender",
    "ip_address": "141.208.195.40"
  }, {
    "id": 2,
    "first_name": "Marti",
    "last_name": "Corking",
    "email": "mcorking1@ifeng.com",
    "gender": "Male",
    "ip_address": "154.30.160.138"
  }, {
    "id": 3,
    "first_name": "Bartram",
    "last_name": "Mulford",
    "email": "bmulford2@photobucket.com",
    "gender": "Bigender",
    "ip_address": "93.102.156.114"
  }, {
    "id": 4,
    "first_name": "Lindon",
    "last_name": "McGlynn",
    "email": "lmcglynn3@addtoany.com",
    "gender": "Male",
    "ip_address": "220.18.64.124"
  }, {
    "id": 5,
    "first_name": "Mart",
    "last_name": "Duinbleton",
    "email": "mduinbleton4@tuttocitta.it",
    "gender": "Female",
    "ip_address": "173.225.100.74"
  }, {
    "id": 6,
    "first_name": "Adoree",
    "last_name": "Toynbee",
    "email": "atoynbee5@boston.com",
    "gender": "Male",
    "ip_address": "155.248.60.21"
  }, {
    "id": 7,
    "first_name": "Benny",
    "last_name": "Delouch",
    "email": "bdelouch6@ft.com",
    "gender": "Genderfluid",
    "ip_address": "97.221.51.230"
  }, {
    "id": 8,
    "first_name": "Korella",
    "last_name": "Heathcote",
    "email": "kheathcote7@mediafire.com",
    "gender": "Agender",
    "ip_address": "16.225.182.133"
  }, {
    "id": 9,
    "first_name": "Reinhard",
    "last_name": "Ashment",
    "email": "rashment8@sakura.ne.jp",
    "gender": "Female",
    "ip_address": "13.157.72.71"
  }, {
    "id": 10,
    "first_name": "Jaye",
    "last_name": "Nel",
    "email": "jnel9@kickstarter.com",
    "gender": "Genderqueer",
    "ip_address": "96.166.201.252"
  }];

const inventors = [{
    "id": 1,
    "first_name": "Eli",
    "last_name": "Deluca",
    "email": "edeluca0@cpanel.net",
    "gender": "Genderfluid",
    "ip_address": "64.143.95.147"
  }, {
    "id": 2,
    "first_name": "Lock",
    "last_name": "Overell",
    "email": "loverell1@twitpic.com",
    "gender": "Genderqueer",
    "ip_address": "237.50.255.56"
  }, {
    "id": 3,
    "first_name": "Cesaro",
    "last_name": "Etteridge",
    "email": "cetteridge2@xrea.com",
    "gender": "Female",
    "ip_address": "5.150.38.87"
  }, {
    "id": 4,
    "first_name": "Lib",
    "last_name": "Pacey",
    "email": "lpacey3@ehow.com",
    "gender": "Non-binary",
    "ip_address": "32.1.211.95"
  }, {
    "id": 5,
    "first_name": "Grissel",
    "last_name": "Hartley",
    "email": "ghartley4@skype.com",
    "gender": "Genderqueer",
    "ip_address": "149.131.101.164"
  }, {
    "id": 6,
    "first_name": "Cort",
    "last_name": "Peasee",
    "email": "cpeasee5@wikispaces.com",
    "gender": "Female",
    "ip_address": "230.240.43.204"
  }, {
    "id": 7,
    "first_name": "Carlen",
    "last_name": "Lyles",
    "email": "clyles6@boston.com",
    "gender": "Male",
    "ip_address": "69.132.93.91"
  }, {
    "id": 8,
    "first_name": "Nerissa",
    "last_name": "Bruin",
    "email": "nbruin7@4shared.com",
    "gender": "Agender",
    "ip_address": "176.34.24.49"
  }, {
    "id": 9,
    "first_name": "Dinny",
    "last_name": "Janks",
    "email": "djanks8@diigo.com",
    "gender": "Genderqueer",
    "ip_address": "118.26.37.205"
  }, {
    "id": 10,
    "first_name": "Bernardina",
    "last_name": "Tinkham",
    "email": "btinkham9@woothemes.com",
    "gender": "Genderqueer",
    "ip_address": "67.46.234.160"
  }];

const genderQueerInventors = inventors.filter(function(inventor){
    if(inventor.gender === "Genderqueer"){
        return true;
    }
});

console.table(genderQueerInventors);


fecha = [];



console.log(fecha.sort((a,b) => a.nacimiento - b.nacimiento));

