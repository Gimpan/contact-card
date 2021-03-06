import main from '../../hoc/Auxil/Auxil';
import classes from './Layout.module.scss'

const layout = (props) => (
    <main className={classes.Content}>
        {props.children}
    </main>    
);

export default layout;