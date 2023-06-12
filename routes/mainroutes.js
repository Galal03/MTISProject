const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser')
const path = require('path')
const controllers = require('../controllers/maincontrollers')
const mongoose = require('mongoose')
const User = require('../models/person')

router.get('/home-en',(req,res)=>{
    res.render('home-en')
})
router.get('/home-ar',(req,res)=>{
    res.render('home-ar')
})
router.get('/about-en',(req,res)=>{
    res.render('about-en')
})
router.get('/about-ar',(req,res)=>{
    res.render('about-ar')
})

router.get('/tis-en',(req,res)=>{
    res.render('tis-en')
})
router.get('/tis-ar',(req,res)=>{
    res.render('tis-ar')
})

router.get('/bis-en',(req,res)=>{
    res.render('bis-en')
})
router.get('/bis-ar',(req,res)=>{
    res.render('bis-ar')
})

router.get('/services-en',(req,res)=>{
    res.render('services-en')
})

router.get('/contact-en',(req,res)=>{
    res.render('contact-en')
})
router.get('/contact-ar',(req,res)=>{
    res.render('contact-ar')
})

router.get('/galalxziad',(req,res)=>{
    res.render('galalxziad')
})

//forms

router.get('/services-en',(req,res)=>{
    res.render('services-en')
})

router.get('/services-ar',(req,res)=>{
    res.render('services-ar')
})

router.post('/', async(req, res)=>{
    const data = new User(req.body)
   await data.save()
   res.redirect('/services-en')
   
})

router.post('/ar', async(req, res)=>{
    const data = new User(req.body)
   await data.save()
   res.redirect('/services-ar')
   
})


// Stripe Payment API


const PUBLISHABLE_KEY = "pk_test_51N0mG3AtMpcmAm8IniFmhJmbhuDpdeRrPsY7cHjnw9uaOPwhWtg491nZRl2EbibyUi2ZpMwyTUQLSYrW6Pz9DABI00lqbVyVKG"

const SECRET_KEY = "sk_test_51N0mG3AtMpcmAm8IrslrjHTqTyX1uWERT6cUUlcwohyeqqGFaCTzVrlGnoqzRBSg1AYpraSeG9EDWEHkLz1dFbt700LdaGKASd"

const stripe = require('stripe')(SECRET_KEY)


router.get('/payment-en',(req,res)=>{
    res.render('payment-en',{
        key:PUBLISHABLE_KEY
    })
})

router.post('/payment-en', (req,res)=>{
    stripe.customers.create({
        email:req.body.stripeEmail,
        source:req.body.stripeToken,
        address:{
            line1:'23 Moutain Valley New Delhi',
            postal_code: '110092',
            city:'New Delhi',
            state:'Delhi',
            country:'India'
        }
    })
    .then((customer) =>{
        return stripe.charges.create({
            amount:7000,
            description:'Web Development Product',
            currency:'USD',
            customer:customer.id
        })
    })
    .then((charge)=>{
        console.log(charge)
        res.send("Success")
    })
    .catch((err)=>{
        res.send(err)
    })
})



router.get('/payment-ar',(req,res)=>{
    res.render('payment-ar',{
        key:PUBLISHABLE_KEY
    })
})

router.post('/payment-ar', (req,res)=>{
    stripe.customers.create({
        email:req.body.stripeEmail,
        source:req.body.stripeToken,
        address:{
            line1:'23 Moutain Valley New Delhi',
            postal_code: '110092',
            city:'New Delhi',
            state:'Delhi',
            country:'India'
        }
    })
    .then((customer) =>{
        return stripe.charges.create({
            amount:7000,
            description:'Web Development Product',
            currency:'USD',
            customer:customer.id
        })
    })
    .then((charge)=>{
        console.log(charge)
        res.send("Success")
    })
    .catch((err)=>{
        res.send(err)
    })
})



//
// Stripe Payment API SummerPayment

router.get('/summerpayment-en',(req,res)=>{
    res.render('summerpayment-en',{
        key:PUBLISHABLE_KEY
    })
})

router.post('/summerpayment-en', (req,res)=>{
    stripe.customers.create({
        email:req.body.stripeEmail,
        source:req.body.stripeToken,
        address:{
            line1:'23 Moutain Valley New Delhi',
            postal_code: '110092',
            city:'New Delhi',
            state:'Delhi',
            country:'India'
        }
    })
    .then((customer) =>{
        return stripe.charges.create({
            amount:7000,
            description:'Web Development Product',
            currency:'USD',
            customer:customer.id
        })
    })
    .then((charge)=>{
        console.log(charge)
        res.send("Success")
    })
    .catch((err)=>{
        res.send(err)
    })
})



router.get('/summerpayment-ar',(req,res)=>{
    res.render('summerpayment-ar',{
        key:PUBLISHABLE_KEY
    })
})

router.post('/summerpayment-ar', (req,res)=>{
    stripe.customers.create({
        email:req.body.stripeEmail,
        source:req.body.stripeToken,
        address:{
            line1:'23 Moutain Valley New Delhi',
            postal_code: '110092',
            city:'New Delhi',
            state:'Delhi',
            country:'India'
        }
    })
    .then((customer) =>{
        return stripe.charges.create({
            amount:7000,
            description:'Web Development Product',
            currency:'USD',
            customer:customer.id
        })
    })
    .then((charge)=>{
        console.log(charge)
        res.send("Success")
    })
    .catch((err)=>{
        res.send(err)
    })
})



//


module.exports=router;