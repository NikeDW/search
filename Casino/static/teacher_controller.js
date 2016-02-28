function teacherCtrl($scope) {

    $scope.teacher = {
        lessons_times : [{
            number: 1,
            start: "9.00",
            end: "9.45"
        }, {
            number: 2,
            start: "10.00",
            end: "10.45"
        }, {
            number: 3,
            start: "11.00",
            end: "11.45"
        }, {
            number: 4,
            start: "12.00",
            end: "12.45"
        }, {
            number: 5,
            start: "13.00",
            end: "13.45"
        }, {
            number: 6,
            start: "14.00",
            end: "14.45"
        }],
        days: [
            {
                date: "25.01.2016",
                lessons: {
                    1: {
                        number: 1,
                        subject: "Algebra",
                        class: "3a"
                    },
                    4: {
                        number: 4,
                        subject: "Geometry",
                        class: "3a"
                    },
                    6: {
                        number: 6,
                        subject: "Computer science",
                        class: "3a"
                    }
                }
            },
            {
                date: "26.01.2016",
                lessons: {
                    1: {
                        number: 1,
                        subject: "Algebra",
                        class: "3a"
                    },
                    4: {
                        number: 4,
                        subject: "Geometry",
                        class: "3a"
                    },
                    6: {
                        number: 6,
                        subject: "Computer science",
                        class: "3a"
                    }
                }

            },
            {
                date: "27.01.2016",
                lessons: {
                    1: {
                        number: 1,
                        subject: "Algebra",
                        class: "3a"
                    },
                    4: {
                        number: 4,
                        subject: "Geometry",
                        class: "3a"
                    },
                    6: {
                        number: 6,
                        subject: "Computer science",
                        class: "3a"
                    }
                }
            },
            {
                date: "28.01.2016",
                lessons: {
                    1: {
                        number: 1,
                        subject: "Algebra",
                        class: "3a"
                    },
                    4: {
                        number: 4,
                        subject: "Geometry",
                        class: "3a"
                    },
                    6: {
                        number: 6,
                        subject: "Computer science",
                        class: "3a"
                    }
                }
            },
            {
                date: "29.01.2016",
                lessons: {
                    1: {
                        number: 1,
                        subject: "Algebra",
                        class: "3a"
                    },
                    4: {
                        number: 4,
                        subject: "Geometry",
                        class: "3a"
                    },
                    6: {
                        number: 6,
                        subject: "Computer science",
                        class: "3a"
                    }
                }
            },
            {
                date: "30.01.2016",
                lessons: {
                    1: {
                        number: 1,
                        subject: "Algebra",
                        class: "3a"
                    },
                    4: {
                        number: 4,
                        subject: "Geometry",
                        class: "3a"
                    },
                    6: {
                        number: 6,
                        subject: "Computer science",
                        class: "3a"
                    }
                }
            }
        ]
    };
}
