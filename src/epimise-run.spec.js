import {describe, expect, it, jest} from '@jest/globals';
import Epimise from './epimise.js';


describe('Epimise executes upon', () => {

    it(
        'using then',
        () => {
            const fn = jest.fn($ => $);
            new Epimise(fn).then($ => $, $ => $);
            expect(fn).toBeCalledTimes(1);
        },
    );


    it(
        'using catch',
        () => {
            const fn = jest.fn($ => $);
            new Epimise(fn).catch($ => $, $ => $);
            expect(fn).toBeCalledTimes(1);
        },
    );

    it(
        'using finally',
        () => {
            const fn = jest.fn($ => $);
            new Epimise(fn).finally($ => $, $ => $);
            expect(fn).toBeCalledTimes(1);
        },
    );

});
