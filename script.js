const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'Variables and basic data types',
        'name': 'Variables and basic data types.mp4',
        'duration': '0:00',
    },
    {
        'id': 'a2',
        'title': 'Operators',
        'name': 'Operators.mp4',
        'duration': '0:00',
    },
    {
        'id': 'a3',
        'title': 'Input and output',
        'name': 'input and output.mp4',
        'duration': '0:00',
    },

    {
        'id': 'a4',
        'title': 'If statements',
        'name': 'If statements.mp4',
        'duration': '0:00',
    },
    {
        'id': 'a5',
        'title': 'Switches',
        'name': 'Switches.mp4',
        'duration': '0:00',
    },
    {
        'id': 'a6',
        'title': 'String',
        'name': 'String.mp4',
        'duration': '0:00',
    },
    {
        'id': 'a7',
        'title': 'While loops',
        'name': 'While loops.mp4',
        'duration': '0:00',
    },

    {
        'id': 'a8',
        'title': 'Do while loops',
        'name': 'Do while loops.mp4',
        'duration': '0:00',
    },
    {
        'id': 'a9',
        'title': 'For loops',
        'name': 'For loops.mp4',
        'duration': '0:00',
    },
    {
        'id': 'a10',
        'title': 'Nested loops',
        'name': 'Nested loops.mp4',
        'duration': '0:00',
    },
    {
        'id': 'a11',
        'title': 'Break & continue',
        'name': 'Break & continue.mp4',
        'duration': '0:00',
    },
    {
        'id': 'a12',
        'title': 'functions',
        'name': 'functions.mp4',
        'duration': '0:00',
    },
    {
        'id': 'a13',
        'title': 'Overloaded functions',
        'name': 'Overloaded functions.mp4',
        'duration': '0:00',
    },
    {
        'id': 'a14',
        'title': 'Variable scope',
        'name': 'Variable scope.mp4',
        'duration': '0:00',
    },
    {
        'id': 'a15',
        'title': 'Arrays',
        'name': 'Arrays.mp4',
        'duration': '0:00',
    },
    {
        'id': 'a16',
        'title': '2d Arrays',
        'name': '2d Arrays.mp4',
        'duration': '0:00',
    },
    {
        'id': 'a16',
        'title': 'Pass array to a function',
        'name': 'Pass array to a function.mp4',
        'duration': '0:00',
    },
    {
        'id': 'a17',
        'title': 'Search an array for an element',
        'name': 'Search an array for an element.mp4',
        'duration': '0:00',
    },
    {
        'id': 'a18',
        'title': 'Pointers',
        'name': 'Pointers.mp4',
        'duration': '0:00',
    },
    {
        'id': 'a19',
        'title': 'Files',
        'name': 'Files.mp4',
        'duration': '0:00',
    },
];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.svg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});
