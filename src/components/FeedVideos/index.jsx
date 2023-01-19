import VideoPlayer from '../VideoPlayer'

const VIDEOS = [
  {
    id: 1,
    author: 'IlloJuan',
    description: 'Guille la pera',
    likes: 120,
    shares: 234,
    comments: 333,
    songTitle: 'Sonido original - IlloJuan',
    albumCover: 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/713268a026e54998a7ba4d5923e4cc09~c5_100x100.jpeg',
    src: 'https://v16-webapp.tiktok.com/fe2569af760bfcece39b18b4ffc3bf6e/63c9879d/video/tos/useast2a/tos-useast2a-pve-0068/oYPfLAbs1SAyqHRHei42CCgyfV9xXohPjoP2I6/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1640&bt=820&cs=0&ds=3&ft=4b~OyMUm8Zmo0NuL464jVFj0JpWrKsdm&mime_type=video_mp4&qs=0&rc=OzVmZDtpZjU4NThnNTU7OEBpM3lveDk6Znl0aTMzNzczM0AyLmFjYi1fX2IxYF5jLjRiYSNxM2NscjRfaS9gLS1kMTZzcw%3D%3D&l=20230119120854AECF98F23B7A47ABB076&btag=80000'
  },
  {
    id: 2,
    author: 'Marta',
    description: 'No supero esta canción, y menos esta parte 🆘❤️ #trend #viral #parati #foryou #foryoupage #greenscreen #fyp #ootd',
    likes: 120,
    shares: 234,
    comments: 333,
    songTitle: 'Sonido original - IlloJuan',
    albumCover: 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/713268a026e54998a7ba4d5923e4cc09~c5_100x100.jpeg',
    src: 'https://v16-webapp.tiktok.com/aaa530d03676398c4d7df5651987b9ca/63c9acd9/video/tos/useast2a/tos-useast2a-ve-0068c002/oII7uglUAHZUYQdx6Wkfhjb4IAHtwBmC3oz0Cb/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2388&bt=1194&cs=0&ds=3&ft=4b~OyMUm8Zmo06LH464jVY~nZpWrKsdm&mime_type=video_mp4&qs=0&rc=aWQ7PGk0NGhpZmk3ZGY2NkBpM3Jrazo6ZmxnaTMzNzczM0AtMy8wYS5hX2AxMzA1MjI0YSNxam5hcjRvMC5gLS1kMTZzcw%3D%3D&l=2023011914491892C54A017C368EC5B2F1&btag=80000'
  }
]

export default function FeedVideos () {
  return (
    VIDEOS.map(video => <VideoPlayer key={video.id} {...video} />)
  )
}
