const headerMainNavSection= document.getElementById('mainNav');
// const headerTopSection = document.getElementById('header-top-section');

const headerTop = `
<div class="header-top">
          <div class="px-md-5 px-3 h-100">
            <div class="header-row h-100 justify-content-between d-flex">
              <div class="header-row">
                <div class="header-logo">
                  <a href="index.html">
                    <img alt="logo" width="200" src="./logo/logo bodi.png" />
                  </a>
                </div>
              </div>
              <div class="header-column">
                <div class="header-row">
                  <nav class="header-nav-top">
                    <ul class="nav nav-pills d-flex align-items-center">
                      <li class="nav-item nav-item-borders pe-3 py-2 d-none d-lg-inline-flex">
                        <a href="#">ХОЛБОО БАРИХ</a>
                      </li>
                      <li class="nav-item nav-item-borders pe-3 border-right header-nav-features">
                        <div class="header-nav-feature header-nav-features-search d-inline-flex">
                          <a href="#" class="header-nav-features-toggle text-decoration-none"
                            data-focus="headerSearch"><i class="fas fa-search header-nav-top-icon"></i></a>
                          <div class="header-nav-features-dropdown" id="headerTopSearchDropdown">
                            <form role="search" action="page-search-results.html" method="get">
                              <div class="simple-search input-group">
                                <input class="form-control text-1" id="headerSearch" name="q" type="search" value=""
                                  placeholder="Хайх...">
                                <button class="btn" type="submit">
                                  <i class="fas fa-search header-nav-top-icon"></i>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </li>
                      <li class="nav-item nav-item-borders py-2 pe-0 dropdown">
                        <a class="nav-link ps-3" href="#" role="button" id="dropdownLanguage" data-bs-toggle="dropdown"
                          aria-haspopup="true" aria-expanded="false">
                          <img src="img/flags/eng.png" class="flag" alt="English" />
                          <!-- <i class="fas fa-angle-down"></i> -->
                        </a>
                        <!-- <div
                            class="dropdown-menu dropdown-menu-end"
                            aria-labelledby="dropdownLanguage"
                          >
                            <a class="dropdown-item" href="#">
                              <img
                                src="img/flags/eng.png"
                                class="flag"
                                alt="English"
                              />
                              English
                            </a>
                            <a class="dropdown-item" href="#">
                              <img
                                src="img/flags/mongolia.png"
                                class="flag flag-es"
                                alt="English"
                              />
                              Mongolia
                            </a>
                          </div> -->
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
`;

