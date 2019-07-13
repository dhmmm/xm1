var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var result=[];//存储请求传来的数据
router.get("/zhuce",function(req,res,next){
  if(result.length>=1){
    result.forEach((item)=>{
      if(item.name===req.query.name){
        res.send({status:0});//该用户已注册，请登录
        return;
      }
    })
  }else{
    result.push(req.query);
    res.send({status:1}); //已注册成功
  }
});

router.get("/denglu",function(req,res,next){
  if(result.length===0){
    res.send({status:0}) //未注册
    return;
  }
  result.forEach((item)=>{
    if(item.name===req.query.name){
      if(item.pass===req.query.pass){

          res.send({status:2});//登陆成功
          return;
      }

      res.send({status:1});//登录失败
      return;
    }else{
      // console.log("名字不等")
      res.send({status:0});
      return;
    }
  })
});
module.exports = router;
