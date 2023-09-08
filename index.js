const { OAuth2 } = require('oauth');

const OAuth = require('oauth').OAuth;
const webhookURL = 'https://discord.com/api/webhooks/1148797633729663199/WOcIZNmwX31KgBkeZB8eEZ-SwoURjRJngsXIyIDhTNsedV86hj3srCBpfiokcoESe503';

const district_prefix = 'lms.lausd';
const consumerKey = 'efe5a543948026772946115c316323cd05e443b00';
const consumerSecret = 'e9dc645bf33230645546a37fc9d80348';
const callback_url = 'your_callback_url';

const oa = new OAuth(
    requestTokenUrl = 'https://api.schoology.com/oauth/access_token',
    accessTokenUrl = 'https://api.schoology.com/oauth/authorize',
    consumerKey,
    consumerSecret,
    '1.0A',
    null,
    'HMAC-SHA1'
  );

const APIController = (async () => {
  const accessToken = await _getToken();

  console.log('Access Token:', accessToken);
})();

async function _getToken() {
    const result = await oa.getOAuthRequestToken((error, oauthToken, oauthTokenSecret) => {
        if (error) {
          console.error('Error getting request token:', error);
        } 
        return result
    }); 
}


// OAuth2 //
/*
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
*/
  
  
  
  



