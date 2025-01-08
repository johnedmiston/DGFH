var bNum1 = [];
var button1 = [];
var bNum2 = [];
var button2 = [];
var cNum = [];
var content = [];
var butt1Order = [];
var bn2 = document.querySelector(".button-nav .bn2");
var buttonBox = document.querySelector(".button-nav.legal");

// Initialize button1 and button2
for (var i = 0; i < 4; i++) {
    bNum1[i] = ".b" + (i + 1);
    button1[i] = document.querySelector(bNum1[i] + ".bn1");
}
for (var i = 0; i < 2; i++) {
    bNum2[i] = ".b" + (i + 1);
    button2[i] = document.querySelector(bNum2[i] + ".bn2");
}

// Initialize content
for (var i = 0; i < 5; i++) {
    cNum[i] = ".c" + (i + 1);
    content[i] = document.querySelector(cNum[i]);
    console.log(content[i]);
}

// Event listeners for button1
for (let b = 0; b < 4; b++) {
    button1[b].addEventListener("click", function() {
        if (button1[b] === button1[3]) {
            button2[0].classList.remove("hide");
            button2[1].classList.remove("hide");
            button2[0].classList.add("active");
            button2[1].classList.remove("active");
            buttonBox.classList.add("bottom-marg");
        } else {
            button2[0].classList.add("hide");
            button2[1].classList.add("hide");
            buttonBox.classList.remove("bottom-marg");
        }

        for (var i = 0; i < 4; i++) {
            if (button1[i] === button1[b]) {
                button1[i].classList.add("active");
                button1[i].classList.add('legal-flex');
            } else {
                button1[i].classList.remove("active");
                button1[i].classList.remove('legal-flex');
            }
        }

        for (var i = 0; i < 5; i++) {
            if (content[i] === content[b]) {
                content[i].classList.remove("hide");
            } else {
                content[i].classList.add("hide");
            }
        }
    });
}

// Event listeners for button2
for (let b = 0; b < 2; b++) {
    button2[b].addEventListener("click", function() {
        button2[0].classList.remove("hide");
            button2[1].classList.remove("hide");
            buttonBox.classList.add("bottom-marg");
        if (button2[b] === button2[0]) {
            button2[0].classList.add("active");
            button2[1].classList.remove('active');
        } else if (button2[b] === button2[1]) {
            button2[0].classList.remove("active");
            button2[1].classList.add("active");
        }
        button1[3].classList.add("active");
        button1[3].classList.add('legal-flex');
        for (var i = 0; i < 5; i++) {
            if (button2[b] === button2[0]) {
                if (content[i] === content[3]) {
                    content[i].classList.remove("hide");
                } else {
                    content[i].classList.add("hide");
                }
            } else if (button2[b] === button2[1]) {
                if (content[i] === content[4]) {
                    content[i].classList.remove("hide");
                } else {
                    content[i].classList.add("hide");
                }
            }
        }
    });
}