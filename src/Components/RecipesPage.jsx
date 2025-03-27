import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import garamMasala from "/media/garammasaladiykit.jpeg";
// import pav_bhaji from "/media/pavbhajidiytop.png";
import pav_bhaji from "../../public/media/pavbhajidiytop.jpeg"
import chole_masala from "../../public/media/cholemasalakit.jpeg";
// /media/cholemasalakit/jpeg";
import birani_masala from "/media/biyranimasalaside.jpeg";
import rasam_powder from "/media/rasampowderkit.jpeg";
import butter_panner from "../../public/media/butterpaneerkit.jpeg";
import taco_image from "../../public/media/tacoseasoningtop.jpeg"
import Navbar_Menu from "./Navbar_Menu";
import five_image from "../../public/media/fivespieceside.jpeg"
import { useEffect, useState } from "react";
import LearnMore from "../Pages/Home/LearnMore";
import Footer from "./Footer";
import delicious_icon from "/media/delicious-icon.png";
import aromatic from "/media/aromatic.png";
import flavoury from "/media/flavoury.png";

const products = [
  {
    id: 1,
    title: "Garam Masala Curry",
    image: garamMasala,
    serves: "4",
    time: "15 minutes",
    cookingTime: "30 minutes",
    recipesBenfit: "Recipe Benefits",
    ingredients: [
      "Avitri Spices DIY Garam Masala Kit",
      "500g chicken, paneer, or mixed vegetables (cauliflower, peas, carrots)",
      "2 tablespoons oil or ghee",
      "1 large onion, finely chopped",
      "2 medium tomatoes, pureed",
      "1 tablespoon ginger-garlic paste",
      "½ cup plain yogurt (whisked) or 1 cup coconut milk for a creamier option",
      "1 cup water (adjust for desired consistency)",
      "Salt to taste",
      "Fresh coriander leaves, chopped (for garnish)",
      "1 green chili, slit (optional for extra heat)",
    ],
    instructions: [
      "Prepare the Base: Heat oil or ghee in a pan over medium heat. Add the chopped onions and sauté until golden brown.",
      "Add Aromatics: Sir in the ginger-garlic paste and cook for 1-2 minutes until the raw aroma disappears.",
      "Add Tomatoes: Pour in the tomato puree and cook until the oil separates from the mixture, about 5-7 minutes.",
      "Incorporate Avitri DIY Garam Masala: Open the DIY Garam Masala kit, and sprinkle the spice blend into the pan. Mix well to evenly coat the onion-tomato base.",
      "Cook the Protein/Vegetables: Add your choice of chicken, paneer, or vegetables. Stir to combine and cook for 5 minutes to let the spices infuse.",
      "Simmer with Yogurt/Coconut Milk: Lower the heat and add the whisked yogurt or coconut milk. Stir continuously to prevent curdling. Add water to adjust the curry's consistency.",
      "Season and Finish: Add salt to taste and the slit green chili (optional). Cover and simmer for 10-15 minutes until the protein or vegetables are cooked through.",
      "Garnish and Serve: Garnish with fresh coriander leaves and serve hot with steamed rice, naan, or roti.",
    ],
    tips: [
      "For a richer flavor, add a pinch of sugar and a splash of lemon juice at the end.",
      "Pair with a cucumber raita or a fresh green salad for a complete meal.",
    ],
  },
  {
    id: 2,
    title: "Classic Pav Bhaji",
    image: pav_bhaji,
    serves: "4",
    time: "20 minutes",
    cookingTime: "30 minutes",
    recipesBenfit: "Recipe Benefits",
    ingredients: [
      "Avitri Spices DIY Pav Bhaji Masala Kit",
      "Potatoes - 3 medium-sized, boiled and mashed",
      "Cauliflower - 1 cup, finely chopped",
      "Green peas - 1/2 cup",
      "Carrots - 1/2 cup, diced",
      "Capsicum - 1/2 cup, finely chopped",
      "Tomatoes - 3 medium-sized, finely chopped",
      "Onions - 2 medium-sized, finely chopped",
      "Ginger-Garlic Paste - 1 tablespoon",
      "Turmeric Powder - 1/2 teaspoon",
      "Red Chili Powder (optional for extra heat) - 1/2 teaspoon",
      "Salt - to taste",
      "Butter - 2 tablespoons",
      "Oil - 1 tablespoon",
      "Water - as needed",
    ],
    instructions: [
      "Step 1 - Prepare the Vegetables: 1. Boil potatoes, carrots, cauliflower, and peas until soft. Mash them lightly and set aside. 2. Keep capsicum raw for added crunch.",
      "Step 2 - Cook the Bhaji: 1. Heat butter and oil in a large pan on medium heat. 2. Add chopped onions and sauté until golden brown. 3. Stir in the ginger-garlic paste and sauté until the raw aroma disappears. 4. Add tomatoes and cook until soft and mushy. 5. Sprinkle turmeric powder and red chili powder (if using). Mix well. 6. Add the mashed vegetables, capsicum, and mix thoroughly. 7. Stir in Avitri Spices DIY Pav Bhaji Masala and salt. Cook for 3-4 minutes, allowing the spices to blend. 8. Add water to adjust consistency and simmer for 5-7 minutes. Mash gently with a masher for a smooth texture. 9. Taste and adjust seasoning if required.",
      "Step 3 - Toast the Pav Buns: 1. Heat a flat pan and add butter. 2. Place the pav buns on the pan and toast until golden and slightly crispy.",
      "Step 4 - Serve: 1. Ladle the hot bhaji into bowls. 2. Garnish with fresh coriander leaves and serve with toasted pav buns, lemon wedges, and a side of chopped onions.",
    ],
    tips: [
      "Add a dollop of butter on top of the bhaji for authentic street-style flavor.",
      "Adjust the spice level by varying the quanity of Avitri DIY Pav Bhaji Masala.",
      "For an extra zing, drizzle a bit of lemon juice on the bhaji before serving.",
    ],
  },

  {
    id: 3,
    title: "Punjabi Chole",
    image: chole_masala,
    serves: "4",
    time: "8 hours (soaking)",
    cookingTime: "45 minutes",
    recipesBenfit: "Recipe Benefits",
    ingredients: [
      "Avitri Spices DIY Chole Masala Kit",
      "1 cup (200g) chickpeas (soaked overnight or for at least 8 hours)",
      "4 cups water (for boiling)",
      "1 tsp salt",
      "1 black tea bag (optional, for a deep color)",
      "2 medium onions, finely chopped",
      "2 medium tomatoes, finely chopped or puréed",
      "2 green chilies, slit",
      "1 tsp ginger-garlic paste",
      "3 tbsp oil or ghee",
      "1/4 cup fresh yogurt (optional, for richness)",
      "Fresh coriander leaves, chopped",
      "Lemon wedges",
      "Sliced onions (optional)",
    ],
    instructions: [
      "Boil the Chickpeas: Drain the soaked chickpeas and rinse well. Add them to a pressure cooker with 4 cups of water, salt, and the tea bag (if using). Cook for 6-8 whistles or until the chickpeas are tender. Set aside. If using an open pot, simmer for 45-60 minutes until soft.",

      "Prepare the Masala Base: Heat oil or ghee in a large pan over medium heat. Add the chopped onions and sauté until golden brown. Add ginger-garlic paste and green chilies. Cook for 1 minute until aromatic. Stir in the tomatoes and cook until the oil separates, about 5-7 minutes.",

      "Add the Chole Masala: Open the Avitri Spices DIY Chole Masala Kit and add the spice mix to the pan. Sauté for 1-2 minutes to release the spices' aroma.",

      "Combine and Simmer: Add the boiled chickpeas along with the cooking water (remove the tea bag if used). Adjust the consistency by adding more water if needed. Simmer for 15-20 minutes, stirring occasionally. For a creamy texture, mash a few chickpeas with the back of a ladle. (Optional) Add yogurt and mix well for extra richness.",

      "Taste and Adjust: Check for seasoning and adjust salt or spices as needed.",

      "Garnish and Serve: Garnish with fresh coriander leaves and serve hot. Accompany with fluffy Bhature, Jeera Rice, or warm Naan. Add lemon wedges and sliced onions on the side for extra zing.",
    ],
    tips: [
      "For added flavor, drizzle with a teaspoon of ghee or butter before serving.",
      "To elevate the dish, you can add a pinch of garam masala or dry mango powder (amchur) just before turning off the heat.",
    ],
    subtitile:
      "Enjoy your homemade restaurant-style Chole, bursting with authentic flavors, thanks to the Avitri Spices DIY Chole Masala Kit!",
  },

  {
    id: 4,
    title: "Authentic Biryani",
    image: birani_masala,
    serves: "4-6",
    time: "30 minutes",
    cookingTime: "1 hour",
    recipesBenfit: "Recipe Benefits",
    ingredients: [
      "For the Rice:",
      "2 cups Basmati rice",
      "4 cups water",
      "2-3 whole cloves",
      "2-3 green cardamoms",
      "1 small cinnamon stick",
      "1 teaspoon salt",
      "1 teaspoon ghee or oil",
      "For the Marinade:",
      "500 grams chicken, mutton, or vegetables (as per preference)",
      "1 cup plain yogurt (curd)",
      "2 tablespoons Avitri Spices DIY Biryani Masala",
      "1 tablespoon ginger-garlic paste",
      "1/2 teaspoon turmeric powder",
      "1 teaspoon red chili powder",
      "Salt to taste",
      "Juice of 1 lemon",
      "For the Masala:",
      "2 medium onions, thinly sliced",
      "2 medium tomatoes, finely chopped",
      "1/4 cup fresh mint leaves, chopped",
      "1/4 cup fresh coriander leaves, chopped",
      "2 green chilies, slit (optional for extra spice)",
      "3 tablespoons oil or ghee",
      "1/4 cup milk with a pinch of saffron soaked in it",
      "Optional Garnish:",
      "Fried onions",
      "Toasted cashews or almonds",
      "Raisins (lightly fried in ghee)",
    ],
    instructions: [
      "Step 1 - Prepare the Rice: 1. Wash the rice thoroughly and soak it in water for 20-30 minutes. Drain before cooking. 2. In a large pot, bring 4 cups of water to a boil. Add cloves, cardamoms, cinnamon, salt, and ghee or oil. 3. Add the soaked rice and cook until 80% done (grains should still have a slight bite). Drain and set aside.",

      "Step 2 - Marinate the Meat or Vegetables: 1. In a mixing bowl, combine yogurt, Avitri Spices DIY Biryani Masala, ginger-garlic paste, turmeric powder, red chili powder, salt, and lemon juice. 2. Add your choice of protein or vegetables and coat them well with the marinade. Cover and refrigerate for 30 minutes to 1 hour.",

      "Step 3 - Cook the Masala: 1. Heat oil or ghee in a large, heavy-bottomed pan. 2. Add the sliced onions and sauté until golden brown. 3. Add tomatoes and cook until they are soft and the oil starts separating. 4. Stir in the marinated meat or vegetables and cook until they are 80% cooked through. Add a little water if the mixture becomes too dry. 5. Stir in mint leaves, coriander leaves, and slit green chilies.",

      "Step 4 - Layer and Assemble: 1. In the same pan, spread a layer of the cooked meat or vegetable masala at the bottom. 2. Spread half of the cooked rice evenly over the masala. 3. Drizzle half of the saffron milk over the rice and sprinkle some fried onions, cashews, and raisins (if using). 4. Repeat the layering with the remaining masala, rice, saffron milk, and garnishes.",

      "Step 5 - Dum Cooking : 1. Cover the pan with a tight-fittng lid. If your lid is loose, seal it with aluminum foil or dough to prevent steam from escaping. 2. Cook on a low flame for 25-30 minutes. Alternatively, bake in a preheated oven at 180°C (350°F) for 20-25 minutes.",

      "Step 6 - Serve : 1. Gently fluff the biryani with a fork to mix the layers without breaking the rice. 2. Serve hot with raita, salad, or a boiled egg for an authentic touch.",
    ],
    tips: [
      // "For added flavor, drizzle with a teaspoon of ghee or bu􀆩er before serving.",
      // "To elevate the dish, you can add a pinch of garam masala or dry mango powder (amchur) just before turning off the heat.",
    ],
    subtitile:
      "Enjoy your delicious, fragrant biryani prepared with Avitri Spices DIY Biryani Masala Kit!",
  },

  {
    id: 5,
    title: "Rasam Powder",
    image: rasam_powder,
    serves: "4-6",
    time: "30 minutes",
    cookingTime: "1 hour",
    recipesBenfit: "Recipe Benefits",
    ingredients: [
      "From the DIY Rasam Powder Kit:",
      "Avitri Rasam Powder: 2-3 tablespoons (adjust to taste)",
      "Fresh Ingredients:",
      "Tamarind: 1 small lemon-sized ball (soaked in warm water and extracted into juice)",
      "Tomatoes: 2 medium-sized (chopped or pureed)",
      "Garlic: 3-4 cloves (crushed)",
      "Green chilies: 2 (slit lengthwise)",
      "Curry leaves: 10-12 leaves",
      "Coriander leaves: A handful (chopped for garnish)",
      "Pantry Staples:",
      "Mustard seeds: 1 teaspoon",
      "Dry red chilies: 2",
      "Ghee or Oil: 2 tablespoons",
      "Turmeric powder: 1/4 teaspoon",
      "Salt: To taste",
      "Water: 4 cups",
      "Black pepper (optional): 1/2 teaspoon (freshly ground, for extra spice)",
    ],
    instructions: [
      "Prepare the Base: Heat 2 cups of water in a pot. Add the tamarind extract, chopped tomatoes, turmeric powder, and salt. Bring it to a boil and simmer for 5-7 minutes, allowing the flavors to combine.",
      "Add the Rasam Powder: Add 2-3 tablespoons of Avitri Rasam Powder to the boiling mixture. Stir well to ensure no lumps, and let it simmer for another 5 minutes.",
      "Tempering (Tadka): In a small pan, heat 2 tablespoons of ghee or oil. Add mustard seeds and let them splutter. Add crushed garlic, dry red chilies, and curry leaves. Sauté for a minute until aromatic, then pour the tempering over the rasam.",
      "Finish and Garnish: Add slit green chilies and adjust the consistency by adding more water if needed. Simmer for another 2-3 minutes. Turn off the heat and garnish with fresh coriander leaves.",
      "Serve: Serve hot with steamed rice, papad, or enjoy as a warm, comforting soup.",
    ],
    tips: [
      "For extra tanginess, you can add a splash of lemon juice just before serving.",
      "To enhance the aroma, roast 1/2 teaspoon of cumin seeds and black pepper, crush them coarsely, and add it to the rasam.",
    ],
    subtitile:
      "Enjoy your flavorful, homemade rasam made effortlessly with Avitri Spices' DIY Rasam Powder Kit!",
  },

  {
    id: 6,
    title: "Butter Paneer Masala",
    image: butter_panner,
    serves: "4-6",
    time: "30 minutes",
    cookingTime: "1 hour",
    recipesBenfit: "Recipe Benefits",
    ingredients: [
      "Paneer (Cottage Cheese): 250 grams (cubed)",
      "Butter: 2 tablespoons",
      "Cooking Oil: 1 tablespoon",
      "Onions: 2 medium (finely chopped)",
      "Tomatoes: 3 medium (pureed)",
      "Cashews: 8-10 (soaked and ground into a smooth paste)",
      "Garlic Paste: 1 teaspoon",
      "Ginger Paste: 1 teaspoon",
      "Cream: 4 tablespoons (optional for extra richness)",
      "Milk: 1/2 cup",
      "Salt: To taste",
      "Water: As needed",
      "Avitri Spices DIY Butter Paneer Masala Mix: 3 tablespoons",
      "Coriander Leaves: For garnish",
    ],
    instructions: [
      "Prepare Paneer: Heat a non-stick pan and lightly fry the paneer cubes in a teaspoon of oil until golden on all sides. Set aside.",
      "Make the Base Masala: Heat butter and oil in a pan. The oil prevents the butter from burning. Add finely chopped onions and sauté until golden brown. Add garlic and ginger paste and sauté until the raw aroma disappears.",
      "Tomato-Cashew Gravy: Pour in the tomato puree and cook until the oil separates. Add the cashew paste and mix well, cooking for another 2 minutes.",
      "Add the DIY Butter Paneer Masala: Sprinkle in 3 tablespoons of Avitri Spices DIY Butter Paneer Masala mix. Stir well to combine, and cook for 1-2 minutes to release the spice flavors.",
      "Simmer the Gravy: Add milk and a splash of water to adjust the consistency of the gravy. Let it simmer for 5-7 minutes on low heat.",
      "Finish with Paneer and Cream: Gently add the fried paneer cubes to the simmering gravy. Stir in cream for a richer taste (optional).",
      "Final Touch: Garnish with chopped coriander leaves and a drizzle of cream or butter.",
      "Serve: Serve hot with naan, roti, or steamed basmati rice.",
    ],
    tips: [
      // "For extra tanginess, you can add a splash of lemon juice just before serving.",
      // "To enhance the aroma, roast 1/2 teaspoon of cumin seeds and black pepper, crush them coarsely, and add it to the rasam.",
    ],
    subtitile:
      "Enjoy the creamy and flavorful Butter Paneer Masala made effortlessly using Avitri Spices DIY Kit! Perfect for a family meal or a special occasion.",
  },

  {
    id: 7,
    title: "DIY Taco",
    image: taco_image,
    serves: "4",
    time: "30 minutes",
    cookingTime: "1 hour",
    recipesBenfit: "Recipe Benefits",
    ingredients: [
      "For the Taco Filling:",
      "500g ground beans, chicken, or turkey (or a plant-based alternative)",
      "1 tablespoon cooking oil (olive, vegetable, or canola)",
      "3 tablespoons Avitri Spices DIY Taco Seasoning",
      "½ cup water",
      "1 medium onion, finely chopped",
      "2 cloves garlic, minced",
      "1 cup canned diced tomatoes (optional)",
      "For the Tacos:",
      "8 taco shells or small tortillas",
      "1 cup shredded lettuce",
      "1 cup diced tomatoes",
      "1 cup shredded cheese (cheddar or Monterey Jack)",
      "½ cup sour cream",
      "½ cup guacamole",
      "½ cup salsa",
    ],
    instructions: [
      "Prepare the Taco Filling: Heat oil in a skillet over medium heat. Add chopped onion and garlic. Sauté until fragrant and translucent, about 2 minutes. Add the ground meat/beans (or plant-based alternative) to the skillet. Cook until browned, breaking it into small crumbles with a wooden spoon. Stir in 3 tablespoons of Avitri Spices DIY Taco Seasoning and mix well. Add ½ cup water to the skillet and stir to combine. If using diced tomatoes, add them at this stage. Reduce the heat to low and let the mixture simmer for 5-7 minutes, allowing the flavors to meld and the liquid to reduce.",
      "Assemble the Tacos: Warm the taco shells or tortillas according to the package instructions. Fill each shell with the prepared taco meat mixture. Top with shredded lettuce, diced tomatoes, cheese, and your favorite toppings like sour cream, guacamole, or salsa.",
      "Serve and Enjoy: Arrange the tacos on a platter and serve immediately with lime wedges on the side for a zesty kick.",
    ],
    tips: [
      "Customize your tacos by adding jalapeños, black beans, or corn kernels.",
      "Avitri Spices DIY Taco Seasoning pairs well with both meat and vegetarian fillings, so feel free to experiment with your favorite ingredients!",
    ],
    subtitile:
      "Enjoy your delicious, homemade tacos infused with the bold flavors of Avitri Spices DIY Taco Seasoning!",
  },

  {
    id: 8,
    title: "Homestyle Chicken Curry",
    image: rasam_powder,
    serves: "4",
    time: "30 minutes",
    cookingTime: "1 hour",
    recipesBenfit: "Recipe Benefits",
    ingredients: [
      "Chicken: 500 grams, bone-in or boneless, cut into medium-sized pieces",
      "Avitri Spices DIY Curry Powder: 2 tablespoons",
      "Oil: 3 tablespoons (vegetable or mustard oil)",
      "Onion: 2 medium-sized, finely chopped",
      "Tomatoes: 2 medium-sized, finely chopped",
      "Garlic: 4-5 cloves, minced",
      "Ginger: 1-inch piece, minced",
      "Green chilies: 2, slit (optional, for extra heat)",
      "Yogurt: 3 tablespoons (whisked)",
      "Water: 1 ½ cups (adjust for desired gravy consistency)",
      "Salt: to taste",
      "Fresh coriander leaves: for garnish, finely chopped",
      "Optional Spices (for extra flavor):",
      "Avitri Garam Masala: 1 teaspoon",
      "Avitri Cumin Powder: ½ teaspoon",
    ],
    instructions: [
      "Marinate the Chicken: In a large bowl, mix the chicken with 1 tablespoon of Avitri Spices DIY Curry Powder, yogurt, and a pinch of salt. Let it marinate for 30 minutes to 1 hour for deeper flavor.",
      "Prepare the Base: Heat oil in a heavy-bottomed pan or wok over medium heat. Add the chopped onions and sauté until golden brown. Stir in the minced garlic, ginger, and green chilies, and cook for 2-3 minutes until aromatic.",
      "Cook the Tomatoes: Add the chopped tomatoes and a pinch of salt. Cook until the tomatoes break down into a thick paste and the oil begins to separate from the mixture.",
      "Add Curry Powder: Lower the heat and add the remaining 1 tablespoon of Avitri Spices DIY Curry Powder. (Add optional spices here if using.) Stir well to toast the spices for 1-2 minutes, releasing their full aroma.",
      "Cook the Chicken: Add the marinated chicken pieces to the pan. Mix well to coat the chicken evenly with the masala base. Cook for 5-7 minutes, stirring occasionally, until the chicken starts to brown slightly.",
      "Add Water and Simmer: Pour in the water and bring the curry to a boil. Reduce the heat to low, cover, and let it simmer for 20-25 minutes, stirring occasionally, until the chicken is cooked through and the gravy thickens.",
      "Finish and Garnish: Check for seasoning and adjust salt if necessary. Turn off the heat and garnish with fresh coriander leaves.",
    ],

    tips: [
      // "Customize your tacos by adding jalapeños, black beans, or corn kernels.",
      // "Avitri Spices DIY Taco Seasoning pairs well with both meat and vegetarian fillings, so feel free to experiment with your favorite ingredients!",
    ],
    subtitile:
      "This recipe highlights the rich and balanced flavors of Avitri Spices DIY Curry Powder, making it the star of a comforting and aromatic dish!",

    suggestions: [
      "Serve hot with steamed rice, jeera rice, naan, or roti. ",
      "Pair with a fresh green salad or raita for a complete meal.",
    ],
  },

  {
    id: 9,
    title: "Vegetarian Curry",
    image: rasam_powder,
    serves: "4",
    time: "15 minutes",
    cookingTime: "30 minutes",
    recipesBenfit: "Recipe Benefits",
    ingredients: [
      "Vegetables:",
      "1 cup cauliflower florets",
      "1 cup diced carrots",
      "1 cup diced potatoes",
      "1 cup chopped green beans",
      "1/2 cup green peas (fresh or frozen)",
      "Base:",
      "2 tbsp oil (vegetable or coconut oil)",
      "1 large onion, finely chopped",
      "2 medium tomatoes, finely chopped or pureed",
      "2 garlic cloves, minced",
      "1-inch piece of ginger, minced",
      "2 tbsp Avitri Spices DIY Curry Powder",
      "Liquids:",
      "1 cup coconut milk (optional for a creamy texture)",
      "1 cup water or vegetable broth",
      "Seasoning:",
      "Salt to taste",
      "1/4 tsp turmeric powder",
      "Fresh coriander leaves for garnish",
      "Juice of 1/2 lemon",
      "Optional Spices (for extra flavor):",
      "Avitri Garam Masala: 1 teaspoon",
      "Avitri Cumin Powder: ½ teaspoon",
    ],
    instructions: [
      "Step 1 - Prepare the Vegetables: 1. Wash and chop all vegetables into bite-sized pieces. 2. Steam or parboil the harder vegetables like potatoes and carrots for 5 minutes. Set aside.",
      "Step 2 - Prepare the Curry Base: 1. Heat oil in a deep pan or skillet over medium heat. 2. Add the chopped onions and sauté until golden brown. 3. Stir in minced garlic and ginger, cooking for another minute until fragrant.",
      "Step 3 - Add Spices and Tomatoes: 1. Add 2 tbsp of Avitri Spices DIY Curry Powder and turmeric powder to the onion mixture. Stir for 30 seconds to release the aromas. 2. Add the chopped or pureed tomatoes and cook until the oil separates from the mixture, about 5-7 minutes.",
      "Step 4 - Add Vegetables and Liquid: 1. Add the steamed vegetables and green peas to the pan, mixing well with the curry base. 2. Pour in the coconut milk (if using) and water or vegetable broth. Stir to combine.",
      "Step 5 - Simmer the Curry: 1. Cover the pan and let the curry simmer for 10-15 minutes on low heat, stirring occasionally, until the vegetables are tender and the flavors are well combined.",
      "Step 6 - Adjust Seasoning and Finish: 1. Taste the curry and adjust salt if needed. 2. Squeeze fresh lemon juice over the curry and mix well. 3. Garnish with freshly chopped coriander leaves.",
    ],

    tips: [
      // "Customize your tacos by adding jalapeños, black beans, or corn kernels.",
      // "Avitri Spices DIY Taco Seasoning pairs well with both meat and vegetarian fillings, so feel free to experiment with your favorite ingredients!",
    ],
    subtitile:
      "Enjoy your flavorful, wholesome, and comforting vegetarian curry made with Avitri Spices DIY Curry Powder!",

    suggestions: [
      "Serve hot with steamed rice, naan, or roti. ",
      "Accompany with a side of yogurt or a fresh salad for a complete meal.",
    ],
  },

  {
    id: 10,
    title: "Chinese Five Spice Stir-Fry",
    image: five_image,
    serves: "4",
    time: "15 minutes",
    cookingTime: "15 minutes",
    recipesBenfit: "Recipe Benefits",
    ingredients: [
      "For the Stir-Fry:",
      "1 tbsp Avitri Spices DIY Chinese Five Spice",
      "2 tbsp vegetable oil",
      "2 garlic cloves, minced",
      "1-inch piece of ginger, finely chopped",
      "1 onion, sliced",
      "1 red bell pepper, julienned",
      "1 yellow bell pepper, julienned",
      "1 cup broccoli florets",
      "1 cup snap peas",
      "1 cup mushrooms, sliced",
      "200g firm tofu or chicken breast, cubed",
      "2 tbsp soy sauce",
      "1 tbsp oyster sauce (optional for non-veg version)",
      "1 tsp sesame oil",
      "1 tsp sugar",
      "1 tsp cornstarch dissolved in 2 tbsp water (for thickening)",
      "2 tbsp water (if needed)",
      "For Serving:",
      "1 cup cooked jasmine rice or noodles",
      "Fresh cilantro or spring onions for garnish (optional)",
    ],
    instructions: [
      "Prepare the Sauce: In a small bowl, mix soy sauce, oyster sauce (if using), sesame oil, sugar, and the cornstarch slurry. Set aside.",
      "Heat the Pan: Heat the vegetable oil in a large wok or skillet over medium-high heat.",
      "Cook Aromatics: Add garlic and ginger to the pan. Sauté for about 30 seconds until fragrant.",
      "Add Protein: Toss in the tofu or chicken and stir-fry until golden and cooked through. Remove from the pan and set aside.",
      "Stir-Fry Vegetables: Add the onion, broccoli, snap peas, bell peppers, and mushrooms to the pan. Stir-fry for 3-4 minutes until the vegetables are crisp-tender.",
      "Season with Spice: Sprinkle Avitri Spices DIY Chinese Five Spice evenly over the vegetables and toss to coat.",
      "Combine Everything: Return the tofu or chicken to the pan. Pour the sauce over the stir-fry and mix well. If the sauce is too thick, add a little water to loosen it.",
      "Cook Through: Let everything simmer for 1-2 minutes until the sauce thickens and coats the ingredients.",
      "Serve: Serve hot over cooked jasmine rice or noodles. Garnish with fresh cilantro or spring onions if desired.",
    ],

    tips: [
      "To elevate the flavor, sprinkle some toasted sesame seeds over the stir-fry before serving. Adjust the amount of DIY Chinese Five Spice based on your preference for boldness.",
    ],
    subtitile: [""],

    suggestions: [
      // "Serve hot with steamed rice, naan, or roti. ",
      // "Accompany with a side of yogurt or a fresh salad for a complete meal.",
    ],
  },

  {
    id: 11,
    title: "Creole Shrimp Pasta",
    image: rasam_powder,
    serves: "4",
    time: "15 minutes",
    cookingTime: "15 minutes",
    recipesBenfit: "Recipe Benefits",
    ingredients: [
      "For the Shrimp:",
      "500g large shrimp, peeled and deveined",
      "2 tbsp Avitri Spices DIY Carole Seasoning",
      "1 tbsp olive oil",
      "For the Pasta:",
      "300g fettuccine or linguine",
      "2 tbsp butter",
      "2 garlic cloves, minced",
      "1 small onion, finely chopped",
      "1 medium red bell pepper, diced",
      "1 medium green bell pepper, diced",
      "1 medium tomato, chopped",
      "1 cup heavy cream (or coconut milk for a lighter version)",
      "1 cup chicken or vegetable stock",
      "1/2 cup grated Parmesan cheese",
      "1 tsp chili flakes (optional, for extra heat)",
      "Salt to taste",
      "Fresh parsley, chopped (for garnish)",
    ],
    instructions: [
      "Cook the Pasta: Boil the pasta in salted water according to the package instructions. Drain and set aside, reserving 1/4 cup of the pasta water.",
      "Prepare the Shrimp: Toss the shrimp with Avitri Spices DIY Carole Seasoning and olive oil until evenly coated. Heat a skillet over medium heat and cook the shrimp for 2-3 minutes on each side until pink and cooked through. Remove and set aside.",
      "Prepare the Sauce: In the same skillet, melt the butter and sauté the garlic, onion, and bell peppers until softened (about 3-4 minutes). Add the chopped tomato and cook until it breaks down slightly. Stir in the heavy cream and chicken/vegetable stock, bringing it to a gentle simmer. Add 1 tbsp of Avitri Spices DIY",
      "Combine: Toss the cooked pasta into the sauce, coating it thoroughly. Add a splash of reserved pasta water if the sauce feels too thick. Gently fold in the cooked shrimp.",
      "Serve: Plate the pasta and garnish with freshly chopped parsley and a sprinkle of Parmesan cheese. Serve hot with crusty bread or a side salad.",
    ],

    tips: [
      "This recipe is adaptable—use chicken or tofu instead of shrimp for variety.",
      "Adjust the spice level by adding more DIY Carole Seasoning or chili flakes.",
    ],
    subtitile: [
      "Enjoy your meal with the bold and rich flavors of Avitri Spices' DIY Carole Seasoning!",
    ],

    suggestions: [
      // "Serve hot with steamed rice, naan, or roti. ",
      // "Accompany with a side of yogurt or a fresh salad for a complete meal.",
    ],
  },

  {
    id: 12,
    title: "Vegetarian Creole Rice Bowl",
    image: rasam_powder,
    serves: "4",
    time: "15 minutes",
    cookingTime: "15 minutes",
    recipesBenfit: "Recipe Benefits",
    ingredients: [
      "For the Creole Rice:",
      "1 cup long-grain rice (basmati or jasmine)",
      "2 cups water",
      "1 tablespoon olive oil",
      "1 small onion, finely chopped",
      "2 garlic cloves, minced",
      "1/2 cup diced bell peppers (red, green, or yellow)",
      "1/2 cup diced tomatoes (fresh or canned)",
      "1/4 cup corn kernels",
      "1/4 cup green peas",
      "1 teaspoon Avitri Spices DIY Creole Seasoning",
      "Salt to taste",
      "Fresh cilantro or parsley for garnish",
      "For the Toppings (optional):",
      "Avocado slices",
      "Lemon or lime wedges",
      "Sliced jalapeños (if you like it extra spicy)",
      "Grated cheese or vegan cheese",
    ],
    instructions: [
      "Cook the Rice: Rinse the rice thoroughly until the water runs clear. In a medium saucepan, bring 2 cups of water to a boil. Add the rice, reduce the heat to low, cover, and simmer for 15-20 minutes until the rice is tender and the water is absorbed. Fluff the rice with a fork and set aside.",
      "Prepare the Creole Base: Heat olive oil in a large skillet over medium heat. Add chopped onions and sauté for 2-3 minutes until translucent. Stir in the garlic and cook for another minute until fragrant. Add diced bell peppers, tomatoes, corn, and peas. Cook for 5 minutes until the vegetables are tender.",
      "Season the Dish: Sprinkle 1 teaspoon of Avitri Spices DIY Creole Seasoning over the vegetables. Adjust the amount based on your spice preference. Mix well to ensure all the vegetables are coated with the seasoning.",
      "Combine with Rice: Add the cooked rice to the skillet and stir until fully combined with the vegetables and seasoning. Cook for an additional 2 minutes to allow the flavors to meld together. Taste and adjust salt if necessary.",
      "Serve: Transfer the Creole Rice to a serving dish. Garnish with fresh cilantro or parsley. Add optional toppings like avocado slices, lemon wedges, or grated cheese for an extra touch.",
    ],

    tips: [
      // "This recipe is adaptable—use chicken or tofu instead of shrimp for variety.",
      // "Adjust the spice level by adding more DIY Carole Seasoning or chili flakes.",
    ],
    subtitile: [
      "Enjoy your Creole Rice Bowl with the bold and versatile Avitri Spices DIY Creole Seasoning!",
    ],

    suggestions: [
      "Serve the Creole Rice as a standalone dish or pair it with a fresh green salad for a complete meal. It’s a delightful way to enjoy the vibrant flavors of Creole cuisine with a vegetarian twist!",
    ],
  },
];

