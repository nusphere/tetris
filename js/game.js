const canvas = document.getElementById('tetris')
const context = canvas.getContext('2d')

const blockSize = 30
const mazeSize = {
    x: 10,
    y: 20
}

let init = () => {
    window.requestAnimationFrame(init)

    background()
}

let background = () => {
    context.reset()

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const mazePosition = {
        x: (canvas.width / 2) - (mazeSize.x * blockSize) / 2,
        y: (canvas.height / 2) - (mazeSize.y * blockSize) / 2,
        width: mazeSize.x * blockSize,
        height: mazeSize.y * blockSize
    }


    context.strokeStyle = 'grey'
    context.strokeRect(
        mazePosition.x,
        mazePosition.y,
        mazePosition.width,
        mazePosition.height
    )

    for (let i = 0; i < mazeSize.x; i++) {
        context.strokeRect(
            mazePosition.x + (i * blockSize),
            mazePosition.y,
            1,
            mazePosition.height
        )
    }

    for (let i = 0; i < mazeSize.y; i++) {
        context.strokeRect(
            mazePosition.x,
            mazePosition.y + (i * blockSize),
            mazePosition.width,
            1
        )
    }
}

init()
