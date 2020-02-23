import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-js';

Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true
});
