window.addEventListener("load", function (e) {
  const fullName = document.querySelector("#fullName");
  const email = document.querySelector("#email");
  const address = document.querySelector("#address");
  const city = document.querySelector("#city");
  const postalCode = document.querySelector("#postalCode");
  const date = document.querySelector("#date");
  const radio = document.querySelector("#radio");
  const form = document.querySelector("#myForm");

  const question = document.querySelector("#question");
  const comment = document.querySelector("#comment");
  const hiring = document.querySelector("#hiring");

  //reset the info when page is loaded
  fullName.value = '';
  email.value ='';
  address.vale ='';
  city.value ='';
  postalCode.value = '';
  date.value = '';
  hiring.checked = false;
  question.checked = false;
  comment.checked = false;

  // the flag to allow input box for hourly rate to appear only one and for question, comment button to remove child if only there is one
  let existedInput = false;

  //click the hiring radio button
  hiring.addEventListener("click", function (l) {
    if (existedInput === false) {
      const input = document.createElement("input");
      input.setAttribute("type", "number");
      input.setAttribute("id", "hourlyRate");
      input.setAttribute("placeholder", "Enter your hourly rate here...");

      const label = document.createElement("label");
      label.setAttribute("id", "hourlyLabel");
      label.setAttribute("for", "hourlyRate");
      label.innerHTML = "Hourly Rate:";

      radio.appendChild(label);
      radio.appendChild(input);
      existedInput = true;
      return existedInput;
    }
  });

  //click the question radio button
  question.addEventListener("click", function (e) {
    if (existedInput === true) {
      radio.removeChild(document.querySelector("#hourlyRate"));
      radio.removeChild(document.querySelector("#hourlyLabel"));
      existedInput = false;
      return existedInput;
    }
  });

  //click the comment radio button
  comment.addEventListener("click", function (j) {
    if (existedInput === true) {
      radio.removeChild(document.querySelector("#hourlyRate"));
      radio.removeChild(document.querySelector("#hourlyLabel"));
      existedInput = false;
      return existedInput;
    }
  });

  //click the submit button
  form.addEventListener("submit", function (e) {
    //in this part instead of have a <p></p> element to show the error, i show the error in red text in place holder instead
    //since I want to try how normal website does. so instead of pushing the messages and check the length of it to validate,
    //i set up the flag instead.

    //set the flag
    let checkValid = true;

    const hourly = document.querySelector("#hourlyRate");

    let regex =
      /[^DFIOQWUZ0123456789]\d[^DFIOQU0123456789]\s?\d[^DFIOQU0123456789]\d/;
    postalCode.value = postalCode.value.trim().toUpperCase();

    //check for date
    if (date.value === "" || date.value === null) {
      alert("Please enter a date!");
      date.focus();
      checkValid = false;
    }

    //check for postal code
    if (postalCode.value === "" || postalCode.value === null) {
      postalCode.placeholder = "Your postal code is missing!";
      postalCode.style.color = "red";
      postalCode.focus();
      checkValid = false;
    } else if (
      regex.test(postalCode.value) &&
      (postalCode.value.length === 7 || postalCode.value.length === 6)
    ) {
      if (postalCode.value[3] === " ") {
        postalCode.style.color = "grey";
      } else {
        postalCode.style.color = "grey";
        return (
          postalCode.value[0] +
          postalCode.value[1] +
          postalCode.value[2] +
          " " +
          postalCode.value[3] +
          postalCode.value[4] +
          postalCode.value[5]
        );
      }
    } else {
      postalCode.value = "";
      postalCode.placeholder = "Please enter the right Postal Code!";
      postalCode.style.color = "red";
      postalCode.focus();
      checkValid = false;
    }

    //check for city
    if ((city.value === "") | (city.value === null)) {
      city.placeholder = "Your city is missing!";
      city.style.color = "red";
      city.focus();
      checkValid = false;
    } else {
      city.style.color = "grey";
    }

    //check for address
    if (address.value === "" || address.value === null) {
      address.placeholder = "Your address is missing!";
      address.style.color = "red";
      address.focus();
      checkValid = false;
    } else {
      address.style.color = "grey";
    }

    //check for email
    if (email.value === "" || email.value === null) {
      email.placeholder = "Your email is missing!";
      email.style.color = "red";
      email.focus();
      checkValid = false;
    } else {
      email.style.color = "grey";
    }

    //check for name
    if (fullName.value === "" || fullName.value === null) {
      fullName.placeholder = "Your full name is missing!";
      fullName.style.color = "red";
      fullName.focus();
      checkValid = false;
    } else {
      fullName.style.color = "grey";
    }

    //checked if hiring button is checked to execute the codes below
    if (hiring.checked === true) {
      if (hourly.value === "" || hourly.value === null) {
        hourly.placeholder = "Your hourly rate is missing!";
        hourly.style.color = "red";
        hourly.focus();
        checkValid = false;
      } else if (hourly.value < 0) {
        hourly.value = "";
        hourly.placeholder = "Please enter a valid hourly rate!";
      } else {
        hourly.style.color = "grey";
      }
    }

    // check the flag
    if (checkValid === false) {
      e.preventDefault();
    }
  });
});
