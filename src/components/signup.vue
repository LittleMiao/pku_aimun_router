<template>
  <div class="signup-page">
    <headbar />
    <div class="signup-body">
      <div class="main-title">报名</div>
      <div class="main-hint">
        <div>请大家务必在报名之前仔细阅读报名注册须知。</div>
        <div>如有查询，请联系AIMUN 2020代表联系总监陈宣伊、邱敬甯、张玉琢。</div>
      </div>
      <div class="main-content" v-if="stage===0">
        <a class="infomation signup-btn"  href="">报名须知</a>
        <div class="signup-btn" 
        :class="userId ? null : 'disabled'"
        @click="userId && nextPage()">
          <div v-if="!signup">开始报名</div>
          <div v-else>修改信息</div>
        </div>
      </div>
      <div class="main-content" v-else-if="stage===1">
        <div class="sub-title">第一部分：基本信息录入</div>
        <div class="info-form">
          <el-form labelWidth="200px" label-position="left" :model="firstStage" :disabled="pathinfo==='person'" :rules="rule1">
            <div class="list-form">
              <div class="list-num">1. </div>
              <el-form-item :label="'学校名称 \n Name of School'" prop="schoolName">
                <el-input size="medium" type="text" v-model="firstStage.schoolName" placeholder="" clearable></el-input>
              </el-form-item>
            </div>
            <div class="list-form">
              <div class="list-num">2.</div>
              <el-form-item v-bind:label="'领队名称 \n Name of the Leader'" prop="leaderName">
                <el-input size="medium" type="text" v-model="firstStage.leaderName" placeholder="" clearable></el-input>
              </el-form-item>
            </div>
          </el-form>
        </div>
        <div class="signup-btn" 
        :class="firstStage.schoolName==='' || firstStage.leaderName===''?  'disabled' : null"
        @click="nextPage">下一页</div>
      </div>
      <div class="main-content" v-else-if="stage===2">
        <div class="sub-title">代表个人信息</div>
        <div class="info-form">
          <el-form labelWidth="200px" label-position="left" :disabled="pathinfo==='person'" :model="secondStage[addNum]" :rules="rule2">
            <div class="list-form">
              <div class="list-num">1. </div>
              <el-form-item :label="'姓名\n Name'" prop="personName">
                <el-input size="medium" type="text" v-model="secondStage[addNum].personName" placeholder="" clearable></el-input>
              </el-form-item>
            </div>
            <div class="list-form">
              <div class="list-num">2.</div>
              <el-form-item :label="'性别\n Gender'" prop="gender">
                <el-radio v-model="secondStage[addNum].gender" label="male" >男</el-radio>
                <el-radio v-model="secondStage[addNum].gender" label="female" >女</el-radio>
              </el-form-item>
            </div>
            <div class="list-form">
              <div class="list-num">3.</div>
              <el-form-item :label="'国籍\n Nationalty'" prop="nation">
                <el-input size="medium" type="text" v-model="secondStage[addNum].nation" placeholder="" clearable></el-input>
              </el-form-item>
            </div>
            <div class="list-form">
              <div class="list-num">4.</div>
              <el-form-item :label="'专业\n Major'" prop="major">
                <el-input size="medium" type="text" v-model="secondStage[addNum].major" placeholder="" clearable></el-input>
              </el-form-item>
            </div>
            <div class="list-form">
              <div class="list-num">5.</div>
              <el-form-item :label="'年级\n Grade'" prop="grade">
                <el-radio v-model="secondStage[addNum].grade" label="2016级及以上本科生" >2016级及以上本科生</el-radio>
                <el-radio v-model="secondStage[addNum].grade" label="2017级本科生" >2017级本科生 </el-radio>
                <el-radio v-model="secondStage[addNum].grade" label="2018级本科生" >2018级本科生 </el-radio>
                <el-radio v-model="secondStage[addNum].grade" label="2019级本科生" >2019级本科生 </el-radio>
                <el-radio v-model="secondStage[addNum].grade" label="硕士研究生/博士研究生" >硕士研究生/博士研究生 </el-radio>
              </el-form-item>
            </div>
            <div class="list-form">
              <div class="list-num">6.</div>
              <el-form-item :label="'电话\n Tel'" prop="phone">
                <el-input size="medium" type="text" v-model="secondStage[addNum].phone" placeholder="" clearable></el-input>
              </el-form-item>
            </div>
            <div class="list-form">
              <div class="list-num">7.</div>
              <el-form-item :label="'邮箱\n Email'" prop="mail">
                <el-input size="medium" type="text" v-model="secondStage[addNum].mail" placeholder="" clearable></el-input>
              </el-form-item>
            </div>
            <div class="list-form">
              <div class="list-num">8.</div>
              <el-form-item :label="'微信号\n Wechat'" prop="wechat">
                <el-input size="medium" type="text" v-model="secondStage[addNum].wechat" placeholder="" clearable></el-input>
              </el-form-item>
            </div>
            <div class="list-form">
              <div class="list-num">9.</div>
              <el-form-item class="title" :label="'该代表是否有模联参会经历? \n 如有，请写明会议名称、参会时间及身份。\n Experience in MUN'" >
                <el-radio class="choose" v-model="secondStage[addNum].hasExp" :label="1" >是</el-radio>
                <div v-if="secondStage[addNum].hasExp">
                <div class="exp-detail" v-for="(exp, index) in secondStage[addNum].experience" :key="index">
                  <el-form  :inline="true" :model="exp" class="demo-form-inline" >
                    <el-form-item :label="'参会年份\n Year'">
                      <el-input v-model="exp.year" placeholder=""></el-input>
                    </el-form-item>
                    <el-form-item :label="'大会名称\n Conference Name'">
                      <el-input v-model="exp.confName" placeholder=""></el-input>
                    </el-form-item>
                    <el-form-item :label="'担任角色\n Role'">
                      <el-select v-model="exp.role" placeholder="担任角色">
                        <el-option label="Delegate" value="Delegate"></el-option>
                        <el-option label="Chair/Dais Head" value="Chair"></el-option>
                        <el-option label="Dais Member" value="Dais Member"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-form>
                  <el-form class="prize" :inline="true" :model="exp" v-if="exp.role==='Delegate'" >
                    <el-form-item :label="'是否获奖 \n Has won prize'" >
                      <el-radio v-model="exp.is_award" :label="1" >是</el-radio>
                      <el-radio v-model="exp.is_award" :label="0" >否</el-radio>
                    </el-form-item>
                    <el-form-item :label="'所获奖项 \n Type of prize'" v-if="exp.is_award" >
                      <el-radio v-model="exp.award_name" label="BD" >BD</el-radio>
                      <el-radio v-model="exp.award_name" label="OD" >OD</el-radio>
                      <el-radio v-model="exp.award_name" label="HM" >HM</el-radio>
                      <el-radio v-model="exp.award_name" label="others">
                        <el-form-item :label="'其他\n Others'" :disabled="exp.award_name!=='others'">
                          <el-input v-model="exp.award_other" placeholder="请填写"></el-input>
                        </el-form-item>
                      </el-radio>
                    </el-form-item>
                  </el-form>
                </div>
                </div>
                <el-radio class="choose" v-model="secondStage[addNum].hasExp" :label="0" >否 </el-radio>
              </el-form-item>
              <!-- <el-form :inline="true" :model="secondStage[addNum].prize" v-if="secondStage[addNum].experience.role==='Delegate'" >
                <el-form-item label="是否获奖" >
                  <el-radio v-model="secondStage[addNum].is_award" :label="true" >是</el-radio>
                  <el-radio v-model="secondStage[addNum].is_award" :label="false" >否</el-radio>
                </el-form-item>
                <el-form-item label="所获奖项" v-if="secondStage[addNum].is_award" >
                  <el-radio v-model="secondStage[addNum].award_name" label="BD" >BD</el-radio>
                  <el-radio v-model="secondStage[addNum].award_name" label="OD" >OD</el-radio>
                  <el-radio v-model="secondStage[addNum].award_name" label="HM" >HM</el-radio>
                  <el-radio v-model="secondStage[addNum].award_name" label="others">
                    <el-form-item label="其他" :disabled="secondStage[addNum].award_name!=='others'">
                      <el-input v-model="secondStage[addNum].prize.others" placeholder="请填写"></el-input>
                    </el-form-item>
                  </el-radio>
                </el-form-item>
              </el-form> -->
            </div>
            <div class="list-form">
              <div class="list-num">10.</div>
              <el-form-item :label="'备注\n More'" >
                <div class="need" >
                  <el-input size="medium" type="text" v-model="secondStage[addNum].moreinfo" placeholder="" clearable></el-input>
                  <div class="need-hint">如果该代表有饮食如清真餐等方面的特别需求，请在此注明</div>
                </div>
              </el-form-item>
            </div>
          </el-form>
        </div>
        <div class="btns">
          <div class="signup-btn" 
          :class="secondStage[addNum].personName === '' || secondStage[addNum].nation === '' || secondStage[addNum].major === '' || secondStage[addNum].phone === '' || secondStage[addNum].mail === '' ? 'disabled' : null"  
          @click="nextMember" v-if="addNum+1 < presentNum">查看下一个</div>
          <div class="signup-btn" 
          :class="secondStage[addNum].personName === '' || secondStage[addNum].nation === '' || secondStage[addNum].major === '' || secondStage[addNum].phone === '' || secondStage[addNum].mail === '' ? 'disabled' : null"  
          @click="submitPerson">添加下一位</div>
          <div class="signup-btn" 
          :class="secondStage[addNum].personName === '' || secondStage[addNum].nation === '' || secondStage[addNum].major === '' || secondStage[addNum].phone === '' || secondStage[addNum].mail === '' ? 'disabled' : null"  
          @click="nextPage">下一页</div>
        </div>
      </div>
      <div class="main-content" v-else-if="stage===3">
        <div class="sub-title">第二部分：参会意愿统计</div>
        <div class="notice">（领队们请注意，各委员会申请人数总和必须与所提交的代表资料数量一致。因此，这里是填写贵校在一个委员会申请多少个代表数量，而非席位数量。例：前面部分共递交了4位代表的资料，现阶段可以填写SC 2位；GA-2 1位；MPC 1位；其余0位。）</div>
        <div class="will-form">
        <el-form :disabled="pathinfo==='person'">
          <el-form-item class="will-list" :label="pos" v-for="(pos,index) in thirdStage.label" :key="pos">
            <el-select v-model="thirdStage.selectNum[index]" placeholder="0" @change="updateAva(index)">
              <el-option :label="0" :value="0" ></el-option>
              <el-option :label="i" :value="i" v-for="i in thirdStage.availNum[index]" :key="i"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div class="signup-btn" @click="submitAll">完成</div>
        </div>
      </div>
      <div class="main-content" v-else-if="stage===4">
        <div>您已成功提交报名信息，请等待确认。</div>
        <div class="signup-btn" @click="gotoHome">关闭此页面</div>
      </div>
    </div>
  </div>
