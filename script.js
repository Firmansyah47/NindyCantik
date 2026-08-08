/* =========================================================
   SECRET CODE
========================================================= */

/*
   GANTI PASSWORD DI SINI.

   Contoh:

   const SECRET_CODE = "NINDY2026";
*/

const SECRET_CODE = "12345";


/* =========================================================
   ELEMENT PAGE
========================================================= */

const gardenPage =
    document.getElementById("gardenPage");

const albumPage =
    document.getElementById("albumPage");

const messagePage =
    document.getElementById("messagePage");

const birthdayBook =
    document.getElementById("birthdayBook");

const secretCodeInput =
    document.getElementById("secretCode");

const openBookButton =
    document.getElementById("openBook");

const codeMessage =
    document.getElementById("codeMessage");

const nextPage =
    document.getElementById("nextPage");

const flowers =
    document.getElementById("flowers");

const butterflies =
    document.getElementById("butterflies");

const fireflies =
    document.getElementById("fireflies");

const messageDecorations =
    document.getElementById(
        "messageDecorations"
    );


/* =========================================================
   BUNGA TAMAN PAGE 1
========================================================= */

const flowerPositions = [

    [4, 12],
    [10, 7],
    [18, 15],
    [25, 5],
    [32, 10],
    [40, 4],
    [60, 8],
    [68, 14],
    [75, 5],
    [83, 11],
    [91, 6],
    [96, 16]

];

flowerPositions.forEach(
    ([left, bottom]) => {

        const flower =
            document.createElement("div");

        flower.className =
            "flower";

        flower.style.left =
            left + "%";

        flower.style.bottom =
            bottom + "%";

        flower.style.animationDelay =
            Math.random() * 2 + "s";


        const head =
            document.createElement("div");

        head.className =
            "flower-head";


        const stem =
            document.createElement("div");

        stem.className =
            "flower-stem";


        flower.appendChild(head);

        flower.appendChild(stem);

        flowers.appendChild(flower);

    }
);


/* =========================================================
   KUPU-KUPU PAGE 1
========================================================= */

for (
    let i = 0;
    i < 3;
    i++
) {

    const butterfly =
        document.createElement("div");

    butterfly.className =
        "butterfly";

    butterfly.textContent =
        "🦋";

    butterfly.style.top =
        30 + i * 13 + "%";

    butterfly.style.left =
        -10 - i * 8 + "%";

    butterfly.style.animationDuration =
        9 + i * 3 + "s";

    butterfly.style.animationDelay =
        i * 3 + "s";

    butterflies.appendChild(
        butterfly
    );
}


/* =========================================================
   KUNANG-KUNANG PAGE 1
========================================================= */

for (
    let i = 0;
    i < 35;
    i++
) {

    const firefly =
        document.createElement("span");

    firefly.className =
        "firefly";

    firefly.style.left =
        Math.random() * 100 + "%";

    firefly.style.top =
        45 + Math.random() * 50 + "%";

    firefly.style.animationDuration =
        Math.random() * 2 + 1.5 + "s";

    firefly.style.animationDelay =
        Math.random() * 3 + "s";

    fireflies.appendChild(
        firefly
    );
}


/* =========================================================
   BUNGA KECIL TAMBAHAN
========================================================= */

for (
    let i = 0;
    i < 20;
    i++
) {

    const tinyFlower =
        document.createElement("span");

    tinyFlower.textContent =
        Math.random() > .5
            ? "✿"
            : "✾";

    tinyFlower.style.position =
        "absolute";

    tinyFlower.style.left =
        Math.random() * 100 + "%";

    tinyFlower.style.top =
        65 + Math.random() * 30 + "%";

    tinyFlower.style.color =
        Math.random() > .5
            ? "#fff0a8"
            : "#ffb5c9";

    tinyFlower.style.fontSize =
        Math.random() * 12 + 8 + "px";

    tinyFlower.style.opacity =
        ".7";

    flowers.appendChild(
        tinyFlower
    );
}


/* =========================================================
   DEKORASI PAGE 3
========================================================= */

const messageDecorIcons = [
    "🌸",
    "🌼",
    "🌷",
    "🌻",
    "🦋",
    "✿",
    "✾",
    "🌿"
];

for (
    let i = 0;
    i < 30;
    i++
) {

    const decoration =
        document.createElement("span");

    decoration.textContent =
        messageDecorIcons[
            Math.floor(
                Math.random() *
                messageDecorIcons.length
            )
        ];

    decoration.style.position =
        "absolute";

    decoration.style.left =
        Math.random() * 100 + "%";

    decoration.style.top =
        Math.random() * 100 + "%";

    decoration.style.fontSize =
        12 + Math.random() * 22 + "px";

    decoration.style.opacity =
        .25 + Math.random() * .4;

    decoration.style.animation =
        `messageDecorationFloat ${
            3 + Math.random() * 4
        }s ease-in-out infinite alternate`;

    decoration.style.animationDelay =
        Math.random() * 3 + "s";

    messageDecorations.appendChild(
        decoration
    );
}


