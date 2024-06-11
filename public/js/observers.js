const observer_flip = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const element = entry.target.querySelector('.flip');
    if (entry.isIntersecting) {
      element.classList.add('animate__flip', "animate__animated");
      return;
    }

    element.classList.remove('animate__flip', "animate__animated");
  });
});
const observer_flipInX = new IntersectionObserver(entries => {
entries.forEach(entry => {
  const element = entry.target.querySelector('.flipInX');
  if (entry.isIntersecting) {
    element.classList.add('animate__flipInX', "animate__animated");
    return;
  }

  element.classList.remove('animate__flipInX', "animate__animated");
});
});


const observer_jello = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const element = entry.target.querySelector('.jello');
    if (entry.isIntersecting) {
      element.classList.add('animate__jello', "animate__animated");
      return;
    }
  
    element.classList.remove('animate__jello', "animate__animated");
  });
  });

observer_flipInX.observe(document.querySelector('.popin-helper'));  
observer_flip.observe(document.querySelector('.popin-helper2'));  
observer_jello.observe(document.querySelector('.popin-helper-3'));  