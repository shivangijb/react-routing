import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from '../components/Contact';

test('should render a heading', () => { 
    render(<Contact/>);
    const heading = screen.getByRole("heading");
    

    //Assertion
    console.log(heading)
 })