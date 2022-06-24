import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'b2a0e87f931c4eb691941ffa79d5d215', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
