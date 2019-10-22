import React from 'react';
import PropTypes from 'prop-types';
import VirtualDraggableGrid from 'react-virtual-draggable-grid';

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

class Draggable extends React.Component {
    constructor(props) {
        super(props);

        const item = {
            fixedWidth: 200,
            fixedHeight: 100,
            ItemComponent,
            itemProps: {
                styles: {
                    width: 'calc(100% - 2px)',
                    height: 'calc(100% - 2px)',
                },
            },
        };

        const x = 3;
        const y = 2;
        const items = [];

        for (let iY = 0; iY < y; iY += 1) {
            const row = [];
            items.push(row);
            for (let iX = 0; iX < x; iX += 1) {
                const newItem = { ...item };
                const increment = iX + iY * x;
                const key = `item-${increment}`;

                newItem.key = key;
                newItem.itemProps = { ...item.itemProps, name: key };
                newItem.fixedWidth = item.fixedWidth + 20 * increment;
                newItem.fixedHeight = item.fixedHeight + 20 * increment;

                row.push(newItem);
            }
        }

        this.state = { items };
    }

    // optional; RVDG works as a controlled
    // or an uncontrolled component
    getItems = items => {
        this.setState({ items });
    };

    render() {
        return (
            <div className='ui grid container'>
                <div style={{ width: '100vw', height: '100vh', margin: 20 }}>
                    <VirtualDraggableGrid
                        items={this.state.items}
                        noDragElements={['button']}
                        gutterX={10}
                        gutterY={10}
                        scrollBufferX={300}
                        scrollBufferY={300}
                        getItems={this.getItems}
                    />
                </div>
            </div>
        );
    }
}
export default Draggable