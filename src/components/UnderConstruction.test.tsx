import React from 'react';
import { render, screen } from '@testing-library/react';
import UnderConstruction from './UnderConstruction';

describe('UnderConstruction component', () => {
    test('Displays Under Construction Message', () => {
        render(<UnderConstruction />);
      
        const linkElement = screen.getByText("Under Construction :)");
      
        expect(linkElement).toBeInTheDocument();
      
      });

    test('Validate image loaded from halopedia site', () => {
        render(<UnderConstruction />);

        const image = screen.getByRole('img');

        expect(image).toHaveAttribute('alt', 'Unngoy holding plasma pistol looking to the left.');
        expect(image).toHaveAttribute('src', 'https://halo.wiki.gallery/images/c/c4/HINF-Unggoy_Conscript.png');
    });
});