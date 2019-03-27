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
    $("#ingredient-input").val("")
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


    $("tbody").append("<tr><td><button>" + deletePantryItem + "</button></td><td>" + "<input type='checkbox'/>" + "</td><td class='itm'>" + name + "</td><td>" + amt + " oz" + "</td></tr>")
  });
});

function getValueUsingClass() {
  /* declare an checkbox array */
  var pantyIngredients = [];

  /* look for all checkboes that have a class 'chk' attached to it and check if it was checked */
  $(".itm:checked").each(function () {
    pantyIngredients.push($(this).val());
  });

  /* we join the array separated by the comma */
  var selected;
  selected = pantyIngredients.join(',');
  console.log(pantyIngredients)
  /* check if there is selected checkboxes, by default the length is 1 as it contains one single comma */
  if (selected.length > 0) {
    alert("You have selected " + selected);
  } else {
    alert("Please at least check one of the checkbox");
  }
}

// function getValueUsingParentTag() {
//   var chkArray = [];

//   /* look for all checkboes that have a parent id called 'checkboxlist' attached to it and check if it was checked */
//   $("#pantry-table input:checked").each(function () {
//     chkArray.push($(this).val());
//   });

//   /* we join the array separated by the comma */
//   var selected;
//   selected = chkArray.join(',');

//   /* check if there is selected checkboxes, by default the length is 1 as it contains one single comma */
//   if (selected.length > 0) {
//     alert("You have selected " + selected);
//   } else {
//     alert("Please at least check one of the checkbox");
//   }
// }
// $("input:checkbox[name=type]:checked").each(function () {
//   pantyIngredients.push($(this).val());
//   console.log(pantryIngredients)
// });
// var checkboxes = document.getElementsByName('name');
// var vals = "";
// for (var i = 0, n = checkboxes.length; i < n; i++) {
//   if (checkboxes[i].checked) {
//     vals += "," + checkboxes[i].value;
//   }
// }
// if (vals) vals = vals.substring(1);
//   $('.checkbox').click(function () {
//     var checkedValues = $('input:checkbox:checked').map(function () {
//       return this.value;
//     }).get().join(',');
//     $("#ingredient-input").append(checkedValues);
//   });
// });
//pantry ingredient search
// $('.checkbox').click(function () {
//   var checkedValues = $('input:checkbox:checked').map(function () {
//     return this.value;
//   }).get().join(',');
//   $("#ingredient-input").append(checkedValues);

// recipe search 

$("#search-ingredients").on("click", function (event) {
  event.preventDefault();
  // Initial array of movies


  // displayMovieInfo function re-renders the HTML to display the appropriate content

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

      var recipeDiv = $('<div>');
      var recipeImage = $('<img>');
      var recipeCaption = $('<div>');
      var recipeBtnDiv = $('<div>');
      var eda = (response.hits[i]);
      console.log(eda.recipe.label);
      // recipeDiv.attr("ingredients", eda.recipe.ingredientLines);
      recipeCaption.addClass('caption');
      recipeCaption.append($('<div>').text(eda.recipe.label).addClass('recipeName'));
      recipeCaption.addClass('text-center');
      recipeBtnDiv.append($('<a>').append($('<button>').addClass('btn recipeBtn').text('Go to recipe')).attr('href', response.hits[i].recipe.url).attr('target', '_blank'));
      recipeCaption.append(recipeBtnDiv);
      recipeImage.attr('src', eda.recipe.image);
      recipeDiv.addClass('thumbnail col-lg-4 recipe');
      recipeDiv.append(recipeImage);
      recipeDiv.append(recipeCaption);
      $("#recipe-view").append(recipeDiv);
      // for (var j = 0; j < eda.recipe.ingredients.text.length; j++) {
      //     console.log(eda.recipe.ingredients.text[j].length)
      // recipeDiv.attr("ingredients", JSON.stringify(eda[i].recipe.ingredients));
      //}
      clearInput();
    }






  });
});

