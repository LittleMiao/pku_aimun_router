const express = require("express");
//定义路由级中间件
const router = express.Router();
//引入数据库连接池
const query=require("./db/db");

/*
 * 增删改查服务路由
 * */
/*新增*/
router.use('/test/addUser', function (req, res) {
  let sql  ="INSERT INTO log_info (user_email, password, school_name, leader_name, is_pku, position) VALUES(?,?,?,?,?,?);";
  let sqlParams = [
    req.body.email,
    req.body.password,
    req.body.schoolName,
    req.body.leaderName,
    req.body.isPKU,
    req.body.position,
  ];
  query(sql,sqlParams,function (err,result) {
    if(err){
      res.json({
        ok:false,
        message:'注册失败！',
        info: err
      })
      console.log(err)
    }else{
      res.json({
        ok:true,
        id:result.insertId,
        message:'注册成功！',
      })
    }
    res.end();
  })
});

router.use('/test/queryExp', function(req, res){
  let sql = "SELECT * from exp_info WHERE present_id=?";
  let sqlParams=[
     req.body.present_id
  ]
  query(sql,sqlParams,function (err,result) {
    if(err){
      res.json({
        ok:false,
        info: err
      })
      console.log(err)
    }else{
      res.json({
        ok:true,
        id:result.insertId,
        info: result,
      })
      console.log(result)
    }
    res.end();
  })
});
router.use('/test/addExp', function(req, res){
  let sql  ="INSERT INTO exp_info ( present_id, exp_id, conf_name, conf_year, conf_role, is_award, award_name) VALUES(?,?,?,?,?,?,?);";
  console.log(req.body);
  let sqlParams = [
    req.body.present_id,
    req.body.exp_id,
    req.body.conf_name,
    req.body.conf_year,
    req.body.conf_role,
    req.body.is_award,
    req.body.award_name,
  ];
  query(sql,sqlParams,function (err,result) {
    if(err){
      res.json({
        ok:false,
        message:'添加失败！',
        info: err
      })
      console.log(err)
    }else{
      res.json({
        ok:true,
        id:result.insertId,
        message:'添加成功！',
      })
      console.log("addExp:", sqlParams)
    }
    res.end();
  })
});
router.use('/test/updateExp', function(req, res){
  // let sql  ="INSERT INTO exp_info ( present_id, exp_id, conf_name, conf_year, conf_role, is_award, award_name) VALUES(?,?,?,?,?,?,?);";
  console.log(req.body);
  let sql  ="UPDATE exp_info SET conf_name=?, conf_year=?, conf_role=?, is_award=?, award_name=? WHERE present_id=? and exp_id=?;";

  let sqlParams = [

    req.body.conf_name,
    req.body.conf_year,
    req.body.conf_role,
    req.body.is_award,
    req.body.award_name,
    req.body.present_id,
    req.body.exp_id,
  ];
  query(sql,sqlParams,function (err,result) {
    if(err){
      res.json({
        ok:false,
        message:'更新失败！',
        info: err
      })
      console.log(err)
    }else{
      res.json({
        ok:true,
        id:result.insertId,
        message:'更新成功！',
      })
      console.log("updateExp:", sqlParams)
    }
    res.end();
  })
});

