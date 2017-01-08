var turn = !!Math.round(Math.random())
var grid = document.querySelector('.grid')
var elements = Array.from(grid.querySelectorAll('.box'))

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', onBoxClick)
}

function onBoxClick (event) {
  var xoro = turn ? 'X' : 'O'
  if (this.textContent !== 'X' && this.textContent !== 'O') {
    this.textContent = xoro
    turn = !turn
    checkWinConditions(this, xoro)
  }
}

function checkWinConditions (boxElement, xoro) {
  var xValue = boxElement.dataset.x
  var yValue = boxElement.dataset.y

  if (ifRowIsAllSame(yValue, xoro) || ifColumnIsAllSame(xValue, xoro) || diagonalIsSame(xValue, yValue, xoro)) {
    console.log('won');
    alert ('congrats... player ' + xoro + ' won!')
  } else {
    console.log('didintWin')
  }
}

function ifRowIsAllSame (yValue, xoro) {
  var selector =  '[data-y="' + yValue + '"]'
  var boxes = grid.querySelectorAll(selector)

  for(var i = 0; i < boxes.length; i++) {
    if (boxes[i].textContent !== xoro) {
      return false
    }
  }
  return true
}


function ifColumnIsAllSame (xValue, xoro) {
  var selector =  '[data-x="' + xValue + '"]'
  var boxes = grid.querySelectorAll(selector)

  for(var i = 0; i < boxes.length; i++) {
    if (boxes[i].textContent !== xoro) {
      return false
    }
  }
  return true
}


function diagonalIsSame (xValue, yValue, xoro) {
  var xEqualsY = elements.filter(doesXEqualY)
  for (var i = 0; i < xEqualsY.length; i++) {
    if (xEqualsY[i].textContent !== xoro) {
      return otherDiagonal(xValue, yValue, xoro)
    }
  }
  return true
}

function doesXEqualY (element) {
  return element.dataset.x === element.dataset.y
}

function otherDiagonal (xValue, yValue, xoro) {
  var xPlusYIs4 = elements.filter(doesXPlusYequal4)
  for(var i = 0; i < xPlusYIs4.length; i++) {
    if (xPlusYIs4[i].textContent !== xoro) {
      return false
    }
  }
  return true
}

function doesXPlusYequal4 (element) {
  return (parseInt(element.dataset.x) + parseInt(element.dataset.y)) === 4
}
// x=y
// or
// x+y = 4





