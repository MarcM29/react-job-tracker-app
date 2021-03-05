import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {


    return (
        <header>
            <h1>{title}</h1>
            <Button color={showAdd ? 'darkred' : 'green'} text={showAdd ? 'Close Form' : 'Add Job'} onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'React App',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