router.use('/test/addMember', function (req, res) {
  let sql  ="INSERT INTO member_info ( name, gender, nation, major, grade, tel, email, wechat, hasExp, more, idx, user_id) VALUES(?,?,?,?,?,?,?,?,?,?,?,?);";
  let sqlParams = [
    req.body.name,
    req.body.gender,
    req.body.nation,
    req.body.major,
    req.body.grade,
    req.body.phone,
    req.body.mail,
    req.body.wechat,
    req.body.hasExp,
    req.body.moreinfo,
    req.body.idx,
    req.body.userId,
  ];
  query(sql,sqlParams,function (err,result) {
    if(err){
      res.json({
        ok:false,
        message:'添加失败！',
        info: err
      })
      console.log(err)
    }else{
      res.json({
        ok:true,
        id:result.insertId,
        message:'添加成功！',
      })
      console.log("addMember:",result)
    }
    res.end();
  })
});
router.use('/test/updateMember', function (req, res) {
  let sql  ="UPDATE member_info SET name=?, gender=?, nation=?, major=?, grade=?, tel=?, email=?, wechat=?, hasExp=?, more=? WHERE idx=? and user_id=?;";
  let sqlParams = [
    req.body.name,
    req.body.gender,
    req.body.nation,
    req.body.major,
    req.body.grade,
    req.body.phone,
    req.body.mail,
    req.body.wechat,
    req.body.hasExp,
    req.body.moreinfo,
    req.body.idx,
    req.body.userId,
  ];
  query(sql,sqlParams,function (err,result) {
    if(err){
      res.json({
        ok:false,
        message:'添加失败！',
        info: err
      })
      console.log(err)
    }else{
      res.json({
        ok:true,
        id:result.insertId,
        message:'添加成功！',
      })
      console.log("success!")
    }
    res.end();
  })
});
router.use('/test/queryMember', function (req, res) {
  let sql = "SELECT * from member_info WHERE user_id=? AND idx=?";
  let sqlParams=[
    req.body.userId,
    req.body.idx
  ]
  query(sql,sqlParams,function (err,result) {
    if(err){
      res.json({
        ok:false,
        info: err
      })
      console.log(err)
    }else{
      res.json({
        ok:true,
        id:result.insertId,
        info: result[0],
      })
      console.log("success!")
    }
    res.end();
  })
});

router.use('/test/signup', function (req, res) {
  let ins_sql  ="INSERT INTO signup_info (school_name, leader_name, present_num, unsc_num, unga4_num, unga1_num, unga2_num, inter5g_num, mpc_num, submit_time,user_id) VALUES(?,?,?,?,?,?,?,?,?,?,?);";
  let sqlParams = [
    req.body.schoolName,
    req.body.leaderName,
    req.body.presentNum,
    req.body.unscNum,
    req.body.unga4Num,
    req.body.unga1Num,
    req.body.unga2Num,
    req.body.inter5gNum,
    req.body.mpcNum,
    req.body.submitTime,
    req.body.userId,
  ];
  query(ins_sql,sqlParams,function (err,result) {
    if(err){
      res.json({
        ok:false,
        message:'提交失败！',
        info: err
      })
      console.log(err)
    }else{
      res.json({
        ok:true,
        id:result.insertId,
        message:'提交成功！',
      })
      console.log("success!")
    }
    res.end();
  })
});
router.use('/test/update', function (req, res) {
  let upd_sql ="UPDATE signup_info SET school_name=?, leader_name=?, present_num=?, unsc_num=?, unga4_num=?,unga1_num=?,unga2_num=?,inter5g_num=?,mpc_num=?, submit_time=? WHERE user_id=?;";

  let sqlParams = [
    req.body.schoolName,
    req.body.leaderName,
    req.body.presentNum,
    req.body.unscNum,
    req.body.unga4Num,
    req.body.unga1Num,
    req.body.unga2Num,
    req.body.inter5gNum,
    req.body.mpcNum,
    req.body.submitTime,
    req.body.userId,
  ];
  query(upd_sql,sqlParams,function (err,result) {
    if(err){
      res.json({
        ok:false,
        message:'更新失败！',
        info: err
      })
      console.log(err)
    }else{
      res.json({
        ok:true,
        id:result.insertId,
        message:'更新成功！',
      })
      console.log("success!")
    }
    res.end();
  })
});
router.use('/test/query_signup', function (req, res) {
  let sql = "SELECT * from signup_info WHERE user_id="+req.body.userId;
  query(sql,null,function (err,result) {
    if(err){
      res.json({
        ok:false,
        info: err
      })
      console.log(err)
    }else{
      res.json({
        ok:true,
        id:result.insertId,
        info: result[0],
      })
      console.log("success!")
    }
    res.end();
  })
});

