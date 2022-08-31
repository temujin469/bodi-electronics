const footerSection = document.getElementById("footer-section");

const footer = `
<!-- footer start -->
<footer id="footer" class="border-top-0 mt-0">
<div class="container-fluid py-4 px-md-5">
  <div class="row p-0 py-md-4">
    <div class="col-lg-6 col-xl-3 d-flex align-items-center p-0">
      <a href="/index.html">
        <img class="logo" src="/logo/bodi electronics  tsagaan.png" />
      </a>
    </div>
    <div class="col-lg-6 col-xl-3 footer-text p-0">
      <i class="fa-solid fa-phone"></i>
      <div>
        <h5 class="m-0 p-0">(+976) 70108010</h5>
        <h5 class="m-0 p-0">(+976) 75855577</h5>
      </div>
    </div>
    <div class="col-lg-6 col-xl-3 footer-text ps-0 pe-xl-5">
      <div><i class="fa-solid fa-envelope"></i></div>
      <h5 class="text-nowrap">info@bodi-electronics.mn</h5>
    </div>
    <div class="col-lg-6 col-xl-3 footer-text p-0">
      <div><i class="fa-solid fa-location-dot"></i></div>
      <h5>
        Чингисийн өргөн чөлөө-24, 1-р хороо, Парк Плэйс, 901 тоот,
        Сүхбаатар дүүрэг Улаанбаатар 14241, Монгол улс
      </h5>
    </div>
  </div>
</div>
  <div class="container d-flex justify-content-lg-center flex-column">
    <div
      class="pb-4 pb-md-5 social-links d-flex flex-row gap-md-5 justify-content-between justify-content-lg-center w-100">
      <i class="fa-brands fa-facebook-f"></i>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-youtube"></i>
      <i class="fa-brands fa-linkedin-in"></i>
    </div>
    <div
      class="pb-md-5 pb-4 footer-links d-flex flex-column flex-md-row gap-3 gap-md-5 justify-content-between justify-content-lg-center w-100">
      <a href="../entera/news.html" class="">Мэдээ мэдээлэл</a>
      <a href="../entera/zaswar-vilchilgee.html" class="">Засвар үйлчилгээ</a>
      <a href="../entera/arga-hemjee.html" class="">Арга хэмжээ</a>
      <a href="../entera/sanal-hvselt.html" class="">Санал хүсэлт</a>
    </div>
  </div>
  <div class="p-3 footer-bottom">
    <p class="text-center text-light opacity-50 fw-light m-0">
      Бүх эрх хуулиар хамгаалагдсан 2022. Бодь-Электроникс ХХК
    </p>
  </div>
</footer>
`;

footerSection.innerHTML = footer;
