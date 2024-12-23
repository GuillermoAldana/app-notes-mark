import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

interface IButtonLink {
    text: string;
    route: string;
}
const ButtonLink: React.FC<IButtonLink> = ({text, route}) => {
    return (
        <Button color="inherit" component={Link} to={route} sx={{textTransform: 'none', fontSize: '1rem', fontWeight:'600'}}>
            {text}
        </Button>
    );
}

export default ButtonLink;