router.use('/test/query_personal', function (req, res) {
  let sql = "SELECT * from log_info WHERE user_id="+req.body.userId;
  // let sql = "SELECT * from log_info WHERE user_id=22";
  query(sql,null,function (err,result) {
    if(err){
      res.json({
        ok:false,
        info: err
      })
      console.log(err)
    }else{
      res.json({
        ok:true,
        id:result.insertId,
        info: result[0],
      })
      console.log("success!")
    }
    res.end();
  })
});
/*登录*/
router.use('/test/login',function(req, res){
  // console.log(req.body);
  let sql = "SELECT user_email, password FROM log_info WHERE user_email = ? AND password = ?";
  query(sql, [req.body.email, req.body.password], function(err, result){
    console.log(result)
    if(err ||result.length === 0){
      res.json({
        ok:false,
        message:'登录失败！',
        error:err
      })
      console.log(err)
    }else{
      res.json({
        ok:true,
        message:'登录成功！'
      })
    }
    res.end();
  })
});

router.use('/test/getUid',function(req,res) {
  let sql="SELECT user_id FROM log_info WHERE user_email=?";
  query(sql,[req.body.email], function(err,result){
    if(err){
      res.json({
        ok:false,
        error:err
      })
      console.log(err)
    }else{
      res.json({
        ok:true,
        info: result[0]["user_id"],
      })
    }
    res.end();
  })
})

router.use('/test/userInfo',function(req,res){
  let sql = "SELECT * FROM log_info "
  query(sql,null, function(err,result){
    if(err){
      res.json({
        ok:false,
        error:err
      })
      console.log(err)
    }else{
      res.json({
        ok:true,
        info: result,
      })
    }
    res.end();
  })
})

router.use('/test/signupInfo',function(req,res){
  let sql = "SELECT * FROM signup_info "
  query(sql,null, function(err,result){
    if(err){
      res.json({
        ok:false,
        error:err
      })
      console.log(err)
    }else{
      res.json({
        ok:true,
        info: result,
      })
    }
    res.end();
  })
})

router.use('/test/memberInfo',function(req,res){
  let sql = "SELECT * FROM member_info "
  query(sql,null, function(err,result){
    if(err){
      res.json({
        ok:false,
        error:err
      })
      console.log(err)
    }else{
      res.json({
        ok:true,
        info: result,
      })
    }
    res.end();
  })
})

router.use('/test/expInfo',function(req,res){
  let sql = "SELECT * FROM exp_info "
  query(sql,null, function(err,result){
    if(err){
      res.json({
        ok:false,
        error:err
      })
      console.log(err)
    }else{
      res.json({
        ok:true,
        info: result,
      })
    }
    res.end();
  })
})
router.use('/test/condInfo',function(req,res){
  let sql = "SELECT * FROM cond_info "
  query(sql,null, function(err,result){
    if(err){
      res.json({
        ok:false,
        error:err
      })
      console.log(err)
    }else{
      res.json({
        ok:true,
        info: result,
      })
    }
    res.end();
  })
})

