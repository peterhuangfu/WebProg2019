let cvsWrapper = null;
let backImg, start_screen, birdImg, overImg, base_x, x;
let bgScale, bgHeight, startWidth, startHeight, baseWidth;
let bird_up, bird_mid, bird_down, g, score_height;
let seed_img = Math.random();
let seed_pipe = Math.random();
let pipe_wid, pipe_dis, start_height, seed_height;
let start = 1, start_cnt = 0, score = 0, pipe_speed;
var hit, swoosh, point, die, wing;
var scoreNum = [];
const number = ['0','1','2','3','4','5','6','7','8','9'];
const backgroundImg = ['background-day', 'background-night'];
const color = ['red', 'blue', 'yellow'];
const state = ['upflap', 'midflap', 'downflap'];
const pipe_color = ['green', 'red'];
const pipe_type = ['upper', 'lower'];
class attri { speed = 0; x = 0; y = 0; angle = 0; };

function preload() {
    load_img();
}

function setup() {
    cvsWrapper = document.getElementById("canvasWrapper");
    const myCanvas = createCanvas(
        cvsWrapper.offsetWidth,
        cvsWrapper.offsetHeight
    );
    myCanvas.parent("canvasWrapper");
    
    bigger();
    birdImg = bird1;
    pipe_dis = height/3.3;
    pipe_wid = (width-2*pipe_up.width)/2;
    
    bg = new attri;
        bg.x = 0;
    bird = new attri;
        bird.x = width/2 - birdImg.width/2;
        bird.y = height*2/3 - birdImg.height;
        bird.speed = 0;
        bird.angle = 0;
    pipe1_up = new attri;
        pipe1_up.x = width;
    pipe1_low = new attri;
        pipe1_low.x = pipe1_up.x;
    pipe2_up = new attri;
        pipe2_up.x = pipe1_up.x+pipe_up.width*3/2+pipe_wid;
    pipe2_low = new attri;
        pipe2_low.x = pipe2_up.x;
    
    start_generate();

    base_x = 0;
    score = 0;
    bgScale = width/backImg.width;
    bgHeight = height/backImg.height;
    startWidth = width/start_screen.width;
    startHeight = height/start_screen.height;
    baseWidth = width/base.width;
    score_height = (height/2-scoreNum[0].height/2)*1/3;
    pipe_speed = 2;
    g = 0.3;
}

function draw() {
    bg.x -= 1;
    base_x -= 1;
    if(bg.x < -backImg.width*bgScale) bg.x = 0;
    if(base_x < -base.width*baseWidth) base_x = 0;
    pipe_speed = 2 + parseInt(score/10)*0.1;

    if(start === 1) {
        start_tap();
    }
    else if(start === 2) {
        // wing flap
        flap();

        // generate obstacle
        obstacle();

        // speed change
        bird.speed += g;
        bird.y += bird.speed;
        bird.angle += 0.03;

        // rotate
        push();
        translate(bird.x+birdImg.width/2, bird.y+birdImg.height/2);
        rotate(bird.angle);
        image(birdImg, 0, 0, birdImg.width, birdImg.height);
        pop();

        // ********** collide **********
        if(bird.x+birdImg.width >= pipe1_up.x && bird.x <= pipe1_up.x+pipe_up.width*2/3) {
            if(bird.y+birdImg.height+25 >= pipe1_low.y || bird.y <= pipe1_low.y-pipe_dis-22) gameover();
        }
        else if(bird.x+birdImg.width >= pipe2_up.x && bird.x <= pipe2_up.x+pipe_up.width*2/3) {
            if(bird.y+birdImg.height+25 >= pipe2_low.y || bird.y <= pipe2_low.y-pipe_dis-22) gameover();
        }
        
        // ********** get point **********
        if(bird.x >= pipe1_up.x+pipe_up.width*2/3 && bird.x <= pipe1_up.x+pipe_up.width*2/3+2) {
            score += 1;
            point.play();
        }
        else if(bird.x >= pipe2_up.x+pipe_up.width*2/3 && bird.x <= pipe2_up.x+pipe_up.width*2/3+2) {
            score += 1;
            point.play();
        }

        // touch floor or ceiling
        if(bird.y <= 1) bird.y = 0;
        else if(bird.y >= height-base.height-birdImg.height*2-5) gameover();
    }
    else if(start === 0) image(overImg, width/2 - overImg.width/2, (height/2 - overImg.height/2)/2);

    if(start !== 1 && start !== 0) score_img();
    else if (start === 0) {
        score_height = (height/2 - overImg.height/2)*3/4;
        score_img();
    }
}

