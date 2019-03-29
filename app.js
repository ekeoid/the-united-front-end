var config = {
  apiKey: "AIzaSyAYlkF8wl7rm-QDfZPqda4RsKcmoNxQxAY",
  authDomain: "autochef-8f5c0.firebaseapp.com",
  databaseURL: "https://autochef-8f5c0.firebaseio.com",
  projectId: "autochef-8f5c0",
  storageBucket: "autochef-8f5c0.appspot.com",
  messagingSenderId: "482893096044"
};
firebase.initializeApp(config);


var database = firebase.database();
//pantry manipulation
$("document").ready(function () {

  getInput = function () {
    var ingName = $("#ingredient-name-input").val().trim();
    var amount = $("#amount-input").val().trim();

    var newPantryItem = {
      name: ingName,
      amnt: amount
    };

    database.ref().push(newPantryItem);
    clearInput();
  };

  clearInput = function () {
    $("#ingredient-name-input").val("");
    $("#amount-input").val("");
    $("#ingredient-input").val("");

  };

  $("#add-ingredient-btn").on("click", function (event) {
    // event.preventDefault();
    event.preventDefault();
    getInput();
    //this is a placeholder alert for testing
    alert("item addded");
  });

  $("table").on("click", "button", function () {
    $(this).closest("tr").remove();
    //this is a placeholder alert for testing
    alert("removed from pantry...");
  });

  database.ref().on("child_added", function (snapshot) {
    var name = snapshot.val().name;
    var amt = snapshot.val().amnt;
    var deletePantryItem = "x";
    // var checkbox = document.createElement("INPUT");
    // checkbox.attr("type", "checkbox");


    $("tbody").append("<tr><td><button>" + deletePantryItem + "</button></td><td>" + "<input type='checkbox' class='ingred-check'/>" + "</td><td class='itm'>" + name + "</td><td>" + amt + " oz" + "</td></tr>")
  });
  // Check items in pantry to add to search
  var itemsToSearch = [];
  $(document).on("click", ".ingred-check", function () {
    var item = $(this).parent().parent().find(".itm").text();

    if (this.checked) {
      itemsToSearch.push(item);
    } else {
      itemsToSearch.splice(itemsToSearch.indexOf(item), 1);
    }
    console.log(itemsToSearch);
  });
});



// recipe search 

$("#search-ingredients").on("click", function (event) {
  event.preventDefault();
  // Initial array of movies
  // $("#recipeDisplay").empty();


  var ingredientSearch = $("#ingredient-input").val();
  var queryURL = "https://api.edamam.com/search?q=" + ingredientSearch + "&app_id=c43b2cf7&app_key=01c9ac7f0de42acc99556befcd0cf4c8&count=3"


  //function displayRecipes() {
  // Creating an AJAX call for the specific recipe button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    console.log(response)
    console.log(response.hits)
    for (var i = 0; i < response.hits.length; i++) {
      console.log(response.hits[i].recipe);

      var recipeDiv = $('<div id="recipe-card">');
      var recipeImage = $('<img>');
      var recipeCaption = $('<div>');
      var recipeBtnDiv = $('<div>');
      var eda = (response.hits[i]);
      console.log(eda.recipe.label);
      // recipeDiv.attr("ingredients", eda.recipe.ingredientLines);
      recipeCaption.addClass('caption');
      recipeCaption.append($('<div>').text(eda.recipe.label).addClass('recipeName'));
      recipeCaption.addClass('text-center');
      recipeBtnDiv.append($('<a>').append($('<button>').addClass('btn btn-warning recipeBtn').text('Go to recipe')).attr('href', response.hits[i].recipe.url).attr('target', '_blank'));
      recipeCaption.append(recipeBtnDiv);
      recipeImage.attr('src', eda.recipe.image);
      // recipeImage.addClass('mx-auto');
      recipeDiv.addClass('thumbnail col-lg-4 recipe');
      recipeDiv.append(recipeImage);
      recipeDiv.append(recipeCaption);
      $("#recipeDisplay").append(recipeDiv);
      // for (var j = 0; j < eda.recipe.ingredients.text.length; j++) {
      //     console.log(eda.recipe.ingredients.text[j].length)
      // recipeDiv.attr("ingredients", JSON.stringify(eda[i].recipe.ingredients));
      //}
      clearInput();
    }






  });
});

