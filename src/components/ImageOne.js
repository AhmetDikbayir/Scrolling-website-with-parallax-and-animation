import { Parallax } from 'react-parallax';
import Nasa from '../images/image1.jpg'
const ImageOne = () => (
    <Parallax className='image' blur={0} bgImage={Nasa} strength={400}>
        <div className='content'>
            <span className="img-txt1">an amazing journey to a new world</span>
            <span className='img-txt1'>Asia</span>
        </div>
    </Parallax>
);

export default ImageOne