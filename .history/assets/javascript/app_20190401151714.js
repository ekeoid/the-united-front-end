var config = {
    apiKey: "AIzaSyAYlkF8wl7rm-QDfZPqda4RsKcmoNxQxAY",
    authDomain: "autochef-8f5c0.firebaseapp.com",
    databaseURL: "https://autochef-8f5c0.firebaseio.com",
    projectId: "autochef-8f5c0",
    storageBucket: "autochef-8f5c0.appspot.com",
    messagingSenderId: "482893096044"
    // apiKey: "AIzaSyCoVXMUeHCQcOXm7BMy3bugGIqS96RVHMg",
    // authDomain: "autochef-cb7b1.firebaseapp.com",
    // databaseURL: "https://autochef-cb7b1.firebaseio.com",
    // projectId: "autochef-cb7b1",
    // storageBucket: "autochef-cb7b1.appspot.com",
    // messagingSenderId: "665438999544"
};

firebase.initializeApp(config);

var database = firebase.database();

/* ===== Categories Constructor ===== */
/**************************************/
class Categories {
    constructor() {
        // Format: {name: "", ingredients: [""] , link: ""}
        this.category = [];
    }

    get list() {
        return this.category;
    }

    get getCategories() {
        var categoryList = [];
        for (var i = 0; i < this.category.length; i++) {
            categoryList.push(this.category[i].name);
        }
        return categoryList;
    }

    get getLinks() {
        var linkList = [];
        for (var i = 0; i < this.category.length; i++) {
            linkList.push(this.category[i].link);
        }
        return linkList;
    }

    getIngredients(index) {
        var ingredientList = [];
        for (var i = 0; i < this.category[index].ingredients.length; i++) {
            ingredientList.push(this.category[index].ingredients[i]);
        }
        return ingredientList;
    }

