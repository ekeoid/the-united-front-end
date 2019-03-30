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

function clearInput() {
  $("#ingredient-name-input").val("");
  $("#amount-input").val("");
  $("#ingredient-input").val("");
}

// pantry manipulation
$("document").ready(function () {

  getInput = function () {
    var ingName = $("#ingredient-name-input").val().trim();
    var amount = $("#amount-input").val().trim();

    var newPantryItem = {
      name: ingName,
      amnt: amount
    };


    //validation input function possible here
    database.ref().push(newPantryItem);
    clearInput();
  };

  $("#add-ingredient-btn").on("click", function (event) {
    // event.preventDefault();
    event.preventDefault();
    getInput();

    swal("Item Addded", {
      icon: "success",
      button: false,
      timer: 1500,
    });
  });

  $("table").on("click", "button", function () {
    $(this).closest("tr").remove();

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Pantry item!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your Pantry item has been deleted!", {
            icon: "success",
            button: false,
            timer: 1500,
          });
        } else {
          swal("Your Pantry is safe!", {
            button: false,
            timer: 1500,
          });
        }

      });
  });

  database.ref().on("child_added", function (snapshot) {
    var name = snapshot.val().name;
    var amt = snapshot.val().amnt;
    var deletePantryItem = "x";
    // var checkbox = document.createElement("INPUT");
    // checkbox.attr("type", "checkbox");

    var tag_tr = $("<tr>");
    var tag_button = $("<button>");
    var tag_input = $("<input>");

    var tag_td_c1 = $("<td>"); // delete
    var tag_td_c2 = $("<td>"); // checkbox
    var tag_td_c3 = $("<td>"); // name
    var tag_td_c4 = $("<td>"); // amount

    tag_td_c3.attr("class", "itm");
    tag_input.attr("type", "checkbox");
    tag_input.attr("class", "ingred-check");

    tag_button.text(deletePantryItem);

    tag_td_c1.append(tag_button);
    tag_td_c2.append(tag_input);
    tag_td_c3.text(name);
    tag_td_c4.text(amt + " oz");

    tag_tr.append(tag_td_c1, tag_td_c2, tag_td_c3, tag_td_c4);

    $("tbody").append(tag_tr);

    // $("tbody").append("<tr><td><button>" + deletePantryItem + "</button></td><td>" + "<input type='checkbox' class='ingred-check'/>" + "</td><td class='itm'>" + name + "</td><td>" + amt + " oz" + "</td></tr>");
  });

  // Find ingredient in Firebase and remove from Firebase 
  // Need to work on code, if no ingredient is found. === returns null for snapshot
  // snapshot.key doesnt work at location root
  var ingredientToDelete = "brown sugar";

  database.ref().orderByChild("name").equalTo(ingredientToDelete).on("value", function (snapshot) {
    console.log(snapshot.val());
    console.log(snapshot.key);
    snapshot.forEach(function (data) {
      console.log(data.key);
      database.ref().child(data.key).remove();
    });
  });

  // Check items in pantry to add to search
  // type=checkbox must be wrapped in <form></form>
  $("#pantryitem :checkbox").change(function () {
    // this will contain a reference to the checkbox   
    console.log("Hello");

    if (this.checked) {
      // the checkbox is now checked 
      console.log(this);
      console.log("hello");
    } else {
      // the checkbox is now no longer checked
    }
  });







  // swal("Item Removed from Pantry...");


  // database.ref().on("child_added", function (snapshot) {
  // 	var name = snapshot.val().name;
  // 	var amt = snapshot.val().amnt;
  // 	var deletePantryItem = "x";
  // 	// var checkbox = document.createElement("INPUT");
  // 	// checkbox.attr("type", "checkbox");


  // 	$("tbody").append("<tr><td><button>" + deletePantryItem + "</button></td><td>" + "<input type='checkbox' class='ingred-check'/>" + "</td><td class='itm'>" + name + "</td><td>" + amt + " oz" + "</td></tr>")er
  // });
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
    console.log(itemsToSearch.join());
  });
});



// recipe search 

$("#search-ingredients").on("click", function (event) {
  event.preventDefault();
  // Initial array of movies
  // $("#recipeDisplay").empty();


  var ingredientSearch = $("#ingredient-input").val();
  var queryURL = "https://api.edamam.com/search?q=" + ingredientSearch + "&app_id=c43b2cf7&app_key=01c9ac7f0de42acc99556befcd0cf4c8"


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
      recipeBtnDiv.append($('<a>').append($('<button>').addClass('btn btn-success recipeBtn').text('Go to recipe')).attr('href', response.hits[i].recipe.url).attr('target', '_blank'));
      recipeCaption.append(recipeBtnDiv);
      recipeImage.attr('src', eda.recipe.image);
      recipeImage.addClass("recImg")
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

