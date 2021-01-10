export const order = {
   _id: !String,
   buyer : {
       address: !String,
       name:!String,
       phone: !Number,
       
   },
   items : [
       {
           name: !String,
           price: !Number,
       },
   ],
   total:!Number,
   buyDate:!Date,
}