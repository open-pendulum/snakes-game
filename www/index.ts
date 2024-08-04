import init, { Direction, World } from "wasm_game";


init().then(() => {
    const CELL_SIZE = 20;
    const WORLD_WIDTH = 8;
    const snakeHeadIndexBegin = Date.now() % (WORLD_WIDTH * WORLD_WIDTH);
    const world = World.new(WORLD_WIDTH, snakeHeadIndexBegin);
    const worldWidth = world.width();

    const canvas = <HTMLCanvasElement>document.getElementById("snake-world");
    const context = canvas.getContext("2d");
    canvas.width = worldWidth * CELL_SIZE;
    canvas.height = worldWidth * CELL_SIZE;

    document.addEventListener("keydown", e =>{
        switch(e.code) {
            case "ArrowUp":
                world.change_snake_direction(Direction.Up);
                break;
            case "ArrowDown":
                world.change_snake_direction(Direction.Down);
                break;
            case "ArrowLeft":
                world.change_snake_direction(Direction.Left);
                break;
            case "ArrowRight":
                world.change_snake_direction(Direction.Right);
                break;
        }
    })

    function drawWorld() {
        context.beginPath();

        for (let x = 0; x < worldWidth + 1; x++) {
            context.moveTo(CELL_SIZE * x, 0);
            context.lineTo(CELL_SIZE * x, CELL_SIZE * worldWidth);
        }

        for (let y = 0; y < worldWidth + 1; y++) {
            context.moveTo(0, CELL_SIZE * y);
            context.lineTo(CELL_SIZE * worldWidth, CELL_SIZE * y);
        }

        context.stroke();
    }


    function drawSnake() {
        const snakeHeadIndex = world.snake_head_index();
        const row = Math.floor(snakeHeadIndex / worldWidth);
        const col = Math.floor(snakeHeadIndex % worldWidth);

        context.beginPath();
        context.fillRect(
            col * CELL_SIZE, 
            row * CELL_SIZE,
            CELL_SIZE, 
            CELL_SIZE
        );
        context.stroke();
    }

    function draw() {
        drawWorld();
    
        drawSnake();
    }

    function run() {
        setTimeout(() => {
           context.clearRect(0, 0, canvas.width, canvas.height);
           world.update();
           draw(); 
           requestAnimationFrame(run);
        }, 500);
    }

    draw();
    run();
})