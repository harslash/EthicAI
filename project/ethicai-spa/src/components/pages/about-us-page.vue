<template>
    <nav-bar />
    <div id="main" class="container-fluid page-container">
        <div class="row h-10 mb-5">
            <div class="col-md-12">
                <h1 class="mt-5 heading" style="color: #6d0cff">About Us</h1>
                <div class="tw-w-3/5 tw-m-auto tw-mt-10">
                    <p>
                        The EthicAI team is a quintet of passionate, competent computer science students in our final year
                        of study at the University of Auckland. We want to see artificial intelligence used responsibly, so
                        we created the EthicAI website to make engaging educational material accessible for all university
                        students to learn about AI.<br><br>Our site was made in 2023 for the Computer Science 399 Capstone
                        Course
                        with the support of Danielle Lottridge and Thomas Lacombe, who provided valuable feedback and
                        guidance.
                    </p>
                    <p>
                        For any inquiries, please <a href="mailto: ethicai@gmail.com">email us</a> directly.
                    </p>
                </div>
            </div>
        </div>

        <section class="vh-50 gradient-custom mb-5">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <h3 class="our-team-title pb-3">Our team</h3>
                    <div class="col col-xl-10">
                        <div class="card">
                            <div class="card-body py-5">

                                <!-- Carousel wrapper -->
                                <div id="carouselDarkVariant" class="carousel slide carousel-dark">
                                    <!-- Indicators -->
                                    <div class="carousel-indicators mb-0">
                                        <button data-bs-target="#carouselDarkVariant" data-bs-slide-to="0" class="active"
                                            aria-current="true" aria-label="Slide 1"></button>
                                        <button data-bs-target="#carouselDarkVariant" data-bs-slide-to="1"
                                            aria-label="Slide 2"></button>
                                        <button data-bs-target="#carouselDarkVariant" data-bs-slide-to="2"
                                            aria-label="Slide 3"></button>
                                        <button data-bs-target="#carouselDarkVariant" data-bs-slide-to="3"
                                            aria-label="Slide 4"></button>
                                        <button data-bs-target="#carouselDarkVariant" data-bs-slide-to="4"
                                            aria-label="Slide 5"></button>
                                    </div>

                                    <!-- Inner -->
                                    <div class="carousel-inner pt-2 pb-5">
                                        <!-- Single item -->
                                        <div class="carousel-item active">
                                            <div class="row d-flex justify-content-center">
                                                <div class="col-md-8 col-lg-9 col-xl-8">
                                                    <div class="d-flex">
                                                        <div class="flex-shrink-0">
                                                            <img src="../../assets/kevin_avatar.jpg"
                                                                class="rounded-circle mb-4 mb-lg-0 shadow-2"
                                                                alt="man avatar" width="90" height="90">
                                                        </div>
                                                        <div class="flex-grow-1 ms-4 ps-3">
                                                            <figure>
                                                                <blockquote class="blockquote mb-4">
                                                                    <p>
                                                                        <i
                                                                            class="fas fa-quote-left fa-lg text-warning me-2"></i>
                                                                        <span class="font-italic">
                                                                            I've had the unique opportunity to wear many
                                                                            hats in this project. This journey has been a
                                                                            fantastic learning experience, and I have
                                                                            genuinely enjoyed every aspect. I am proud to
                                                                            have contributed to an initiative that fosters
                                                                            ethical and responsible AI use alongside an
                                                                            amazing group of people.
                                                                        </span>
                                                                    </p>
                                                                </blockquote>
                                                                <figcaption class="blockquote-footer">
                                                                    Kevin Wong
                                                                </figcaption>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Single item -->
                                        <div class="carousel-item">
                                            <div class="row d-flex justify-content-center">
                                                <div class="col-md-8 col-lg-9 col-xl-8">
                                                    <div class="d-flex">
                                                        <div class="flex-shrink-0">
                                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                                                                class="rounded-circle mb-4 mb-lg-0 shadow-2"
                                                                alt="woman avatar" width="90" height="90">
                                                        </div>
                                                        <div class="flex-grow-1 ms-4 ps-3">
                                                            <figure>
                                                                <blockquote class="blockquote mb-4">
                                                                    <p>
                                                                        <i
                                                                            class="fas fa-quote-left fa-lg text-warning me-2"></i>
                                                                        <span class="font-italic">Sed ut perspiciatis unde
                                                                            omnis iste natus error sit
                                                                            voluptatem accusantium doloremque laudantium,
                                                                            totam rem aperiam, eaque ipsa
                                                                            quae ab illo inventore veritatis.</span>
                                                                    </p>
                                                                </blockquote>
                                                                <figcaption class="blockquote-footer">
                                                                    Harlean Hansra
                                                                </figcaption>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Single item -->
                                        <div class="carousel-item">
                                            <div class="row d-flex justify-content-center">
                                                <div class="col-md-8 col-lg-9 col-xl-8">
                                                    <div class="d-flex">
                                                        <div class="flex-shrink-0">
                                                            <img src="../../assets/georgia_avatar.jpg"
                                                                class="rounded-circle mb-4 mb-lg-0 shadow-2"
                                                                alt="woman avatar" width="90" height="90">
                                                        </div>
                                                        <div class="flex-grow-1 ms-4 ps-3">
                                                            <figure>
                                                                <blockquote class="blockquote mb-4">
                                                                    <p>
                                                                        <i
                                                                            class="fas fa-quote-left fa-lg text-warning me-2"></i>
                                                                        <span class="font-italic">I have really enjoyed
                                                                            increasing my front end development abilities
                                                                            through EthicAI. It was awesome to be able to go
                                                                            from designing a website to actually having it
                                                                            fully implemented. I have really enjoyed the
                                                                            whole (full-on) process and was lucky to have
                                                                            had such a hardworking and passionate
                                                                            team.</span>
                                                                    </p>
                                                                </blockquote>
                                                                <figcaption class="blockquote-footer">
                                                                    Georgia Purkiss
                                                                </figcaption>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Single item -->
                                        <div class="carousel-item">
                                            <div class="row d-flex justify-content-center">
                                                <div class="col-md-8 col-lg-9 col-xl-8">
                                                    <div class="d-flex">
                                                        <div class="flex-shrink-0">
                                                            <img src="../../assets/matthew_avatar.jpeg"
                                                                class="rounded-circle mb-4 mb-lg-0 shadow-2"
                                                                alt="man avatar" width="90" height="90">
                                                        </div>
                                                        <div class="flex-grow-1 ms-4 ps-3">
                                                            <figure>
                                                                <blockquote class="blockquote mb-4">
                                                                    <p>
                                                                        <i
                                                                            class="fas fa-quote-left fa-lg text-warning me-2"></i>
                                                                        <span class="font-italic">I have the privilege to
                                                                            lead the front-end development effort of
                                                                            EthicAI. The most satisfying moment for me in
                                                                            the project was seeing how EthicAI transformed
                                                                            from an initial ideation to a fully functional
                                                                            product.</span>
                                                                    </p>
                                                                </blockquote>
                                                                <figcaption class="blockquote-footer">
                                                                    Matthew Kwok
                                                                </figcaption>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Single item -->
                                        <div class="carousel-item">
                                            <div class="row d-flex justify-content-center">
                                                <div class="col-md-8 col-lg-9 col-xl-8">
                                                    <div class="d-flex">
                                                        <div class="flex-shrink-0">
                                                            <img src="../../assets/gali_avatar.png"
                                                                class="rounded-circle mb-4 mb-lg-0 shadow-2"
                                                                alt="man avatar" width="90" height="90">
                                                        </div>
                                                        <div class="flex-grow-1 ms-4 ps-3">
                                                            <figure>
                                                                <blockquote class="blockquote mb-4">
                                                                    <p>
                                                                        <i
                                                                            class="fas fa-quote-left fa-lg text-warning me-2"></i>
                                                                        <span class="font-italic">EthicAI allowed me to
                                                                            explore my passion for the overlap between
                                                                            ethics and technology. This project was a joy to
                                                                            research and to write content for.</span>
                                                                    </p>
                                                                </blockquote>
                                                                <figcaption class="blockquote-footer">
                                                                    Gali Mortimer-Webster
                                                                </figcaption>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Inner -->

                                    <!-- Controls -->
                                    <button class="carousel-control-prev" type="button"
                                        data-bs-target="#carouselDarkVariant" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button"
                                        data-bs-target="#carouselDarkVariant" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <!-- Carousel wrapper -->

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <page-footer />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '../reusable/nav-bar.vue';
import PageFooter from '../reusable/page-footer.vue';

export default defineComponent({
    name: 'AboutUsPage',
    data() {
        return {};
    },
    methods: {},
    components: {
        'nav-bar': NavBar,
        'page-footer': PageFooter,
    },
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap');

.container-fluid.page-container {
    margin-top: 60px;
    height: 90vh;
}

.heading {
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    text-align: center;
}

.blockquote {
    font-size: 1rem;
}

.our-team-title {
    text-align: center;
    color: #ffffff;
}

.card {
    height: 300px;
}

.gradient-custom {
    /* fallback for old browsers */
    background: #f6d365;

    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(90deg, rgba(109, 12, 255, 1) 0%, rgb(255, 110, 245) 50%, rgb(255, 255, 255));

    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(90deg, rgba(109, 12, 255, 1) 0%, rgb(255, 110, 245) 50%, rgb(255, 255, 255));
}

@media (max-width: 767.98px) {
    .card {
        height: 600px;
    }
}
</style>
