const steps = document.querySelectorAll('#cv-steps .step');
    const nextBtn = document.getElementById('next-step');
    let currentStep = 0;

    nextBtn.addEventListener('click', () => {
        if (currentStep < steps.length - 1) {
            steps[currentStep].style.display = 'none';
            currentStep++;
            steps[currentStep].style.display = 'block';
            if (currentStep === steps.length - 1) {
                nextBtn.style.display = 'none';
            }
        }
    }, false);

function openModal ($el) {
  $el.classList.add('is-active')
}

function closeModal ($el) {
  $el.classList.remove('is-active')
}

function closeAllModals () {
  (document.querySelectorAll('.modal') || []).forEach(($modal) => {
    closeModal($modal)
  })
}

(document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
  const modal = $trigger.dataset.target
  const $target = document.getElementById(modal)

  $trigger.addEventListener('click', () => {
    openModal($target)
  })
});

(document.querySelectorAll('.modal-background, .modal-close') || []).forEach(($close) => {
  const $target = $close.closest('.modal')

  $close.addEventListener('click', () => {
    closeModal($target)
  })
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeAllModals()
  }
})
