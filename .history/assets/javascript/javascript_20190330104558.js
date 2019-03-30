// all possible items to choose from


var dairy = [
    "butter",
    "milk",
    "yogurt",
    "cream",
    "cream cheese",
    "whipped cream"
];

var vegetables = [
    "onions",
    "broccoli",
    "basil",
    "cucumbers",
    "green beans",
    "corn",
    "potato"
];

var fruits = [
    "lemon",
    "apple",
    "banana",
    "lime",
    "strawberry",
    "orange",
    "pineapple"
]

var meat = [
    "chicken breast",
    "bacon",
    "ground beef",
    "sausage",
    "ham",
    "turkey",
    "venison",
    "salami",
    "pork",
];

var grains = [
    "rice",
    "pasta",
    "flour",
    "oats",
    "rye",
    "millet",
];

var spices = [
    "ginger",
    "cumin",
    "nutmeg",
    "coriander",
    "saffron",
    "turmeric",
    "garlic",
    "paprika",
    "cardamom",
];

var sweeteners = [
    "sugar",
    "honey",
    "maple syrup",
    "brown sugar",
    "corn syrup",
    "molasses"
];

var fish = [
    "tuna",
    "mahi mahi",
    "salmon",
    "carp",
    "marlin",
    "eel",
    "sole",
    "trout",
    "flounder",
    "halibut"
];

var alcohol = [
    "white wine",
    "beer",
    "red wine",
    "vodka",
    "rum",
    "whiskey",
    "tequila",
    "sake"
];

var condiments = [
    "mayonnaise",
    "mustard",
    "ketchup",
    "vinegar",
    "tobasco",
    "sriracha",
    "oyster sauce",
    "soy sauce",
    "buffalo sauce",
];

var beverages = [
    "coffee",
    "lemonade",
    "ginger ale",
    "chocolate milk",
    "milk",
    "tea",
    "soda",
    "juice",
    "espresso",
];

var snacks = [
    "chocolate",
    "apple sauce",
    "jam",
    "peanut butter",
    "grape jelly",
    "jello",
    "corn chips",
    "potato chips",
    "caramel",
    "fudge"
];

var custom = [
    
];

var categories = [
    dairy,
    vegetables,
    fruits,
    meat,
    grains,
    spices,
    sweeteners,
    fish,
    alcohol,
    condiments,
    beverages,
    snacks,
    custom
]
var categoryNames = [
    "Dairy",
    "Vegetables",
    "Fruits",
    "Meat",
    "Grains",
    "Spices",
    "Sweeteners",
    "Fish",
    "Alcohol",
    "Condiments",
    "Beverages",
    "Snacks",
    "Custom"
]
// end of all items

$( document).ready(function() {
    // var checkbox = document.createElement('input');
    // checkbox.type = "checkbox";
    // checkbox.name = "name";
    // checkbox.value = "value";
    // checkbox.id = "id";

    // var label = document.createElement('label')
    // label.htmlFor = "id";
    // label.appendChild(document.createTextNode('text for label after checkbox'));

    // $("#beverages-form-check").append('<p>hello</p>');

    populateCheckboxes();

    // for(var i = 0; i < categories.length; i++) {
    //     for(var j = 0; j < categories[i].length; j++) {
    //         // var idForCheckBoxLabel = "#checkboxItemLabel" + i + "." +  j;
    //         $("#" + categoryNames[i].toLocaleLowerCase() + "-dropdown-section > div > div").append('<input class="form-check-input" type="checkbox" value="" id=""><label id=' + "checkboxItemLabel".concat(i.toString()).concat(".").concat(j.toString()) + 'class="form-check-label" for="">' + categories[i][j] + '</label><br>');
    //         // $("#" + categoryNames[i].toLocaleLowerCase() + "-dropdown-section > div > div > #checkboxItemLabel" + i + '.' +  j).text(categories[i][j]);
    //         // $("#checkboxItemLabel".concat(i.toString()).concat(".").concat(j.toString())).text(categories[i][j]);
    //         // $("#" + categoryNames[i].toLocaleLowerCase() + "-dropdown-section > div > div").append('<input class="form-check-input" type="checkbox" value="" id="itemEntry' + i + '.' + j + '"><label id= ' + idForCheckBoxLabel + ' class="form-check-label" for="itemEntry' + i + '.' + j + '"></label><br>');
    //         // $("#" + categoryNames[i].toLocaleLowerCase() + "-dropdown-section > div > div > #checkboxItemLabel" + i + '.' +  j).text(categories[i][j]);
    //         // $(idForCheckBoxLabel).html("<p>categories[i][j]</p>");
    //     }        
    // }

    // for(var i = 0; i < dairy.length; i++){
    //     // $("#dairy-dropdown-section > div > div").append('<input class="form-check-input" type="checkbox" value="" id="dairyEntry' + i + '"><label id="dairy' + i + '" class="form-check-label" for="dairyEntry' + i + '"></label><br>');
    //     // $("#dairy" + i).text(dairy[i]);
    //     $("#dairy-dropdown-section > div > div").append('<input class="form-check-input" type="checkbox" value="" id="dairyEntry' + i + '"><label id="dairy' + i + '" class="form-check-label" for="dairyEntry' + i + '">'+ dairy[i] +'</label><br>');
    //     var d = "#dairy" + i;
    //     $(d).html(dairy[i]);

    // }
    $("#button-add-custom-item").click(function() {
        custom.push($("#addCustomItem").val());
        populateCheckboxes();
    });

})

