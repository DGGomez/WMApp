import React, { Component } from 'react';

class Card extends Component {
    render() {
        const { title, location, description } = this.props;
        return (
            <div className="container">
                <div>
                  {`${title}`}
                </div>
                <div className="body__container">
                                return (
                                        <div className="event-item">
                                            <div className="event-center">
                                                {`${location}`}
                                            </div>
                                            <div className="event-description">
                                                {`${description}`}
                                            </div>
                                        </div>
                                );
                </div>
            </div>
        );
    }
}

export default Card;
