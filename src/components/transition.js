import Barba from 'barba.js'

Barba.Pjax.getTransition = () => ({
    start() {
      // Add class for visible project section
      this.newContainerLoading.classList.add('project-section-visible');
    },
    complete() {
      // Remove class from previous project section
      this.oldContainer.classList.remove('project-section-visible');
    },
    destroy() {
      // Remove class from previous project section (ensures cleanup)
      this.oldContainer.classList.remove('project-section-visible');
    }
  });