    capitalize(string) {
        string = string.trim();
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    addCategory(value) {
        var array = value.split(",");

        for (var i = 0; i < array.length; i++) {
            array[i] = this.capitalize(array[i]);

            if (this.getCategories.indexOf(array[i]) == -1) {
                this.category.push({
                    name: array[i],
                    ingredients: [],
                    link: ""
                });
            }
        }
    }

    addIngredient(valueCat, valueIng) {
        var index = this.getCategories.indexOf(this.capitalize(valueCat));
        var array = valueIng.split(",");

        for (var i = 0; i < array.length; i++) {
            array[i] = this.capitalize(array[i]);
            if (this.getIngredients(index).indexOf(array[i]) == -1) {
                this.category[index].ingredients.push(array[i]);
            }
        }
    }

    addLink(valueCat, valueLink) {
        var index = this.getCategories.indexOf(this.capitalize(valueCat));
        this.category[index].link = valueLink;
    }
}

function loadList() { // function to contain category / ingredient addition
    list.addCategory("Dairy, Vegetables, Fruits, Meat, Grains, Spices, Sweeteners, Fish, Alcohol, Condiments, Beverages, Snacks");

    list.addLink("Dairy", "assets/images/dairy-icon.png");
    list.addLink("Vegetables", "assets/images/vegetables-icon.png");
    list.addLink("Fruits", "assets/images/fruits-icon.png");
    list.addLink("Meat", "assets/images/meat-icon.png");
    list.addLink("Grains", "assets/images/grains-icon.png");
    list.addLink("Spices", "assets/images/spices-icon.png");
    list.addLink("Sweeteners", "assets/images/sweeteners-icon.png");
    list.addLink("Fish", "assets/images/fish-icon.png");
    list.addLink("Alcohol", "assets/images/alcohol-icon.png");
    list.addLink("Condiments", "assets/images/condiments-icon.png");
    list.addLink("Beverages", "assets/images/beverages-icon.png");
    list.addLink("Snacks", "assets/images/snacks-icon.png");

    list.addIngredient("Dairy", "butter, milk, yogurt, cream, cream cheese, whipped cream");
    list.addIngredient("Vegetables", "onions, broccoli, basil, cucumbers, green beans, corn, potato, spinach, lettuce, cabbage, cauliflower, garlic, sweet potato, radish, pumpkin, asparagus, brussel sprouts, carrot, turnip, eggplant, peas, onions, parsnips, kale, bell pepper, beets, okra, leeks, shallots");
    list.addIngredient("Fruits", "lemon, apple, banana, lime, strawberry, orange, pineapple, mango, guava, papaya, avocado, grapefruit, watermelon, tomato, plum, jackfruit, coconut, pear, apricot, pomegranate, cherry, blackberry, blueberry, honeydew, grape, kumquat, nectarine, persimmon, cranberry, durian, lychee, tangerine, elderberry, kiwi, peach, clementine");
    list.addIngredient("Meat", "lamb, meatballs, goat, veal, chicken, bacon, ground beef, sausage, ham, turkey, venison, salami, pork");
    list.addIngredient("Grains", "barley, bulgur, quinoa, farro, kasha, teff, sorghum, buckwheat, cereal, rice, pasta, flour, oats, rye, millet, bread");
    list.addIngredient("Spices", "ginger, cumin, nutmeg, coriander, saffron, turmeric, garlic, paprika, cardamom, pepper, salt");
    list.addIngredient("Sweeteners", "sugar ,honey, maple syrup, brown sugar, corn syrup, molasses");
    list.addIngredient("Fish", "cafish, tilapia, anchovy, cod, grouper, herring, snapper, haddock, barramundi, perch, bass, tuna, mahi mahi, salmon, carp, marlin, eel, sole, trout, flounder, halibut");
    list.addIngredient("Alcohol", "ale, lager, white wine, beer, red wine, vodka, rum, whiskey, tequila, sake");
    list.addIngredient("Condiments", "barbecue sauce, mayonnaise, mustard, ketchup, vinegar, tabasco, sriracha, oyster sauce, soy sauce, buffalo sauce");
    list.addIngredient("Beverages", "hot chocolate, coffee, lemonade, ginger ale, chocolate milk, milk, tea, soda, juice, espresso, lassi, amazake, milkshake, smoothie");
    list.addIngredient("Snacks", "chocolate, apple sauce, jam, peanut butter, grape jelly, jello, corn chips, potato chips, caramel, fudge, cookies, donuts, pancakes, candy, marshmellow, toffee, graham crackers, churros, scones, toaster pastry, ");
}

function printList() { // function to list all category / ingredient HTML
    for (var x = 0; x < list.getCategories.length; x++) {
        var category = list.getCategories[x];
        var link = list.getLinks[x];

        var tag_button = $("<button>");
        var tag_img = $("<img>");
        var tag_div_1 = $("<div>");
        var tag_div_2 = $("<div>");
        var tag_div_3 = $("<div>");

        tag_img.attr("src", link);
        tag_img.css("display", "inline-block");
        tag_img.css("text-align", "left");
        tag_img.css("padding-right", "10px");

        tag_button.attr("class", "btn btn-primary text-left category");
        tag_button.attr("type", "button");
        tag_button.attr("data-toggle", "collapse");
        tag_button.attr("data-target", "#" + category + "-dropdown-section");
        tag_button.attr("aria-expanded", "false");
        tag_button.attr("aria-controls", category + "-dropdown-section");
        tag_button.css("padding-left", "25%");

        tag_button.append(tag_img, category);

        tag_div_1.attr("class", "collapse");
        tag_div_1.attr("id", category + "-dropdown-section");

        tag_div_2.attr("class", "card card-body");

        tag_div_3.attr("class", "form-check");

        for (var y = 0; y < list.getIngredients(x).length; y++) {
            var ingredient = list.getIngredients(x)[y];

            var tag_input = $("<input>");
            var tag_label = $("<label>");

            tag_input.attr("class", "form-check-input ingredient");
            tag_input.attr("type", "checkbox");

            tag_label.attr("class", "form-check-label");
            tag_label.text(ingredient);

            tag_div_3.append(tag_input, tag_label, "</br>");
        }

        tag_div_2.append(tag_div_3);
        tag_div_1.append(tag_div_2);

        $("#food-items > .categories-card").append(tag_button, tag_div_1, "</br>");
    }
}

var list = new Categories();
localStorage.setItem("inPantryList", null);
loadList();
printList();

/* ======= Pantry Manipulation ====== */
/**************************************/

function clearInput() {
    $("#ingredient-name-input").val("");
    $("#amount-input").val("");
    $("#ingredient-input").val("");
}

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

