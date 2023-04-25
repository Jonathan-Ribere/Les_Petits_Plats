export async function getData() {
    try {
      const response = await fetch("/data/recipes.json");
      const data = await response.json();
      recipes = data.recipes;
      return recipes;
    } catch (error) {
      console.error(error);
    }
  }