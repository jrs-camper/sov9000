function get_element_by_class_name(name) {
  let elements = Array(document.getElementsByClassName(name.split(" ")[0]))
  console.log(typeof(elements))
  for (i in name.split(" ")){
    let element = Array(document.getElementsByClassName(name.split(" ")[i]))
    if (element) {
      elements.filter((a)=>(element.includes(a)))
    }
  }

  return elements[0]
}

function change_element(c,text){
  const element = get_element_by_class_name(c)[0]

  if (element) {
    element.innerHTML = text
  }

  setTimeout(()=>{change_element(c,text)},10);
}

function change_element_shuffle_func(c,func, text=null){
  const element = get_element_by_class_name(c)[0]

  if (text == null) {
    text = func();
  }

  if (element) {
    element.innerHTML = text
  } else {
    text = func();
  }

  setTimeout(()=>{change_element_shuffle_func(c,func,text)},100);
}

const choice = (arr) => {return arr[Math.floor(Math.random()*arr.length)]}

function sov_fix_ui() {
  console.log("started")

  change_element("NhJUE",
    choice([
      "You should work harder",
      "No assignments is no exscuse to not work",
      "Suffing builds character",
      "No pain, No gain",
      "I'm hungry"
    ])
  )

  change_element("_2XuVq","Duo says:")
  change_element("TuzfC",
    choice([
      "You require reinforced learning",
      "Eat my feet",
      "A minimum of 2.5 hours of studying a day is reqired to learn anything. You should use Duolingo. Or else...",
      "Touching grass in dangerous",
      "Sunlight is unhealthy",
      "Light from screens helps your eyes",
      "I have a knife",
      "Learning a language is the only way to survive (in life)"
    ])
  )

  change_element_shuffle_func("_1DLP9 _2GMvD",
    ()=>{return choice([
      "I know where you live",
      "Failing is no exscuse to stop",
      "Keep working. Or else...",
      "You have one more chance... or else...",
      "You failed",
      "You suck",
      "I hate you",
      "You are a bad person",
      "I have a knife",
      "I have a gun",
      "Run",
      "I'm hungry"
    ])}
  )
}

sov_fix_ui()