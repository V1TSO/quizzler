
import Typography from '@mui/material/Typography';

const Title = ({ title, subtitle }) => {
    return (
        <div>
            <Typography color="text.primary" variant='h2' fontWeight='bold' marginBottom='1rem'>{title}</Typography>
            <Typography color="text.secondary" variant='h4' marginBottom='1rem' textAlign='center'>{subtitle}</Typography>
        </div >
    )
}

export default Title