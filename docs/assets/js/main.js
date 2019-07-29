"use strict";const colorCheck=document.querySelectorAll(".form__item"),colorCheck1=document.getElementById("design1"),colorCheck2=document.getElementById("design2"),colorCheck3=document.getElementById("design3"),colorCheck4=document.getElementById("design4"),colorCheck5=document.getElementById("design5"),colorCheck6=document.getElementById("design6"),nameCheck=document.querySelector(".viewer__image-name"),professionCheck=document.querySelector(".viewer__image-profession"),lineCheck=document.querySelector(".viewer__image-line"),iconsCheck=document.querySelectorAll(".viewer__icon-style");let resultado="";function changeColor(){for(let e=0;e<colorCheck.length;e++){colorCheck[e].checked&&(resultado=colorCheck[e].value),nameCheck.classList.remove("viewer__image-name","viewer__image-name-color2","viewer__image-name-color3","viewer__image-name-color4","viewer__image-name-color5","viewer__image-name-color6"),professionCheck.classList.remove("viewer__image-profession","viewer__image-profession-color2","viewer__image-profession-color3","viewer__image-profession-color4","viewer__image-profession-color5","viewer__image-profession-color6"),lineCheck.classList.remove("viewer__image-line","viewer__image-line-color2","viewer__image-line-color3","viewer__image-line-color4","viewer__image-line-color5","viewer__image-line-color6");for(let e=0;e<iconsCheck.length;e++)iconsCheck[e].classList.remove("viewer__icon-style","viewer__icon-style-color2","viewer__icon-style-color3","viewer__icon-style-color4","viewer__icon-style-color5","viewer__icon-style-color6");if("color1"===resultado){nameCheck.classList.add("viewer__image-name"),professionCheck.classList.add("viewer__image-profession"),lineCheck.classList.add("viewer__image-line");for(let e=0;e<iconsCheck.length;e++)iconsCheck[e].classList.add("viewer__icon-style")}else if("color2"===resultado){nameCheck.classList.add("viewer__image-name-color2"),professionCheck.classList.add("viewer__image-profession-color2"),lineCheck.classList.add("viewer__image-line-color2");for(let e=0;e<iconsCheck.length;e++)iconsCheck[e].classList.add("viewer__icon-style-color2")}else if("color3"===resultado){nameCheck.classList.add("viewer__image-name-color3"),professionCheck.classList.add("viewer__image-profession-color3"),lineCheck.classList.add("viewer__image-line-color3");for(let e=0;e<iconsCheck.length;e++)iconsCheck[e].classList.add("viewer__icon-style-color3")}else if("color4"===resultado){nameCheck.classList.add("viewer__image-name-color4"),professionCheck.classList.add("viewer__image-profession-color4"),lineCheck.classList.add("viewer__image-line-color4");for(let e=0;e<iconsCheck.length;e++)iconsCheck[e].classList.add("viewer__icon-style-color4")}else if("color5"===resultado){nameCheck.classList.add("viewer__image-name-color5"),professionCheck.classList.add("viewer__image-profession-color5"),lineCheck.classList.add("viewer__image-line-color5");for(let e=0;e<iconsCheck.length;e++)iconsCheck[e].classList.add("viewer__icon-style-color5")}else if("color6"===resultado){nameCheck.classList.add("viewer__image-name-color6"),professionCheck.classList.add("viewer__image-profession-color6"),lineCheck.classList.add("viewer__image-line-color6");for(let e=0;e<iconsCheck.length;e++)iconsCheck[e].classList.add("viewer__icon-style-color6")}}}colorCheck1.addEventListener("click",changeColor),colorCheck2.addEventListener("click",changeColor),colorCheck3.addEventListener("click",changeColor),colorCheck4.addEventListener("click",changeColor),colorCheck5.addEventListener("click",changeColor),colorCheck6.addEventListener("click",changeColor);const imagePreview=document.querySelector(".folded__form__inputFile"),preview=document.querySelector(".folded__form__input2"),userPreview=document.querySelector(".viewer__profile-picture");function previewImage(e){let o=new FileReader;o.readAsDataURL(e.target.files[0]),o.onload=function(){let e=document.createElement("img");e.src=o.result,preview.innerHTML=`<img src="${e.src}" alt="image user" class="folded__form__input2--image" />`,userPreview.innerHTML=`<img src="${e.src}" alt="image user" class="viewer__profile-picture-image" />`}}imagePreview.addEventListener("change",previewImage);const fullName=document.querySelector(".inputName"),job=document.querySelector(".inputJob"),mail=document.querySelector(".mail"),tel=document.querySelector(".tel"),linkedin=document.querySelector(".linkedin"),Github=document.querySelector(".Github"),viewerName=document.querySelector(".js-Name"),viewerJob=document.querySelector(".js-Job");function upgradeName(e){const o=e.currentTarget;viewerName.innerHTML=`${o.value}`}function upgradeJob(e){const o=e.currentTarget;viewerJob.innerHTML=`${o.value}`}function upgradeTel(e){const o=e.currentTarget;for(let e=0;e<iconsCheck.length;e++);iconsCheck[0].innerHTML=`<a href="tel:${o.value}" target="_blank"><i class="fas fa-mobile-alt"></i></a>`}function upgradeMail(e){const o=e.currentTarget;for(let e=0;e<iconsCheck.length;e++);iconsCheck[1].innerHTML=`<a href="mailto:${o.value}" target="_blank"><i class="far fa-envelope"></i></a>`}function upgradeLinkedin(e){const o=e.currentTarget;for(let e=0;e<iconsCheck.length;e++);iconsCheck[2].innerHTML=`<a href="https://www.${o.value}" target="_blank"><i class="fab fa-linkedin-in"></i></a>`}function upgradeGithubn(e){const o=e.currentTarget;for(let e=0;e<iconsCheck.length;e++);iconsCheck[3].innerHTML=`<a href="https://github.com/${o.value}" target="_blank"><i class="fab fa-github-alt"></i></a>`}fullName.addEventListener("keyup",upgradeName),job.addEventListener("keyup",upgradeJob),mail.addEventListener("keyup",upgradeMail),tel.addEventListener("keyup",upgradeTel),linkedin.addEventListener("keyup",upgradeLinkedin),Github.addEventListener("keyup",upgradeGithubn);