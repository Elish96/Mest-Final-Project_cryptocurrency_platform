const { model, Schema } = require('mongoose');

const userSchema = new Schema(
    {
    
        userId: {
            type: String,
          required:[true, 'you have to provide a user Id']  
        },
        
        email: {
            type: String,
            required:[true, 'you have to provide your email']
        },
        password: {
            type: String,
            required:[true, 'you have to provide password']
        },
        confirmpassword: {
            type: String,
            required: [true, 'does not match password']
        }
    },
    {
        timestamps: true,
    }
    
);

module.exports = model('User',userSchema)