</template>

<script>
import headbar from '../assets/components/common/headbar'

export default {
  components:{headbar},
  data(){
    return{
      pathinfo: this.$route.query.from,
      userId: Number(this.$cookies.get("userId")),
      stage: 0,
      addNum: 0,
      signup: false,
      curNum: 0,
      presentNum:0,

      firstStage:{
        schoolName: '',
        leaderName: '',
      },
      secondStage:[{
        personName: '',
        gender: 'male',
        nation: '',
        major: '',
        grade: '2016级及以上本科生',
        phone: '',
        mail: '',
        wechat: '',
        moreinfo: '',
        hasExp: 0,
        experience:[{

          year: '',
          confName: '',
          role: '',
          is_award: 0,
          award_name: '',
          award_other: ''
        }]
      }],
      thirdStage:{
        availNum: [0,0,0,0,0, 0],
        selectNum: [0,0,0,0,0, 0],
        label: ['UNSC: 		Nuclear','UNGA-4: 	Peacekeeping','UNGA-1:	PMSC','UNGA-2: 	Financing Strategies','国际电信联盟：5G技术','MPC']
      },
      rule1:{
        schoolName: [{required: true, message:'学校不能为空', trigger: 'blur'}],
        leaderName: [{required: true, message:'领队姓名不能为空', trigger: 'blur'}],  
      },
      rule2:{
        personName: [{required: true, message:'代表姓名不能为空', trigger: 'blur'}],
        nation:[{required: true, message:'国籍不能为空', trigger: 'blur'}],
        major:[{required: true, message:'专业不能为空', trigger: 'blur'}],
        phone:[{required: true, message:'电话号码不能为空', trigger: 'blur'}],
        mail:[{required: true, message:'邮箱不能为空', trigger: 'blur'}],
      }
    }
  },
  methods:{
    nextPage(){
      if(this.stage === 0 && this.userId !== null)
      {
        this.stage = 1;
      }
      else if(this.stage === 1 && this.firstStage.schoolName !== '' && this.firstStage.leaderName!=='')
      {
        this.stage = 2;
      }
      else if(this.stage === 2 && this.secondStage[this.addNum].personName !== '' && this.secondStage[this.addNum].nation !== '' 
      && this.secondStage[this.addNum].major !== '' && this.secondStage[this.addNum].phone !== '' && this.secondStage[this.addNum].mail !== '' )
      {    
        this.$ajax.post('/test/queryMember',{
          userId:this.userId,
          idx: this.addNum
        }).then(data =>{
          // console.log("query:",data);
          if(data.data.info){
            console.log("updateMember!")
            this.$ajax.post('/test/updateMember',{
              userId: this.userId,
              name: this.secondStage[this.addNum].personName,
              gender: this.secondStage[this.addNum].gender,
              nation: this.secondStage[this.addNum].nation,
              major: this.secondStage[this.addNum].major,
              grade: this.secondStage[this.addNum].grade,
              phone: this.secondStage[this.addNum].phone,
              mail: this.secondStage[this.addNum].mail,
              wechat: this.secondStage[this.addNum].wechat,
              moreinfo: this.secondStage[this.addNum].moreinfo,
              hasExp: this.secondStage[this.addNum].hasExp,
              idx: this.addNum
            }).then(success =>{
              // console.log("suc:", success);
              this.curNum = success.data.id;
              // console.log("sec:", this.secondStage[this.addNum])
              for(let i = 0; i< this.secondStage[this.addNum].experience.length;i++){
                let term = this.secondStage[this.addNum].experience[i];
                // console.log("EXP:", term);

                let a_name = term.award_name;
                if( term.award_name == "other"){
                  a_name = term.award_other;
                }
                this.$ajax.post('/test/updateExp',{
                  present_id: this.curNum,
                  exp_id: i+1,
                  conf_name: term.confName,
                  conf_year: term.year,
                  conf_role: term.role,
                  is_award: term.is_award,
                  award_name: a_name
                })
              }
            })
          }
          else{
            console.log("addMember!")
            this.$ajax.post('/test/addMember',{
              userId: this.userId,
              name: this.secondStage[this.addNum].personName,
              gender: this.secondStage[this.addNum].gender,
              nation: this.secondStage[this.addNum].nation,
              major: this.secondStage[this.addNum].major,
              grade: this.secondStage[this.addNum].grade,
              phone: this.secondStage[this.addNum].phone,
              mail: this.secondStage[this.addNum].mail,
              wechat: this.secondStage[this.addNum].wechat,
              hasExp: this.secondStage[this.addNum].hasExp,
              moreinfo: this.secondStage[this.addNum].moreinfo,
              idx: this.addNum
            }).then(success =>{
              console.log("suc:", success);
              this.curNum = success.data.id;
              // console.log("sec:", this.secondStage[this.addNum])
              if(this.secondStage[this.addNum].hasExp === 1){
                for(let i = 0; i< this.secondStage[this.addNum].experience.length;i++){
                  let term = this.secondStage[this.addNum].experience[i];
                  // console.log("EXP:", term);
                  let a_name = term.award_name;
                  if( term.award_name == "other"){
                    a_name = term.award_other;
                  }
                  this.$ajax.post('/test/addExp',{
                    present_id: this.curNum,
                    exp_id: i+1,
                    conf_name: term.confName,
                    conf_year: term.year,
                    conf_role: term.role,
                    is_award: term.is_award,
                    award_name: a_name
                  })
        
                }
              }
              this.presentNum = this.presentNum+1;
              console.log("add presentNum")
            })

            console.log(this.curNum);
          }
        })
        console.log(this.presentNum, this.addNum)
        setTimeout(()=>{
          for(let k = 0;k<6;k++){
            this.thirdStage.availNum[k] = this.presentNum ;
            for(let m=0;m<6;m++){
              if(m!==k)
                this.thirdStage.availNum[k] = this.thirdStage.availNum[k] - this.thirdStage.selectNum[m];  
            }
            if(this.thirdStage.availNum[k] > 4){
              this.thirdStage.availNum[k] = 4;
            }
          }
          this.stage = 3;
        },1000)
      }
    },
    nextMember(){
      console.log(this.addNum)
      this.$ajax.post('/test/queryMember',{
        userId:this.userId,
        idx: this.addNum + 1
      }).then(data =>{
        let memberInfo = data.data.info;
        // console.log(memberInfo);
        let tmp = {
          personName: memberInfo.name,
          gender: memberInfo.gender,
          nation: memberInfo.nation,
          major: memberInfo.major,
          grade: memberInfo.grade,
          phone: memberInfo.tel,
          mail: memberInfo.email,
          wechat: memberInfo.wechat,
          moreinfo: memberInfo.more,
          hasExp: memberInfo.hasExp,
          experience:[{
            year: '',
            confName: '',
            role: '',
            is_award: 0,
            award_name: '',
            award_other: ''
          }]
        }
        for(let i=0;i<9;i++){
          // console.log(ele.experience);
          let Exp = {
            year: '',
            confName: '',
            role: '',
            is_award: 0,
            award_name: '',
            award_other: ''
          }
          tmp.experience.push(Exp)
        }

        let pid = memberInfo.present_id;
        this.$ajax.post('/test/queryExp', {
          present_id: pid
        }).then(suc =>{
          // console.log("exp",suc.data.info)
          let exp = suc.data.info;

          for(let i=0;i<exp.length;i++){
            tmp.experience[i].year = exp[i].conf_year;
            tmp.experience[i].confName = exp[i].conf_name;
            tmp.experience[i].role = exp[i].conf_role;
            tmp.experience[i].is_award = exp[i].is_award;
            if(exp[i].award_name == 'BD' || exp[i].award_name == 'OD' || exp[i].award_name == 'HM'){
              tmp.experience[i].award_name = exp[i].award_name;              
            }
            else{
              tmp.experience[i].award_other = exp[i].award_name;
            }          
          }
          console.log(tmp.experience);
        })

        // this.secondStage[this.addNum].personName = memberInfo.name;
        // this.secondStage[this.addNum].gender=memberInfo.gender;
        // this.secondStage[this.addNum].nation=memberInfo.nation;
        // this.secondStage[this.addNum].major=memberInfo.major;
        // this.secondStage[this.addNum].grade=memberInfo.grade;
        // this.secondStage[this.addNum].phone=memberInfo.tel;
        // this.secondStage[this.addNum].mail=memberInfo.email;
        // this.secondStage[this.addNum].wechat=memberInfo.wechat;
        // this.secondStage[this.addNum].moreinfo=memberInfo.more;
        this.secondStage.push(tmp)
      })
      this.addNum = this.addNum + 1
    },
    submitPerson(){
      if(this.secondStage[this.addNum].personName === '' || this.secondStage[this.addNum].nation === '' 
      || this.secondStage[this.addNum].major === '' || this.secondStage[this.addNum].phone === '' || this.secondStage[this.addNum].mail === ''){
        return;
      }
      this.$ajax.post('/test/queryMember',{
        userId:this.userId,
        idx: this.addNum
      }).then(data =>{
        // console.log("query:",data);
        if(data.data.info){
          console.log("updateMember!")
          this.$ajax.post('/test/updateMember',{
            userId: this.userId,
            name: this.secondStage[this.addNum].personName,
            gender: this.secondStage[this.addNum].gender,
            nation: this.secondStage[this.addNum].nation,
            major: this.secondStage[this.addNum].major,
            grade: this.secondStage[this.addNum].grade,
            phone: this.secondStage[this.addNum].phone,
            mail: this.secondStage[this.addNum].mail,
            wechat: this.secondStage[this.addNum].wechat,
            moreinfo: this.secondStage[this.addNum].moreinfo,
            hasExp: this.secondStage[this.addNum].hasExp,
            idx: this.addNum
          }).then(success =>{
            // console.log("suc:", success);
            this.curNum = success.data.id;
            // console.log("sec:", this.secondStage[this.addNum])
            for(let i = 0; i< this.secondStage[this.addNum].experience.length;i++){
              let term = this.secondStage[this.addNum].experience[i];
              // console.log("EXP:", term);

              let a_name = term.award_name;
              if( term.award_name == "other"){
                a_name = term.award_other;
              }
              this.$ajax.post('/test/updateExp',{
                present_id: this.curNum,
                exp_id: i+1,
                conf_name: term.confName,
                conf_year: term.year,
                conf_role: term.role,
                is_award: term.is_award,
                award_name: a_name
              })
            }
          })
        }
        else{
          console.log("addMember!")
          this.$ajax.post('/test/addMember',{
            userId: this.userId,
            name: this.secondStage[this.addNum].personName,
            gender: this.secondStage[this.addNum].gender,
            nation: this.secondStage[this.addNum].nation,
            major: this.secondStage[this.addNum].major,
            grade: this.secondStage[this.addNum].grade,
            phone: this.secondStage[this.addNum].phone,
            mail: this.secondStage[this.addNum].mail,
            wechat: this.secondStage[this.addNum].wechat,
            moreinfo: this.secondStage[this.addNum].moreinfo,
            hasExp: this.secondStage[this.addNum].hasExp,
            idx: this.addNum
          }).then(success =>{
            // console.log("suc:", success);
            this.curNum = success.data.id;
            // console.log("sec:", this.secondStage[this.addNum])
            for(let i = 0; i< this.secondStage[this.addNum].experience.length;i++){
              let term = this.secondStage[this.addNum].experience[i];
              // console.log("EXP:", term);

              let a_name = term.award_name;
              if( term.award_name == "other"){
                a_name = term.award_other;
              }
              this.$ajax.post('/test/addExp',{
                present_id: this.curNum,
                exp_id: i+1,
                conf_name: term.confName,
                conf_year: term.year,
                conf_role: term.role,
                is_award: term.is_award,
                award_name: a_name
              })
            }
            this.presentNum = this.presentNum+1;
            console.log("add presentNum")
          })
        }
        this.addNum = this.addNum+1;
        let ele = {
          personName: '',
          gender: 'male',
          nation: '',
          major: '',
          grade: '2016级及以上本科生',
          phone: '',
          mail: '',
          wechat: '',
          moreinfo: '',
          hasExp:0,
          experience:[{
            year: '',
            confName: '',
            role: '',
            is_award: 0,
            award_name: '',
            award_other: ''
          }]
        };

        for(let i=0;i<9;i++){
          // console.log(ele.experience);
          let Exp = {
            year: '',
            confName: '',
            role: '',
            is_award: 0,
            award_name: '',
            award_other: ''
          }
          ele.experience.push(Exp)
        }

        this.secondStage.push(ele);
      })
      
    },
    submitAll(){
      let sum_sel = 0;
      for(let k=0;k<6;k++){
        sum_sel = sum_sel + this.thirdStage.selectNum[k]
      }
      if(sum_sel !== this.presentNum ){
        console.log(sum_sel, this.presentNum)
        alert("请为所有代表分配职位！")
        return;
      }
      if(this.signup){
        this.$ajax.post('/test/update',{
          userId: this.userId,
          schoolName: this.firstStage.schoolName,
          leaderName: this.firstStage.leaderName,
          presentNum: this.presentNum,
          unscNum: this.thirdStage.selectNum[0],
          unga4Num:this.thirdStage.selectNum[1],
          unga1Num:this.thirdStage.selectNum[2] ,
          unga2Num:this.thirdStage.selectNum[3],
          inter5gNum:this.thirdStage.selectNum[4],
          mpcNum:this.thirdStage.selectNum[5],
          submitTime: (new Date()).toLocaleDateString() + " " + (new Date()).toLocaleTimeString()
        })
      }
      else{
        this.$ajax.post('/test/signup',{
          userId: this.userId,
          schoolName: this.firstStage.schoolName,
          leaderName: this.firstStage.leaderName,
          presentNum: this.presentNum,
          unscNum: this.thirdStage.selectNum[0],
          unga4Num:this.thirdStage.selectNum[1],
          unga1Num:this.thirdStage.selectNum[2] ,
          unga2Num:this.thirdStage.selectNum[3],
          inter5gNum:this.thirdStage.selectNum[4],
          mpcNum:this.thirdStage.selectNum[5],
          submitTime: (new Date()).toLocaleDateString() + " " + (new Date()).toLocaleTimeString()
        })
      }
      // this.$ajax.post('/test/getSignup',{
      //   userId: this.userId
      // })
      this.stage=4;

    },
    updateAva(idx){
      for(let k = 0;k<6;k++){
        if(k!==idx)
          this.thirdStage.availNum[k] = this.presentNum ;
        for(let m=0;m<6;m++){
          if(k!==idx && m!==k)
            this.thirdStage.availNum[k] = this.thirdStage.availNum[k] - this.thirdStage.selectNum[m];  
        }
        if(this.thirdStage.availNum[k] > 4){
          this.thirdStage.availNum[k] = 4;
        }
      }
    },
    gotoHome(){
      this.$router.push('/home')
    }
  },
  mounted(){

    for(let i=0;i<9;i++){
      let EXP = {
          year: '',
          confName: '',
          role: '',
          is_award: 0,
          award_name: '',
          award_other: ''
        }
      this.secondStage[this.addNum].experience.push(EXP);
    }

    this.$ajax.post('/test/query_signup',{
      userId:this.userId
    }).then(data =>{
      let userInfo = data.data.info;
      if(userInfo){
        this.signup = true;
        this.firstStage.schoolName = userInfo.school_name;
        this.firstStage.leaderName = userInfo.leader_name;
        this.thirdStage.selectNum[0] = userInfo.unsc_num;
        this.thirdStage.selectNum[1] = userInfo.unga4_num;
        this.thirdStage.selectNum[2] = userInfo.unga1_num;
        this.thirdStage.selectNum[3] = userInfo.unga2_num;
        this.thirdStage.selectNum[4] = userInfo.inter5g_num;
        this.thirdStage.selectNum[5] = userInfo.mpc_num;
        this.presentNum = userInfo.present_num;
        for(let k = 0;k<6;k++){
          this.thirdStage.availNum[k] = this.presentNum ;
          for(let m=0;m<6;m++){
            if(m!==k)
              this.thirdStage.availNum[k] = this.thirdStage.availNum[k] - this.thirdStage.selectNum[m];  
          }
          if(this.thirdStage.availNum[k] > 4){
            this.thirdStage.availNum[k] = 4;
          }
        }
        console.log("userInfo:",userInfo);
      }
      else{
        this.signup = false;
      }
    })
    
    this.$ajax.post('/test/queryMember',{
      userId:this.userId,
      idx: this.addNum
    }).then(data =>{
      if(data.data.info){
        let memberInfo = data.data.info;
        console.log("mem:",data);
        this.secondStage[this.addNum].personName = memberInfo.name;
        this.secondStage[this.addNum].gender=memberInfo.name;
        this.secondStage[this.addNum].nation=memberInfo.nation;
        this.secondStage[this.addNum].major=memberInfo.major;
        this.secondStage[this.addNum].grade=memberInfo.grade;
        this.secondStage[this.addNum].phone=memberInfo.tel;
        this.secondStage[this.addNum].mail=memberInfo.email;
        this.secondStage[this.addNum].wechat=memberInfo.wechat;
        this.secondStage[this.addNum].moreinfo=memberInfo.more;
        this.secondStage[this.addNum].hasExp=memberInfo.hasExp;
        let pid = memberInfo.present_id;
        if(this.secondStage[this.addNum].hasExp === 1){
          this.$ajax.post('/test/queryExp', {
          present_id: pid
          }).then(suc =>{
            // console.log("exp",suc.data.info)
            let exp = suc.data.info;
            for(let i=0;i<exp.length;i++){
              this.secondStage[this.addNum].experience[i].year = exp[i].conf_year;
              this.secondStage[this.addNum].experience[i].confName = exp[i].conf_name;
              this.secondStage[this.addNum].experience[i].role = exp[i].conf_role;
              this.secondStage[this.addNum].experience[i].is_award = exp[i].is_award;
              if(exp[i].award_name == 'BD' || exp[i].award_name == 'OD' || exp[i].award_name == 'HM'){
                this.secondStage[this.addNum].experience[i].award_name = exp[i].award_name;              
              }
              else{
                this.secondStage[this.addNum].experience[i].award_other = exp[i].award_name;
              }          
            }
            console.log(this.secondStage[this.addNum].experience);
          })
        }
      }
    })
    console.log(this);

  }
}
</script>

