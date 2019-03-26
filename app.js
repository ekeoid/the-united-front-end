$("#add-ingredients").on("click", function (event) {
  event.preventDefault();
  // Initial array of movies
  var ingredients = [];

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
      recipeDiv.addClass('thumbnail col-lg-2 recipe');
      recipeDiv.append(recipeImage);
      recipeDiv.append(recipeCaption);
      $("#recipe-view").append(recipeDiv);
      // for (var j = 0; j < eda.recipe.ingredients.text.length; j++) {
      //     console.log(eda.recipe.ingredients.text[j].length)
      // recipeDiv.attr("ingredients", JSON.stringify(eda[i].recipe.ingredients));
      //}

    }






  });
});