function populateCheckboxes() {

    //empty divs
    for(var i = 0; i < categories.length; i++) {
        for(var j = 0; j < categories[i].length; j++) {
            // var idForCheckBoxLabel = "#checkboxItemLabel" + i + "." +  j;
            $("#" + categoryNames[i].toLocaleLowerCase() + "-dropdown-section > div > div").html("");
            // $("#" + categoryNames[i].toLocaleLowerCase() + "-dropdown-section > div > div > #checkboxItemLabel" + i + '.' +  j).text(categories[i][j]);
            // $("#checkboxItemLabel".concat(i.toString()).concat(".").concat(j.toString())).text(categories[i][j]);
            // $("#" + categoryNames[i].toLocaleLowerCase() + "-dropdown-section > div > div").append('<input class="form-check-input" type="checkbox" value="" id="itemEntry' + i + '.' + j + '"><label id= ' + idForCheckBoxLabel + ' class="form-check-label" for="itemEntry' + i + '.' + j + '"></label><br>');
            // $("#" + categoryNames[i].toLocaleLowerCase() + "-dropdown-section > div > div > #checkboxItemLabel" + i + '.' +  j).text(categories[i][j]);
            // $(idForCheckBoxLabel).html("<p>categories[i][j]</p>");
        }        
    }

    for(var i = 0; i < categories.length; i++) {
        for(var j = 0; j < categories[i].length; j++) {
            // var idForCheckBoxLabel = "#checkboxItemLabel" + i + "." +  j;
            if(i = categories.length - 1) {
                $("#" + categoryNames[i].toLocaleLowerCase() + "-dropdown-section > div > div").html('<label for="addCustomItem">Add Custom Item:</label><input type="email" class="form-control" id="addCustomItem" placeholder="custom item"><button id="button-add-custom-item" class="btn">Add</button>');
            }
            $("#" + categoryNames[i].toLocaleLowerCase() + "-dropdown-section > div > div").append('<input class="form-check-input" type="checkbox" value="" id=""><label id=' + "checkboxItemLabel".concat(i.toString()).concat(".").concat(j.toString()) + 'class="form-check-label" for="">' + categories[i][j] + '</label><br>');
            // $("#" + categoryNames[i].toLocaleLowerCase() + "-dropdown-section > div > div > #checkboxItemLabel" + i + '.' +  j).text(categories[i][j]);
            // $("#checkboxItemLabel".concat(i.toString()).concat(".").concat(j.toString())).text(categories[i][j]);
            // $("#" + categoryNames[i].toLocaleLowerCase() + "-dropdown-section > div > div").append('<input class="form-check-input" type="checkbox" value="" id="itemEntry' + i + '.' + j + '"><label id= ' + idForCheckBoxLabel + ' class="form-check-label" for="itemEntry' + i + '.' + j + '"></label><br>');
            // $("#" + categoryNames[i].toLocaleLowerCase() + "-dropdown-section > div > div > #checkboxItemLabel" + i + '.' +  j).text(categories[i][j]);
            // $(idForCheckBoxLabel).html("<p>categories[i][j]</p>");
        }        
    }
}

