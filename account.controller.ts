import axios from 'axios';

let url = `https://api.aleth.io/v1/accounts/`; 

export function monitor_account(account) {
    let response = {
        balance: '0',
        transactions: [{
            value: '0',
            txHash: '',
            blockHash: '',
            gasLimit: '',
            gasPrice: '',
            gasUsed: ''
        }],
        contractMessages: [{
            type: '',
            blockRank: '',
            contractCreated: '',
            blockHash: '',
            toAddress: '',
            txHash: ''
            
        }],
        links: {
            next: '',
            prev: ''
        },
        errorMessage: ''
    }

    return new Promise( (resolve, reject) => {
        axios.get( url + account )
            .then( body => {
                let balance = parseInt(body.data.data.attributes.balance) / 1000000000000000000;
                response.balance = balance.toFixed(4); // round up balance to 4 decimal places

            axios.get( url + account + '/transactions')
                .then( body => {
                    let data = body.data.data;
                    for ( let i = 0; i < data.length; i++ ) {
                        // rounding up txValue and gasPrice. add comma to gasLimit and gasUsed
                        let txValue = data[i].attributes.value;
                        txValue = parseInt(txValue) / 1000000000000000000;
                        txValue = txValue.toFixed(4);

                        let gasPrice = data[i].attributes.txGasPrice;
                        gasPrice = parseInt(gasPrice) / 1000000000;
                        gasPrice = gasPrice.toFixed(3);

                        let gasLimit = (parseInt(data[i].attributes.msgGasLimit)).toLocaleString();
                        let gasUsed = (parseInt(data[i].attributes.txGasUsed)).toLocaleString();
                        
                        response.transactions[i] = {
                           value: txValue,
                           txHash: data[i].id,
                           blockHash: data[i].relationships.includedInBlock.data.id,
                           gasLimit: gasLimit,
                           gasPrice: gasPrice,
                           gasUsed: gasUsed
                       }
                    }

                axios.get( url + account + '/contractMessages')
                    .then( body => {
                        let data = body.data.data;
                        if (data.length === 0) {
                            response.contractMessages = [];
                        } else {
                            for ( let i = 0; i < data.length; i++ ) {
                                response.contractMessages[i] = {
                                    type: data[i].type,
                                    blockRank: data[i].attributes.globalRank[1],
                                    contractCreated: data[i].relationships.from.data.id,
                                    blockHash: data[i].relationships.includedInBlock.data.id,
                                    toAddress: data[i].relationships.to.data.id,
                                    txHash: data[i].relationships.transaction.data.id
                                };
                            }
                            response.links = {
                                next: body.data.links.next,
                                prev: body.data.links.prev
                            }
                        }
                        resolve(response);
                    },
                    error => {
                        console.error(error.response);
                        response.errorMessage = error.response.data.errors[0].status + ' ' + error.response.data.errors[0].title; 
                        resolve(response);
                    }) 
            },
            error => {
                console.error(error.response);
                response.errorMessage = error.response.data.errors[0].status + ' ' + error.response.data.errors[0].title; 
                resolve(response);
            }) 
        },
        error => {
            console.error(error.response);
            response.errorMessage = error.response.data.errors[0].status + ' ' + error.response.data.errors[0].title; 
            resolve(response);
        })
    })    
}

// useful for debugging
const promise = monitor_account('0xd73953bc13c031459f3856a9a5adce36bed18fdc'); // only txns 0xd73953bc13c031459f3856a9a5adce36bed18fdc
promise.then(
    (result) => { console.log(result), console.log(result['transactions']) },
    (error) => { console.error(error) }
);
