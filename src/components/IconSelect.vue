<template>
    <div class="flex items-center">
        <el-icon :size="20" v-if="modelValue" class="mr-2">
            <component :is="modelValue"></component>
        </el-icon>
        <el-select-v2 :modelValue="modelValue" placeholder="请选择图标" :options="icons" filterable @change="handleChange">
            <template #default="{ item }">
            <div class="flex items-center">
                <el-icon :size="20">
                    <component :is="item.value"></component>
                </el-icon>
                <span class="ml-auto text-gray-500">{{ item.value }}</span>
            </div>
            </template>
        </el-select-v2>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const props = defineProps({
    modelValue:{
        type:String,
        default:""
    }
})
const emit = defineEmits(["update:modelValue"])
const handleChange = (icon)=>{
    emit("update:modelValue",icon)
}
const icons = ref(["add-location","aim","alarm-clock","apple","arrow-down-bold","arrow-down","arrow-left-bold","arrow-left","arrow-right-bold","arrow-right","arrow-up-bold","arrow-up","avatar","back","baseball","basketball","bell-filled","bell","bicycle","bottom-left","bottom-right","bottom","bowl","box","briefcase","brush-filled","brush","burger","calendar","camera-filled","camera","caret-bottom","caret-left","caret-right","caret-top","cellphone","chat-dot-round","chat-dot-square","chat-line-round","chat-line-square","chat-round","chat-square","check","checked","cherry","chicken","circle-check-filled","circle-check","circle-close-filled","circle-close","circle-plus-filled","circle-plus","clock","close-bold","close","cloudy","coffee-cup","coffee","coin","cold-drink","collection-tag","collection","comment","compass","connection","coordinate","copy-document","cpu","credit-card","crop","d-arrow-left","d-arrow-right","d-caret","data-analysis","data-board","data-line","delete-filled","delete-location","delete","dessert","discount","dish-dot","dish","document-add","document-checked","document-copy","document-delete","document-remove","document","download","drizzling","edit","eleme-filled","eleme","expand","failed","female","files","film","filter","finished","first-aid-kit","flag","fold","folder-add","folder-checked","folder-delete","folder-opened","folder-remove","folder","food","football","fork-spoon","fries","full-screen","goblet-full","goblet-square-full","goblet-square","goblet","goods-filled","goods","grape","grid","guide","headset","help-filled","help","histogram","home-filled","hot-water","house","ice-cream-round","ice-cream-square","ice-cream","ice-drink","ice-tea","info-filled","iphone","key","knife-fork","lightning","link","list","loading","location-filled","location-information","location","lock","lollipop","magic-stick","magnet","male","management","map-location","medal","menu","message-box","message","mic","microphone","milk-tea","minus","money","monitor","moon-night","moon","more-filled","more","mostly-cloudy","mouse","mug","mute-notification","mute","no-smoking","notebook","notification","odometer","office-building","open","operation","opportunity","orange","paperclip","partly-cloudy","pear","phone-filled","phone","picture-filled","picture-rounded","picture","pie-chart","place","platform","plus","pointer","position","postcard","pouring","present","price-tag","printer","promotion","question-filled","rank","reading-lamp","reading","refresh-left","refresh-right","refresh","refrigerator","remove-filled","remove","right","scale-to-original","school","scissor","search","select","sell","semi-select","service","set-up","setting","share","ship","shop","shopping-bag","shopping-cart-full","shopping-cart","smoking","soccer","sold-out","sort-down","sort-up","sort","stamp","star-filled","star","stopwatch","success-filled","sugar","suitcase","sunny","sunrise","sunset","switch-button","switch","takeaway-box","ticket","tickets","timer","toilet-paper","tools","top-left","top-right","top","trend-charts","trophy","turn-off","umbrella","unlock","upload-filled","upload","user-filled","user","van","video-camera-filled","video-camera","video-pause","video-play","view","wallet-filled","wallet","warning-filled","warning","watch","watermelon","wind-power","zoom-in","zoom-out"].map(o=>{
    return {
        value:o,
        label:o
    }
}))
</script>