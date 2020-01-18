var ConnectionFactory = (function(){

    const stores = ['negociacoes'];
    const version = 4;
    const dbName = 'aluraframe';

    var close = null;
    
    var connection = null;
    
    return class ConnectionFactory{
    
        constructor(){
            throw new Error('Esta classe não pode ser instanciada');
        }
    
        static getConnection(){
    
            return new Promise((resolve, reject) => {
                
                let openRequest = window.indexedDB.open(dbName, version);
    
                openRequest.onupgradeneeded = e => {
    
                    ConnectionFactory._createStores(e.target.result);
                };
                
                openRequest.onsuccess = e => {
                    
                    if(!connection){
                        connection = e.target.result;
                        close = connection.close.bind(connection);
                        connection.close = function(){
                            throw new Error("Não pode fechar a conexão");
                        }
                    }
                    resolve(e.target.result);
                };
                
                openRequest.onerror = e => {
                    
                    console.log(e.target.error);
                    
                    reject(e.target.error.name);
                };
            });
        }
        
        static _createStores(connection){
    
            stores.forEach(store => {
                
                if(connection.objectStoreNames.contains(store))
                    connection.deleteObjectStore(store);
        
                connection.createObjectStore(store, {autoIncrement: true});
            })
        }

        static _closeConnection(){

            if(connection){
                close();
                connection = null;
            }
        }
    }
})();
