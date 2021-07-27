let td = document.getElementsByTagName('td')
let tr = document.getElementsByTagName('tr')

let k = 0

for (i = 0; i < td.length; i++) {
    td[i].addEventListener("click", func)
}

function func() {
    if (k == 0) {
        this.innerHTML = 'x'
        k++
    } else {
        this.innerHTML = '0'
        k--
    }
    if (endGame(this.innerHTML)) {
        alert("win " + this.innerHTML);
    }
    this.removeEventListener('click', func)
}

function endGame(currentEntity) {
    for (let i = 0; i < tr.length; i++) {
        let children = tr[i].children

        if (checkWinInRow(currentEntity, children) || checkWinInColumn(currentEntity)
            || checkWinInDiagonal(currentEntity) || checkWinInDiagonal2(currentEntity)) {
            return true;
        }
    }
    return false;
}

function checkWinInRow(currentEntity, row) {
    let flag = true;
    for (j = 0; j < row.length; j++) {
        if (row[j].innerHTML !== currentEntity) {
            flag = false;
        }
    }
    return flag;
}

function checkWinInColumn(currentEntity) {
    for (i = 0; i < 3; i++) {
        let flag = true;
        let sum = 3;
        for (j = 0; j < 3; j++) {
            if (td[i + j * sum].innerHTML !== currentEntity) {
                flag = false;
            }
        }
        if (flag) {
            return flag;
        }
    }
    return false;
}

function checkWinInDiagonal(currentEntity) {
    let flag = true
    for (i = 0; i < tr.length; i++) {
        let child = tr[i].children
        if (child[i].innerHTML !== currentEntity) {
            flag = false
        }
    }
    return flag
}

function checkWinInDiagonal2(currentEntity) {
    let flag = true
    for (let i = tr.length - 1; i >= 0; i--) {
        let child = tr[i].children
        if (child[tr.length - i - 1].innerHTML !== currentEntity) {
            flag = false
        }
        console.log(flag)
    }
    return flag
}