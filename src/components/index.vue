<template>

    <body class="homepage">
        <!-- Header -->
        <div id="header">
            <div class="container">

                <!-- Logo -->
                <div id="logo" :key="name">
                    <h1><a href="#">{{ name }}</a></h1>
                </div>

                <!-- Nav -->
                <nav id="nav">
                    <ul>
                        <li class="active">
                            <a href="index.html">{{ $t('navbar[0]') }}</a>
                        </li>
                        <li><a href="left-sidebar.html">{{ $t('navbar[1]') }}</a></li>
                        <li><a href="right-sidebar.html">{{ $t('navbar[2]') }}</a></li>
                        <li><a href="#footer">{{ $t('navbar[3]') }}</a></li>
                        <li>
                            <div class="locale-changer">
                                <select v-model="$i18n.locale">
                                    <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`"
                                        :value="locale">{{ locale }}</option>
                                </select>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <!-- Header -->

        <!-- Banner -->
        <div id="banner">
            <div class="container">
            </div>
        </div>
        <!-- /Banner -->

        <!-- Main -->
        <div id="page">

            <!-- Extra -->
            <div id="marketing" class="container">
                <div class="row">
                    <div class="3u">
                        <section>
                            <header>
                                <h2>Feugiat Tempus</h2>
                            </header>
                            <p class="subtitle">In posuere eleifend odio. Quisque semper augue mattis maecenas ligula.
                            </p>
                            <p><a href="#"><img src="../assets/images/pics13.jpg" alt="" width="282" height="150"></a>
                            </p>
                            <a href="#" class="button">More</a>
                        </section>
                    </div>
                    <div class="3u">
                        <section>
                            <header>
                                <h2>Maecenas lectus</h2>
                            </header>
                            <p class="subtitle">In posuere eleifend odio. Quisque semper augue mattis maecenas ligula.
                            </p>
                            <p><a href="#"><img src="../assets/images/pics14.jpg" alt="" width="282" height="150"></a>
                            </p>
                            <a href="#" class="button">More</a>
                        </section>
                    </div>
                    <div class="3u">
                        <section>
                            <header>
                                <h2>Luctus lectus</h2>
                            </header>
                            <p class="subtitle">In posuere eleifend odio. Quisque semper augue mattis maecenas ligula.
                            </p>
                            <p><a href="#"><img src="../assets/images/pics15.jpg" alt="" width="282" height="150"></a>
                            </p>
                            <a href="#" class="button">More</a>
                        </section>
                    </div>
                    <div class="3u">
                        <section>
                            <header>
                                <h2>Posuere eleifend</h2>
                            </header>
                            <p class="subtitle">In posuere eleifend odio. Quisque semper augue mattis maecenas ligula.
                            </p>
                            <p><a href="#"><img src="../assets/images/pics16.jpg" alt="" width="282" height="150"></a>
                            </p>
                            <a href="#" class="button">More</a>
                        </section>
                    </div>
                </div>
            </div>
            <!-- /Extra -->

            <!-- Main -->
            <div id="main" class="container">
                <div class="row">
                    <div class="6u">
                        <section>
                            <header>
                                <h2>Integer gravida nibh quis urna</h2>
                                <span class="byline">Augue praesent a lacus at urna congue rutrum</span>
                            </header>
                            <p>This is <strong>Ex Machina</strong>, a responsive HTML5 site template freebie by <a
                                    href="http://templated.co">TEMPLATED</a>. Released for free under the <a
                                    href="http://templated.co/license">Creative Commons Attribution</a> license, so use
                                it
                                for whatever (personal or commercial) – just give us credit! Check out more of our stuff
                                at
                                <a href="http://templated.co">our site</a> or follow us on <a
                                    href="http://twitter.com/templatedco">Twitter</a>.
                            </p>
                            <p>Sed etiam vestibulum velit, euismod lacinia quam nisl id lorem. Quisque erat. Vestibulum
                                pellentesque, justo mollis pretium suscipit, justo nulla blandit libero, in blandit
                                augue
                                justo quis nisl. Fusce mattis viverra elit. Fusce quis tortor. Consectetuer adipiscing
                                elit.
                                Nam pede erat, porta eu, lobortis eget lorem ipsum dolor. Donec placerat odio vel elit.
                                Nullam ante orci, pellentesque eget, tempus quis, ultrices in, est. Curabitur sit amet
                                nulla. Nam in massa. Sed vel tellus. Curabitur sem urna, consequat. Sed etiam vestibulum
                                velit, euismod lacinia quam nisl id lorem. Quisque erat.</p>
                            <p>Sed etiam vestibulum velit, euismod lacinia quam nisl id lorem. Quisque erat. Vestibulum
                                pellentesque, justo mollis pretium suscipit, justo nulla blandit libero, in blandit
                                augue
                                justo quis nisl. Fusce mattis viverra elit. Fusce quis tortor. Consectetuer adipiscing
                                elit.
                                Nam pede erat, porta eu, lobortis eget lorem ipsum dolor. Donec placerat odio vel elit.
                                Nullam ante orci, pellentesque eget, tempus quis, ultrices in, est. Curabitur sit amet
                                nulla. Nam in massa. Sed vel tellus. Curabitur sem urna, consequat. Sed etiam vestibulum
                                velit, euismod lacinia quam nisl id lorem. Quisque erat.</p>
                            <a href="#" class="button">More Details</a>
                        </section>
                    </div>
                    <div class="3u">
                        <section class="sidebar">
                            <header>
                                <h2>Feugiat Tempus</h2>
                            </header>
                            <ul class="style2">
                                <li>
                                    <a href="#"><img src="../assets/images/pics07.jpg" alt="" width="80"
                                            height="80"></a>
                                    <p>Donec leo, vivamus fermentum augue praesent a lacus at urna rutrum.</p>
                                </li>
                                <li>
                                    <a href="#"><img src="../assets/images/pics08.jpg" alt="" width="80"
                                            height="80"></a>
                                    <p>Donec leo, vivamus fermentum augue praesent a lacus at urna rutrum.</p>
                                </li>
                                <li>
                                    <a href="#"><img src="../assets/images/pics09.jpg" alt="" width="80"
                                            height="80"></a>
                                    <p>Donec leo, vivamus fermentum augue praesent a lacus at urna rutrum.</p>
                                </li>
                                <li>
                                    <a href="#"><img src="../assets/images/pics10.jpg" alt="" width="80"
                                            height="80"></a>
                                    <p>Donec leo, vivamus fermentum augue praesent a lacus at urna rutrum.</p>
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div class="3u">
                        <section class="sidebar">
                            <header>
                                <h2>Feugiat Tempus</h2>
                            </header>
                            <ul class="style1">
                                <li><a href="#">Maecenas luctus lectus at sapien</a></li>
                                <li><a href="#">Etiam rhoncus volutpat erat</a></li>
                                <li><a href="#">Donec dictum metus in sapien</a></li>
                                <li><a href="#">Nulla luctus eleifend purus</a></li>
                                <li><a href="#">Maecenas luctus lectus at sapien</a></li>
                            </ul>
                        </section>
                        <section class="sidebar">
                            <header>
                                <h2>Nulla luctus eleifend</h2>
                            </header>
                            <ul class="style1">
                                <li><a href="#">Maecenas luctus lectus at sapien</a></li>
                                <li><a href="#">Donec dictum metus in sapien</a></li>
                                <li><a href="#">Integer gravida nibh quis urna</a></li>
                                <li><a href="#">Etiam posuere augue sit amet nisl</a></li>
                                <li><a href="#">Mauris vulputate dolor sit amet nibh</a></li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
            <!-- Main -->

        </div>
        <!-- /Main -->

        <!-- Featured -->
        <div id="featured">
            <div class="container">
                <div class="row">
                    <section class="4u">
                        <div class="box">
                            <a href="#" class="image left"><img src="../assets/images/pics04.jpg" alt="" width="160"
                                    height="160"></a>
                            <h3>Etiam posuere augue</h3>
                            <p>Donec nonummy magna quis risus eleifend. </p>
                            <a href="#" class="button">More</a>
                        </div>
                    </section>
                    <section class="4u">
                        <div class="box">
                            <a href="#" class="image left"><img src="../assets/images/pics05.jpg" alt="" width="160"
                                    height="160"></a>
                            <h3>Etiam posuere augue</h3>
                            <p>Donec nonummy magna quis risus eleifend. </p>
                            <a href="#" class="button">More</a>
                        </div>
                    </section>
                    <section class="4u">
                        <div class="box">
                            <a href="#" class="image left"><img src="../assets/images/pics06.jpg" alt="" width="160"
                                    height="160"></a>
                            <h3>Etiam posuere augue</h3>
                            <p>Donec nonummy magna quis risus eleifend. </p>
                            <a href="#" class="button">More</a>
                        </div>
                    </section>
                </div>
                <div class="divider"></div>
            </div>
        </div>
        <!-- /Featured -->

        <!-- Footer -->
        <div id="footer">
            <div class="container">
                <div class="row">
                    <div class="4u">
                        <section>
                            <h2>{{ $t("footer.resume") }}</h2>
                            <i class="fa-solid fa-file-user"></i>
                            <p><strong>Huz07522@gmail.com </strong></p>
                            <!-- <a href="#" class="button">Submit</a> -->
                             <br>
                        </section>
                    </div>
                    <div class="4u">
                        <section>
                            <h2>{{ $t("footer.contact") }}</h2>
                            <p><strong>Huz07522@gmail.com </strong></p>
                            <!-- <a href="#" class="button">Submit</a> -->
                             <br>
                        </section>
                    </div>
                    <div class="4u">
                        <section>
                            <h2>{{ $t("footer.social") }}</h2>
                            <p><strong>Huz07522@gmail.com </strong></p>
                            <!-- <a href="#" class="button">Submit</a> -->
                             <br>
                        </section>
                    </div>
                </div>
                <div id="lastUpdate">
                    <p>{{ $t("footer.lastUpdate") }}</p>
                </div>
            </div>
        </div>
    </body>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

const name = ref(t('welcome'))

setTimeout(() => {
    name.value = t('name')
}, 1100)

watch(locale, () => {
    console.log(locale.value);
    name.value = t('welcome')
    setTimeout(() => {
        name.value = t('name')
    }, 1100)
});


</script>

<style scoped>
#logo {
    animation: openIn 1s ease-in-out;
}

@keyframes openIn {
    0% {
        opacity: 0;
        transform: translateX(20px);
    }

    100% {
        opacity: 1;
        transform: translateX(0px);
    }
}
</style>
