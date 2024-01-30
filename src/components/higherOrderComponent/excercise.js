import React, { useState, useEffect } from 'react';

function withTimer(Component) {
    return class WithTimer extends React.Component {
        constructor(props) {
            super(props);
            this.state = { ticks: 0 };
        }

        componentDidMount() {
            this.timer = setInterval(this.tick.bind(this), 1000);
            this.timer = setInterval(this.tick.bind(this), 1000);
        }

        componentWillUnmount() {
            clearInterval(this.timer);
        }

        tick() {
            this.setState(state => ({ ticks: state.ticks + 1 }))
        }

        render() {
            const { ticks } = this.state;

            return (
                <Component ticks={ticks} {...this.props} />
            );
        }
    }
}


const Clock = withTimer(class Clock extends React.Component {
    render() {
        const { ticks } = this.props;

        return (
            <p>Ticks... {ticks}</p>
        );
    }
});


const NewsTicker = withTimer(class NewsTicker extends React.Component {
    render() {
        const { items, ticks } = this.props;
        const itemIndex = ticks % items.length;

        return (
            <p>{items[itemIndex]}</p>
        );
    }
});

export default { Clock, NewsTicker }
