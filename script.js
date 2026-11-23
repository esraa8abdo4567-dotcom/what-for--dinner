const meals = [
  {
    id: 1,
    name: "Shrimp Scampi",
    category: "Seafood",
    difficulty: "Easy",
    description: "Garlicky shrimp in a delicious butter sauce",
    image: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=1000",
    rating: 4.8,
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    ingredients: [
      "400g large shrimp, peeled",
      "300g linguine pasta",
      "6 cloves garlic, minced",
      "1/2 cup chicken broth",
      "4 tablespoons butter",
      "2 tablespoons olive oil",
      "Fresh parsley",
      "Lemon juice",
      "Red pepper flakes"
    ],
    instructions: [
      "Cook pasta according to package instructions.",
      "Heat olive oil and butter in a pan.",
      "Add garlic and cook briefly.",
      "Add shrimp and cook until pink and fully cooked.",
      "Add chicken broth and lemon juice.",
      "Toss pasta with the shrimp sauce.",
      "Garnish with parsley and serve."
    ],
    nutrition: {
      Calories: "520 kcal",
      Protein: "36g",
      Carbohydrates: "54g",
      Fat: "18g",
      Fiber: "3g",
      Sodium: "620mg"
    },
    tips: [
      "Don't overcook shrimp.",
      "Use fresh garlic for the best flavor.",
      "Toss pasta in the sauce.",
      "Add extra lemon for a fresh taste."
    ]
  },
  {
    id: 2,
    name: "Chicken Pasta",
    category: "Italian",
    difficulty: "Easy",
    description: "Creamy pasta with tender chicken and cheese",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=1000",
    rating: 4.7,
    prepTime: 15,
    cookTime: 25,
    servings: 3,
    ingredients: [
      "300g pasta",
      "300g chicken breast",
      "1 cup cooking cream",
      "50g parmesan cheese",
      "2 garlic cloves",
      "Salt and pepper"
    ],
    instructions: [
      "Boil pasta until cooked.",
      "Cut chicken into small pieces.",
      "Season and cook chicken thoroughly.",
      "Add garlic and cooking cream.",
      "Stir in parmesan cheese.",
      "Combine with pasta and serve."
    ],
    nutrition: {
      Calories: "610 kcal",
      Protein: "42g",
      Carbohydrates: "58g",
      Fat: "24g",
      Fiber: "3g",
      Sodium: "680mg"
    },
    tips: [
      "Save some pasta water for the sauce.",
      "Use freshly grated parmesan.",
      "Cook chicken until fully cooked.",
      "Serve immediately for best texture."
    ]
  },
  {
    id: 3,
    name: "Beef Burger",
    category: "American",
    difficulty: "Easy",
    description: "Juicy beef burger with melted cheddar",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1000",
    rating: 4.9,
    prepTime: 15,
    cookTime: 20,
    servings: 2,
    ingredients: [
      "300g ground beef",
      "2 burger buns",
      "2 cheddar cheese slices",
      "Lettuce",
      "Tomato",
      "Burger sauce",
      "Salt and pepper"
    ],
    instructions: [
      "Shape beef into two patties.",
      "Season with salt and pepper.",
      "Cook patties thoroughly.",
      "Add cheddar cheese.",
      "Toast burger buns.",
      "Assemble with vegetables and sauce."
    ],
    nutrition: {
      Calories: "650 kcal",
      Protein: "38g",
      Carbohydrates: "42g",
      Fat: "36g",
      Fiber: "3g",
      Sodium: "790mg"
    },
    tips: [
      "Don't press the burger while cooking.",
      "Toast the buns for better texture.",
      "Use fresh vegetables.",
      "Let the meat rest briefly before serving."
    ]
  },
  {
    id: 4,
    name: "Margherita Pizza",
    category: "Italian",
    difficulty: "Medium",
    description: "Classic pizza with mozzarella and basil",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=1000",
    rating: 4.8,
    prepTime: 25,
    cookTime: 15,
    servings: 3,
    ingredients: [
        "Pizza dough",
      "Tomato sauce",
      "200g mozzarella",
      "Fresh basil",
      "Olive oil",
      "Salt"
    ],
    instructions: [
      "Preheat the oven to 220°C.",
      "Roll out the pizza dough.",
      "Spread tomato sauce.",
      "Add mozzarella cheese.",
      "Bake until the crust is golden.",
      "Top with fresh basil."
    ],
    nutrition: {
      Calories: "480 kcal",
      Protein: "19g",
      Carbohydrates: "57g",
      Fat: "20g",
      Fiber: "3g",
      Sodium: "710mg"
    },
    tips: [
      "Preheat the oven well.",
      "Avoid adding too much sauce.",
      "Use fresh mozzarella.",
      "Add basil after baking."
    ]
  },
  {
    id: 5,
    name: "Chicken Shawarma",
    category: "Middle Eastern",
    difficulty: "Easy",
    description: "Flavorful chicken wrapped in soft bread",
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=1000",
    rating: 4.9,
    prepTime: 20,
    cookTime: 25,
    servings: 4,
    ingredients: [
      "500g chicken breast",
      "1/2 cup yogurt",
      "2 tablespoons lemon juice",
      "Shawarma spices",
      "2 garlic cloves",
      "Flatbread",
      "Garlic sauce"
    ],
    instructions: [
      "Slice chicken into thin strips.",
      "Mix yogurt, lemon and spices.",
      "Marinate chicken for at least 30 minutes.",
      "Cook chicken until fully cooked.",
      "Warm the flatbread.",
      "Add chicken and garlic sauce.",
      "Wrap and serve."
    ],
    nutrition: {
      Calories: "450 kcal",
      Protein: "40g",
      Carbohydrates: "39g",
      Fat: "16g",
      Fiber: "2g",
      Sodium: "730mg"
    },
    tips: [
      "Marinate chicken for better flavor.",
      "Use fresh lemon juice.",
      "Don't overcrowd the pan.",
      "Serve with garlic sauce."
    ]
  }
];

