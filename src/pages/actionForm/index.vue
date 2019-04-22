<template>
  <div class="">
    <i-panel title="请填写抽奖活动信息">
      <i-input :value="actionForm.name" @change="nameChange" type="textarea" title="活动名称" autofocus placeholder="活动名称" />
      <i-input :value="actionForm.gameDescription" type="textarea" title="活动描述" placeholder="请输入活动简介" />
      <view class="addBox">
        <i-row>
          <i-col span='7'>
            <text class="text">参加人数</text>
          </i-col>
          <i-col span='17'>
            <i-input-number class="add" :value="actionForm.personQuota" min='0' max='1000'
              @change="addPerson" />
          </i-col>
        </i-row>
      </view>
      <view class="addBox">
        <i-row>
          <i-col span='7'>
            <text class="text">抽奖次数</text>
          </i-col>
          <i-col span='17'>
            <i-input-number class="add" :value="actionForm.totalExtraction" min='0' max='100'
              @change="add" />
          </i-col>
        </i-row>
      </view>
      <view class="addBox">
        <i-row>
          <i-col span='7'>
            <text class="text">开始时间</text>
          </i-col>
          <i-col span='17'>
            <picker mode="date" :value="actionForm.beginTime" start="2019-01-01" end="2020-12-31"
              @change="bindTimeChange">
              <view class="picker">
                {{actionForm.beginTime}}
              </view>
            </picker>

          </i-col>
        </i-row>
      </view>
      <view class="addBox">
        <i-row>
          <i-col span='7'>
            <text class="text">结束时间</text>
          </i-col>
          <i-col span='17'>
            <picker mode="date" :value="actionForm.endTime" :start="actionForm.beginTime" end="2020-12-31"
              @change="bindTimeChangeEnd">
              <view class="picker">
                {{actionForm.endTime}}
              </view>
            </picker>

          </i-col>
        </i-row>
      </view>
    </i-panel>
    <i-button type="primary" size="large" @click="submit">发起活动</i-button>
    <i-toast id="toast" />
  </div>
</template>


<script>
import Model from '../../utils/model'
  export default {
    data() {
      return {
        actionForm: {
          name: '',
          personQuota: '',
          beginTime: '',
          endTime: '',
          totalExtraction: '',
          gameDescription: ''
        }
      }
    },

    components: {},

    methods: {
      add(detail) {
        this.actionForm.totalExtraction = detail.target.value
      },
      addPerson(detail) {
        this.actionForm.personQuota = detail.target.value
      },
      nameChange(e){
        console.log(e)
        this.actionForm.name = e.target.detail.value
      },
      bindTimeChange(e) {
        this.actionForm.beginTime = e.target.value
      },
      bindTimeChangeEnd(e) {
        this.actionForm.endTime = e.target.value
      },
      async submit(){
        console.log(this.actionForm.name.length)
        if(this.actionForm.name.length <= 0){
          this.$Toast({
            content: '请输入活动名称',
             type: 'warning',
            duration: 0,
          })
          return
        }
        let suc = await Model.actionForm(this.actionForm)
        if(suc.code == 200){
          console.log(suc.data)
        }
      }
    },

    created() {},
    onShow() {
      wx.hideTabBar()
    }
  }

</script>

<style scoped>
  .addBox {
    border-bottom: 1px solid #f9f9f9;
    padding: 16px;
  }

  .addBox .text {
    font-size: 18px;
    color: #495060;
  }

  .addBox .add {
    color: #495060;
  }

  .picker {
    width: 100%;
    height: 30px;
  }

</style>
