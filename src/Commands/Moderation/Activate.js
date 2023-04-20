const Command = require('../../Structures/Command')

const Events = require('../../Handler/Events')

const Message = require('../../Structures/Message')

module.exports = class command extends Command {

   constructor() {

     super('activate', {

     description: "Displays the bot's usable commands",

     category: 'moderation',

     exp: 20,

     usage: 'activate',

     aliases: ['act'],

     cooldown: 10

        })

   }

  /**

  * @param {Message} m

  * @param {import('../../Handlers/Message').args} args

  * @returns {Promise}

  */

 execute = async (M, helper, reply, sender, arg) => {

 

 

const toggleableGroupActions = ['mod', 'events']

        if (!arg)

            return M.reply(

                `Please provide a valid toggleable GroupActions\n\n*Available:* \n${toggleableGroupActions.join('\n')}`

            )

        if (!toggleableGroupActions.includes(arg.trim()))

            return M.reply(

                `Please provide a valid toggleable GroupActions\n\n*Available:* \n${toggleableGroupActions.join('\n')}`

            )

        const Actives = (await client.DB.get(arg)) || []

        if (Actives.includes(M.from))

            return M.reply(`${helper.utils.capitalize(arg)} is already activate in your group`)

        await helper.DB.push(arg, M.from)

        M.reply(`Success activating ${client.helper.capitalize(arg)} in your group`)

    }
