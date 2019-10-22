import React from 'react';
import ItemComponent from './ItemComponent'
import VirtualDraggableGrid from 'react-virtual-draggable-grid';
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