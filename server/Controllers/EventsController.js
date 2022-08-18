const events_model=require('../Models/EventsModel')

exports.ajouter_evenement=async(req,res)=>{
    try {
        const newevent=new events_model({
            ...req.body

        })

        await newevent.save();
        res.status(200).json(newevent)
        
    } catch (error) {
        res.status(400).json({message:error.message})
        
    }
}