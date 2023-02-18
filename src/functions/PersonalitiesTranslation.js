function PersonalitiesTranslation(personalita){

    let personalityTrad;

    switch (personalita) {
        case "Jock": personalityTrad = "Sportivo"; break;
        case "Lazy": personalityTrad = "Pigro"; break;
        case "Normal": personalityTrad = "Normale"; break;
        case "Sisterly": personalityTrad = "Gentile"; break;
        case "Smug": personalityTrad = "Snob"; break;
        case "Cranky": personalityTrad = "Bisbetico"; break;
        case "Peppy": personalityTrad = "Solare"; break;
        case "Snooty": personalityTrad = "Spavaldo"; break;

        default: personalityTrad = personalita;
    }

    return personalityTrad;
}

export default PersonalitiesTranslation;