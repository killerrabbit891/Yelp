import React, { PropTypes as T } from 'React'
import classnames from 'classnames'

//import Rating from 'components/Rating/Rating'
import styles from './styles.module.css'

export class Item extends React.Component {
    render() {
        const {place} = this.props;
        return (
            <div className={styles.item}>
                <h1 className={classnames(styles.title)}>{place.name}</h1>
                <span>{place.rating/5}</span>
            </div>
        )
    }
}

export default Item;