import './ScrollUp.css';
import ScrollUp_Icon from '../../assets/Images/scrollup.svg'

const ScrollUp = () => {
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <div>
            <button onClick={topFunction} id="scroll-up" title="Go to top">
                <img src={ScrollUp_Icon} alt="up" />
            </button>
            
        </div>
    )
}
export default ScrollUp;