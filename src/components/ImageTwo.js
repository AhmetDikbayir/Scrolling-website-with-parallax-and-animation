import { Parallax } from 'react-parallax';
import Satellite from '../images/image2.jpg'

const ImageTwo = () => (
    <Parallax className='image' blur={0} bgImage={Satellite} strength={400} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">a nice sightseeing places</span>
        </div>
    </Parallax>
);

export default ImageTwo