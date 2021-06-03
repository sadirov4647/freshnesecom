var element = {
    select: document.querySelector(".burger-btn"),
    active: "active",
    className: function () {
        return this.select.className;
    }
};

element.select.onclick = function () {
    var checker = hasClass(element.select, element.active);

    if (checker) {
        removeClass(element.select, element.active);
    } else {
        element.select.className = element.select.className + " active";
    }
};

function hasClass(elem, className) {
    return new RegExp(" " + className + " ").test(" " + elem.className + " ");
}

function removeClass(elem, className) {
    var newClass = " " + elem.className.replace(/[\t\r\n]/g, " ") + " ";
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0) {
            newClass = newClass.replace(" " + className + " ", " ");
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, "");
    }
}


document.querySelector('.openMenu').addEventListener('click', () => {
    document.querySelector('.nav-info__list').classList.toggle('open');
    document.querySelector('.nav-page__list').classList.toggle('open');
    document.querySelector('.choose-section__list').classList.toggle('active');
});

document.querySelector('.search-btn').addEventListener('click', () => {
    document.querySelector('.search-input').classList.toggle('input-block');
    document.querySelector('.search-btn').style.display = "none";
})


// rating
function rate5() {
    document.getElementById("5").style.color = "orange";
    document.getElementById("4").style.color = "orange";
    document.getElementById("3").style.color = "orange";
    document.getElementById("2").style.color = "orange";
    document.getElementById("1").style.color = "orange";
  }
  
  function rate4() {
    document.getElementById("5").style.color = "#9e9e9e";
    document.getElementById("4").style.color = "orange";
    document.getElementById("3").style.color = "orange";
    document.getElementById("2").style.color = "orange";
    document.getElementById("1").style.color = "orange";
  }
  
  function rate3() {
    document.getElementById("5").style.color = "#9e9e9e";
    document.getElementById("4").style.color = "#9e9e9e";
    document.getElementById("3").style.color = "orange";
    document.getElementById("2").style.color = "orange";
    document.getElementById("1").style.color = "orange";
  }
  
  function rate2() {
    document.getElementById("5").style.color = "#9e9e9e";
    document.getElementById("4").style.color = "#9e9e9e";
    document.getElementById("3").style.color = "#9e9e9e";
    document.getElementById("2").style.color = "orange";
    document.getElementById("1").style.color = "orange";
  }
  
  function rate1() {
    document.getElementById("5").style.color = "#9e9e9e";
    document.getElementById("4").style.color = "#9e9e9e";
    document.getElementById("3").style.color = "#9e9e9e";
    document.getElementById("2").style.color = "#9e9e9e";
    document.getElementById("1").style.color = "orange";
  }
  
  document.getElementById("5").onclick = function () {
    rate5();
  };
  document.getElementById("4").onclick = function () {
    rate4();
  };
  document.getElementById("3").onclick = function () {
    rate3();
  };
  document.getElementById("2").onclick = function () {
    rate2();
  };
  document.getElementById("1").onclick = function () {
    rate1();
  };