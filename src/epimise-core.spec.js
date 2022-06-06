/* eslint-disable max-lines-per-function */
import {describe, expect, it, jest} from '@jest/globals';
import Epimise from './epimise.js';


describe('Epimise', () => {

    // noinspection JSUnresolvedFunction
    it(
        'is a function',
        () => void expect(Epimise).toBeFun(),
    );


    it(
        'returns correct promise object',
        () => {
            const ep = new Epimise();

            expect(ep).toBeInstanceOf(Promise);
            expect(ep).toBeInstanceOf(Epimise);

            expect(ep.toString()).toBe('[object Promise]');
        },
    );

    it(
        'does not execute upon creation',
        () => {

            // using mocked function
            const f1 = jest.fn($ => $);
            new Epimise(f1); // eslint-disable-line no-new
            expect(f1).not.toBeCalled();

            // using flag from upper scope
            let value = 'unchanged';
            const f2 = () => value = 'changed';

            new Epimise(f2); // eslint-disable-line no-new
            expect(value).toBe('unchanged');

            f2();
            expect(value).toBe('changed');
        },
    );

});
