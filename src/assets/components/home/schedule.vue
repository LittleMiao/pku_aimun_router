<template>
  <div class="schedule">
    <div class="title">会议日程</div>
    <table border="1"
      bordercolor="#e8e8e8">
      <tbody>
        <tr>
          <th colspan="2">2019年12月13日（周五）</th>
        </tr>
        <tr>
          <td>08:00-09:30</td>
          <td>代表注册</td>
        </tr>
        <tr>
          <td>09:30-10:15</td>
          <td>开幕式</td>
        </tr>
        <tr>
          <td>10:30-12:00</td>
          <td>校园参访/自由活动</td>
        </tr>
        <tr>
          <td>13:30-16:30</td>
          <td>第一次会议</td>
        </tr>
        <tr>
          <td>18:00-21:00</td>
          <td>第二次会议</td>
        </tr>
        <tr>
          <th colspan="2">2019年12月14日（周六）</th>
        </tr>
        <tr>
          <td>09:00-12:00</td>
          <td>第三次会议</td>
        </tr>
        <tr>
          <td>14:00-17:00</td>
          <td>第四次会议</td>
        </tr>
        <tr>
          <td>18:30-21:30</td>
          <td>社交晚宴</td>
        </tr>
        <tr>
          <th colspan="2">2019年12月15日（周日）</th>
        </tr>
        <tr>
          <td>09:00-12:00</td>
          <td>第五次会议</td>
        </tr>
        <tr>
          <td>13:30-15:00</td>
          <td>闭幕式</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="stylus">
.schedule
  width 100%
  display flex
  flex-direction column
  align-items center
  .title
    font-size 32px
    font-weight bold
    margin 30px auto
  table
    width 80%
    border-collapse collapse
    th
      height 36px
    td
      height 30px
      width 50%
    div
      line-height 32px
</style>


