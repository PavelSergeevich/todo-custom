export function searchItems(searchInput, todoText, targetItem) {
  const todoArray = todoText.toLowerCase().split('');
  const searchArray = searchInput.toLowerCase().split('');
  let checker = (arr, target) => target.every(v => arr.includes(v));
  if (checker(searchArray, todoArray)) {
    return true;
  } else {
    return false;
  }
}