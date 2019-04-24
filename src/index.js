import './scss/main.scss'


const changeables = {
  surface: document.getElementById('surface'),
  code: document.getElementById('code'),
  topLeft: document.getElementById('input_tl'),
  topRight: document.getElementById('input_tr'),
  bottomLeft: document.getElementById('input_br'),
  bottomRight: document.getElementById('input_bl'),
  opt_webkit: document.getElementById('opt_webkit'),
  opt_gecko: document.getElementById('opt_gecko'),
  opt_css3: document.getElementById('opt_css3'),
  selectedItem: {}
}

const value = {
  topLeft: changeables.topLeft.value,
  topRight: changeables.topRight.value,
  bottomLeft: changeables.bottomLeft.value,
  bottomRight: changeables.bottomRight.value
}

const changeHandler = function(e, type){
  let key = e.key
  if(type === changeables.selectedItem.type && changeables.selectedItem.type && changeables.selectedItem.text){
    value[type] = value[type].replace(changeables.selectedItem.text, key)
  }else {
    value[type] += key
  }
  console.log("valueList",value,value[type].length)
  changeables[type].className = "chars_" + value[type].length
  changeables.selectedItem = {}
  applyStyles()
}

const deleteHandler = function(e,type){
  let keyCode = e.keyCode
  let len = value[type].length
  if(keyCode === 8){
    if(type === changeables.selectedItem.type && changeables.selectedItem.type && changeables.selectedItem.text){
      value[type] = ''
    }else {
      value[type] = value[type].substring(0,len-1)
    }
    changeables[type].className = "chars_" + (value[type].length ? value[type].length : 1)
    changeables.selectedItem = {}
    applyStyles()
  }
}

const selectHandler = function (e, type) {
  let text = document.getSelection().toString()
  console.log("text",text)
  changeables.selectedItem = {
    type,
    text
  }
}

const applyStyles = function(){
  let styleText = ``

  let webkitStyleText = `-webkit-border-top-left-radius: ${value.topLeft}px;
-webkit-border-top-right-radius: ${value.topRight}px;
-webkit-border-bottom-right-radius: ${value.bottomRight}px;
-webkit-border-bottom-left-radius: ${value.bottomLeft}px;`

  let mozStyleText = `-moz-border-radius-topleft: ${value.topLeft}px;
-moz-border-radius-topright: ${value.topRight}px;
-moz-border-radius-bottomright: ${value.bottomRight}px;
-moz-border-radius-bottomleft: ${value.bottomLeft}px;`

  let webkit = changeables.opt_webkit.checked
  let moz = changeables.opt_gecko.checked
  let css3 = changeables.opt_css3.checked

  console.log(webkit,moz,css3)
  console.log('value',value)

  if(value.topLeft && value.topLeft != '0' && value.topLeft == value.topRight && value.bottomRight == value.bottomLeft && value.topLeft == value.bottomLeft){
    if(webkit) styleText += `-webkit-border-radius: ${value.topLeft}px;
`
    if(moz) styleText += `-moz-border-radius: ${value.topLeft}px;
`
    if(css3) styleText += `border-radius: ${value.topLeft}px;
`
    changeables.surface.style.cssText = styleText
    changeables.code.value = styleText
    return;
  }

  if(value.topLeft != '0' && value.topLeft){
    if(webkit) styleText += `-webkit-border-top-left-radius: ${value.topLeft}px;
`
    if(moz) styleText += `-moz-border-top-left-radius: ${value.topLeft}px;
`
    if(css3) styleText += `border-top-left-radius: ${value.topLeft}px;
`
  }
  if(value.topRight != '0' && value.topRight){
    if(webkit) styleText += `-webkit-border-top-right-radius: ${value.topRight}px;
`
    if(moz) styleText += `-moz-border-top-right-radius: ${value.topRight}px;
`
    if(css3) styleText += `border-top-right-radius: ${value.topRight}px;
`
  }
  if(value.bottomLeft != '0' && value.bottomLeft){
    if(webkit) styleText += `-webkit-border-bottom-left-radius: ${value.bottomLeft}px;
`
    if(moz) styleText += `-moz-border-bottom-left-radius: ${value.bottomLeft}px;
`
    if(css3) styleText += `border-bottom-left-radius: ${value.bottomLeft}px;
`
  }
  if(value.bottomRight != '0' && value.bottomRight){
    if(webkit) styleText += `-webkit-border-bottom-right-radius: ${value.bottomRight}px;
`
    if(moz) styleText += `-moz-border-bottom-right-radius: ${value.bottomRight}px;
`
    if(css3) styleText += `border-bottom-right-radius: ${value.bottomRight}px;
`
  }

  changeables.surface.style.cssText = styleText
  changeables.code.value = styleText
}


changeables.topLeft.addEventListener('keypress', (e) => {
  changeHandler(e, "topLeft")
})

changeables.topRight.addEventListener('keypress', (e) => {
  changeHandler(e, "topRight")
})

changeables.bottomLeft.addEventListener('keypress', (e) => {
  changeHandler(e, "bottomLeft")
})

changeables.bottomRight.addEventListener('keypress', (e) => {
  changeHandler(e, "bottomRight")
})

changeables.topLeft.addEventListener('keydown', (e) => {
  deleteHandler(e, "topLeft")
})

changeables.topRight.addEventListener('keydown', (e) => {
  deleteHandler(e, "topRight")
})

changeables.bottomLeft.addEventListener('keydown', (e) => {
  deleteHandler(e, "bottomLeft")
})

changeables.bottomRight.addEventListener('keydown', (e) => {
  deleteHandler(e, "bottomRight")
})

changeables.topLeft.addEventListener('mouseup', (e) => {
  selectHandler(e, "topLeft")
})

changeables.topRight.addEventListener('mouseup', (e) => {
  selectHandler(e, "topRight")
})

changeables.bottomLeft.addEventListener('mouseup', (e) => {
  selectHandler(e, "bottomLeft")
})

changeables.bottomRight.addEventListener('mouseup', (e) => {
  selectHandler(e, "bottomRight")
})