/* =========================================================
   ANIMASI DEKORASI PAGE 3
========================================================= */

const decorationStyle =
    document.createElement("style");

decorationStyle.textContent = `

@keyframes messageDecorationFloat {

    from {

        transform:
            translateY(0)
            rotate(-5deg);

    }

    to {

        transform:
            translateY(-18px)
            rotate(5deg);

    }

}

`;

document.head.appendChild(
    decorationStyle
);


/* =========================================================
   SECRET CODE
========================================================= */

function checkSecretCode() {

    const enteredCode =
        secretCodeInput.value.trim();


    if (
        enteredCode === SECRET_CODE
    ) {

        codeMessage.textContent =
            "✨ Secret unlocked...";

        codeMessage.style.color =
            "#fff6bd";

        openBookButton.disabled =
            true;

        secretCodeInput.disabled =
            true;


        birthdayBook.style.animation =
            "none";

        birthdayBook.style.transition =
            "1s ease";

        birthdayBook.style.transform =
            "translate(-50%, -50%) scale(1.12) rotateY(10deg)";

        birthdayBook.style.opacity =
            "0";


        setTimeout(
            () => {

                gardenPage.style.opacity =
                    "0";

                gardenPage.style.visibility =
                    "hidden";

            },
            700
        );


        setTimeout(
            () => {

                gardenPage.style.display =
                    "none";

                albumPage.style.display =
                    "block";

                window.scrollTo(
                    0,
                    0
                );

                requestAnimationFrame(
                    () => {

                        albumPage.style.opacity =
                            "1";

                    }
                );

            },
            1100
        );

    } else {

        codeMessage.textContent =
            "🌸 Hmm... secret code-nya belum benar.";

        codeMessage.style.color =
            "#fff0a8";


        secretCodeInput.animate(

            [
                {
                    transform:
                        "translateX(0)"
                },

                {
                    transform:
                        "translateX(-8px)"
                },

                {
                    transform:
                        "translateX(8px)"
                },

                {
                    transform:
                        "translateX(-5px)"
                },

                {
                    transform:
                        "translateX(5px)"
                },

                {
                    transform:
                        "translateX(0)"
                }

            ],

            {
                duration: 400
            }

        );

        secretCodeInput.select();

    }

}


/* =========================================================
   BUTTON OPEN BOOK
========================================================= */

openBookButton.addEventListener(
    "click",
    checkSecretCode
);


/* =========================================================
   ENTER PASSWORD
========================================================= */

secretCodeInput.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Enter"
        ) {

            checkSecretCode();

        }

    }
);


/* =========================================================
   PHOTO POPUP
========================================================= */

const photoPopup =
    document.getElementById(
        "photoPopup"
    );

const popupImage =
    document.getElementById(
        "popupImage"
    );

const popupCaption =
    document.getElementById(
        "popupCaption"
    );

const closePopup =
    document.getElementById(
        "closePopup"
    );


const galleryPhotos =
    document.querySelectorAll(
        ".photo-frame img"
    );


/* BUKA FOTO */

galleryPhotos.forEach(
    (photo) => {

        photo.addEventListener(
            "click",
            function () {

                popupImage.src =
                    this.src;

                popupImage.alt =
                    this.alt;

                popupCaption.textContent =
                    this.dataset.caption ||
                    this.alt ||
                    "A beautiful memory ♡";

                photoPopup.classList.add(
                    "active"
                );

                document.body.style.overflow =
                    "hidden";

            }
        );

    }
);


/* TUTUP FOTO */

function closePhotoPopup() {

    photoPopup.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";

    setTimeout(
        () => {

            if (
                !photoPopup.classList.contains(
                    "active"
                )
            ) {

                popupImage.src =
                    "";

            }

        },
        400
    );
}


closePopup.addEventListener(
    "click",
    closePhotoPopup
);


/* KLIK BACKGROUND */

photoPopup.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            photoPopup
        ) {

            closePhotoPopup();

        }

    }
);


/* ESC */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            photoPopup.classList.contains(
                "active"
            )
        ) {

            closePhotoPopup();

        }

    }
);


/* =========================================================
   PAGE 2 → PAGE 3
========================================================= */

nextPage.addEventListener(
    "click",
    () => {

        albumPage.style.opacity =
            "0";


        setTimeout(
            () => {

                albumPage.style.display =
                    "none";

                messagePage.style.display =
                    "block";

                window.scrollTo(
                    0,
                    0
                );


                requestAnimationFrame(
                    () => {

                        messagePage.style.opacity =
                            "1";

                    }
                );

            },
            800
        );

    }
);