function obstacle() {
    pipe1_up.x -= pipe_speed;
    pipe1_low.x -= pipe_speed;
    pipe2_up.x -= pipe_speed;
    pipe2_low.x -= pipe_speed;

    if(pipe1_up.x < -pipe_up.width) regenerate1();
    else if(pipe2_up.x < -pipe_up.width) regenerate2();
    else {
        image(pipe_up, pipe1_up.x, pipe1_up.y);
        image(pipe_low, pipe1_low.x, pipe1_low.y);
        image(pipe_up, pipe2_up.x, pipe2_up.y);
        image(pipe_low, pipe2_low.x, pipe2_low.y);
    }

    image(base, base_x, height-base.height, base.width*baseWidth, base.height);
    image(base, base_x+base.width*baseWidth, height-base.height, base.width*baseWidth, base.height);
}

function gameover() {
    overWidth = width/overImg.width;
    overHeight = height/overImg.height;
    hit.play();
    start = 0;
    die.play();
}

function keyPressed() {
    // start gane
    if(keyCode === 13) {
        if(start === 0) { start = 1; debigger(); setup(); }
        else start = 2;
    }
    // fly
    if(keyCode === 32) {
        bird.speed = -8;
        bird.angle = -PI/4;
        birdImg = bird2;
        start_cnt = 0;
        wing.play();
        swoosh.play();
    }
}

function mousePressed() {
    if(start === 0) { start = 1; setup(); }
    else start = 2;
}

function score_img() {
    if(score < 10) {
        image(scoreNum[score % 10], width/2-scoreNum[score % 10].width/2, score_height);
    }
    else if(score >= 10 && score < 100) {
        image(scoreNum[parseInt(score/10)], width/2-scoreNum[parseInt(score/10)].width*3/2, score_height);
        image(scoreNum[score % 10], width/2-scoreNum[score % 10].width/2, (height/2-scoreNum[score % 10].height/2)*1/3);
    }
    else {
        image(scoreNum[parseInt(score/100)], width/2-scoreNum[parseInt(score/100)].width*5/2, score_height)
        image(scoreNum[parseInt(score/10)], width/2-scoreNum[parseInt(score/10)].width*3/2, score_height);
        image(scoreNum[score % 10], width/2-scoreNum[score % 10].width/2, score_height);
    }
}

function start_tap() {
    start_cnt += 1;

    // change wings
    if(start_cnt === 5) birdImg = bird2;
    else if(start_cnt === 10) birdImg = bird1;
    else if(start_cnt === 15) birdImg = bird3;
    else if(start_cnt === 20) { start_cnt = 0; birdImg = bird1; }
    image(backImg, bg.x, 0, backImg.width*bgScale, backImg.height*bgHeight);
    image(backImg, bg.x+backImg.width*bgScale, 0, backImg.width*bgScale, backImg.height*bgHeight);
    image(birdImg, bird.x, bird.y, birdImg.width, birdImg.height);
    image(base, base_x, height-base.height, base.width*baseWidth, base.height);
    image(base, base_x+base.width*baseWidth, height-base.height, base.width*baseWidth, base.height);
    image(start_screen, width/2 - start_screen.width/2, (height/2 - start_screen.height/2)*2/3);
}

function flap() {
    start_cnt += 1;

    // change wings
    if(start_cnt === 5) birdImg = bird2;
    else if(start_cnt === 10) birdImg = bird1;
    else if(start_cnt === 15) birdImg = bird3;
    else if(start_cnt === 20) { start_cnt = 0; birdImg = bird1; }
    image(backImg, bg.x, 0, backImg.width*bgScale, backImg.height*bgHeight);
    image(backImg, bg.x+backImg.width*bgScale, 0, backImg.width*bgScale, backImg.height*bgHeight);
}

function debigger() {
    bird1.width /= 1.5; bird2.width /= 1.5; bird3.width /= 1.5;
    bird1.height /= 1.5; bird2.height /= 1.5; bird3.height /= 1.5;
    pipe_up.width /= 1.5; pipe_up.height /= 1.5;
    pipe_low.width /= 1.5; pipe_low.height /= 1.5;
}

function bigger() {
    bird1.width *= 1.5; bird2.width *= 1.5; bird3.width *= 1.5;
    bird1.height *= 1.5; bird2.height *= 1.5; bird3.height *= 1.5;
    pipe_up.width *= 1.5; pipe_up.height *= 1.5;
    pipe_low.width *= 1.5; pipe_low.height *= 1.5;
}

