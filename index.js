const APIController = (function() {
    const DOMAIN         = '';
    const consumerId     = '';
    const consumerSecret = '';

    const _getToken = async () => {
        const result = await fetch('https://lms.lausd.net/oauth/request_token', {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + btoa(consumerId + ':' + consumerSecret),
                'Host': 'lms.lausd.net',
                'Content-Type': 'application/json',
            },
        });
        const data = await result.parse();
        return data;
    }
    console.log(_getToken());
})();