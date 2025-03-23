// modal
    const openModal = document.querySelector('#openModal');
    const closeModal = document.querySelector('#closeModal');
    const modal = document.querySelector('.modal');
    // 開く
    openModal.addEventListener('click', function () {
        addActive(modal);
        fadeIn(modal);
    });
    // 閉じる
    closeModal.addEventListener('click', function () {
        fadeOut(modal, 'active');
    });

// tab
    const tabBtns = document.querySelectorAll(".tab_button");
    const tabContents = document.querySelectorAll(".tab_content");

    tabBtns.forEach((tabBtn, tabBtnIndex) => {
        tabBtn.addEventListener("click", function () {
            // 今ついているactiveを外す
            tabBtns.forEach(tabBtn => {
                removeActive(tabBtn);
            });
            tabContents.forEach(tabContent => {
                removeActive(tabContent);
            });
            // クリックされたものにactiveをつける
            addActive(tabBtn);
            addActive(tabContents[tabBtnIndex]);
            // console.log(tabBtn);
            // console.log(tabContents[tabBtnIndex]);
        });
    });






// 関数
// active付けはずし
function addActive(addContents) {
    addContents.classList.add('active');
}
function removeActive(removeContents) {
   removeContents.classList.remove('active');
}
// animation
// フェードインアウト
function fadeIn(fadeInClass) {
    fadeInClass.classList.remove('fadeOut');
    fadeInClass.classList.add('fadeIn');
    fadeInClass.addEventListener('animationend', () => {
    fadeInClass.classList.remove('fadeIn');
    },{ once: true });
}
function fadeOut(fadeOutClass,removeClass) {
    fadeOutClass.classList.add('fadeOut');
    fadeOutClass.addEventListener('animationend', () => {
    fadeOutClass.classList.remove(removeClass);
    fadeOutClass.classList.remove('fadeOut');
    },{ once: true });
}

// モーダル
function openMdl(dialog) {
    fadeIn(dialog);
    dialog.showModal();
}
function closeMdl(dialog) {
    fadeOut(dialog);
    dialog.addEventListener('animationend', () => {
        dialog.classList.remove('fadeOut');
        dialog.close();
        },{ once: true }
    );
}



