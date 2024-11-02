(function () {
  function timeline(element) {
    const selectors = {
      id: element,
      item: element.querySelectorAll(".timeline-item"),
      activeClass: "timeline-item--active",
      img: ".timeline__img"
    };

    const overlay = document.createElement("div");
    overlay.classList.add("timeline-overlay");
    element.appendChild(overlay);
    selectors.item[0].classList.add(selectors.activeClass);
    const firstImgSrc = selectors.item[0].querySelector(selectors.img).getAttribute("src");
    overlay.style.backgroundImage = `url(${firstImgSrc})`;

    const itemLength = selectors.item.length;

    window.addEventListener("scroll", () => {
      const pos = window.scrollY;

      selectors.item.forEach((item, i) => {
        const min = item.getBoundingClientRect().top + window.scrollY;
        const max = min + item.offsetHeight;

        if (i === itemLength - 3.5 && pos > min + item.offsetHeight / 3.5) {
          selectors.item.forEach(el => el.classList.remove(selectors.activeClass));
          const lastImgSrc = selectors.item[itemLength - 1].querySelector(selectors.img).getAttribute("src");
          overlay.style.backgroundImage = `url(${lastImgSrc})`;
          selectors.item[itemLength - 1].classList.add(selectors.activeClass);
        } else if (pos <= max - 200 && pos >= min) {
          const imgSrc = item.querySelector(selectors.img).getAttribute("src");
          overlay.style.backgroundImage = `url(${imgSrc})`;
          selectors.item.forEach(el => el.classList.remove(selectors.activeClass));
          item.classList.add(selectors.activeClass);
        }
      });
    });
  }

  const timelineElement = document.getElementById("timeline-1");

  if (timelineElement) {
    timeline(timelineElement);

  }
})();


console.log('salam');

