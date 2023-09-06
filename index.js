const APIController = (function() {
    
    const consumerid = 'efe5a543948026772946115c316323cd05e443b00';
    const consumersecret = 'e9dc645bf33230645546a37fc9d80348';
  
    const _getToken = async () => {
  
        const result = await fetch('https://api.schoology.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa(consumerid + ':' + consumerid)
            },
            body: 'grant_type=client_credentials'
        });
  
        const data = await result.json();
        return data.access_token;
    }




/*
const { EmbedBuilder, WebhookClient } = require('discord.js');

const client = new WebhookClient({url: "https://discord.com/api/webhooks/1148797633729663199/WOcIZNmwX31KgBkeZB8eEZ-SwoURjRJngsXIyIDhTNsedV86hj3srCBpfiokcoESe503"})

const embed = new EmbedBuilder()
	.setTitle('Before Tuesday 9/4 please complete the following')
	.setColor(0o00000)
	.setAuthor({ name: 'AP COMP SC AA AGENDA', iconURL: 'https://i.imgur.com/AfFp7pu.png'})
	.setDescription('Before Tuesday 9/4 please complete the following :\n*All quizzes from the 4 sections in ch 2\n *The compuscholar homework for ch 2\n Also be looking for upcoming AP classroom assignment that will be due Thursday 9/6')
	.addFields({ name: 'Due Date', value: 'Monday, September 4, 2023 at 11:59 pm', inline: true })
	.setTimestamp()
	.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

client.send({embeds: [embed],});
*/