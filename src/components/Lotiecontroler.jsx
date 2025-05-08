import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const Lotiecontroler = (src,
    play,
    loop = false,
    onLoad,
    style,) => {
    const [player, setPlayer] = useState(null);
    const dotLottieRefCallback = (ref) => {
        lottieRef.current=ref;

      };

    const play=()=>{
        if (lotie){
            lotie.play()
        }
    }

  return (
    <></>
  )
}

export default Lotiecontroler