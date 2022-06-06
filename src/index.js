import EpimiseConstructor from './epimise.js';


const Epimise = $ => new EpimiseConstructor($);
Epimise.Epimise = EpimiseConstructor;

// eslint-disable-next-line import/no-named-export
export {EpimiseConstructor as Epimise};

export default Epimise;
