import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new Adapter(),
    disableLifecycleMethods: true
});

describe('Testing App Component', function() {
    test('App Component' , function() {
        const comp = shallow(<App />);
        expect(comp.find('header').length).toBe(1);
    }); 
});
