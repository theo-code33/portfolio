import Airtable from "airtable";
export default async function createAirtable(datas){
    return new Promise((resolve, reject) => {
        const base = new Airtable({apiKey: process.env.AIRTABLE_KEY}).base(process.env.AIRTABLE_BASE)
    
        const newData = [
            {
                "fields": {
                    "name": datas.name,
                    "email": datas.email,
                    "subject": datas.subject,
                    "message": datas.message,
                    "sendingAt": Date.now(),
                    "status": "À contacter",
                    "Devis": "Non proposé"
                }
            }
        ]
        base('Table 1').create(
            newData,
            (err, message) => {
                if(err) reject(err)
                resolve(message)
            }
        )
    })
}