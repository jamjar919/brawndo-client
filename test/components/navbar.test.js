import React from 'react';
import { mount } from 'enzyme';
import Navbar from '../../src/components/navbar';

describe('navbar component', () => {
    // setup
    let mountedNavbar;
    const navbar = () => {
        if (!mountedNavbar) {
            mountedNavbar = mount(
              <Navbar />,
            );
        }
        return mountedNavbar;
    };

    beforeEach(() => {
        mountedNavbar = undefined;
    });

    // tests
    it('always renders a div', () => {
        const divs = navbar().find('div');
        expect(divs.length).toBeGreaterThan(0);
    });
});
