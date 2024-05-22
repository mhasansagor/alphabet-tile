import React from 'react';
import './alphabet.css';

export default function AlphabetGrid({ onTileClick }) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    return (
        <>
            <div className="grid-container">
                {alphabet.map(letter => (
                    <div
                        key={letter}
                        className="grid-item"
                        onClick={() => onTileClick(letter)}
                    >
                        {letter}
                    </div>
                ))}
            </div>
        </>
    )
}
