var bNum1 = [];
var button1 = [];
var bNum2 = [];
var button2 = [];
var cNum = [];
var content = [];
var bn2 = document.querySelector(".button-nav.bn2");

for (var i = 0; i < 4; i++) {
    bNum1[i] = ".b" + (i + 1);
    button1[i] = document.querySelector(bNum1[i] + ".bn1");
    
}
for (var i = 0; i < 2; i++) {
    bNum2[i] = ".b" + (i + 1);
    button2[i] = document.querySelector(bNum2[i] + ".bn2");
}
for (var i = 0; i < 5; i++) {
    cNum[i] = ".c" + (i + 1);
    content[i] = document.querySelector(cNum[i] + "");
    console.log(content[i]);
}
button1[0].addEventListener("click", function() {
    button1[0].classList.add("active");
    button1[1].classList.remove("active");
    button1[2].classList.remove("active");
    button1[3].classList.remove("active");
    bn2.classList.add("hide");
    for (var i = 0; i < 5; i++) {
        if (content[i] == content[0]) {
            content[i].classList.remove("hide");
        } else {
            content[i].classList.add("hide");
        }
    }

});
button1[1].addEventListener("click", function() {
    button1[0].classList.remove("active");
    button1[1].classList.add("active");
    button1[2].classList.remove("active");
    button1[3].classList.remove("active");
    bn2.classList.add("hide");
    for (var i = 0; i < 5; i++) {
        if (content[i] == content[1]) {
            content[i].classList.remove("hide");
        } else {
            content[i].classList.add("hide");
        }
    }
});
button1[2].addEventListener("click", function() {
    button1[0].classList.remove("active");
    button1[1].classList.remove("active");
    button1[2].classList.add("active");
    button1[3].classList.remove("active");
    bn2.classList.remove("hide");
    button2[0].classList.add("active");
    button2[1].classList.remove("active");
    for (var i = 0; i < 5; i++) {
        if (content[i] == content[3]) {
            content[i].classList.remove("hide");
        } else {
            content[i].classList.add("hide");
        }
    }
});
button1[3].addEventListener("click", function() {
    button1[0].classList.remove("active");
    button1[1].classList.remove("active");
    button1[2].classList.remove("active");
    button1[3].classList.add("active");
    bn2.classList.add("hide");
    for (var i = 0; i < 5; i++) {
        if (content[i] == content[2]) {
            content[i].classList.remove("hide");
        } else {
            content[i].classList.add("hide");
        }
    }
});
button2[0].addEventListener("click", function() {
    button1[0].classList.remove("active");
    button1[1].classList.remove("active");
    button1[2].classList.add("active");
    button1[3].classList.remove("active");
    bn2.classList.remove("hide");
    button2[0].classList.add("active");
    button2[1].classList.remove("active");
    for (var i = 0; i < 5; i++) {
        if (content[i] == content[3]) {
            content[i].classList.remove("hide");
        } else {
            content[i].classList.add("hide");
        }
    }
});
button2[1].addEventListener("click", function() {
    button1[0].classList.remove("active");
    button1[1].classList.remove("active");
    button1[2].classList.add("active");
    button1[3].classList.remove("active");
    bn2.classList.remove("hide");
    button2[0].classList.remove("active");
    button2[1].classList.add("active");
    for (var i = 0; i < 5; i++) {
        if (content[i] == content[4]) {
            content[i].classList.remove("hide");
        } else {
            content[i].classList.add("hide");
        }
    }
});