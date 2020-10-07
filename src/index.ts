const msg: string = 'Hello World';
console.log(msg);

import axios from 'axios';

async function getGooglePageAsync() {
    const response = await axios.get('https://www.google.co.in')
    return response;
}

async function getMicrosoftPageAsync(): Promise<any> {
    let result1: any;
    const p = new Promise(async (resolve, reject) => {
        axios.get('https://www.google.co.in')
            .then(result => {
                resolve(result);
                //result1 = result.data;
                //return(result.data);
            })
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error)
            })
            .finally(() => {
                console.log('done');
                //resolve(result1)
            });
    });

    return p;
}

const startTime = Date.now();
try {
    axios.get('https://www.google.co.in')
    .then(response => {
      console.log('response1 done');
      throw Error('forceful exception...');
    })
    .catch(error => {
      console.log(`Then message api call ${error.message}`);
      throw error;
    })
    .finally(() => {
      const endTime = Date.now();
      const timeTaken = endTime - startTime;
      console.log(`Time taken 1: ${timeTaken} ms`);
    });
} catch(error) {
    console.log(`outer catch ${error.message}`);
}

const timeTaken = Date.now() - startTime;
console.log(`Faulty Time taken 1: ${timeTaken} ms`);

const fnCall = async () => {
    const startTime = Date.now();
    try {
        const response = await getGooglePageAsync();
        console.log('response2 done');
    } catch(error) {
        console.log(error.message);
    } finally {
        const endTime = Date.now();
        const timeTaken = endTime - startTime;
        console.log(`Time taken 2: ${timeTaken} ms`);
    }
}

const fn1Call = async () => {
    try {
        const v = await getMicrosoftPageAsync();
        console.log(v);
    } catch(error) {
        console.log(error.message);
    } finally {
        const endTime = Date.now();
        const timeTaken = endTime - startTime;
        console.log(`Time taken 2: ${timeTaken} ms`);
    }
}

fn1Call();
