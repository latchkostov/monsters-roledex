import React, { FunctionComponent } from 'react';
import './search-box.styles.css';

interface SearchBoxProps {
    placeHolder: string,
    handleChange: (value: string) => any
}

export const SearchBox: FunctionComponent<SearchBoxProps> = ({ placeHolder, handleChange }: SearchBoxProps) => {
    return <input
        className='search'
        type='search'
        placeholder={placeHolder}
        onChange={(e) => handleChange(e.target.value)}
    />
}