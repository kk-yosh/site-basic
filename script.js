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

// お問い合わせ フォーム
    const contactForm = document.querySelector("#contactForm");
    const msgArea = document.querySelector(".message_area")
    const charCount = document.querySelector(".charCount span");
    //エラーメッセージなど
    const emailError = document.querySelector("#emailError");
    const formSuccess = document.querySelector(".form_success");

    //textareaの文字数表示
    msgArea.addEventListener('input', () =>{
        const currentTxtLength = msgArea.value.length;
        const maxLength = msgArea.getAttribute("maxlength");

        charCount.textContent = maxLength - currentTxtLength ;
    });
    
    // 処理
    contactForm.addEventListener("submit", (event) => {
        // まだ送信しない
        event.preventDefault();

        // フォームデータ
        const contactData = new FormData(contactForm);
        // const userName = contactData.get("name");
        const email = contactData.get("email");
        // const message = contactData.get("message");

        // チェック用
        const emailCheck = /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
        let isValid = true;

        // チェック
        if(!emailCheck || !emailCheck.test(email)) {
            emailError.textContent = "項目が空欄か、無効な形式です";
            isValid = false;
        } else {
            emailError.textContent = '';
        }
        if (isValid) {
            openMdl(formSuccess);
            contactForm.reset();
        }
    });

    // 送信完了のモーダル
    const clsSucMdlBtn = document.querySelector('.form_success div button');

    clsSucMdlBtn.addEventListener('click', () => {
        closeMdl(formSuccess);
    });


