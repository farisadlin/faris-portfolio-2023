export default function smoothScroll(event: React.MouseEvent<HTMLElement | MouseEvent>) {
  event.preventDefault();
  const target = event.target as HTMLElement;
  const targetId = target.getAttribute('href');

  if (targetId) {
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth',
      });
    }
  }
}
