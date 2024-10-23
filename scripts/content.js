function get_element_by_class_name(name,exclude="") {
  let es = [].slice.call(document.getElementsByClassName(name.split(" ")[0]))
  for (i in name.split(" ")){
    let e = [].slice.call(document.getElementsByClassName(name.split(" ")[i]))
    if (e) {
      es = es.filter((a)=>(e.includes(a)))
    }
  }
  for (i in exclude.split(" ")){
    let e = [].slice.call(document.getElementsByClassName(exclude.split(" ")[i]))
    if (e) {
      es = es.filter((a)=>(!e.includes(a)))
    }
  }

  return es
}

function change_element(c,text,exclude=""){
  const elements = get_element_by_class_name(c,exclude)

  for (i in elements) {
    elements[i].innerHTML = text
  }

  setTimeout(()=>{change_element(c,text)},10);
}

function change_element_shuffle_func(c,func, text=null,exclude=""){
  const elements = get_element_by_class_name(c,exclude)[0]

  if (text == null) {
    text = func();
  }

  if (elements) {
    elements.innerHTML = text
  } else {
    text = func();
  }

  setTimeout(()=>{change_element_shuffle_func(c,func,text)},100);
}

const choice = (arr) => {return arr[Math.floor(Math.random()*arr.length)]}

function sov_fix_ui() {
  console.log("started")

  change_element("NhJUE OWSZL",
    choice([
      "You should work harder",
      "No assignments is no exscuse to not work",
      "Suffing builds character",
      "No pain, No gain",
      "I'm hungry"
    ])
  )

  change_element("_2m2uK","Duo says:")

  change_element("_1T5fG",
    choice([
      "You require reinforced learning",
      "Eat my feet",
      "A minimum of 2.5 hours of studying a day is reqired to learn anything. You should use Duolingo. Or else...",
      "Touching grass in dangerous",
      "Sunlight is unhealthy",
      "Light from screens helps your eyes",
      "I have a knife",
      "Learning a language is the only way to survive (in life)",
      "*"
    ])
  )

  change_element_shuffle_func("_36bu_ _2GMvD _2ka0w _1K3po",
    ()=>{return choice([
      "I know where you live",
      "Failing is no excuse to stop",
      "Keep working... Or else...",
      "You have one more chance... or else...",
      "You failed",
      "You suck",
      "I hate you",
      "You are a bad person",
      "I have a knife",
      "I have a gun",
      "Run",
      "I'm hungry"
    ],exclude="_27IMa")}
  )
}

sov_fix_ui()