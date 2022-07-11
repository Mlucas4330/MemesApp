import { Button } from '../Button';
import { MemeStyled } from './MemeStyled';

function Meme(props) {
    return (
        <MemeStyled>
            <h1>{props.name}</h1>
            <div>
                <img src={props.src} />
            </div>
            <a href={props.src} target="_blank">
                <Button>Baixar</Button>
            </a>
        </MemeStyled>
    );
}

export default Meme;
