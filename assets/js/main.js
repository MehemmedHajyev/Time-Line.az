// document.addEventListener('DOMContentLoaded', () => {
//     const sections = document.querySelectorAll('.sections');
//     const borderedPoston = document.querySelector('.bordered-poston');

//     // Her section için arka plan resimleri
//     const backgroundImages = [
//         'url("./assets/images/box-img/History_1859.png")',
//         'url("./assets/images/box-img/History_1871(1).png")',
//         'url("./assets/images/box-img/History_1872.png")',
//         'url("./assets/images/box-img/History_1878.png")',
//         'url("./assets/images/box-img/History_1898.png")',
//         'url("./assets/images/box-img/History_1926.png")',
//         'url("./assets/images/box-img/History_2012.png")',
//     ];


//     sections.forEach((section, index) => {
//         section.style.opacity = '0.5';
//         section.style.filter = 'blur(4px)';
//         section.style.transition = 'opacity 0.3s ease, filter 0.3s ease, transform 0.3s ease';
//         section.style.textAlign = 'center';
//         section.style.color = '#333';
//         document.body.style.backgroundRepeat = 'no-repeat';
//         section.style.backgroundImage = backgroundImages[index];

//     });

//     window.addEventListener('scroll', () => {
//         sections.forEach((section, index) => {
//             const sectionTop = section.getBoundingClientRect().top;
//             const windowHeight = window.innerHeight;

//             if (sectionTop <= windowHeight / 1.5 && sectionTop >= 0) {
//                 section.style.filter = 'blur(0px)';
//                 section.style.opacity = '1';
//                 section.style.transform = 'scale(1.1)';

//                 borderedPoston.style.zIndex = '1000';


//                 document.body.style.backgroundImage = backgroundImages[index];

//             } else {
//                 section.style.filter = 'blur(4px)';
//                 section.style.opacity = '0.5';
//                 section.style.transform = 'scale(1)';

//                 borderedPoston.style.zIndex = '999';
//             }
//         });
//     });
// });
