import './style.css'


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton = document.getElementById('menu-button')
const mobileMenu = document.getElementById('mobile-menu')

if (menuButton && mobileMenu) {

  menuButton.addEventListener('click', () => {

    mobileMenu.classList.toggle('hidden')

  })

}



/* =====================================================
   01. KALKULATOR
===================================================== */

const calcNumberOne =
  document.getElementById('calc-number-one')

const calcNumberTwo =
  document.getElementById('calc-number-two')

const calcOperation =
  document.getElementById('calc-operation')

const calculateButton =
  document.getElementById('calculate-button')

const calculatorResult =
  document.getElementById('calculator-result')


if (
  calcNumberOne &&
  calcNumberTwo &&
  calcOperation &&
  calculateButton &&
  calculatorResult
) {

  calculateButton.addEventListener('click', () => {

    const numberOne =
      Number(calcNumberOne.value)

    const numberTwo =
      Number(calcNumberTwo.value)

    const operation =
      calcOperation.value


    if (
      calcNumberOne.value === '' ||
      calcNumberTwo.value === ''
    ) {

      calculatorResult.textContent =
        'Masukkan kedua angka terlebih dahulu.'

      return

    }


    if (
      operation === '/' &&
      numberTwo === 0
    ) {

      calculatorResult.textContent =
        'Tidak bisa membagi dengan 0.'

      return

    }


    let result


    switch (operation) {

      case '+':

        result = numberOne + numberTwo

        break


      case '-':

        result = numberOne - numberTwo

        break


      case '*':

        result = numberOne * numberTwo

        break


      case '/':

        result = numberOne / numberTwo

        break


      default:

        calculatorResult.textContent =
          'Operasi tidak valid.'

        return

    }


    calculatorResult.textContent =
      `= ${result}`

  })

}



/* =====================================================
   02. CEK NILAI
===================================================== */

const gradeName =
  document.getElementById('grade-name')

const gradeScore =
  document.getElementById('grade-score')

const gradeButton =
  document.getElementById('grade-button')

const gradeResult =
  document.getElementById('grade-result')


if (
  gradeName &&
  gradeScore &&
  gradeButton &&
  gradeResult
) {

  gradeButton.addEventListener('click', () => {

    const name =
      gradeName.value.trim()

    const score =
      Number(gradeScore.value)


    if (name === '') {

      gradeResult.textContent =
        'Silakan masukkan nama terlebih dahulu.'

      return

    }


    if (
      gradeScore.value === '' ||
      score < 0 ||
      score > 100
    ) {

      gradeResult.textContent =
        'Nilai harus berada di antara 0 - 100.'

      return

    }


    let grade


    if (score >= 90) {

      grade = 'A'

    } else if (score >= 80) {

      grade = 'B'

    } else if (score >= 70) {

      grade = 'C'

    } else {

      grade = 'D'

    }


    gradeResult.textContent =
      `${name} mendapatkan nilai ${grade} (${score})`

  })

}



/* =====================================================
   03. GANJIL / GENAP
===================================================== */

const numberCheck =
  document.getElementById('number-check')

const numberCheckButton =
  document.getElementById('number-check-button')

const numberResult =
  document.getElementById('number-result')


if (
  numberCheck &&
  numberCheckButton &&
  numberResult
) {

  numberCheckButton.addEventListener('click', () => {

    if (numberCheck.value === '') {

      numberResult.textContent =
        'Silakan masukkan angka terlebih dahulu.'

      return

    }


    const number =
      Number(numberCheck.value)


    if (number % 2 === 0) {

      numberResult.textContent =
        `${number} adalah bilangan GENAP.`

    } else {

      numberResult.textContent =
        `${number} adalah bilangan GANJIL.`

    }

  })

}



/* =====================================================
   04. TODO LIST
===================================================== */

const todoInput =
  document.getElementById('todo-input')

const todoAddButton =
  document.getElementById('todo-add-button')

const todoList =
  document.getElementById('todo-list')

const todoMessage =
  document.getElementById('todo-message')


const todos = []


function renderTodos() {

  todoList.innerHTML = ''


  if (todos.length === 0) {

    todoMessage.textContent =
      'Belum ada kegiatan.'

    return

  }


  todoMessage.textContent =
    `${todos.length} kegiatan`


  todos.forEach((todo, index) => {

    const li =
      document.createElement('li')


    li.className =
      'flex items-center gap-3 rounded-xl border border-blue-100 bg-blue-50 p-3'


    const checkbox =
      document.createElement('input')


    checkbox.type =
      'checkbox'

    checkbox.checked =
      todo.completed

    checkbox.className =
      'h-5 w-5 accent-blue-600'


    const text =
      document.createElement('span')


    text.textContent =
      todo.text

    text.className =
      'min-w-0 flex-1 break-words text-sm font-medium text-blue-950'


    if (todo.completed) {

      text.classList.add(
        'text-slate-400',
        'line-through'
      )

    }


    checkbox.addEventListener(
      'change',
      () => {

        todos[index].completed =
          checkbox.checked

        renderTodos()

      }
    )


    const deleteButton =
      document.createElement('button')


    deleteButton.type =
      'button'

    deleteButton.textContent =
      'Hapus'

    deleteButton.className =
      'rounded-lg px-3 py-2 text-xs font-semibold text-red-500 transition hover:bg-white'


    deleteButton.addEventListener(
      'click',
      () => {

        todos.splice(index, 1)

        renderTodos()

      }
    )


    li.appendChild(checkbox)

    li.appendChild(text)

    li.appendChild(deleteButton)

    todoList.appendChild(li)

  })

}


if (
  todoInput &&
  todoAddButton &&
  todoList &&
  todoMessage
) {


  todoAddButton.addEventListener(
    'click',
    () => {

      const text =
        todoInput.value.trim()


      if (text === '') {

        todoMessage.textContent =
          'Tulis kegiatan terlebih dahulu.'

        return

      }


      todos.push({
        text: text,
        completed: false
      })


      todoInput.value = ''

      renderTodos()

      todoInput.focus()

    }
  )


  todoInput.addEventListener(
    'keydown',
    (event) => {

      if (event.key === 'Enter') {

        todoAddButton.click()

      }

    }
  )


  renderTodos()

}