    $("#add-ingredient-btn").on("click", function (event) {
        event.preventDefault();
        getInput();

        swal("Item Addded", {
            icon: "success",
            button: false,
            timer: 1500,
        });
    });

    // saving the users name to local storage
    $("#submitName").on("click", function () {
        if (($("#name-input").val().trim() !== "")) {
            var userName = $("#nameEntryModal #name-input").val().trim();
            var userNameDisplay = ("Welcome, " + userName);
            console.log(userName);
            window.location.href = 'pantry.html';
            localStorage.setItem("name", userNameDisplay);
        } else {
            $("#nameEntryModal .modal-title").text("Please input your name to continue");
        }
    });

    $("#user-name").text(localStorage.getItem("name"));

    $("table").on("click", "button", function () {
        $(this).closest("tr").remove();

        swal("Poof! Your Pantry item has been deleted!", {
            icon: "success",
            button: false,
            timer: 1000,
        });

        // Find ingredient in Firebase and remove from Firebase 
        // Need to work on code, if no ingredient is found. === returns null for snapshot
        // snapshot.key doesnt work at location root

        var firebaseKey = $(this).parent().parent().find("input").attr("firebaseKey");
        var name = $(this).closest("tr").find(".itm").text();

        console.log("FB Key: " + firebaseKey);
        if (firebaseKey) {
            console.log(name + " is removed @ key: " + firebaseKey);
            database.ref(firebaseKey).remove();
        }

        $(".ingredient ~ label:contains(" + name + ")").prev().prop("checked", false);

        //var ingredientToDelete = $(this).closest("tr").find(".itm").text();
        // database.ref().orderByChild("name").equalTo(ingredientToDelete).on("value", function (snapshot) {
        //     // console.log(snapshot.val());
        //     // console.log(snapshot.key);
        //     snapshot.forEach(function (data) {
        //         // console.log(data.key);
        //         database.ref().child(data.key).remove();
        //     });
        // });
    });

    database.ref().on("child_removed", function (snapshot) {
        var name = snapshot.val().name;
        console.log(name);
        console.log($("#" + name.replace(/\s+/g, '-')));
        $("#" + name.replace(/\s+/g, '-')).remove();

    });

    database.ref().on("child_added", function (snapshot) {
        var name = snapshot.val().name;
        var amt = snapshot.val().amnt;
        var keyid = snapshot.key;

        function renderPantryPage() {
            var tag_tr = $("<tr>");
            var tag_button = $("<button>");
            var tag_input = $("<input>");

            var tag_td_c1 = $("<td>"); // delete
            var tag_td_c2 = $("<td>"); // checkbox
            var tag_td_c3 = $("<td>"); // name
            var tag_td_c4 = $("<td>"); // amount

            var pantryList = JSON.parse(localStorage.getItem("ingredientSearch"));

            tag_tr.attr("id", name.replace(/\s+/g, '-'));
            tag_td_c3.attr("class", "itm");
            tag_input.attr("type", "checkbox");
            tag_input.attr("class", "ingred-check");
            tag_input.attr("firebaseKey", keyid);
            console.log(keyid);

            if (pantryList != null) {
                if (pantryList.indexOf(name) != -1) {
                    console.log("Found " + name);
                    tag_input.prop("checked", true);
                }
            }

            var categoryList = JSON.parse(localStorage.getItem("inPantryList"));
            if (categoryList == null) {
                categoryList = [];
            }
            categoryList.push(name);
            localStorage.setItem("inPantryList", JSON.stringify(categoryList));

            console.log("Cat: " + categoryList);
            if (categoryList.indexOf(name) != -1) {
                console.log("Found Cat: " + name);
                $(".ingredient ~ label:contains(" + name + ")").prev().prop("checked", true);
            }



            tag_button.attr("class", "close");
            tag_button.attr("aria-label", "Close");
            tag_button.html("<span aria-hidden=\"true\">&times;</span>");
            tag_button.css("float", "left");
            tag_button.css("color", "#FF6961");

            tag_td_c1.append(tag_button);
            tag_td_c2.append(tag_input);
            tag_td_c3.text(name);
            // tag_td_c4.text(amt + " oz");

            tag_tr.append(tag_td_c1, tag_td_c2, tag_td_c3, tag_td_c4);

            $("tbody").append(tag_tr);
        }

        function renderRecipePage() {
            var tag_button = $("<button>");

            var pantryList = JSON.parse(localStorage.getItem("ingredientSearch"));

            tag_button.attr("class", "list-group-item list-group-item-action");
            tag_button.attr("type", "button");
            tag_button.text(name);

            if (pantryList != null) {
                if (pantryList.indexOf(name) != -1) {
                    console.log("Found " + name);
                    // add "list-group-item-success" for selected items
                    tag_button.addClass("list-group-item-success");
                    tag_button.css("background", "greenyellow");
                    tag_button.css("color", "green");
                }
            }


            $(".pantry-card > .list-group").append(tag_button);
        }

        renderPantryPage();
        renderRecipePage();

    });

