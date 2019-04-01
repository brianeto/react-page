import React, { PureComponent } from 'react';
import Hero from 'Components/Hero';

export default class HomePage extends PureComponent {
    state = {
    }

    static defaultProps = {
    }

    render() {
        return (
            <div className="HomePage">
                <Hero />
                HomePage
            </div>
        );
    }
}
