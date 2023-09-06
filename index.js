const APIController = (function() {
    const DOMAIN         = 'https://lms.lausd.net';
    const consumerId     = '';
    const consumerSecret = ''

    const _getToken = async () => {
        const result = await fetch(DOMAIN + '/oauth/authorize', {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + btoa(consumerId + ':' + consumerSecret),
                'Host': 'api.schoology.com',
                'Content-Type': 'application/json'
            },
            body: 'grant_type=client_credentials'
        });

        const data = await result.json();
        return data.access_token;
    }
})(APIController);