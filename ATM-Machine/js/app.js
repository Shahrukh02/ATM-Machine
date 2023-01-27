let userValue = document.getElementById("user");
let btn = document.getElementById("btn");
let reset = document.getElementById("reset");

let note1 = document.getElementById("note1");
let note2 = document.getElementById("note2");
let note5 = document.getElementById("note5");
let note10 = document.getElementById("note10");
let note20 = document.getElementById("note20");
let note50 = document.getElementById("note50");
let note100 = document.getElementById("note100");
let note500 = document.getElementById("note500");
let note1000 = document.getElementById("note1000");
let note5000 = document.getElementById("note5000");

let allRadioBtn = document.querySelectorAll(".notes");
reset.addEventListener("click", () => {
  allRadioBtn.forEach((e) => {
    if (e.checked) {
      e.checked = false;
    }
    localStorage.setItem("prefferedValue", null);
  });
});

function valueCheck() {
  allRadioBtn.forEach((e) => {
    if (e.checked) {
      let value = e.value;
      localStorage.setItem("prefferedValue", value);
    }
  });
}

btn.addEventListener("click", () => {
  let getPrefferedValue = localStorage.getItem("prefferedValue");
  if (userValue.value <= 1) {
    funcOne(userValue.value, getPrefferedValue);
  } else if (userValue.value <= 4 && userValue.value >= 2) {
    funcTwo(userValue.value, getPrefferedValue);
  } else if (userValue.value <= 9 && userValue.value >= 5) {
    funcFive(userValue.value, getPrefferedValue);
  } else if (userValue.value <= 19 && userValue.value >= 10) {
    funcTen(userValue.value, getPrefferedValue);
  } else if (userValue.value <= 49 && userValue.value >= 20) {
    funcTwenty(userValue.value, getPrefferedValue);
  } else if (userValue.value <= 99 && userValue.value >= 50) {
    funcFifty(userValue.value, getPrefferedValue);
  } else if (userValue.value <= 499 && userValue.value >= 100) {
    funcHundred(userValue.value, getPrefferedValue);
  } else if (userValue.value <= 999 && userValue.value >= 500) {
    funcFivehundred(userValue.value, getPrefferedValue);
  } else if (userValue.value <= 4999 && userValue.value >= 1000) {
    funcThousand(userValue.value, getPrefferedValue);
  } else if (userValue.value <= 1000000 && userValue.value >= 5000) {
    funcFivethousand(userValue.value, getPrefferedValue);
  } else {
    alert("10 lakh tk i nikal skty ho bhai");
  }
  localStorage.setItem('prefferedValue',null)
});

//1
function funcOne(e) {
  let count = 0;
    for (let i = 1; i <= e; i += 1) {
      note1.innerHTML = `<h2>1: ${count++ + 1}</h2>`;
    
  }
}

//2
function funcTwo(e) {
  let count = 0;
  for (let i = 2; i <= e; i += 2) {
    note2.innerHTML = `<h2>2: ${count++ + 1}</h2>`;
    var remainingBalanceTwo = e - i;
  }

  funcOne(
    remainingBalanceTwo != 0 ? remainingBalanceTwo || e : remainingBalanceTwo
  );
}

//5
function funcFive(e) {
  let count = 0;
  for (let i = 5; i <= e; i += 5) {
    note5.innerHTML = `<h2>5: ${count++ + 1}</h2>`;
    var remainingBalanceFive = e - i;
  }

  funcTwo(
    remainingBalanceFive != 0 ? remainingBalanceFive || e : remainingBalanceFive
  );
}

//10
function funcTen(e) {
  let count = 0;
  for (let i = 10; i <= e; i += 10) {
    note10.innerHTML = `<h2>10: ${count++ + 1}</h2>`;
    var remainingBalanceTen = e - i;
  }
  funcFive(
    remainingBalanceTen != 0 ? remainingBalanceTen || e : remainingBalanceTen
  );
}

