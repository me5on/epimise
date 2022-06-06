/* eslint-disable constructor-super,no-this-before-super */


const noop = $ => void $();


class Epimise extends Promise {

    #executor;

    #promise;

    constructor(executor) {
        super(noop);
        this.#executor = executor;
    }

    then(onFulfilled, onRejected) {
        return this.#run().then(onFulfilled, onRejected);
    }

    catch(onRejected) {
        return this.#run().catch(onRejected);
    }

    finally(onFinally) {
        return this.#run().finally(onFinally);
    }

    #run() {
        this.#promise ??= new Promise(this.#executor);
        return this.#promise;
    }

    static resolve(value) {
        return new Epimise(resolve => resolve(value));
    }

    static reject(reason) {
        return new Epimise((resolve, reject) => reject(reason));
    }

}


export default Epimise;
