const delayedSuccess = () => {
    return new Promise((success, except) => {
        setTimeout(() => {
            success({'message': 'delayed success!'})
        }, 500)
    })
}

const delayedException = () => {
    return new Promise((success, except) => {
        setTimeout(() => {
            except({'error': 'delayed exception!'})
        }, 500)
    })
}

delayedSuccess().then(success => console.log(success))
delayedException().catch(except => console.log(except))

