document.addEventListener('DOMContentLoaded', function() {
    var menuItem = document.querySelectorAll('.item-menu');

    menuItem.forEach((item) => item.addEventListener('click', selectLink));

    var btnExp = document.querySelector('#btn-exp');
    var menuSide = document.querySelector('.menu-lateral');
    btnExp.addEventListener('click', function() {
        menuSide.classList.toggle('expandir');
    });

    function selectLink() {
        menuItem.forEach((item) => item.classList.remove('ativo'));
        this.classList.add('ativo');
    }

    var form_1 = document.querySelector(".form_1");
    var form_2 = document.querySelector(".form_2");
    var form_3 = document.querySelector(".form_3");

    var form_1_btns = document.querySelector(".form_1_btns");
    var form_2_btns = document.querySelector(".form_2_btns");
    var form_3_btns = document.querySelector(".form_3_btns");

    var form_1_next_btn = document.querySelector(".form_1_btns .btn_next");
    var form_2_back_btn = document.querySelector(".form_2_btns .btn_back");
    var form_2_next_btn = document.querySelector(".form_2_btns .btn_next");
    var form_3_back_btn = document.querySelector(".form_3_btns .btn_back");

    var form_2_progressbar = document.querySelector(".form_2_progressbar");
    var form_3_progressbar = document.querySelector(".form_3_progressbar");

    var btn_done = document.querySelector(".btn_done");
    var modal_wrapper = document.querySelector(".modal_wrapper");
    var shadow = document.querySelector(".shadow");

    form_1_next_btn.addEventListener("click", function() {
        switchForm(form_1, form_2, form_1_btns, form_2_btns, form_2_progressbar);
    });

    form_2_back_btn.addEventListener("click", function() {
        switchForm(form_2, form_1, form_2_btns, form_1_btns, form_2_progressbar, false);
    });

    form_2_next_btn.addEventListener("click", function() {
        switchForm(form_2, form_3, form_2_btns, form_3_btns, form_3_progressbar);
    });

    form_3_back_btn.addEventListener("click", function() {
        switchForm(form_3, form_2, form_3_btns, form_2_btns, form_3_progressbar, false);
    });

    btn_done.addEventListener("click", function() {
        modal_wrapper.classList.add("active");
    });

    shadow.addEventListener("click", function() {
        modal_wrapper.classList.remove("active");
    });

    function switchForm(hideForm, showForm, hideBtns, showBtns, progressbar, activate = true) {
        hideForm.style.display = "none";
        showForm.style.display = "block";

        hideBtns.style.display = "none";
        showBtns.style.display = "flex";

        if (activate) {
            progressbar.classList.add("active");
        } else {
            progressbar.classList.remove("active");
        }
    }
});