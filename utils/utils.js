// JavaScript Utility for Shuffling and Sorting for the Maersk Project

/**
 * @name shuffleItems
 * @param {*} items
 * @description The function is used to shuffle the items
 * @returns shuffledItems
 */
function shuffleItems(items) {
  let shuffledItems = items.slice(0);
  let temp;
  let i = shuffledItems.length;
  let rand;
  while (--i) {
    rand = Math.floor(i * Math.random());
    temp = shuffledItems[rand];
    shuffledItems[rand] = shuffledItems[i];
    shuffledItems[i] = temp;
  }
  return shuffledItems;
}

window.onload = function () {
  // fetching and storing the DOM Element
  let list = document.getElementById("shuffleAndSort");

  /**
   * @name shuffleNodes
   * @param none
   * @description Parent Function to shuffle the HTML nodes and updates the DOM
   * @returns none
   */
  function shuffle() {
    let nodes = list.children,
      i = 0;
    nodes = Array.prototype.slice.call(nodes);
    nodes = shuffleItems(nodes);
    while (i < nodes.length) {
      list.appendChild(nodes[i]);
      ++i;
    }
  }

  /**
   * @name sortItems
   * @param none
   * @description Parent Function to sort the HTML nodes and updates the DOM
   * @returns none
   */
  function sortItems() {
    let items = list.childNodes;
    let itemsArr = [];
    for (let i in items) {
      if (items[i].nodeType == 1) {
        // get rid of the whitespace text nodes
        itemsArr.push(items[i]);
      }
    }

    itemsArr.sort(function (a, b) {
      return a.innerHTML == b.innerHTML
        ? 0
        : a.innerHTML > b.innerHTML
        ? 1
        : -1;
    });

    for (let i = 0; i < itemsArr.length; ++i) {
      list.appendChild(itemsArr[i]);
    }
  }

  // Binding the JS Utility Functions with the OnClick Event
  document.getElementById("sort").onclick = sortItems;
  document.getElementById("shuffle").onclick = shuffle;
};
