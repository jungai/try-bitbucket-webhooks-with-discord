import Discord from 'discord.js';
import { getBotId, getBotToken } from '../../../utils/get_env';
import { IPostDekisugi } from './types';

export const postDekisugi: IPostDekisugi = (req, res) => {
    try {
        // connect to discord
        const hook = new Discord.WebhookClient(getBotId(), getBotToken());
        const { pullrequest, repository } = req.body;

        // embed things
        const embed = new Discord.MessageEmbed()
            .setTitle(repository.name)
            .setTitle(`merge: ${pullrequest.title}`)
            .setColor('#2ecc71')
            .setAuthor(pullrequest.author.display_name)
            .setURL(pullrequest.links.html.href)
            .addFields({
                name: 'into:',
                value: pullrequest.destination.branch.name,
            });

        // notify
        hook.send('ประกาศ!!', { embeds: [embed] });

        res.send({ success: true });
    } catch (error) {
        res.send({ error: JSON.stringify(error) });
    }
};
