import { useRef, useState } from 'react'

import styles from './styles.module.css'

const SRC = 'https://v16-webapp.tiktok.com/fe2569af760bfcece39b18b4ffc3bf6e/63c9879d/video/tos/useast2a/tos-useast2a-pve-0068/oYPfLAbs1SAyqHRHei42CCgyfV9xXohPjoP2I6/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1640&bt=820&cs=0&ds=3&ft=4b~OyMUm8Zmo0NuL464jVFj0JpWrKsdm&mime_type=video_mp4&qs=0&rc=OzVmZDtpZjU4NThnNTU7OEBpM3lveDk6Znl0aTMzNzczM0AyLmFjYi1fX2IxYF5jLjRiYSNxM2NscjRfaS9gLS1kMTZzcw%3D%3D&l=20230119120854AECF98F23B7A47ABB076&btag=80000'
export default function VideoPlayer () {
  const [playing, setPlaying] = useState(false)
  const video = useRef()
  const handlePlay = () => {
    playing ? video.current.pause() : video.current.play()
    setPlaying(!playing)
  }

  return (
    <div>
      <video
        className={styles.video}
        src={SRC}
        controls={false}
        ref={video}
      />
      <button className={styles.player} onClick={handlePlay} />
    </div>
  )
}
