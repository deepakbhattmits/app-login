import React from 'react'
import PropTypes from 'prop-types'
const ItemComponent = props => {
    const { name, styles } = props;

    return (
        <div
            style={{
                userSelect: 'none',
                border: '1px solid black',
                fontFamily: 'sans-serif',
                background: '#91c6a6',
                ...styles,
            }}
        >
            <p
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 0,
                    width: '100%',
                    height: '60%',
                    fontSize: 18,
                }}
            >
                {`Draggable ${name}!`}
            </p>
            <button
                type="button"
                style={{
                    cursor: 'pointer',
                    boxSizing: 'border-box',
                    width: '100%',
                    height: '40%',
                    boxShadow: 'none',
                    borderWidth: '1px 0 0 0',
                    borderStyle: 'solid',
                    borderColor: 'black',
                    background: '#ccc',
                    fontSize: 18,
                }}
                onClick={() => console.log('Clicked without initiating drag', name)}
            >
                {`Prevent Button Drag`}
            </button>
        </div>
    );
};

ItemComponent.propTypes = {
    name: PropTypes.string.isRequired,
    styles: PropTypes.object,
};

ItemComponent.defaultProps = {
    styles: {},
};


export default ItemComponent