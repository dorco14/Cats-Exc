import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
    card: {
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
        borderRadius: '10px',
        overflow: 'hidden',
        margin: '10px',
        padding: '10px'
    },
    cardHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardImage: {
        width: '100%',
        height: '200px',
        objectFit: 'cover'
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardDescription: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
})