// src/utils/findMinimalSubset.js
function findMinimalSubset(bills, budget) {
    let bestSubset = null;
  
    function canAddAnyMoreBill(allBills, chosenSubset, budget, currentSum) {
      const chosenIds = new Set(chosenSubset.map((b) => b.id));
      for (let bill of allBills) {
        if (!chosenIds.has(bill.id)) {
          if (currentSum + bill.amount <= budget) {
            return true;
          }
        }
      }
      return false;
    }
  
    function backtrack(index, currentSubset, currentSum) {
      if (index === bills.length) {
        if (currentSum <= budget) {
          if (!canAddAnyMoreBill(bills, currentSubset, budget, currentSum)) {
            if (!bestSubset || currentSubset.length < bestSubset.length) {
              bestSubset = [...currentSubset];
            }
          }
        }
        return;
      }
  
      // Skip the current bill
      backtrack(index + 1, currentSubset, currentSum);
  
      // Include the current bill
      currentSubset.push(bills[index]);
      backtrack(index + 1, currentSubset, currentSum + bills[index].amount);
      currentSubset.pop();
    }
  
    backtrack(0, [], 0);
    return bestSubset || [];
  }
  
  export default findMinimalSubset;
  