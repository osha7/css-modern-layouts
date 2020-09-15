import React from 'react';
import '../sidebar-says.css';

export default class SuperCentered extends React.Component {

    render () {
        return (
            <div className="ex-container">
    <br />
                <div class="parent">
                    <div class="section-yellow" contenteditable>
                        Min: 150px / Max: 25%
                    </div>
                    <div class="section-purple" contenteditable>
                        This element takes the second grid position (1fr), meaning
                        it takes up the rest of the remaining space.
                    </div>
                </div>
            </div>
        )
    }
}