// Nutrition values are approximate estimates per serving.

// Application state
let currentMeal = null;
let activeTab = "ingredients";
let savedMeals = [];

// Select a random recipe
function getRandomMeal() {
  const randomIndex = Math.floor(Math.random() * meals.length);
  return meals[randomIndex];
}

// Create numbered list elements
function createList(items) {
  const list = document.createElement("ul");
  list.className = "detail-list";

  items.forEach(function(item, index) {
    const li = document.createElement("li");

    const number = document.createElement("span");
    number.className = "number";
    number.textContent = index + 1;

    const text = document.createElement("span");
    text.textContent = item;

    li.appendChild(number);
    li.appendChild(text);
    list.appendChild(li);
  });

  return list;
}

// Display active tab
function showTab(tabName) {
  if (!currentMeal) return;

  activeTab = tabName;

  const content = document.getElementById("tabContent");
  content.innerHTML = "";

  document.querySelectorAll(".tab").forEach(function(button) {
    button.classList.toggle(
      "active",
      button.dataset.tab === tabName
    );
  });

  if (tabName === "ingredients") {
    content.appendChild(createList(currentMeal.ingredients));

  } else if (tabName === "instructions") {
    content.appendChild(createList(currentMeal.instructions));

  } else if (tabName === "nutrition") {
    const grid = document.createElement("div");
    grid.className = "nutrition-grid";

    Object.entries(currentMeal.nutrition).forEach(function(entry) {
      const item = document.createElement("div");
      item.className = "nutrition-item";

      const label = document.createElement("span");
      label.textContent = entry[0];

      const value = document.createElement("strong");
      value.textContent = entry[1];

      item.appendChild(label);
      item.appendChild(value);
      grid.appendChild(item);
    });

    content.appendChild(grid);

  } else if (tabName === "tips") {
    content.appendChild(createList(currentMeal.tips));
  }
}

// Display meal details
function displayMeal(meal) {
  currentMeal = meal;
  document.getElementById("mealImage").src = meal.image;
  document.getElementById("mealImage").alt = meal.name;
  document.getElementById("mealName").textContent = meal.name;
  document.getElementById("description").textContent = meal.description;
  document.getElementById("category").textContent = meal.category;
  document.getElementById("difficulty").textContent = meal.difficulty;
  document.getElementById("rating").textContent = meal.rating + " / 5";

  document.getElementById("prepTime").textContent =
    meal.prepTime + " min";

  document.getElementById("cookTime").textContent =
    meal.cookTime + " min";

  document.getElementById("servings").textContent =
    meal.servings + " people";

  document.getElementById("saveBtn").classList.toggle(
    "saved",
    savedMeals.includes(meal.id)
  );

  // Always show ingredients when a new meal appears
  activeTab = "ingredients";
  showTab("ingredients");
}

// Pick another meal
function tryAnotherRecipe() {
  let meal = getRandomMeal();

  if (meals.length > 1 && currentMeal !== null) {
    while (meal.id === currentMeal.id) {
      meal = getRandomMeal();
    }
  }

  displayMeal(meal);
}

// Save or unsave current recipe
function toggleSave() {
  if (!currentMeal) return;

  const id = currentMeal.id;

  if (savedMeals.includes(id)) {
    savedMeals = savedMeals.filter(function(savedId) {
      return savedId !== id;
    });
  } else {
    savedMeals.push(id);
  }

  document.getElementById("saveBtn").classList.toggle(
    "saved",
    savedMeals.includes(id)
  );
}

// Share current recipe
async function shareRecipe() {
  if (!currentMeal) return;

  const message = "Try this recipe: " + currentMeal.name;

  if (navigator.share) {
    try {
      await navigator.share({
        title: currentMeal.name,
        text: message
      });
    } catch (error) {
      // User may cancel the share dialog.
    }
  } else {
    window.prompt("Copy this recipe:", message);
  }
}

// Start application after HTML is loaded
function initializeApp() {
  document.getElementById("randomBtn")
    .addEventListener("click", tryAnotherRecipe);

  document.getElementById("saveBtn")
    .addEventListener("click", toggleSave);

  document.getElementById("shareBtn")
    .addEventListener("click", shareRecipe);

  document.querySelectorAll(".tab").forEach(function(button) {
    button.addEventListener("click", function() {
      showTab(button.dataset.tab);
    });
  });

  // Show the first random meal automatically
  tryAnotherRecipe();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}