<template>
  <div>
    <headbar />
    <div>缴费</div>
    <div v-if="stage===0">
      <div>请选择付款方式：</div>
      <div>
        <div @click="paymethod=1">支付宝</div>
        <div @click="paymethod=2">对公转账</div>
      </div>
    </div>
    <div v-if="stage===1">
      <div v-if="paymethod===1">
        <table>
          <tbody>
            <tr>
              <td>是否需要发票</td>
              <td>
                <el-radio v-model="receipt" :label="true" >是</el-radio>
                <el-radio v-model="receipt" :label="false" >否</el-radio>
              </td>
            </tr>
            <tr>
              <td>需缴金额</td>
              <td>xxxx元</td>
            </tr>
            <tr>
              <td>缴费说明</td>
              <td>这里是一大段说明</td>
            </tr>
            <tr>
              <td>支付宝二维码</td>
              <td>这里是一张图</td>
            </tr>
          </tbody>
        </table>
        
      </div>
      <div v-else-if="paymethod===2">

      </div>
    </div>
  </div>

</template>

<script>
import headbar from '../assets/components/common/headbar'

// import topblock from '../../components/common/topblock'
// import footerInfo from '../../components/common/footerInfo'
export default {
  components:{
    headbar,
    // topblock,
    // footerInfo,
  },
  data(){
    return {
      paymethod: 1,
      stage: 1,
      finished: false,
      receipt: false,
    }
  }
}
</script>
