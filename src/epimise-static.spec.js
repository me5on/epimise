// noinspection JSUnresolvedFunction

import {describe, expect, it, jest} from '@jest/globals';
import Epimise from './epimise.js';


describe('Epimise', () => {

    it(
        '.resolve and .reject are functions',
        () => {
            expect(Epimise.resolve).toBeFun();
            expect(Epimise.reject).toBeFun();
        },
    );

    it(
        '.resolve and .reject return correct promise objects',
        () => {
            expect(Epimise.resolve()).toBeInstanceOf(Promise);
            expect(Epimise.resolve()).toBeInstanceOf(Epimise);
            expect(Epimise.reject()).toBeInstanceOf(Promise);
            expect(Epimise.reject()).toBeInstanceOf(Epimise);
        },
    );

    it(
        '.resolve returns the value',
        async () => {

            const v = Symbol('value');
            const fn = jest.fn($ => $);

            await Epimise.resolve(v).then(fn);
            expect(fn).toBeCalledTimes(1);
            expect(fn).toBeCalledWith(v);
        },
    );

    it(
        '.reject returns the reason',
        async () => {

            const r1 = Symbol('reason 1');
            const r2 = Symbol('reason 2');
            const f1 = jest.fn($ => $);
            const f2 = jest.fn($ => $);

            await Epimise.reject(r1).catch(f1);
            expect(f1).toBeCalledTimes(1);
            expect(f1).toBeCalledWith(r1);

            await Epimise.reject(r2).then(null, f2);
            expect(f2).toBeCalledTimes(1);
            expect(f2).toBeCalledWith(r2);
        },
    );

});
