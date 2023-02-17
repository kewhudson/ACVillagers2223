function SpeciesTranslation(props){

    let speciesTrad;

    switch (props) {
        case "Alligator": speciesTrad = "Coccodrillo"; break;
        case "Anteater": speciesTrad = "Formichiere"; break;
        case "Bear": speciesTrad = "Orso"; break;
        case "Bird": speciesTrad = "Uccello"; break;
        case "Bull": speciesTrad = "Toro"; break;
        case "Cat": speciesTrad = "Gatto"; break;
        case "Cow": speciesTrad = "Mucca"; break;
        case "Cub": speciesTrad = "Orsetto"; break;
        case "Deer": speciesTrad = "Cervo"; break;
        case "Dog": speciesTrad = "Cane"; break;
        case "Duck": speciesTrad = "Anatra"; break;
        case "Eagle": speciesTrad = "Aquila/Falco"; break;
        case "Elephant": speciesTrad = "Elefante"; break;
        case "Frog": speciesTrad = "Rana"; break;
        case "Goat": speciesTrad = "Capra"; break;
        case "Hamster": speciesTrad = "Criceto"; break;
        case "Hippo": speciesTrad = "Ippopotamo"; break;
        case "Horse": speciesTrad = "Cavallo"; break;
        case "Kangaroo": speciesTrad = "Canguro"; break;
        case "Lion": speciesTrad = "Leone"; break;
        case "Monkey": speciesTrad = "Scimmia"; break;
        case "Mouse": speciesTrad = "Topo"; break;
        case "Octopus": speciesTrad = "Polpo"; break;
        case "Ostrich": speciesTrad = "Struzzo"; break;
        case "Penguin": speciesTrad = "Pinguino"; break;
        case "Pig": speciesTrad = "Maiale"; break;
        case "Rabbit": speciesTrad = "Coniglio"; break;
        case "Rhino": speciesTrad = "Rinoceronte"; break;
        case "Sheep": speciesTrad = "Pecora"; break;
        case "Squirrel": speciesTrad = "Scoiattolo"; break;
        case "Tiger": speciesTrad = "Tigre"; break;
        case "Wolf": speciesTrad = "Lupo"; break;




        default: speciesTrad = props;
    }

    return speciesTrad;
}

export default SpeciesTranslation;