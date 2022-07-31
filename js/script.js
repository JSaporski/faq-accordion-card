function initAccordionFaq() {
  const faqQuestion = document.querySelectorAll('.js-accordion-faq dt')

  if (faqQuestion) {
    const faqActive = 'faq-active'

    faqQuestion[0].classList.add(faqActive)
    faqQuestion[0].nextElementSibling.classList.add(faqActive)

    function handleOpenFaq() {
      this.classList.toggle(faqActive)
      this.nextElementSibling.classList.toggle(faqActive)
    }

    faqQuestion.forEach(question => {
      question.addEventListener('click', handleOpenFaq)
    })
  }
}

initAccordionFaq()
