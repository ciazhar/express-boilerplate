let model =  require('../models')

module.exports={
    create : function(req,res,next){
        let result={
            'success':false,
            'status':'ERROR',
            'msg':'SOMETHING WENT WRONG'
        }
        res.json(result)
        
    }
}