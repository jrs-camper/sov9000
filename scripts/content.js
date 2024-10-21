function change_element(c,content){
  const elements = document.getElementsByClassName(c);

  for (i in elements) {
    try {
      let element = elements[i]
      element.innerHTML = content
    } catch {}
  }
  setTimeout(()=>{change_element(c,content)},100)
}

Array.prototype.choice = () => {return this[Math.floor(Math.random()*this.length)]}

function sov_fix_ui() {
  console.log("started")

  change_element("NhJUE",
    [
      "You should work harder",
      "No assignments is no exscuse to not work",
      "Suffing builds character",
      "No pain, No gain",
      "I'm hungry"
    ].choice()
  )
}

change_element("NhJUE",
  [
    "You should work harder",
    "No assignments is no exscuse to not work",
    "Suffing builds character",
    "No pain, No gain",
    "I'm hungry"
  ].choice()
)

sov_fix_ui()