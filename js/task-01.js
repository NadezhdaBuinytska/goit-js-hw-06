"use strict";

const totalCategories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${totalCategories.length}`);

// const mapCategories = [...totalCategories]
//   .flatMap(
//     categories =>
//     `Category: ${categories.children[0].textContent}
// Elements: ${categories.children[1].children.length}`
// )
// .join("\n");
// console.log(mapCategories);

totalCategories.forEach(item => {
  const titleCategoryEl = item.querySelector("h2");
  const itemsCategoryEl = item.querySelectorAll("li");

  console.log(`Category: ${ titleCategoryEl.textContent }`);
  console.log(`Elements: ${itemsCategoryEl.length}`);
})