export default function RecipesPage() {

  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <>
    <div
        className="page-content"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
      {/* Navbar Top */}

      <Navbar_Menu />

      <Container style={{ padding: "50px", marginTop: "2%" }}>
        <div style={{ margin: "5% 20% 10% 20%" }} className="div-recipespage">
          <h1
            style={{
              lineHeight: "1.5",
              letterSpacing: "3px",
              fontSize: "55px",
              maxWidth: "100%",
              fontWeight: "bold",
              fontFamily: "kapraneue, sans-serif",
              textAlign: "center",
              // marginBottom: "5%",
              textTransform: "uppercase",
            }}
            className="h1-recipes-title"
          >
            {product.title}
          </h1>
          <div style={{ textAlign: "center" }}>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "300px", height: "auto" }}
              className="recipes-img"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginTop: "5%",
              marginBottom: "2%",
              fontSize: "22px",
            }}
            className="services-prepartion-cooking"
          >
            <p>
              <span
                style={{
                  fontFamily: "kapraneue, sans-serif",
                  letterSpacing: "1px",
                }}
              >
                Services:
              </span>{" "}
              {product.serves}
            </p>
            <p>
              <span
                style={{
                  fontFamily: "kapraneue, sans-serif",
                  letterSpacing: "1px",
                }}
              >
                Preparation Time:
              </span>{" "}
              {product.time}
            </p>
            <p>
              <span
                style={{
                  fontFamily: "kapraneue, sans-serif",
                  letterSpacing: "1px",
                }}
              >
                Cooking Time:
              </span>{" "}
              {product.cookingTime}
            </p>
          </div>
          <h1
            style={{
              lineHeight: "1.5",
              letterSpacing: "3px",
              fontSize: "50px",
              maxWidth: "100%",
              fontWeight: "bold",
              fontFamily: "kapraneue, sans-serif",
              textAlign: "center",
              marginBottom: "5%",
              textTransform: "uppercase",
            }}
          >
            Recipe Benefits
          </h1>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              margin: "10% 0%",
            }}
          >
            <div className="zoom-in-image">
              <img
                src={delicious_icon}
                alt="delicious"
                style={{ width: "50%", height: "auto", objectFit: "cover" }}
                
              />
              <p
                style={{
                  fontSize: "28px",
                  marginTop: "5%",
                  letterSpacing: "1px",
                  fontFamily: "kapraneue, sans-serif",
                }}
                className="benefits-p"
              >
                DELICIOUS
              </p>
            </div>
            <div className="zoom-in-image">
              <img
                src={aromatic}
                alt="delicious"
                style={{ width: "50%", height: "auto", objectFit: "cover" }}
              />
              <p
                style={{
                  fontSize: "28px",
                  marginTop: "5%",
                  letterSpacing: "1px",
                  fontFamily: "kapraneue, sans-serif",
                }}
                 className="benefits-p"
              >
                AROMATIC
              </p>
            </div>
            <div className="zoom-in-image">
              <img
                src={flavoury}
                alt="delicious"
                style={{ width: "50%", height: "auto", objectFit: "cover" }}
              />
              <p
                style={{
                  fontSize: "28px",
                  marginTop: "5%",
                  letterSpacing: "1px",
                  fontFamily: "kapraneue, sans-serif",
                }}
                 className="benefits-p"
              >
                FLAVOURY
              </p>
            </div>
          </div>
          <div
            style={{
              fontFamily: "KapraNeueMedium, sans-serif",
              letterSpacing: "1px",
            }}
          >
            <p style={{ fontSize: "28px" }}>Ingredients:</p>
            <ul>
              {product.ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  style={{
                    fontSize: ingredient.includes(
                      "Avitri Spices DIY Garam Masala Kit"
                    )
                      ? "20px"
                      : "inherit",
                    fontWeight: ingredient.includes(
                      "Avitri Spices DIY Garam Masala Kit"
                    )
                      ? "bold"
                      : "normal",
                    fontFamily: ingredient.includes(
                      "Avitri Spices DIY Garam Masala Kit"
                    )
                      ? "kapraneue, sans-serif"
                      : "inherit",
                    marginBottom: "10px",
                  }}
                >
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{
              fontFamily: "KapraNeueMedium, sans-serif",
              letterSpacing: "1px",
            }}
          >
            <p style={{ fontSize: "28px" }}>Method:</p>
            <ol>
              {product.instructions.map((instruction, index) => {
                const [title, description] = instruction.split(": ");
                return (
                  <li
                    key={index}
                    style={{
                      marginBottom: "10px",
                      fontSize: "18px",
                      lineHeight: "1.6",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "kapraneue, sans-serif",
                        letterSpacing: "1px",
                      }}
                    >
                      {title}:
                    </span>{" "}
                    <br /> {description}
                  </li>
                );
              })}
            </ol>
          </div>
          <div
            style={{
              fontFamily: "KapraNeueMedium, sans-serif",
              letterSpacing: "1px",
            }}
          >
            <p style={{ fontSize: "28px" }}>Tips:</p>
            <ul>
              {product.tips.map((tip, index) => (
                <li
                  key={index}
                  style={{
                    fontSize: tip.includes("Avitri Spices DIY Garam Masala Kit")
                      ? "20px"
                      : "inherit",
                    fontWeight: tip.includes(
                      "Avitri Spices DIY Garam Masala Kit"
                    )
                      ? "bold"
                      : "normal",
                    fontFamily: tip.includes(
                      "Avitri Spices DIY Garam Masala Kit"
                    )
                      ? "kapraneue, sans-serif"
                      : "inherit",
                    marginBottom: "10px",
                  }}
                >
                  {tip}
                </li>
              ))}
            </ul>
          </div>
          <p style={{ fontSize: "18px", letterSpacing: "1px" }}>
            {product.subtitile}
          </p>
          <p style={{ fontSize: "18px", letterSpacing: "1px" }}>
            {product.suggestions}
          </p>
        </div>
      </Container>
      <LearnMore />

      {/* FOOTER */}
      <Footer />
      </div>
    </>
  );
}