const headerMainNav = `
<li>
                            <a class="dropdown-item active" href="/salbar.html">
                              Салбар
                            </a>
                          </li>
                          <li class="dropdown dropdown-mega">
                            <a class="dropdown-item dropdown-toggle" href="/shiidel.html">
                              Шийдэл
                            </a>
                            <ul class="dropdown-menu">
                              <li>
                                <div class="dropdown-mega-content">
                                  <div class="row py-lg-2">
                                    <div class="col-lg-3 ps-lg-4 pe-lg-5">
                                      <span class="dropdown-mega-sub-title">Архитектур</span>
                                      <ul class="dropdown-mega-sub-nav">
                                        <li>
                                          <a class="dropdown-item" href="#">
                                            Дижитал ажлын талбар
                                          </a>
                                        </li>
                                        <li>
                                          <a class="dropdown-item" href="#">Байгууллага, нэгж хоорондын хамтын
                                            ажиллагаа</a>
                                        </li>
                                        <li>
                                          <a class="dropdown-item" href="#">Байгууллага, нэгж хоорондын хамтын
                                            ажиллагаа</a>
                                        </li>
                                        <li>
                                          <a class="dropdown-item" href="#">Гар утасны аппликэйшн хөгжүүлэлт</a>
                                        </li>
                                      </ul>
                                    </div>
                                    <div class="col-lg-3 px-lg-5">
                                      <span class="dropdown-mega-sub-title">Мэдээллийн технологийн шийдэл</span>
                                      <ul class="dropdown-mega-sub-nav">
                                        <li>
                                          <a class="dropdown-item" href="elements-random-images.html">Аюулгүй байдал</a>
                                        </li>
                                        <li>
                                          <a class="dropdown-item" href="elements-read-more.html">Харилцаа холбоо</a>
                                        </li>
                                        <li>
                                          <a class="dropdown-item" href="elements-read-more.html">Сүлжээ</a>
                                        </li>
                                        <li>
                                          <a class="dropdown-item" href="elements-read-more.html">Байгууллагын ажлын
                                            талбар</a>
                                        </li>
                                        <li>
                                          <a class="dropdown-item" href="elements-read-more.html">Байгууллагын сервер,
                                            Сторай</a>
                                        </li>
                                        <li>
                                          <a class="dropdown-item" href="elements-read-more.html">Дэд бүтэц</a>
                                        </li>
                                      </ul>
                                    </div>
                                    <div class="col-lg-3 px-lg-5">
                                      <span class="dropdown-mega-sub-title">Бизнесийн шийдэл</span>
                                      <ul class="dropdown-mega-sub-nav">
                                        <li>
                                          <a class="dropdown-item" href="elements-word-rotator.html">IOT Edge</a>
                                        </li>
                                        <li>
                                          <a class="dropdown-item" href="elements-360-image-viewer.html">Өгөгдлийн
                                            менежмент</a>
                                        </li>
                                        <li>
                                          <a class="dropdown-item" href="elements-360-image-viewer.html">Аналитик </a>
                                        </li>
                                        <li>
                                          <a class="dropdown-item" href="elements-360-image-viewer.html">автоматжуулалт
                                          </a>

                                        </li>
                                        <li>
                                          <a class="dropdown-item" href="elements-360-image-viewer.html">дүрслэл </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>

                          <li class="dropdown dropdown-mega">
                            <a class="dropdown-item dropdown-toggle" href="/uilchilgee.html">
                              Үйлчилгээ
                            </a>
                            <ul class="dropdown-menu">
                              <li>
                                <div class="dropdown-mega-content">
                                  <div class="row py-lg-2">
                                    <div class="col-lg-6 ps-lg-4 pe-0">
                                      <span class="dropdown-mega-sub-title">Мэдээллийн технологийн зөвлөх
                                        үйлчилгээ</span>
                                      <div class="d-lg-flex gap-lg-5">
                                        <ul class="dropdown-mega-sub-nav">
                                          <li>
                                            <a class="dropdown-item" href="#">
                                              Програм хангамж хөгжүүлэх
                                            </a>
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#">Програм хангамж хөгжүүлэх</a>
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#">Програм хангамжийн лицензжүүлэлт</a>
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#">Хөгжүүлэх</a>
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#">Захиалах</a>
                                          </li>
                                        </ul>
                                        <ul class="dropdown-mega-sub-nav">
                                          <li>
                                            <a class="dropdown-item" href="elements-random-images.html">Удирдлагын
                                              програмууд</a>
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="elements-read-more.html"> Хувийн үүлэн
                                              технологи</a>
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="elements-read-more.html"> Хувийн үүлэн
                                              технологи</a>
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="elements-read-more.html">Дээд зэрэглэлийн
                                              тусламжийн үйлчилгээ</a>
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="elements-read-more.html">Програм хангамжийн
                                              лицензжүүлэлт</a>
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="elements-read-more.html">И-Хангамж Худалдан
                                              авалт</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>

                                    <div class="col-lg-3 px-lg-5">
                                      <span class="dropdown-mega-sub-title">Борлуулалтын дараахи засвар үйлчилгээ</span>
                                      <ul class="dropdown-mega-sub-nav">
                                        <li>
                                          <a class="dropdown-item" href="elements-word-rotator.html">Гэрээт засвар
                                            үйлчилгээ</a>
                                        </li>
                                        <li>
                                          <a class="dropdown-item" href="elements-360-image-viewer.html">Дуудлагын
                                            засвар үйлчилгээ</a>
                                        </li>
                                        <li>
                                          <a class="dropdown-item" href="elements-360-image-viewer.html">Газар дээрх
                                            засвар үйлчилгээ</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
`;

// headerTopSection.innerHTML = headerTop;
headerMainNavSection.innerHTML = headerMainNav

