const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'Variables and basic data types',
        'name': 'Variables And Basic Data Types.mp4',
        'duration': '1:43',
    },
    {
        'id': 'a2',
        'title': 'Operators',
        'name': 'Operators.mp4',
        'duration': '2:06',
    },
    {
        'id': 'a3',
        'title': 'Input and output',
        'name': 'Input And Output.mp4',
        'duration': '3:05',
    },

    {
        'id': 'a4',
        'title': 'If statements',
        'name': 'If Statements.mp4',
        'duration': '2:35',
    },
    {
        'id': 'a5',
        'title': 'Switches',
        'name': 'Switches.mp4',
        'duration': '1:46',
    },
    {
        'id': 'a6',
        'title': 'String',
        'name': 'String.mp4',
        'duration': '2:01',
    },
    {
        'id': 'a7',
        'title': 'While loop',
        'name': 'While Loop.mp4',
        'duration': '2:31',
    },

    {
        'id': 'a8',
        'title': 'Do while loop',
        'name': 'Do While Loop.mp4',
        'duration': '1:32',
    },
    {
        'id': 'a9',
        'title': 'For loop',
        'name': 'For Loop.mp4',
        'duration': '3:26',
    },
    {
        'id': 'a10',
        'title': 'Nested loops',
        'name': 'Nested Loops.mp4',
        'duration': '2:28',
    },
    {
        'id': 'a11',
        'title': 'Break & continue',
        'name': 'Break and Continue.mp4',
        'duration': '2:01',
    },
    {
        'id': 'a12',
        'title': 'functions',
        'name': 'soon.mp4',
        'duration': '0:00',
    },
    {
        'id': 'a13',
        'title': 'Overloaded functions',
        'name': 'soon.mp4',
        'duration': '0:00',
    },
    {
        'id': 'a14',
        'title': 'Variable scope',
        'name': 'soon.mp4',
        'duration': '0:00',
    },
    {
        'id': 'a15',
        'title': 'Arrays',
        'name': 'soon.mp4',
        'duration': '0:00',
    },
    {
        'id': 'a16',
        'title': '2d Arrays',
        'name': 'soon.mp4',
        'duration': '0:00',
    },
    {
        'id': 'a16',
        'title': 'Pass array to a function',
        'name': 'soon.mp4',
        'duration': '0:00',
    },
    {
        'id': 'a17',
        'title': 'Search an array for an element',
        'name': 'soon.mp4',
        'duration': '0:00',
    },
    {
        'id': 'a18',
        'title': 'Pointers',
        'name': 'soon.mp4',
        'duration': '0:00',
    },
    {
        'id': 'a19',
        'title': 'Files',
        'name': 'soon.mp4',
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
