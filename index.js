const APIController = (function() {
    const domain         = 'https://lms.lausd.net';
    const consumerId     = 'efe5a543948026772946115c316323cd05e443b00';
    const consumerSecret = 'e9dc645bf33230645546a37fc9d80348'

    const _getToken = async () => {
        const result = await fetch('https://api.schoology.com/oauth/request_token', {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + btoa(consumerId + ':' + consumerSecret),
                'Host': 'domain',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials'
        });

        const data = await result.json();
        return data;
    }
    console.log('OAuth Token: ' + _getToken());
})();
