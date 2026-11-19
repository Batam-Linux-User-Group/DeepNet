document.querySelectorAll('.distro-carousel').forEach((carousel) => {
  const setup = carousel.closest('.desk-setup');
  const pages = Array.from(carousel.querySelectorAll('.distro-page'));
  const buttons = Array.from(setup.querySelectorAll('.arrow-btn'));
  const pageIndicator = setup.querySelector('.carousel-page');
  let currentPage = 0;
  let isTransitioning = false;

  const updateControls = () => {
    buttons.forEach((button) => {
      const direction = Number(button.dataset.direction);
      button.disabled = isTransitioning ||
        currentPage + direction < 0 ||
        currentPage + direction >= pages.length;
    });
    pageIndicator.textContent = `${currentPage + 1} / ${pages.length}`;
  };

  const showPage = (page, direction) => {
    if (isTransitioning || page < 0 || page >= pages.length || page === currentPage) return;

    const previousPage = pages[currentPage];
    const nextPage = pages[page];
    isTransitioning = true;
    buttons.forEach((button) => {
      button.disabled = true;
    });
    pageIndicator.textContent = `${page + 1} / ${pages.length}`;

    nextPage.hidden = false;
    nextPage.setAttribute('aria-hidden', 'false');
    previousPage.setAttribute('aria-hidden', 'true');

    const finishTransition = () => {
      previousPage.hidden = true;
      previousPage.classList.remove('is-sliding');
      nextPage.classList.remove('is-sliding');
      currentPage = page;
      isTransitioning = false;
      updateControls();
    };

    previousPage.classList.add('is-sliding');
    nextPage.classList.add('is-sliding');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const slideDistance = prefersReducedMotion ? 30 : 100;
    const easing = 'cubic-bezier(.65, 0, .35, 1)';
    const options = {
      duration: prefersReducedMotion ? 320 : 800,
      easing,
      fill: 'both'
    };
    const exitAnimation = previousPage.animate([
      { transform: 'translateX(0)', opacity: 1 },
      { transform: `translateX(${-slideDistance * direction}%)`, opacity: 0 }
    ], options);
    const enterAnimation = nextPage.animate([
      { transform: `translateX(${slideDistance * direction}%)`, opacity: 0 },
      { transform: 'translateX(0)', opacity: 1 }
    ], options);

    Promise.all([exitAnimation.finished, enterAnimation.finished]).then(() => {
      finishTransition();
      exitAnimation.cancel();
      enterAnimation.cancel();
    });
  };

  pages.forEach((page, index) => {
    page.hidden = index !== currentPage;
    page.setAttribute('aria-hidden', String(index !== currentPage));
  });

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const direction = Number(button.dataset.direction);
      showPage(currentPage + direction, direction);
    });
  });

  updateControls();
});

document.addEventListener('click', (event) => {
  const link = event.target instanceof Element
    ? event.target.closest('a[href^="#"]')
    : null;

  if (!link || !link.hash || link.hash === '#') return;

  const target = document.getElementById(decodeURIComponent(link.hash.slice(1)));
  if (!target) return;

  event.preventDefault();
  history.pushState(null, '', link.hash);
  target.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'auto'
      : 'smooth'
  });
});
