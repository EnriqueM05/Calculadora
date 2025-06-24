let input = document.getElementById("a");
let empty = 1;

input.addEventListener("input", function () {
  const allowed = "0123456789+-/*(). ";
  const lastChar = input.value.slice(-1);
  if (!allowed.includes(lastChar)) {
    input.value = input.value.slice(0, -1);
  }
  if (empty === 0) {
    input.value = "";
    empty = 1;
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Delete") {
    input.value = "";
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    try {
      const result = math.evaluate(input.value);
      input.value = result;
      empty = 0;
    } catch (error) {
      input.value = "Error";
      console.log(error);
    }
  }
});

document.getElementById("one").onclick = function () {
  input.value += "1";
};

document.getElementById("two").onclick = function () {
  input.value += "2";
};

document.getElementById("three").onclick = function () {
  input.value += "3";
};

document.getElementById("four").onclick = function () {
  input.value += "4";
};

document.getElementById("five").onclick = function () {
  input.value += "5";
};

document.getElementById("six").onclick = function () {
  input.value += "6";
};

document.getElementById("seven").onclick = function () {
  input.value += "7";
};

document.getElementById("eight").onclick = function () {
  input.value += "8";
};

document.getElementById("nine").onclick = function () {
  input.value += "9";
};

document.getElementById("sum").onclick = function () {
  input.value += "+";
};

document.getElementById("resta").onclick = function () {
  input.value += "-";
};

document.getElementById("divs").onclick = function () {
  input.value += "/";
};

document.getElementById("multi").onclick = function () {
  input.value += "*";
};

document.getElementById("enter").onclick = function () {
  try {
    const result = math.evaluate(input.value);
    input.value = result;
    empty = 0;
  } catch (error) {
    input.value = "Error";
    console.log(error);
  }
};
