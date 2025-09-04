const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(res => res.json())
        .then((json) => displayLesson(json.data));
};

const displayLesson = (lessons) => {

    const levelContainer = document.getElementById("level-container");

    for (let lessons of lessons)
};
loadLessons();