var targetNumber = Math.floor((Math.random() * 50) + 1);



  $("#numberGuess").text(targetNumber);

  var counter = 0;

  // Now for the hard part. Creating multiple crystals each with their own unique number value.

  // We begin by expanding our array to include four options.
  var numberOptions = [9, 1, 5, 8];

  // Next we create a for loop to create crystals for every numberOption.
  for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageDisney = $("disney-image");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageDisney.addClass("disney-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageDisney.attr("src", "disney-image");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageDisney.attr("data-disneyvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#disney").append(imageDisney);
  }

  // This time, our click event applies to every single character on the page. Not just one.
  $(".disney-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var disneyValue = ($(this).attr("data-disneyvalue"));
    disneyValue = parseInt(disneyValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += disneyValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    }

  });