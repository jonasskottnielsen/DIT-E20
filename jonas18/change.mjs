
function change(amountToChange) {
    var number = amountToChange;
    var change = [];
    var changeArray=[1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
        for (var i=0; i<changeArray.length; i++) {
            if (number>=changeArray[i]) {
                // tilføj til array'et
                change.push(changeArray[i]);
                // træk det fra number
                number -= changeArray[i];
                // decrement for at være sikker på at tallet ikke forekommer igen f.eks 2050 -> 1050
                i--;
            }
        }
    return change;
  }