const User = require("../models/user.js");

module.exports.renderSignupform = (req,res)=>{
    res.render("users/signup.ejs");
};
module.exports.signup =  async(req,res)=>{
    try{
        let{username ,Email , password}= req.body;
    const newUser = new User({Email,username});
    const registeredUser = await User.register(newUser,password);
    console.log(registeredUser);
    req.login(registeredUser,(err)=>{
        if(err){
            return next(err);
        }
        req.flash("success", "welcome to Wanderlust");
        return res.redirect("/listings");
    })
    
    }catch(err){
        req.flash( "error",err.message);
        res.redirect("/signup")
    }
        
}

module.exports.renderloginform = (req,res)=>{
    res.render("users/login.ejs");
}
module.exports.login =  async(req,res)=>{
     req.flash("success", "welcome back to Wanderlust");
     let redirectUrl = res.locals.redirectUrl || "/listings";
      res.redirect(redirectUrl);
}
module.exports.logout = (req,res)=>{
    req.logout((err)=>{
        if(err){
            next(err);
        }
        req.flash("success","you are logout");
        res.redirect("/listings");
    })
}