//20
function funcTwenty(e,p) {
  let count = 0;
  for (let i = +p||20; i <= e; i += +p||20) {
    if (p != 'null' && p != undefined) {
    note20.innerHTML = `<h2>${p}: ${count++ + 1}</h2>`;
    var remainingBalanceTwenty = e - i;
    if (count  == 200) {
      funcTen(remainingBalanceTwenty)
      break
    }
    }else{
      note20.innerHTML = `<h2>20: ${count++ + 1}</h2>`;
    }
    var remainingBalanceTwenty = e - i;
  }

  funcTen(
    remainingBalanceTwenty != 0
      ? remainingBalanceTwenty || e
      : remainingBalanceTwenty
  );
}

//50
function funcFifty(e, p) {
  let count = 0;
  for (let i = +p||50; i <= e; i += +p||50) {
    if (p != 'null' && p != undefined) {
    note50.innerHTML = `<h2>${p}: ${count++ + 1}</h2>`;
    var remainingBalanceFifty = e - i;
    if (count  == 200) {
      funcTwenty(remainingBalanceFifty)
      break
    }
    }else{
      note50.innerHTML = `<h2>50: ${count++ + 1}</h2>`;
    }
    var remainingBalanceFifty = e - i;
  }

  funcTwenty(
    remainingBalanceFifty != 0
      ? remainingBalanceFifty || e
      : remainingBalanceFifty
  );
}

//100
function funcHundred(e,p) {
  let count = 0;
  for (let i = +p||100; i <= e; i += +p||100) {
    if (p != 'null' && p != undefined) { 
      note100.innerHTML = `<h2>${p}: ${count++ + 1}</h2>`;
      var remainingBalanceHundred = e - i;
      if (count  == 200) {
        funcFifty(remainingBalanceHundred)
        break
      }
    }else{
      note100.innerHTML = `<h2>100: ${count++ + 1}</h2>`;
    }
    var remainingBalanceHundred = e - i;
  }

  funcFifty(
    remainingBalanceHundred != 0
      ? remainingBalanceHundred || e
      : remainingBalanceHundred
  );
}

//500
function funcFivehundred(e,p) {
  let count = 0;

  for (let i = +p||500; i <= e; i += +p||500) {
    if (p != 'null' && p!= undefined) { 
    note500.innerHTML = `<h2>${p}: ${count++ + 1}</h2>`;
    var remainingBalanceFivehundred = e - i;
    if (count  == 200) {
      funcHundred(remainingBalanceFivehundred)
      break
    }
    }else{
      note500.innerHTML = `<h2>500: ${count++ + 1}</h2>`;
    }
    var remainingBalanceFivehundred = e - i;
  }

  funcHundred(
    remainingBalanceFivehundred != 0
      ? remainingBalanceFivehundred || e
      : remainingBalanceFivehundred
  );
}

//1000
function funcThousand(e,p) {
  let count = 0;
  for (let i = +p||1000; i <= e; i += +p||1000) {
    if(p != 'null' && p != undefined){
      note1000.innerHTML = `<h2>${p}: ${count++ + 1}</h2>`;
      var remainingBalanceThousand = e - i;
      if (count  == 200) {
        funcFivehundred(remainingBalanceThousand)
        break
      }
    }else{
      note1000.innerHTML = `<h2>1000: ${count++ + 1}</h2>`;
    }
    var remainingBalanceThousand = e - i;
    }

  funcFivehundred(
    remainingBalanceThousand != 0
      ? remainingBalanceThousand || e
      : remainingBalanceThousand
  );
}

//5000
function funcFivethousand(e,p) {
  let count = 0;
  for (let i = +p||5000; i <= e; i += +p||5000) {
    if (p != 'null') {
      note5000.innerHTML = `<h2>${p}: ${count++ + 1}</h2>`;
      var remainingBalanceFivethousand = e - i;
      if (count  == 200) {
        funcThousand(remainingBalanceFivethousand)
        break
      }
    }else{
      note5000.innerHTML = `<h2>5000: ${count++ + 1}</h2>`;
    }
    var remainingBalanceFivethousand = e - i;
  }

  funcThousand(
    remainingBalanceFivethousand != 0
      ? remainingBalanceFivethousand || e
      : remainingBalanceFivethousand
  );
}