    $(document).on("click", ".list-group-item", function () {
        var currentClasses = $(this).attr("class");
        var pantrySearch = JSON.parse(localStorage.getItem("ingredientSearch"));

        if (pantrySearch == null)
            pantrySearch = [];

        if (currentClasses.includes("list-group-item-success")) {
            $(this).removeClass("list-group-item-success");
            $(this).css("background", "inherit");
            $(this).css("color", "inherit");
            pantrySearch.splice(pantrySearch.indexOf($(this).text()), 1);
            localStorage.setItem("ingredientSearch", JSON.stringify(pantrySearch));
        } else {
            $(this).addClass("list-group-item-success");
            $(this).css("background", "greenyellow");
            $(this).css("color", "green");
            pantrySearch.push($(this).text());
            localStorage.setItem("ingredientSearch", JSON.stringify(pantrySearch));

        }
        console.log("Pantry Items: " + pantrySearch);

    });

    // Check items in pantry to add to search
    $(document).on("click", ".ingred-check", function () {
        var itemsToSearch = JSON.parse(localStorage.getItem("ingredientSearch"));
        var item = $(this).parent().parent().find(".itm").text();

        if (itemsToSearch == null)
            itemsToSearch = [];

        if (this.checked) {
            itemsToSearch.push(item);
            localStorage.setItem("ingredientSearch", JSON.stringify(itemsToSearch));
        } else {
            itemsToSearch.splice(itemsToSearch.indexOf(item), 1);
            localStorage.setItem("ingredientSearch", JSON.stringify(itemsToSearch));
        }
        console.log("Pantry Search: " + itemsToSearch);
    });



    /* ========== Recipe Search ========= */
    /**************************************/

    window.onload = function () {
        var windowLoc = $(location).attr('pathname');
        console.log(windowLoc);

        if (windowLoc.includes("/recipes.html")) {
            console.log("Click Reached");
            $('#search-ingredients').click();
        }
    }

    $("#search-ingredients").on("click", function (event) {
        event.preventDefault();

        $("#recipeDisplay").empty();

        // var ingredientSearch = $("#ingredient-input").val();
        // var ingredientSearch = "Banana, Apple";

        var ingredientSearch = JSON.parse(localStorage.getItem("ingredientSearch")).join();

        var queryURL = "https://api.edamam.com/search?q=" + ingredientSearch + "&to=12&app_id=c43b2cf7&app_key=01c9ac7f0de42acc99556befcd0cf4c8"

        //function displayRecipes() {
        // Creating an AJAX call for the specific recipe button being clicked
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            console.log(response);
            console.log(response.hits);

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


    $(document).on("click", ".ingredient", function () {
        var item = $(this).next().text();

        if (this.checked) {
            console.log(item + " is added");
            var addPantryItem = {
                name: item,
                amnt: ""
            };

            var ingredientRef = database.ref().push(addPantryItem);
            var ingredientKey = ingredientRef.getKey();
            $(this).attr("firebaseKey", ingredientKey);

        } else {
            var firebaseKey = $(this).attr("firebaseKey");
            if (firebaseKey) {
                console.log(item + " is removed @ key: " + firebaseKey);
                database.ref(firebaseKey).remove();
            } else {
                firebaseKey = $("#" + item).find("input").attr("firebaseKey");
                console.log(item + " is removed @ key: " + firebaseKey);
                database.ref(firebaseKey).remove();
            }

        }
    });


});