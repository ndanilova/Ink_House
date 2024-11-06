document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".countries button");
  const sections = document.querySelectorAll(".country-section");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const country = button.getAttribute("data-country");

      // Убираем класс active со всех кнопок
      buttons.forEach((btn) => {
        btn.classList.remove("active");
      });

      // Добавляем класс active нажатой кнопке
      button.classList.add("active");

      // Скрываем все секции
      sections.forEach((section) => {
        section.classList.remove("active");
      });

      // Показываем нужную секцию
      const activeSection = document.querySelector(`.${country}`);
      activeSection.classList.add("active");
    });
  });
});