router.use('/test/initCond',function(req,res){
  let sql  ="INSERT INTO cond_info (user_id, register, signup, committee, fee) VALUES(?,0,0,0,0);";
  let sqlParams=[
    req.body.user_id
  ]
  query(sql,sqlParams,function (err,result) {
    if(err){
      res.json({
        ok:false,
        info: err
      })
      console.log(err)
    }else{
      res.json({
        ok:true,
        id:result.insertId,
        info: result,
      })
      console.log(result)
    }
    res.end();
  })
})
router.use('/test/queryCond', function(req, res){
  let sql = "SELECT * from cond_info WHERE user_id=?";
  let sqlParams=[
     req.body.userId
  ]
  query(sql,sqlParams,function (err,result) {
    if(err){
      res.json({
        ok:false,
        info: err
      })
      console.log(err)
    }else{
      res.json({
        ok:true,
        id:result.insertId,
        info: result[0],
      })
      console.log(result)
    }
    res.end();
  })
});
router.use('/test/getSignup', function (req, res) {
  let upd_sql ="UPDATE cond_info SET signup=1 WHERE user_id=?;";

  let sqlParams = [
    req.body.userId,
  ];
  query(upd_sql,sqlParams,function (err,result) {
    if(err){
      res.json({
        ok:false,
        info: err
      })
      console.log(err)
    }else{
      res.json({
        ok:true,
        id:result.insertId,
      })
      console.log("success!")
    }
    res.end();
  })
});
router.use('/test/updateReg', function (req, res) {
  let upd_sql ="UPDATE cond_info SET register=1 WHERE user_id=?;";

  let sqlParams = [
    req.body.userId,
  ];
  query(upd_sql,sqlParams,function (err,result) {
    if(err){
      res.json({
        ok:false,
        info: err
      })
      console.log(err)
    }else{
      res.json({
        ok:true,
        id:result.insertId,
      })
      console.log("success!")
    }
    res.end();
  })
});

router.use('/test/queryDistr', function(req, res){
  let sql = "SELECT * from distri_info WHERE user_id=?";
  // let sql = "SELECT * from distri_info";
  let sqlParams=[
     req.body.userId
  ]
  query(sql,sqlParams,function (err,result) {
    if(err){
      res.json({
        ok:false,
        info: err
      })
      console.log(err)
    }else{
      res.json({
        ok:true,
        id:result.insertId,
        info: result[0],
      })
      console.log(result)
    }
    res.end();
  })
});
router.use('/test/queryDisName', function(req, res){
  let sql = "SELECT * from distri_name WHERE user_id=?";
  // let sql = "SELECT * from distri_info";
  let sqlParams=[
     req.body.userId
  ]
  query(sql,sqlParams,function (err,result) {
    if(err){
      res.json({
        ok:false,
        info: err
      })
      console.log(err)
    }else{
      res.json({
        ok:true,
        id:result.insertId,
        info: result,
      })
      console.log(result)
    }
    res.end();
  })
});
router.use('/test/addDistr', function(req, res){
  let sql = "INSERT INTO distri_name (user_id, unsc_name, unga4_name, unga1_name, unga2_name, inter5g_name, mpc_name) VALUES(?,?,?,?,?,?,?);";
  // let sql = "SELECT * from distri_info";
  console.log(req.body)
  let sqlParams=[
     req.body.userId,
     req.body.unscName, 
     req.body.unga4Name, 
     req.body.unga1Name, 
     req.body.unga2Name, 
     req.body.inter5gName, 
     req.body.mpcName
  ]
  query(sql,sqlParams,function (err,result) {
    if(err){
      res.json({
        ok:false,
        info: err
      })
      console.log(err)
    }else{
      res.json({
        ok:true,
        id:result.insertId,
      })
      console.log(result)
    }
    res.end();
  })
});
router.use('/test/updateDistr', function (req, res) {
  let upd_sql ="UPDATE distri_name SET unsc_name=?, unga4_name=?, unga1_name=?, unga2_name=?, inter5g_name=?, mpc_name=? WHERE user_id=?;";

  let sqlParams = [
    req.body.unscName, 
    req.body.unga4Name, 
    req.body.unga1Name, 
    req.body.unga2Name, 
    req.body.inter5gName, 
    req.body.mpcName,
    req.body.userId,
  ];
  query(upd_sql,sqlParams,function (err,result) {
    if(err){
      res.json({
        ok:false,
        info: err
      })
      console.log(err)
    }else{
      res.json({
        ok:true,
        id:result.insertId,
      })
      console.log("success!")
    }
    res.end();
  })
});
/*将路由模块输出*/
module.exports = router;
