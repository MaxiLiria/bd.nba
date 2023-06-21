const mongoose = require('mongoose');

const Team = require('../models/teams.models');

const arrayTeams = [    
      {
        foto: "../escudos/atlanta.gif",
        nombre: "Atlanta Hawks",
        conferencia: "Este",
        jugadores: [
          "Trae Young",
          "John Collins",
          "Clint Capela",
          "Bogdan Bogdanović",
          "Danilo Gallinari"
        ]
      },
      {
        foto: "../escudos/boston .jpeg",
        nombre: "Boston Celtics",
        conferencia: "Este",
        jugadores: [
          "Jayson Tatum",
          "Jaylen Brown",
          "Kemba Walker",
          "Marcus Smart",
          "Al Horford"
        ]
      },
      {
        foto: "../escudos/brooklyn nets.png",
        nombre: "Brooklyn Nets",
        conferencia: "Este",
        jugadores: [
          "Kevin Durant",
          "James Harden",
          "Kyrie Irving",
          "Joe Harris",
          "Blake Griffin"
        ]
      },
      {
        foto: "../escudos/charlotte hornets.png",
        nombre: "Charlotte Hornets",
        conferencia: "Este",
        jugadores: [
          "LaMelo Ball",
          "Terry Rozier",
          "Gordon Hayward",
          "Miles Bridges",
          "PJ Washington"
        ]
      },
      {
        foto: "../escudos/chicago bulls.png",
        nombre: "Chicago Bulls",
        conferencia: "Este",
        jugadores: [
          "Zach LaVine",
          "Nikola Vučević",
          "Lauri Markkanen",
          "Coby White",
          "Patrick Williams"
        ]
      },
      {
        foto: "../escudos/Cleveland_Cavaliers.png",
        nombre: "Cleveland Cavaliers",
        conferencia: "Este",
        jugadores: [
          "Collin Sexton",
          "Darius Garland",
          "Kevin Love",
          "Jarrett Allen",
          "Isaac Okoro"
        ]
      },
      {
        foto: "../escudos/Dallas-Mavericks.png",
        nombre: "Dallas Mavericks",
        conferencia: "Oeste",
        jugadores: [
          "Luka Dončić",
          "Kristaps Porziņģis",
          "Tim Hardaway Jr.",
          "Jalen Brunson",
          "Dwight Powell"
        ]
      },
      {
        foto: "../escudos/Denver-Nuggets.png",
        nombre: "Denver Nuggets",
        conferencia: "Oeste",
        jugadores: [
          "Nikola Jokić",
          "Jamal Murray",
          "Michael Porter Jr.",
          "Aaron Gordon",
          "Will Barton"
        ]
      },
      {
        foto: "../escudos/detroit pistons.png",
        nombre: "Detroit Pistons",
        conferencia: "Este",
        jugadores: [
          "Cade Cunningham",
          "Killian Hayes",
          "Jerami Grant",
          "Isaiah Stewart",
          "Saddiq Bey"
        ]
      },
      {
        foto: "../escudos/Golden-State-Warriors.png",
        nombre: "Golden State Warriors",
        conferencia: "Oeste",
        jugadores: [
          "Stephen Curry",
          "Klay Thompson",
          "Draymond Green",
          "Andrew Wiggins",
          "James Wiseman"
        ]
      },
      {
        foto: "../escudos/houston_rockets.png",
        nombre: "Houston Rockets",
        conferencia: "Oeste",
        jugadores: [
          "Christian Wood",
          "Kevin Porter Jr.",
          "Jalen Green",
          "John Wall",
          "Eric Gordon"
        ]
      },
      {
        foto: "../escudos/idiana pacers.jpeg",
        nombre: "Indiana Pacers",
        conferencia: "Este",
        jugadores: [
          "Malcolm Brogdon",
          "Domantas Sabonis",
          "Caris LeVert",
          "Myles Turner",
          "TJ Warren"
        ]
      },
      {
        foto: "../escudos/Los-Angeles-Clippers.jpeg",
        nombre: "LA Clippers",
        conferencia: "Oeste",
        jugadores: [
          "Kawhi Leonard",
          "Paul George",
          "Reggie Jackson",
          "Ivica Zubac",
          "Marcus Morris Sr."
        ]
      },
      {
        foto: "../escudos/lakers.png",
        nombre: "Los Angeles Lakers",
        conferencia: "Oeste",
        jugadores: [
          "LeBron James",
          "Anthony Davis",
          "Russell Westbrook",
          "Dennis Schröder",
          "Kentavious Caldwell-Pope"
        ]
      },
      {
        foto: "../escudos/Memphis-Grizzlies.png",
        nombre: "Memphis Grizzlies",
        conferencia: "Oeste",
        jugadores: [
          "Ja Morant",
          "Jaren Jackson Jr.",
          "Dillon Brooks",
          "Jonas Valančiūnas",
          "Kyle Anderson"
        ]
      },
      {
        foto: "../escudos/miami.png",
        nombre: "Miami Heat",
        conferencia: "Este",
        jugadores: [
          "Jimmy Butler",
          "Bam Adebayo",
          "Tyler Herro",
          "Duncan Robinson",
          "Victor Oladipo"
        ]
      },
      {
        foto: "../escudos/milwaukee.png",
        nombre: "Milwaukee Bucks",
        conferencia: "Este",
        jugadores: [
          "Giannis Antetokounmpo",
          "Khris Middleton",
          "Jrue Holiday",
          "Brook Lopez",
          "Donte DiVincenzo"
        ]
      },
      {
        foto: "../escudos/Minnesota-Timberwolves.png",
        nombre: "Minnesota Timberwolves",
        conferencia: "Oeste",
        jugadores: [
          "Karl-Anthony Towns",
          "D'Angelo Russell",
          "Anthony Edwards",
          "Malik Beasley",
          "Jaden McDaniels"
        ]
      },
      {
        foto: "../escudos/new-orleans-pelicans.png",
        nombre: "New Orleans Pelicans",
        conferencia: "Oeste",
        jugadores: [
          "Zion Williamson",
          "Brandon Ingram",
          "Lonzo Ball",
          "Jaxson Hayes",
          "Josh Hart"
        ]
      },
      {
        foto: "../escudos/new-york-knicks.png",
        nombre: "New York Knicks",
        conferencia: "Este",
        jugadores: [
          "Julius Randle",
          "RJ Barrett",
          "Derrick Rose",
          "Mitchell Robinson",
          "Nerlens Noel"
        ]
      },
      {
        foto: "../escudos/Oklahoma-City-Thunder.png",
        nombre: "Oklahoma City Thunder",
        conferencia: "Oeste",
        jugadores: [
          "Shai Gilgeous-Alexander",
          "Lu Dort",
          "Aleksej Pokusevski",
          "Darius Bazley",
          "Isaiah Roby"
        ]
      },
      {
        foto: "../escudos/Orlando-Magic.png",
        nombre: "Orlando Magic",
        conferencia: "Este",
        jugadores: [
          "Jonathan Isaac",
          "Markelle Fultz",
          "Cole Anthony",
          "Mo Bamba",
          "Chuma Okeke"
        ]
      },
      {
        foto: "../escudos/Philadelphia-76ers.png",
        nombre: "Philadelphia 76ers",
        conferencia: "Este",
        jugadores: [
          "Joel Embiid",
          "Ben Simmons",
          "Tobias Harris",
          "Seth Curry",
          "Danny Green"
        ]
      },
      {
        foto: "../escudos/Phoenix.jpeg",
        nombre: "Phoenix Suns",
        conferencia: "Oeste",
        jugadores: [
          "Devin Booker",
          "Chris Paul",
          "Deandre Ayton",
          "Mikal Bridges",
          "Jae Crowder"
        ]
      },
      {
        foto: "../escudos/portland.jpeg",
        nombre: "Portland Trail Blazers",
        conferencia: "Oeste",
        jugadores: [
          "Damian Lillard",
          "CJ McCollum",
          "Jusuf Nurkić",
          "Norman Powell",
          "Robert Covington"
        ]
      },
      {
        foto: "../escudos/Sacramento-Kings.jpeg",
        nombre: "Sacramento Kings",
        conferencia: "Oeste",
        jugadores: [
          "De'Aaron Fox",
          "Tyrese Haliburton",
          "Harrison Barnes",
          "Marvin Bagley III",
          "Richaun Holmes"
        ]
      },
      {
        foto: "../escudos/san antonio spurs",
        nombre: "San Antonio Spurs",
        conferencia: "Oeste",
        jugadores: [
          "Dejounte Murray",
          "Derrick White",
          "Keldon Johnson",
          "Jakob Poeltl",
          "Lonnie Walker IV"
        ]
      },
      {
        foto: "../escudos/toronto.png",
        nombre: "Toronto Raptors",
        conferencia: "Este",
        jugadores: [
          "Pascal Siakam",
          "Fred VanVleet",
          "OG Anunoby",
          "Chris Boucher",
          "Gary Trent Jr."
        ]
      },
      {
        foto: "../escudos/Utah.png",
        nombre: "Utah Jazz",
        conferencia: "Oeste",
        jugadores: [
          "Donovan Mitchell",
          "Rudy Gobert",
          "Mike Conley",
          "Jordan Clarkson",
          "Joe Ingles"
        ]
      },
      {
        foto: "../escudos/Washington-Wizard.png",
        nombre: "Washington Wizards",
        conferencia: "Este",
        jugadores: [
          "Bradley Beal",
          "Russell Westbrook",
          "Rui Hachimura",
          "Thomas Bryant",
          "Davis Bertans"
        ]
      }
    ]
 


mongoose.connect("mongodb+srv://root:root@cluster0.fj6svl9.mongodb.net/teams?retryWrites=true&w=majority")
.then(async () => {
    const allTeams = await Team.find();
    if(allTeams.length > 0){
        await Team.collection.drop();
        console.log("Equipos borrados");
    }
})
.catch((error) => console.log("error borrando equipos", error))
.then(async () => {
    const teamMap = arrayTeams.map((team) => new Team(team));
    await Team.insertMany(teamMap);
    console.log("Equipos insertados");
})
.catch((error) => console.log("error insertando equipos", error))
.finally(() => mongoose.disconnect());


