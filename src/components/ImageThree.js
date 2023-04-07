import { Parallax } from 'react-parallax';
import spaceStation from '../images/image3.jpg'
const ImageThree = () => (
    <Parallax className='image' blur={0} bgImage={spaceStation} strength={400} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">a nice beaches</span>
        </div>
    </Parallax>
);

export default ImageThree