<style lang="stylus">
body
  .el-select-dropdown__item.selected
    color #a52a2a
  .signup-page 

  .signup-body
    margin 20px 40px
    .main-title
      font-size 28px
      font-weight bold
      margin-bottom 20px
    .main-hint
      font-size 12px
      color grey
      line-height 16px
    .main-content
      margin 40px auto
      display flex
      flex-direction column
      justify-content center
      align-items center
      .will-form
        display flex
        flex-direction column
        justify-content center
        align-items center
        .el-form
          margin-bottom 20px
        .will-list
          display flex
          margin 20px auto
      .el-select .el-input.is-focus .el-input__inner
        border-color #a52a2a
      .el-select .el-input__inner:focus
        border-color #a52a2a
      
      .btns
        display flex
        div:first-child
          margin-right 20px
        div:last-child
          margin-left 20px
      .signup-btn
        padding 13px 23px
        text-decoration none 
        background-color #a52a2a
        border-color #a52a2a
        width 120px
        border-radius 20px
        color #fff
        display inline-block
        line-height 1
        text-align center
        margin 20px auto
        font-size 14px
        &.disabled
          background-color grey
          border-color grey
      .infomation
        margin-bottom 40px
      .sub-title
        margin-bottom 30px
        font-size 22px
      .notice
        color grey
        font-size 12px
        margin-bottom 20px
        width 40%
      .list-form
        display flex
        flex-direction row
        align-items center
        margin-left 40px
        .title
          min-height 100px
          .el-form-item__content
            display flex
            flex-direction column
            align-items flex-start
          .el-form-item__label
            margin 10px 0
          .el-radio
            margin 20px 0
        .el-form-item__label
          white-space pre-line
          line-height 20px
          height 40px
          // width 180px
        .el-form-item__content
          margin-left 180px
          // width 600px
          .el-radio__input.is-checked .el-radio__inner
            background-color #a52a2a
            border-color #a52a2a
          .el-radio__input.is-checked+.el-radio__label
            color #a52a2a
          .el-input__inner:focus
            border-color #a52a2a
        .el-button--primary
          width 120px
          background-color #a52a2a
          border-color #a52a2a

        .list-num
          color #606266
          margin-right 20px
          padding-bottom 20px
        .need
          display flex
          justify-content space-between
          .el-form-item__content
            margin-left 0
          .need-hint
            color grey
            font-size 12px
            width 600px
            margin-left 20px
        .exp-detail
          display flex
          flex-direction column
          align-items center
          .prize.el-form
            margin-top 20px
            display flex
            flex-direction row
            align-items center
            .el-form-item
              display flex
              flex-direction row
              align-items center
              .el-form-item__content
                display flex
                flex-direction row
                align-items center
                .el-radio
                  display flex
                  flex-direction row
                  align-items center
                  margin auto 10px
          .el-form
            display flex
            flex-direction row
            align-items center
            .el-form-item
              display flex
              flex-direction row
              align-items center
              .el-form-item__content
                margin 10px 0

          
</style>

