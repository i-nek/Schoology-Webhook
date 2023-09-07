const APIController = (function() {
    const DOMAIN         = 'https://lms.lausd.net';
    const consumerId     = 'efe5a543948026772946115c316323cd05e443b00';
    const consumerSecret = ''

    const _getToken = async () => {
        const result = await fetch('https://api.schoology.com/oauth/request_token', {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + btoa(consumerId + ':' + consumerSecret),
                'Host': 'lms.lausd.net',
                'Content-Type': 'application/json'
            },
            body: 'grant_type=client_credentials'
        });

        const data = await result.json();
        return data;
    }
    console.log(_getToken());
})();