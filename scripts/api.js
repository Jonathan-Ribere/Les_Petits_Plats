export async function getData() {
  try {
    const response = await fetch("../data/recipes.json");
    const data = await response.json();
    console.log(data.recipes);
    const recipes = data.recipes;
    return recipes;
  } catch (error) {
    console.error(error);
  }
}
