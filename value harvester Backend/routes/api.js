((applicationRoutes)=>{

    applicationRoutes.init = (app)=>{
        const commodityRoutes = require('./commodityRoutes');
        app.use('/api', commodityRoutes)

        const sellerRoutes = require('./sellerRoutes');
        app.use('/api', sellerRoutes)
       
        const buyerRoutes = require('./buyerRoutes');
        app.use('/api', buyerRoutes)

        const unitRoutes = require('./unitRoutes');
        app.use('/api', unitRoutes)

        // const  payTranBuyRoutes = require('./payTranBuyRoutes');
        // app.use('/api',  payTranBuyRoutes )
    
        const  settingRoutes = require('./settingRoutes');
        app.use('/api', settingRoutes)

        const buyerRequisitionRoutes= require('./buyerRequisitionRoutes');
        app.use('/api', buyerRequisitionRoutes)

        const biddingRoutes = require('./biddingRoutes');
        app.use('/api', biddingRoutes)

        const biddingOfferRoutes = require('./biddingOfferRoutes');
        app.use('/api',biddingOfferRoutes )

        const paymentTranscationRoutes = require('./paymentTranscationRoutes');
        app.use('/api',paymentTranscationRoutes)

        const registrationRoutes = require('./registrationRoutes');
        app.use('/api',registrationRoutes)

        const adminRoutes = require('./adminRoutes');
        app.use('/api',adminRoutes )  
    }


   
    
})(module.exports);