function GenderTranslation(gender){

    let genderTrad;

    switch (gender) {
        case "Male": genderTrad = "Maschio"; break;
        case "Female": genderTrad = "Femmina"; break;

        default: genderTrad = gender;
    }

    return genderTrad;
}

export default GenderTranslation;