function regenerate1() {
    seed_height = Math.random();
    seed_height = Math.round(seed_height);
    start_height = (Math.random()*(0.3)+0.25)*pipe_up.height;
    pipe1_up.x = width;
    pipe1_low.x = pipe1_up.x;
    if(seed_height === 0) {
        pipe1_up.y = -start_height;
        pipe1_low.y = pipe1_up.y+pipe_up.height+pipe_dis;
        image(pipe_up, pipe1_up.x, pipe1_up.y);
        image(pipe_low, pipe1_low.x, pipe1_low.y);
    }
    else {
        pipe1_low.y = height-pipe_low.height+start_height;
        pipe1_up.y = pipe1_low.y-pipe_dis-pipe_up.height;
        image(pipe_up, pipe1_up.x, pipe1_up.y);
        image(pipe_low, pipe1_low.x, pipe1_low.y);
    }

    image(pipe_up, pipe2_up.x, pipe2_up.y);
    image(pipe_low, pipe2_low.x, pipe2_low.y);
}

function regenerate2() {
    seed_height = Math.random();
    seed_height = Math.round(seed_height);
    start_height = (Math.random()*(0.3)+0.25)*pipe_up.height;
    pipe2_up.x = width;
    pipe2_low.x = pipe2_up.x;
    if(seed_height === 0) {
        pipe2_up.y = -start_height;
        pipe2_low.y = pipe2_up.y+pipe_up.height+pipe_dis;
        image(pipe_up, pipe2_up.x, pipe2_up.y);
        image(pipe_low, pipe2_low.x, pipe2_low.y);
    }
    else {
        pipe2_low.y = height-pipe_low.height+start_height;
        pipe2_up.y = pipe2_low.y-pipe_dis-pipe_up.height;
        image(pipe_up, pipe2_up.x, pipe2_up.y);
        image(pipe_low, pipe2_low.x, pipe2_low.y);
    }

    image(pipe_up, pipe1_up.x, pipe1_up.y);
    image(pipe_low, pipe1_low.x, pipe1_low.y);
}

function start_generate() {
    seed_height = Math.random();
    seed_height = Math.round(seed_height);
    start_height = (Math.random()*(0.3)+0.25)*pipe_up.height;
    if(seed_height === 0) {
        pipe1_up.y = -start_height;
        pipe1_low.y = pipe1_up.y+pipe_up.height+pipe_dis;
        image(pipe_up, pipe1_up.x, pipe1_up.y);
        image(pipe_low, pipe1_low.x, pipe1_low.y);
    }
    else {
        pipe1_low.y = height-pipe_low.height+start_height;
        pipe1_up.y = pipe1_low.y-pipe_dis-pipe_up.height;
        image(pipe_up, pipe1_up.x, pipe1_up.y);
        image(pipe_low, pipe1_low.x, pipe1_low.y);
    }

    seed_height = Math.random();
    seed_height = Math.round(seed_height);
    start_height = (Math.random()*(0.3)+0.25)*pipe_up.height;
    if(seed_height === 0) {
        pipe2_up.y = -start_height;
        pipe2_low.y = pipe2_up.y+pipe_up.height+pipe_dis;
        image(pipe_up, pipe2_up.x, pipe2_up.y);
        image(pipe_low, pipe2_low.x, pipe2_low.y);
    }
    else {
        pipe2_low.y = height-pipe_low.height+start_height;
        pipe2_up.y = pipe2_low.y-pipe_dis-pipe_up.height;
        image(pipe_up, pipe2_up.x, pipe2_up.y);
        image(pipe_low, pipe2_low.x, pipe2_low.y);
    }
}

function load_img() {
    seed_img = Math.round(seed_img);
    seed_pipe = Math.round(seed_pipe);
    backImg = loadImage(`assets/sprites/${backgroundImg[seed_img]}.png`);

    seed_img = Math.random()*2;
    seed_img = Math.round(seed_img);
    bird1 = loadImage(`assets/sprites/${color[seed_img]}bird-${state[1]}.png`);
    bird2 = loadImage(`assets/sprites/${color[seed_img]}bird-${state[2]}.png`);
    bird3 = loadImage(`assets/sprites/${color[seed_img]}bird-${state[0]}.png`);
    pipe_up = loadImage(`assets/sprites/pipe-${pipe_color[seed_img]}-${pipe_type[0]}.png`);
    pipe_low = loadImage(`assets/sprites/pipe-${pipe_color[seed_img]}-${pipe_type[1]}.png`);
    base = loadImage('assets/sprites/base.png');
    start_screen = loadImage('assets/sprites/message.png');
    overImg = loadImage('assets/sprites/gameover.png');

    hit = loadSound('assets/audio/hit.ogg');
    die = loadSound('assets/audio/die.ogg');
    wing = loadSound('assets/audio/wing.ogg');
    swoosh = loadSound('assets/audio/swoosh.ogg');
    point = loadSound('assets/audio/point.ogg');
    for(i = 0; i < 10; i++) {
        scoreNum.push(loadImage(`assets/sprites/${number[i]}.png`));
    }
}
