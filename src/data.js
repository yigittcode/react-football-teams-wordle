const teams = [
    "REAL MADRID",
    "BARCELONA",
    "MANCHESTER UNITED",
    "LIVERPOOL",
    "BAYERN MUNICH",
    "BORUSSIA DORTMUND",
    "PARIS SAINT-GERMAIN",
    "JUVENTUS",
    "AC MILAN",
    "INTER MILAN",
    "ARSENAL",
    "CHELSEA",
    "MANCHESTER CITY",
    "ATLETICO MADRID",
    "AJAX",
    "BENFICA",
    "PORTO",
    "GALATASARAY",
    "FENERBAHÇE",
    "BEŞİKTAŞ",
    "BOCA JUNIORS",
    "RIVER PLATE",
    "FLAMENGO",
    "SANTOS",
    "AS ROMA",
    "NAPOLI",
    "TOTTENHAM HOTSPUR",
    "RB LEIPZIG",
    "LYON",
    "MONACO",
    "WESTHAM UNITED",
    "NEWCASTLE UNITED",
    "ASTON VILLA",
    "BRIGHTON",
    "EVERTON",
    "CRYSTAL PALACE",
    "BRENTFORD",
    "FULHAM"
];

function getRandomTeam() {
    return teams[Math.floor(Math.random() * teams.length)];
}

export { teams, getRandomTeam };