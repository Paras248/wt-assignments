document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
    let accomodation = document.getElementById("accomodation").value;

    let initials = document.getElementById("initials").value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;

    let eightteenPlus = document.getElementById("eighteenPlus").value;
    let twoToSeventeen = document.getElementById("twoToSeventeen").value;
    let lessThanTwo = document.getElementById("lessThanTwo").value;

    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phone").value;

    let checkIn = document.getElementById("checkIn").value;
    let checkOut = document.getElementById("checkOut").value;

    let equipmentType = document.getElementById("equipment").value;
    let requiredServices = document.getElementById("requiredService").value;
    let comment = document.getElementById("comment").value;

    let slideOuts = document.getElementById("slideOuts").checked ? "yes" : "no";
    let pets = document.getElementById("pets").checked ? "yes" : "no";

    document.getElementById("form").addEventListener("reset", () => {
        accomodation = "";
        firstName = "";
        lastName = "";
        eightteenPlus = "";
        lessThanTwo = "";
        twoToSeventeen = "";
        email = "";
        phoneNumber = "";
        checkOut = "";
        checkIn = "";
        equipmentType = "";
        requiredServices = "";
        comment = "";
    });

    const selectValues = {
        accomodation,
        initials,
        firstName,
        lastName,
        eightteenPlus,
        twoToSeventeen,
        lessThanTwo,
        email,
        phoneNumber,
        checkIn,
        checkOut,
        equipmentType,
        slideOuts,
        requiredServices,
        pets,
        comment,
    };
    for (fields in selectValues) {
        console.log(selectValues[fields]);
        if (`${selectValues[fields]}`.trim().length === 0) {
            alert("Please Enter all fields");
            return;
        }
    }

    let string = `accomodation: ${accomodation}
        fullname: ${initials}. ${firstName} ${lastName}
        18+: ${eightteenPlus}, 2-17: ${twoToSeventeen}, <2: ${lessThanTwo}
        email: ${email}, contact ${phoneNumber}
        checkin: ${checkIn}, checkout: ${checkOut}
        equipment type: ${equipmentType}, slideouts: ${slideOuts}
        required services: ${requiredServices}
        pets: ${pets}
        comments: ${comment}
        `;

    alert(string);
});
