$(document).ready(
    function () {
        $("button").click(alcoholLevel);

        function alcoholLevel() {
            // how many beers did you have
            var beers = $("#beer").val();
            beers = parseFloat(beers);

            //how much alcohol % does a beer have

            var alcoholContent = 0.54;

            //beer liquid ounces

            var beersDrank = beers * alcoholContent;

            //how many wine glasses did you have
            var wineGlasses = $("#wine").val();
            wineGlasses = parseFloat(wineGlasses);
            //how much alcohol % is in a glass

            var wineContent = 0.6;

            //wine liquid ounces

            var wineDrank = wineGlasses * wineContent;

            //how many shots did you have

            var shotsGlasses = $("#shots").val();
            shotsGlasses = parseFloat(shotsGlasses);

            //how much alcohol % is in a shot
            var shotsContent = 0.6;

            //shots liquid ounces
            var shotsDrank = shotsGlasses * shotsContent;

            var alcoholDrank = (beersDrank + wineDrank + shotsDrank) * 7.5;

            var weight = $("#weight").val();
            weight = parseFloat(weight);

            var hours = $("#hours").val();
            hours = parseFloat(hours);

            var totalWeight = alcoholDrank / weight;

            var totalHours = hours * 0.015

            var BAC = totalWeight - totalHours;

            //output
            $("#BAC").text(BAC.toFixed(3));

            $("p").show();
        }
    }

);