<template>


    <div class="content">

        <div class="my-info content-area">
            <div class="center">
                <h1 class="my-name">Mike Minckler</h1>
                <h2 class="my-title"> Web Developer</h2>
                <p>mikeminckler@gmail.com</p>
                <p><a href="https://github.com/mikeminckler" target="_blank">github <i class="fa fa-github"></i> mikeminckler</a></p>
            </div>
            <ul>
                <li>15 years experience</li>
                <li>Full stack programmer</li>
            </ul>

            <div class="center quote">
                <p>- Always learning -</p>
                <p class="code">I code with <span class="vim">vim</span></p>
            </div>

            <h3>Other Talents</h3>
            <ul>
                <li>Video production</li>
                <li>Photography</li>
                <li>Graphic design</li>
                <li>3D animation</li>
            </ul>
        </div>

        <div class="my-projects content-area">

            <h2>My Work</h2>

            <div class="project" v-for="project in projects">
                <h3 class="project-name">{{ project.name }}</h3>
                <div class="flex project-sub-header">
                    <div class="project-website flex-grow"><a :href="project.website" target="_blank">{{ project.website }}</a></div>
                    <div class="project-dates">{{ project.dates }}</div>
                </div>
                <div class="project-description">{{ project.description }}</div>
            </div>

        </div>

        <div class="my-skils content-area">

            <h2 class="flex header">
                <div class="flex-grow">Knowledge</div>
                <div class="side-header">Since</div>
            </h2>

            <div v-for="skill in skills">
                <h3>{{ skill.name }}</h3>
                <div class="skill-list">
                    <div class="flex" v-for="item in skill.items">
                        <div class="skill-caret">
                            <div class="fa fa-caret-right"></div>
                        </div>
                        <div class="skill-name flex-grow">{{ item.name }}</div>
                        <div class="skill-exp">{{ item.exp }}</div>
                    </div>
                </div>
            </div>

        </div>

    </div>


</template>

<script>
    export default {
        components: {},

        mixins: [],

        data: function () {
            return {
                projects: {
                    1: {
                        name: 'BlueHealth Inc',
                        description: 'The co-founder and lead programmer of a web-based online medical charting and management application. Built on the Laravel PHP framework, BlueHealth features a clean and responsive user interface focused on providing quick and easy data entry, searching, and reporting. BlueHealth has facilitated the creation of over 25,000 medical records annually.',
                        dates: 'November 2014 - Present',
                        website: 'http://demo.bluehealth.ca'
                    },
                    2: {
                        name: 'Realtime Volleyball Stats',
                        description: 'Using Vue JS, Laravel for API, Socket.io, Node Js, Redis. Single page application that pushes real time stats and graphs to authenticated clients',
                        dates: 'September 2016 - Present',
                        website: 'http://gamestats.brentwood.bc.ca'
                    },
                    3: {
                        name: 'Brentwood College School',
                        description: 'Using typo3 CMS since 2007, sustainable, four versions. Latest version reactive, youtube integration, marketing, photography',
                        dates: 'January 2005 - Present',
                        website: 'http://www.brentwood.bc.ca'
                    }
                },

                skills: {
                    1: {
                        name: 'Frameworks',
                        items: {
                            1: {
                                name: 'Laravel',
                                exp: 'Nov 2014'
                            },
                            2: {
                                name: 'Vue JS',
                                exp: 'July 2016'
                            },
                            3: {
                                name: 'Socket.io',
                                exp: 'July 2016'
                            }
                        }
                    },

                    2: {
                        name: 'Languages',
                        items: {
                    
                            1: {
                                name: 'PHP',
                                exp: '2006'
                            },
                            4: {
                                name: 'Javascript & Jquery',
                                exp: '2005'
                            },
                            2: {
                                name: 'CSS3',
                                exp: '2005'
                            },
                        }

                    },

                    3: {

                        name: 'Concepts',
                        items: {
                            1: {
                                name: 'MVC',
                                exp: '2014'
                            },
                            2: {
                                name: 'TDD',
                                exp: '2014'
                            },
                            3: {
                                name: 'Single Page Apps ',
                                exp: '2015'
                            },
                            4: {
                                name: 'Reactive CSS & Layouts',
                                exp: '2012'
                            }
                        }
                    },


                    4: {
                    
                        name: 'Server',
                        items: {

                            1: {
                                name: 'MySQL',
                                exp: '2006'
                            },
                            2: {
                                name: 'AWS',
                                exp: '2014'
                            },
                            3: {
                                name: 'Ubuntu',
                                exp: '2005'
                            },
                            4: {
                                name: 'Node',
                                exp: '2016'
                            },
                            5: {
                                name: 'Apache & Nginx',
                                exp: '2008'
                            },
                        }

                    },

                    5: {
                    
                        name: 'Software',
                        items: {
                            1: {
                                name: 'Photoshop',
                                exp: '1995'
                            },
                            2: {
                                name: 'Illustrator',
                                exp: '2002'
                            }
                        }

                    },
                }
            }
        },

        props: {
            //
        },

        computed: {
            //
        },

        created () {
            //
        },

        mounted () {
            //
        },

        methods: {
            //
        }
    };
</script>
