<template>
    <div class="distribution">
        <headbar />
        <div class="title"> 结果分配 </div>
        <div class="info">
            <div>您的队伍名额分配如下：</div>
            <div>UNSC:{{unsc_num}}/ UNGA4:{{unga4_num}}/UNGA1:{{unga1_num}} / UNGA2:{{unga2_num}} / ITU:{{inter5g_num}} / MPC:{{mpc_num}}</div>
            <div >{{hasRec? "您已分配过名额，请确认是否进行修改":"您尚未分配参会名额"}}</div>
        </div>
        <el-form class="name" labelWidth="80px" label-position="left">
            <el-form-item label="UNSC" prop="unsc" v-if="unsc_num>0"> 
                <el-input size="medium" type="text" v-model="unsc_name[idx]" placeholder="" clearable v-for="(unsc, idx) in unsc_name" :key="idx"></el-input>
            </el-form-item>
            <el-form-item label="UNGA4" prop="unga4" v-if="unga4_num>0">
                <el-input size="medium" type="text" v-model="unga4_name[idx]" placeholder="" clearable v-for="(unga4, idx) in unga4_name" :key="idx"></el-input>
            </el-form-item>
            <el-form-item label="UNGA1" prop="unga1" v-if="unga1_num>0">
                <el-input size="medium" type="text" v-model="unga1_name[idx]" placeholder="" clearable v-for="(unga1, idx) in unga1_name" :key="idx"></el-input>
            </el-form-item>
            <el-form-item label="UNGA2" prop="unga2" v-if="unga2_num>0">
                <el-input size="medium" type="text" v-model="unga2_name[idx]" placeholder="" clearable v-for="(unga2, idx) in unga2_name" :key="idx"></el-input>
            </el-form-item>
            <el-form-item label="5G" prop="inter5g" v-if="inter5g_num>0">
                <el-input size="medium" type="text" v-model="inter5g_name[idx]" placeholder="" clearable v-for="(inter5g, idx) in inter5g_name" :key="idx"></el-input>
            </el-form-item>
            <el-form-item label="MPC" prop="mpc" v-if="mpc_num>0">
                <el-input size="medium" type="text" v-model="mpc_name[idx]" placeholder="" clearable v-for="(mpc, idx) in mpc_name" :key="idx"></el-input>
            </el-form-item>
        </el-form>
        <div class="btn" @click="submitName">提交</div>
    </div>
</template>

<script>
import headbar from '../assets/components/common/headbar'

export default {
    components:{ headbar},
    data(){
        return{
            hasRec: false,
            user_id: 0,
            unsc_num:0,
            unga4_num:0,
            unga1_num:0,
            unga2_num:0,
            inter5g_num:0,
            mpc_num:0,
            unsc_name: [],
            unga4_name: [],
            unga1_name: [],
            unga2_name: [],
            mpc_name: [],
            inter5g_name: [],
        }
    },
    methods:{
        submitName(){
            let unscName = '', unga4Name='', unga1Name='', unga2Name='',mpcName='',inter5gName=''
            let filled = true
            for(let i = 0; i<this.unsc_num && filled;i++){
                unscName = unscName + this.unsc_name[i] + ',';
                if(this.unsc_name[i] === ''){
                    filled = false
                }
            }
            for(let i = 0; i<this.unga4_num && filled;i++){
                unga4Name = unga4Name + this.unga4_name[i]+',';
                if(this.unga4_name[i] === ''){
                    filled = false
                }
            }
            for(let i = 0; i<this.unga1_num&&filled;i++){
                unga1Name = unga1Name + this.unga1_name[i]+',';
                if(this.unga1_name[i] === ''){
                    filled = false
                }
            }
            for(let i = 0; i<this.unga2_num&&filled;i++){
                unga2Name = unga2Name + this.unga2_name[i]+',';
                if(this.unga2_name[i] === ''){
                    filled = false
                }
            }
            for(let i = 0; i<this.inter5g_num&&filled;i++){
                inter5gName = inter5gName + this.inter5g_name[i]+',';
                if(this.inter5g_name[i] === ''){
                    filled = false
                }
            }
            for(let i = 0; i<this.mpc_num  && filled;i++){
                mpcName = mpcName + this.mpc_name[i]+',';
                if(this.mpc_name[i] === ''){
                    filled = false
                }
            }
            if(!filled){
                alert("请为所有名额分配代表人选")
                return
            }
            console.log(unscName)
            if(this.hasRec === false){
                this.$ajax.post('/test/addDistr',{
                userId: this.user_id,
                unscName: unscName,
                mpcName: mpcName,
                unga4Name: unga4Name,
                unga2Name: unga2Name,
                unga1Name: unga1Name,
                inter5gName: inter5gName
                }).then(data => {
                    if(data.data.ok){
                        this.$router.push("/pay")
                    }
                })
            }
            else{
                this.$ajax.post('/test/updateDistr',{
                userId: this.user_id,
                unscName: unscName,
                mpcName: mpcName,
                unga4Name: unga4Name,
                unga2Name: unga2Name,
                unga1Name: unga1Name,
                inter5gName: inter5gName
                }).then(data => {
                    if(data.data.ok){
                        this.$router.push("/pay")
                    }
                })
            }
            
        }
    },
    mounted(){
        this.user_id = this.$cookies.get('userId');
        console.log(this.user_id)
        this.$ajax.post('/test/queryDisName',{
            userId: this.user_id
        }).then(data =>{
            console.log(data);
            if(data.data.info.length !== 0){
                this.hasRec = true
            }
        })
        this.$ajax.post('/test/queryDistr',{
            userId: this.user_id
        }).then(data => {
            let dis = data.data.info;
            console.log(dis);
            this.unsc_num = dis.unsc_num;
            this.unga4_num = dis.unga4_num;
            this.unga1_num = dis.unga1_num;
            this.unga2_num = dis.unga2_num;
            this.inter5g_num = dis.inter5g_num;
            this.mpc_num = dis.mpc_num;
            for(let i = 0;i<this.unsc_num;i++){
                this.unsc_name.push('');
            }
            for(let i = 0;i<this.unga1_num;i++){
                this.unga1_name.push('');
            }
            for(let i = 0;i<this.unga2_num;i++){
                this.unga2_name.push('');
            }
            for(let i = 0;i<this.unga4_num;i++){
                this.unga4_name.push('');
            }
            for(let i = 0;i<this.inter5g_num;i++){
                this.inter5g_name.push('');
            }
            for(let i = 0;i<this.mpc_num;i++){
                this.mpc_name.push('');
            }
            console.log(this)
        })
    }
}
</script>

<style lang="stylus" scoped>
.distribution
    .title
        margin 30px auto
        font-size 26px
    .info
        line-height 22px
        margin-bottom 20px
    .name
        width 300px
        display flex
        flex-direction column
        align-items center
        justify-content center
        margin-left 500px
        .el-form-item__content
            width 200px
    .btn
        padding 13px 23px
        text-decoration none 
        background-color #a52a2a
        border-color #a52a2a
        width 120px
        border-radius 20px
        color #fff
        display inline-block
        line-height 1
        margin 20px auto
        font-size 14px
</style>