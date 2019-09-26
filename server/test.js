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

router.use('/test/addMember', function (req, res) {
  let sql  ="INSERT INTO member_info ( name, gender, nation, major, grade, tel, email, wechat, exp_num, more, idx, user_id) VALUES(?,?,?,?,?,?,?,?,?,?,?,?);";
  let sqlParams = [
    req.body.name,
    req.body.gender,
    req.body.nation,
    req.body.major,
    req.body.grade,
    req.body.phone,
    req.body.mail,
    req.body.wechat,
    req.body.expNum,
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

router.use('/test/updateMember', function (req, res) {
  let sql  ="UPDATE member_info name=?, gender=?, nation=?, major=?, grade=?, tel=?, email=?, wechat=?, exp_num=?, more=? WHERE idx=? and user_id=?;";
  let sqlParams = [
    req.body.name,
    req.body.gender,
    req.body.nation,
    req.body.major,
    req.body.grade,
    req.body.phone,
    req.body.mail,
    req.body.wechat,
    req.body.expNum,
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
  let sql = "SELECT * from signup_info WHERE user_id="+req.body.userId;
  let upd_sql ="UPDATE signup_info SET school_name=?, leader_name=?, present_num=?, unsc_num=?, mpc_num=?, submit_time=? WHERE user_id=?;";
  let ins_sql  ="INSERT INTO signup_info (school_name, leader_name, present_num, unsc_num, mpc_num, submit_time,user_id) VALUES(?,?,?,?,?,?,?);";
  let sqlParams = [
    req.body.schoolName,
    req.body.leaderName,
    req.body.presentNum,
    req.body.unscNum,
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
  let sql = "SELECT * from signup_info WHERE user_id="+req.body.userId;
  let upd_sql ="UPDATE signup_info SET school_name=?, leader_name=?, present_num=?, unsc_num=?, mpc_num=?, submit_time=? WHERE user_id=?;";
  let ins_sql  ="INSERT INTO signup_info (school_name, leader_name, present_num, unsc_num, mpc_num, submit_time,user_id) VALUES(?,?,?,?,?,?,?);";
  let sqlParams = [
    req.body.schoolName,
    req.body.leaderName,
    req.body.presentNum,
    req.body.unscNum,
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
  let sql = "SELECT user_email, password FROM log_info";
  query(sql, [req.body.email, req.body.password], function(err, result){
    if(err){
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
/*删除*/
router.use('/test/delete', function (req, res) {
  let delSql = 'DELETE FROM user_info where id='+req.body.id;
  query(delSql,null, function(err, rows, fields) {
    if(err){
      res.json({
        ok:false,
        message:'删除失败！',
        error:err
      })
    }else{
      res.json({
        ok:true,
        message:'删除成功！'
      })
    }
    res.end();
  })
});
/*编辑*/
router.use('/test/edit', function (req, res) {
  let editSql = 'UPDATE user_info SET name=?,country=?,date=?,score=? WHERE id ='+req.body.id;
  let editSqlParams = [
    req.body.name,
    req.body.country,
    req.body.date,
    req.body.score
  ];
  query(editSql,editSqlParams,function (err,result) {
    if(err){
      res.json({
        ok:false,
        message:'修改失败！'
      })
    }else{
      res.json({
        ok:true,
        message:'修改成功！'
      })
    }
    res.end();
  })
});
/*查询*/
router.use('/test/query', function (req, res) {
  let pageNumber = req.body.pageNumber;
  let pageSize = req.body.pageSize;
  let start = (pageNumber-1)*pageSize;
  let end = pageNumber*pageSize;
  // let sql = "SELECT * FROM user_info ORDER BY score DESC LIMIT "+start+","+end;
  let sql = "SELECT * FROM user_info ORDER BY score DESC";
  let countSql = "SELECT COUNT(id) FROM user_info";
  console.log(sql);
  const promise = new Promise(function(resolve, reject) {
    query(countSql,null,function (err, rows, fields) {
      resolve(rows);
    })
  }).then((count)=>{
    query(sql,null, function(err, rows, fields) {
      if(err){
        res.json({
          ok:false,
          message:'查询失败！',
          info:err
        })
      }else{
        res.json({
          ok:true,
          message:'查询成功！',
          info:rows,
          total:count[0]["COUNT(id)"]
        })
      }
      res.end();
    });
  })



});


/*将路由模块输出*/
module.exports = router;
