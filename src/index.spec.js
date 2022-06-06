/* eslint-disable new-cap,max-lines-per-function */


import {describe, expect, it} from '@jest/globals';
import epimise, {Epimise} from './index.js';


describe('epimise', () => {


    // noinspection JSUnresolvedFunction
    it(
        'is a function',
        () => expect(epimise).toBeFun(epimise),
    );

    it(
        'is a function',
        () => expect(epimise.name).toBe('Epimise'),
    );

    it(
        'returns Epimise object',
        () => {

            // noinspection JSValidateTypes
            const ep = epimise();

            // eslint-disable-next-line import/no-named-as-default-member
            expect(ep).toBeInstanceOf(epimise.Epimise);
            expect(ep).toBeInstanceOf(Epimise);

            expect(ep.constructor.name).toBe('Epimise');
        },
    );

});
